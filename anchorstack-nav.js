// ============================================
// ANCHORSTACK NAVIGATION INJECTION SYSTEM
// FIXED VERSION - Satan Hub properly integrated
// ============================================

// Navigation HTML as a JavaScript string
const anchorStackNavigation = `
<div class="anchorstack-nav">
    <!-- Header with Logo -->
    <div class="as-header-container">
        <header class="as-site-header">
            <a href="https://anchorstack.pro" class="as-logo">
                <img src="my-logo.png" 
                     alt="AnchorStack - Free Biblical Education" 
                     class="as-logo-img">
                <span class="as-logo-text-fallback">AnchorStack</span>
            </a>
            <button class="as-mobile-toggle" onclick="toggleAnchorStackMenu()">Menu</button>
        </header>
    </div>

    <!-- Main Navigation with Megamenu -->
    <nav class="as-main-nav" id="anchorStackNav">
        <div class="as-nav-wrapper">
            <ul class="as-nav-list">
                <!-- Satan & Evil Hub Dropdown -->
                <li class="as-nav-item">
                    <span class="as-nav-link">😈 Satan & Evil Hub</span>
                    <div class="as-megamenu">
                        <div class="as-megamenu-content">
                            <div class="as-menu-column">
                                <h3>Satan & Evil Hub</h3>
                                <ul>
                                    <li><a href="satan-evil-hub.html">📖 Complete Satan & Evil Hub</a></li>
                                </ul>
                                                               
                            </div>
                        </div>
                    </div>
                </li>
 
 
                <ul class="as-nav-list">
                <!-- Women's Hub Hub Dropdown -->
                <li class="as-nav-item">
                    <span class="as-nav-link">👩 Women's Hub</span>
                    <div class="as-megamenu">
                        <div class="as-megamenu-content">
                            <div class="as-menu-column">
                                <h3>Women's Hub</h3>
                                <ul>
                                      <li><a href="/women_bible_hub.html" class="nav-link">👩 Women of the Bible</a></li>
                                </ul>
                                                               
                            </div>
                        </div>
                    </div>
                </li>

       <ul class="as-nav-list">
                <!-- Major Prophets Hub -->
                <li class="as-nav-item">
                    <span class="as-nav-link">👥 Major Prophets Hub</span>
                    <div class="as-megamenu">
                        <div class="as-megamenu-content">
                            <div class="as-menu-column">
                                <h3>Major Prophets Hub</h3>
                                <ul>
                                      <li><a href="/major-prophets-hub.html" class="nav-link">👥 Major Prophets Hub</a></li>
                                </ul>
                                                               
                            </div>
                        </div>
                    </div>
                </li>
<ul class="as-nav-list">
                <!-- Bible Studies Hub -->
                <li class="as-nav-item">
                    <span class="as-nav-link">📚 Bible Studies Hub</span>
                    <div class="as-megamenu">
                        <div class="as-megamenu-content">
                            <div class="as-menu-column">
                                <h3>Major Prophets Hub</h3>
                                <ul>
                                    <li><a href="bible-studies-hub.html" class="nav-link">  📚 Bible Studies Hub</a></li>
                                </ul>
                                                               
                            </div>
                        </div>
                    </div>
                </li>


                <!-- New Additions Dropdown -->
                <li class="as-nav-item">
                    <span class="as-nav-link">New Additions</span>
                    <div class="as-megamenu">
                        <div class="as-megamenu-content">
                            <div class="as-menu-column">
                                <h3>Latest Content</h3>
                                <ul>
                                    <li><a href="/saturday-scripture-study.html">The Saturday Scripture Study</a></li>
                                    <li><a href="/pentecost.html">The Birth of the Church</a></li>
                                    <li><a href="/scripture-interpretation-guide.html">Understanding Scripture: Symbols, Numbers, and Meaning</a></li>
                                    <li><a href="/jesus-scholarly-analysis.html">Jesus Christ: A Comprehensive Scholarly Analysis</a></li>
                                    <li><a href="/four-gospels-interactive.html">The Four Gospels</a></li>
                                    <li><a href="/book-of-enoch-complete-guide.html">The Book They Banned From Your Bible</a></li>
                                    <li><a href="/apocrypha_study.html">The Apocrypha: Hidden Books Between the Testaments</a></li>
                                    <li><a href="/Grace_vs_Works_Complete_Guide.html">Grace vs. Works: Complete Guide</a></li>    
                                    <li><a href="/romans_5_truths_page.html">5 Surprising Truths About The Book of Romans</a></li>
                                    <li><a href="/romans_complete_page.html">The Book of Romans: Complete Theological Guide</a></li>
                                    <li><a href="/biblical_archaeology_page.html">Biblical Archaeology Page</a></li>
                                    <li><a href="/the_book_of_daniel:_an_interactive_exploration.html">The Book of Daniel: An Interactive Exploration</a></li>
                                    <li><a href="/holy_spirit_article.html">When the Holy Spirit Touches Your Life</a></li>
                                    <li><a href="/complete_seven_deadly_sins_teaching.html">Complete Seven Deadly Sins Teaching</a></li>
                                    <li><a href="/seven_deadly_sins_vs_virtues_page.html">Seven Deadly Sins vs. Virtues</a></li>
                                </ul>
                            </div>
                            <div class="as-menu-column">
                                <h3>Study Resources</h3>
                                <ul>
                                    <li><a href="/logos-landing-page.html">LOGO's Bible Software</a></li>
                                    <li><a href="/bible-studies-hub.html">The Bible Study Hub</a></li>
                                    <li><a href="/passover.html">Freedom's Foundation</a></li>
                                    <li><a href="/sabbath-page.html">Rest as Resistance</a></li>
                                    <li><a href="/Biblical-Numerology.html">Biblical Numerology</a></li>
                                    <li><a href="/The_Evolving_Digital_Toolkit.html">The Evolving Digital Toolkit</a></li>
                                    <li><a href="/faith-comprehensive-guide.html">Faith: The Foundation That Changes Everything</a></li>
                                    <li><a href="/theological-dictionary.html">Theological Dictionary</a></li>
                                </ul>
                            </div>
                            <div class="as-menu-column">
                                <h3>Featured</h3>
                                <ul>
                                    <li><a href="/holy-of-holies-page.html">The Holy of Holies Study</a></li>
                                    <li><a href="/temple-interactive.html">The Temple Interactive Study</a></li>
                                    <li><a href="/tabernacle-interactive.html">The Tabernacle Interactive Study</a></li>
                                    <li><a href="/The-Jewish-Roots-of-Christianity.html">The Jewish Roots of Christianity</a></li>
                                    <li><a href="/major-prophets-hub.html">Major Prophets Hub</a></li>
                                    <li><a href="/interactive_prayer_guide.html">Interactive Prayer Guide</a></li>
                                    <li><a href="/systematic_bible_study_guide.html">Bible Study Templates</a></li>
                                    <li><a href="/what_scrolls_reveal.html">What the Scrolls Reveal</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </li>

                <!-- Biblical Studies Dropdown -->
                <li class="as-nav-item">
                    <span class="as-nav-link">Biblical Studies</span>
                    <div class="as-megamenu">
                        <div class="as-megamenu-content">
                            <div class="as-menu-column">
                                <h3>Old Testament</h3>
                                <ul>
                                    <li><a href="/the_pentateuch.html">The Pentateuch</a></li>
                                    <li><a href="/nephilim_article.html">Nephilim</a></li>
                                    <li><a href="/lost_tribes_interactive_site.html">The Lost Tribes</a></li>
                                    <li><a href="/abraham_patriarch_article.html">Abraham: Hebrew Patriarch</a></li>
                                    <li><a href="/genesis_article.html">Genesis</a></li>
                                    <li><a href="/exodus_article.html">Exodus</a></li>
                                    <li><a href="/leviticus_article.html">Leviticus</a></li>
                                    <li><a href="/numbers_article.html">Numbers</a></li>
                                    <li><a href="/deuteronomy_article.html">Deuteronomy</a></li>
                                    <li><a href="/psalms_by_theme.html">Psalms by Theme</a></li>
                                </ul>
                            </div>  
                            <div class="as-menu-column">
                                <h3>New Testament</h3>
                                <ul>
                                    <li><a href="/the_beatitudes.html">The Beatitudes</a></li>
                                    <li><a href="/The_Lost_Gospels.html">The Lost Gospels</a></li>
                                    <li><a href="/great-commission.html">The Great Commission</a></li>
                                    <li><a href="/pauls_journeys.html">Pauls Journeys</a></li>
                                    <li><a href="/end_times_article.html">The End Times</a></li>
                                    <li><a href="/revelation.html">Revelation</a></li>
                                </ul>
                            </div>
                            <div class="as-menu-column">
                                <h3>Study Tools</h3>
                                <ul>
                                    <li><a href="/hermeneutics-interactive.html">Biblical Hermeneutics</a></li>
                                    <li><a href="/hermeneutics-masterclass.html">Hermeneutics Masterclass</a></li>
                                    <li><a href="/hermeneutics-assessment-quiz.html">Assessment Quiz</a></li>
                                    <li><a href="/systematic_theology_guide.html">Systematic Theology Guide</a></li>
                                    <li><a href="/the_early_church_fathers.html">The Early Church Fathers</a></li>
                                    <li><a href="/corinthians-study-guide.html">1 & 2 Corinthians Study Guide</a></li>
                                    <li><a href="/gospels-study-guide.html">Interactive Gospels Study Guide</a></li>
                                    <li><a href="/bible_reading_plan.html">Bible Reading Plan</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </li>

                <!-- Topics & Themes -->
                <li class="as-nav-item">
                    <span class="as-nav-link">Topics & Themes</span>
                    <div class="as-megamenu">
                        <div class="as-megamenu-content">
                            <div class="as-menu-column">
                                <h3>Biblical Characters</h3>
                                <ul>
                                    <li><a href="/the-wisdom-of-solomon.html">The Wisdom of Solomon</a></li>
                                    <li><a href="/endurance_like_job.html">Endurance Like Job</a></li>
                                    <li><a href="/mary-biblical-study.html">Mary, the Mother of Jesus</a></li>
                                    <li><a href="/Christian_Philosophy_101.html">Christian Philosophy 101</a></li>
                                </ul>
                            </div>
                            <div class="as-menu-column">
                                <h3>Theological Topics</h3>
                                <ul>
                                    <li><a href="/what_scrolls_reveal.html">What the Scrolls Reveal</a></li>
                                    <li><a href="/old-testament-laws.html">Old Testament Laws</a></li>
                                    <li><a href="/divine_names.html">Divine Names</a></li>
                                    <li><a href="/seminary-book-spreadsheet.html">Complete Seminary Book List & Budget Tracker</a></li>
                                    <li><a href="/seminary-study-plan.html">Seminary Study Plan</a></li>
                                    <li><a href="/end_times_article.html">End Times</a></li>
                                    <li><a href="/The_Complete_Guide_to_Christian_Prayer.html">Prayer & Worship</a></li>
                                </ul>
                            </div>
                            <div class="as-menu-column">
                                <h3>Practical Application</h3>
                                <ul>
                                    <li><a href="/after-baptism.html">After Baptism</a></li>
                                    <li><a href="/building_faith.html">Building Faith</a></li>
                                    <li><a href="/Daily-Devotions.html">Daily Devotions</a></li>
                                    <li><a href="/sermon-calendar.html">52-Week Sermon Calendar</a></li>
                                    <li><a href="/spiritual_growth_resources.html">Essential Spiritual Growth</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </li>

                <!-- Resources -->
                <li class="as-nav-item">
                    <span class="as-nav-link">Resources</span>
                    <div class="as-megamenu">
                        <div class="as-megamenu-content">
                            <div class="as-menu-column">
                                <h3>Study Materials</h3>
                                <ul>
                                    <li><a href="/biblical_women_article.html">The Most Important Women of the Bible</a></li>
                                    <li><a href="/who_were_the_essenes.html">Who Were the Essenes?</a></li>
                                    <li><a href="/ministry-time-management.html">Ministry Time Management</a></li>
                                    <li><a href="/gideon_book_landing_page.html">Gideon Study</a></li>
                                    <li><a href="/seminary-study-plan.html">3-Year Seminary Study Plan</a></li>
                                    <li><a href="/seminary-book-spreadsheet.html">Complete Seminary Book List & Budget Tracker</a></li>
                                </ul>
                            </div>
                            <div class="as-menu-column">
                                <h3>Interactive Tools</h3>
                                <ul>
                                    <li><a href="/interactive_prayer_guide.html">Interactive Prayer Guide</a></li>
                                    <li><a href="interactive-prayer-journal.html">Interactive Prayer Journal</a></li>
                                    <li><a href="/enhanced_prayer_guide.html">Prayer Manual</a></li>
                                    <li><a href="/ezekiel_interactive.html">Ezekiel Interactive</a></li>
                                    <li><a href="/armor_of_god.html">Armor of God Interactive</a></li>
                                    <li><a href="/systematic_bible_study_guide.html">Bible Study Templates</a></li>
                                </ul>
                            </div>
                            <div class="as-menu-column">
                                <h3>Downloads</h3>
                                <ul>
                                    <li>
                                        <a href="/Biblical-Hermeneutics-slide-deck.pdf" 
                                           download 
                                           target="_blank"
                                           title="Download Biblical Hermeneutics PDF Slides">
                                            Biblical Hermeneutics slide deck (PDF)
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/Biblical-Hermeneutics-Presentation.pptx" 
                                           download 
                                           target="_blank"
                                           title="Download Biblical Hermeneutics Presentation">
                                            Biblical Hermeneutics Presentation (PPTX)
                                        </a>
                                    </li>
                                    <li>
                                        <a href="Biblical-Hermeneutics.pdf" 
                                           download 
                                           target="_blank"
                                           title="Download Biblical Hermeneutics">
                                            Biblical Hermeneutics Presentation (PDF)
                                        </a>
                                    </li>
                                    <li>
                                        <a href="30-Day-Prayer-Journey-Workbook.pdf" 
                                           download 
                                           target="_blank"
                                           title="Download 30-Day Prayer Journey Workbook">
                                            30-Day Prayer Journey Workbook (PDF)  
                                        </a>     
                                    </li>                                          
                                   <li>
                                   <a href="Understanding-the-Crucifixion-Timeline.epub" 
                                           download 
                                           target="_blank"
                                           title="Download Understanding the Crucifixion Timeline">
                                            Understanding-the-Crucifixion-Timeline (ePub) 
                                            </a>
                                    </li>
                                </ul>
                            </div>
                            <div class="as-featured-section">
                                <h4>Featured Resources</h4>
                                <div class="as-featured-items">
                                    <div class="as-featured-item">
                                        <strong>New:</strong> <a href="/holy-of-holies-page.html">The Holy of Holies Study</a>
                                    </div>
                                    <div class="as-featured-item">
                                        <strong>Popular:</strong> <a href="/temple-interactive.html">The Temple Interactive Study</a>
                                    </div>
                                    <div class="as-featured-item">
                                        <strong>Free:</strong> <a href="/tabernacle-interactive.html">The Tabernacle Interactive Study</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>

                <!-- About -->
                <li class="as-nav-item">
                    <span class="as-nav-link">About</span>
                    <div class="as-megamenu">
                        <div class="as-megamenu-content">
                            <div class="as-menu-column">
                                <h3>About</h3>
                                <ul>
                                    <li><a href="/about.html">About</a></li>
                                    <li><a href="/privacy-policy.html">Privacy Policy</a></li>
                                    <li><a href="/terms-of-service.html">Terms of Service</a></li>
                                    <li><a href="/faq.html">FAQ</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </li>

                <!-- Contact -->
                <li class="as-nav-item">
                    <a href="/contact.html" class="as-nav-link">Contact</a>
                </li>
            </ul>
        </div>
    </nav>
</div>`;

