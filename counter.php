<?php
// counter.php — click counter with debug logging
// Stores counts in counts.json and logs requests to counter.log

header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store, no-cache, must-revalidate, max-age=0');
header('Pragma: no-cache');

$storeFile = __DIR__ . '/counts.json';
$logFile   = __DIR__ . '/counter.log';

// quick log helper
function log_event($msg) {
    global $logFile;
    $line = "[" . date('Y-m-d H:i:s') . "] " . $msg . "\n";
    file_put_contents($logFile, $line, FILE_APPEND);
}

// load store
if (!file_exists($storeFile)) file_put_contents($storeFile, "{}");
$fp = fopen($storeFile, 'c+');
flock($fp, LOCK_EX);
$raw  = stream_get_contents($fp);
$data = json_decode($raw ?: "{}", true);
if (!is_array($data)) $data = [];

// sanitize slug
function slugify($s) {
    return preg_replace('~[^a-z0-9\-]~', '', strtolower($s));
}

$method = $_SERVER['REQUEST_METHOD'];
$qs     = $_GET;

if ($method === 'GET' && isset($qs['slug'])) {
    $slug = slugify($qs['slug']);
    $count = isset($data[$slug]) ? intval($data[$slug]) : 0;
    log_event("GET slug=$slug -> count=$count");
    echo json_encode(['count' => $count], JSON_UNESCAPED_SLASHES);
    flock($fp, LOCK_UN);
    fclose($fp);
    exit;
}

if ($method === 'POST') {
    $in = file_get_contents('php://input');
    $payload = json_decode($in, true);
    if (!is_array($payload)) $payload = $_POST;

    $slug = isset($payload['slug']) ? slugify($payload['slug']) : '';
    if ($slug) {
        $current = isset($data[$slug]) ? intval($data[$slug]) : 0;
        $next    = $current + 1;
        $data[$slug] = $next;

        // rewrite store
        ftruncate($fp, 0);
        rewind($fp);
        fwrite($fp, json_encode($data, JSON_UNESCAPED_SLASHES));
        fflush($fp);

        log_event("POST slug=$slug old=$current new=$next");

        echo json_encode(['ok'=>true, 'count'=>$next], JSON_UNESCAPED_SLASHES);
        flock($fp, LOCK_UN);
        fclose($fp);
        exit;
    } else {
        log_event("POST with no slug");
    }
}

flock($fp, LOCK_UN);
fclose($fp);
http_response_code(400);
log_event("BAD REQUEST: " . $method . " " . $_SERVER['REQUEST_URI']);
echo json_encode(['error'=>'bad request']);

