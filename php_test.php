<?php
echo "PHP is working! Version: " . PHP_VERSION;
echo "\nCurrent directory: " . __DIR__;
echo "\nFile permissions test: " . (is_writable(__DIR__) ? "WRITABLE" : "NOT WRITABLE");
?>