// CSS Styles as a string (Updated with logo styles)
const anchorStackCSS = `
<style>
/* ============================================
   ANCHORSTACK NAVIGATION STYLES - WITH LOGO
   ============================================ */

.anchorstack-nav,
.anchorstack-nav * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.anchorstack-nav {
    font-family: Georgia, serif;
    line-height: 1.6;
    color: #333;
    position: relative;
    z-index: 1000;
}

.anchorstack-nav .as-header-container {
    background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%);
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.anchorstack-nav .as-site-header {
    max-width: 1200px;
    margin: 0 auto;
    padding: 15px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

/* Logo Styles */
.anchorstack-nav .as-logo {
    text-decoration: none;
    display: flex;
    align-items: center;
}

.anchorstack-nav .as-logo-img {
    height: 50px;
    width: auto;
    max-width: 250px;
}

.anchorstack-nav .as-logo-text-fallback {
    display: none;
    color: #fff;
    font-size: 28px;
    font-weight: bold;
}

/* Show fallback text if image fails to load */
.anchorstack-nav .as-logo-img:not([src]),
.anchorstack-nav .as-logo-img[src=""] {
    display: none;
}

.anchorstack-nav .as-logo-img:not([src]) ~ .as-logo-text-fallback,
.anchorstack-nav .as-logo-img[src=""] ~ .as-logo-text-fallback {
    display: block;
}

.anchorstack-nav .as-main-nav {
    background: #fff;
    border-top: 1px solid #e0e0e0;
    position: relative;
}

.anchorstack-nav .as-nav-wrapper {
    max-width: 1200px;
    margin: 0 auto;
}

.anchorstack-nav .as-nav-list {
    list-style: none;
    display: flex;
    justify-content: center;
    margin: 0;
    padding: 0;
}

.anchorstack-nav .as-nav-item {
    position: relative;
    list-style: none;
}

.anchorstack-nav .as-nav-link {
    display: block;
    padding: 18px 25px;
    color: #2c3e50;
    text-decoration: none;
    font-size: 16px;
    font-weight: 500;
    transition: all 0.3s ease;
    border-bottom: 3px solid transparent;
}

.anchorstack-nav .as-nav-link:hover {
    background: #f8f9fa;
    color: #c0392b;
    border-bottom-color: #c0392b;
}

.anchorstack-nav .as-megamenu {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    margin: 0 auto;
    width: 900px;
    max-width: 95vw;
    background: #fff;
    box-shadow: 0 10px 40px rgba(0,0,0,0.15);
    border-radius: 0 0 8px 8px;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    z-index: 9999;
}

.anchorstack-nav .as-nav-item:hover .as-megamenu {
    opacity: 1;
    visibility: visible;
}

.anchorstack-nav .as-megamenu-content {
    padding: 30px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
}

.anchorstack-nav .as-menu-column h3 {
    color: #2c3e50;
    font-size: 18px;
    margin-bottom: 15px;
    padding-bottom: 10px;
    border-bottom: 2px solid #e74c3c;
}

.anchorstack-nav .as-menu-column ul {
    list-style: none;
    margin: 0;
    padding: 0;
}

.anchorstack-nav .as-menu-column li {
    margin-bottom: 10px;
    list-style: none;
}

.anchorstack-nav .as-menu-column a {
    color: #555;
    text-decoration: none;
    font-size: 15px;
    transition: all 0.2s ease;
    display: block;
    padding: 5px 0;
}

.anchorstack-nav .as-menu-column a:hover {
    color: #c0392b;
    padding-left: 10px;
    background: none;
}

.anchorstack-nav .as-featured-section {
    grid-column: span 3;
    background: #f8f9fa;
    padding: 20px;
    border-radius: 5px;
    margin-top: 10px;
}

.anchorstack-nav .as-featured-section h4 {
    color: #2c3e50;
    margin-bottom: 10px;
}

.anchorstack-nav .as-featured-items {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
}

.anchorstack-nav .as-featured-item {
    background: #fff;
    padding: 15px;
    border-radius: 5px;
    border-left: 3px solid #e74c3c;
}

.anchorstack-nav .as-mobile-toggle {
    display: none;
    background: none;
    border: none;
    color: #fff;
    font-size: 16px;
    cursor: pointer;
    padding: 8px 12px;
    border-radius: 4px;
    background: rgba(255,255,255,0.1);
}

.anchorstack-nav .as-mobile-toggle:hover {
    background: rgba(255,255,255,0.2);
}

/* Tablet Responsive (768px - 968px) */
@media (min-width: 769px) and (max-width: 968px) {
    .anchorstack-nav .as-logo-img {
        height: 45px;
        max-width: 200px;
    }
    
    .anchorstack-nav .as-nav-link {
        padding: 15px 20px;
        font-size: 15px;
    }
}

/* Mobile Responsive (up to 768px) */
@media (max-width: 768px) {
    .anchorstack-nav .as-site-header {
        padding: 10px 15px;
    }
    
    .anchorstack-nav .as-logo-img {
        height: 40px;
        max-width: 180px;
    }
    
    .anchorstack-nav .as-mobile-toggle {
        display: block;
    }

    .anchorstack-nav .as-main-nav {
        display: none;
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        background: #fff;
        box-shadow: 0 5px 20px rgba(0,0,0,0.1);
        max-height: 80vh;
        overflow-y: auto;
    }

    .anchorstack-nav .as-main-nav.active {
        display: block;
    }

    .anchorstack-nav .as-nav-list {
        flex-direction: column;
    }

    .anchorstack-nav .as-megamenu {
        position: static;
        transform: none;
        width: 100%;
        box-shadow: none;
        display: none;
        opacity: 1;
        visibility: visible;
    }

    .anchorstack-nav .as-nav-item:hover .as-megamenu {
        display: block;
    }

    .anchorstack-nav .as-megamenu-content {
        grid-template-columns: 1fr;
        padding: 20px;
    }

    .anchorstack-nav .as-featured-items {
        grid-template-columns: 1fr;
    }
}

/* Small Mobile (up to 480px) */
@media (max-width: 480px) {
    .anchorstack-nav .as-logo-img {
        height: 35px;
        max-width: 150px;
    }
}
</style>`;

// Main injection function
function injectAnchorStackNavigation() {
    // Inject CSS first
    document.head.insertAdjacentHTML('beforeend', anchorStackCSS);
    
    // Inject navigation HTML
    document.body.insertAdjacentHTML('afterbegin', anchorStackNavigation);
    
    // Add error handling for logo image
    const logoImg = document.querySelector('.as-logo-img');
    if (logoImg) {
        logoImg.onerror = function() {
            this.style.display = 'none';
            const fallback = document.querySelector('.as-logo-text-fallback');
            if (fallback) {
                fallback.style.display = 'block';
            }
        };
    }
    
    console.log('AnchorStack navigation with logo loaded successfully');
}

// Mobile menu toggle function
function toggleAnchorStackMenu() {
    const nav = document.getElementById('anchorStackNav');
    if (nav) {
        nav.classList.toggle('active');
    }
}

// Auto-close mobile menu when clicking outside
function setupMobileMenuClose() {
    document.addEventListener('click', function(event) {
        const nav = document.getElementById('anchorStackNav');
        const toggle = document.querySelector('.anchorstack-nav .as-mobile-toggle');
        
        if (nav && toggle && !nav.contains(event.target) && !toggle.contains(event.target)) {
            nav.classList.remove('active');
        }
    });
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
        injectAnchorStackNavigation();
        setupMobileMenuClose();
    });
} else {
    injectAnchorStackNavigation();
    setupMobileMenuClose();
}

// Make functions globally available
window.toggleAnchorStackMenu = toggleAnchorStackMenu;
window.injectAnchorStackNavigation = injectAnchorStackNavigation;
