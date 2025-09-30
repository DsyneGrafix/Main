/**
 * AnchorStack Footer Script v1.0
 * Dynamically adds consistent footer across all pages
 * Works on both static HTML and WordPress pages
 */

(function() {
    'use strict';
    
    // Configuration - Easy to update links and content
    const FOOTER_CONFIG = {
        year: new Date().getFullYear(),
        companyName: 'AnchorStack.pro',
        tagline: 'Biblical Education Made Interactive',
        
        // Footer sections with links
        sections: {
            freeResources: {
                title: 'Free Resources',
                links: [
                    { text: 'Interactive Prayer Guide', url: '/interactive_prayer_guide.html' },
                    { text: 'Complete Prayer Manual', url: '/enhanced_prayer_guide.html' },
                    { text: 'Bible Study Templates', url: '/systematic_bible_study_guide.html' },
                    { text: 'Armor of God Interactive', url: '/armor_of_god.html' },
                    
                ]
            },
         
            leadership: {
                title: 'Leadership Development',
                links: [
                    { text: 'Gideon Leadership Book', url: '/gideon_book_landing_page.html' },
                    { text: 'Christian Philosophy 101', url: '/Christian_Philosophy_101.html' },
                    { text: 'The Great Commission', url: '/great-commission.html' }
                ]
            },
            about: {
                title: 'About AnchorStack',
                links: [
                    { text: 'About Us', url: '/about.html' },
                    { text: 'Contact Support', url: '/contact.html' },
                    { text: 'Privacy Policy', url: '/privacy-policy.html' },
                    { text: 'FAQ', url: '/faq.html' }
                ]
            }
        }
    };

    // Footer HTML template
    function generateFooterHTML() {
        let sectionsHTML = '';
        
        // Generate sections
        for (const [key, section] of Object.entries(FOOTER_CONFIG.sections)) {
            let linksHTML = '';
            
            section.links.forEach(link => {
                const highlightClass = link.highlight ? 'anchorstack-footer-highlight' : '';
                linksHTML += `
                    <li><a href="${link.url}" class="${highlightClass}">${link.text}</a></li>
                `;
            });
            
            sectionsHTML += `
                <div class="anchorstack-footer-section">
                    <h3>${section.title}</h3>
                    <ul>
                        ${linksHTML}
                    </ul>
                </div>
            `;
        }
        
        return `
            <!-- AnchorStack Dynamic Footer -->
<!-- SUPPORT MESSAGE (Easy to remove if needed) -->
<div style="background: #f0f9ff; border: 1px solid #0ea5e9; padding: 15px; margin: 20px 0; border-radius: 8px; text-align: center;">
    <p style="margin: 0; color: #1e40af;"><strong>📚 Enjoying this free biblical education?</strong><br>
    Help others discover these studies by sharing them with fellow believers.</p>
</div>


            <footer class="anchorstack-footer" id="anchorstack-footer">
                <div class="anchorstack-footer-inner">
                    <div class="anchorstack-footer-grid">
                        ${sectionsHTML}
                    </div>
                    
                    <div class="anchorstack-footer-bottom">
                        
                        <p>© ${FOOTER_CONFIG.year} ${FOOTER_CONFIG.companyName} | ${FOOTER_CONFIG.tagline}</p>
                        <p style="margin-top: 5px;">Built with faith, wisdom, and purpose</p>
 <p style="margin-top: 5px;">⚠️ Affiliate Disclosure: As an Affiliate of several programs, I earn from qualifying purchases. This means I receive a small commission (at no extra cost to you) when you buy through these links. I only recommend Bibles and study materials I personally use and believe will genuinely help your spiritual journey.</p>
                    </div>
                    
                    <!-- Buy Me a Coffee Button -->
                    <div class="anchorstack-coffee">
                        <a href="https://www.buymeacoffee.com/anchorstack" target="_blank" class="coffee-button">
                            ☕ Buy Me a Coffee
                        </a>
                    </div>
                </div>
            </footer>
        `;
    }

    // Footer CSS - Injects styles if not already present
    function injectFooterStyles() {
        // Check if styles already exist
        if (document.getElementById('anchorstack-footer-styles')) {
            return;
        }
        
        const styles = `
            <style id="anchorstack-footer-styles">
                /* AnchorStack Footer Styles */
                .anchorstack-footer * {
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                }
                
                .anchorstack-footer {
                    background: #f8f9fa;
                    border-top: 3px solid #4a90e2;
                    color: #333;
                    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;
                    margin-top: 60px;
                    padding: 40px 20px 20px;
                    width: 100%;
                    clear: both;
                    position: relative;
                }
                
                .anchorstack-footer-inner {
                    max-width: 1200px;
                    margin: 0 auto;
                }
                
                .anchorstack-footer-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                    gap: 30px;
                    margin-bottom: 30px;
                }
                
                .anchorstack-footer h3 {
                    color: #4a90e2;
                    font-size: 1.1rem;
                    margin-bottom: 15px;
                    font-weight: 600;
                    border-bottom: 2px solid #e0e0e0;
                    padding-bottom: 8px;
                }
                
                .anchorstack-footer ul {
                    list-style: none;
                }
                
                .anchorstack-footer li {
                    margin-bottom: 8px;
                }
                
                .anchorstack-footer a {
                    color: #555;
                    text-decoration: none;
                    font-size: 0.9rem;
                    transition: color 0.3s ease;
                }
                
                .anchorstack-footer a:hover {
                    color: #4a90e2;
                    text-decoration: underline;
                }
                
                .anchorstack-footer-highlight {
                    background: #4a90e2;
                    color: white !important;
                    padding: 4px 8px;
                    border-radius: 3px;
                    display: inline-block;
                    margin-top: 5px;
                }
                
                .anchorstack-footer-highlight:hover {
                    background: #357abd;
                    text-decoration: none !important;
                }
                
                .anchorstack-footer-bottom {
                    text-align: center;
                    padding-top: 20px;
                    border-top: 1px solid #e0e0e0;
                    color: #666;
                    font-size: 0.85rem;
                }
                
                .anchorstack-footer-logo {
                    font-size: 1.5rem;
                    color: #4a90e2;
                    margin-bottom: 8px;
                    font-weight: bold;
                }
                
                /* Buy Me a Coffee Button */
                .anchorstack-coffee {
                    position: fixed;
                    bottom: 20px;
                    right: 20px;
                    z-index: 999;
                }
                
                .coffee-button {
                    background: #FFDD00;
                    color: #000;
                    padding: 12px 20px;
                    border-radius: 25px;
                    text-decoration: none;
                    font-weight: bold;
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    box-shadow: 0 4px 15px rgba(0,0,0,0.2);
                    transition: all 0.3s ease;
                    font-size: 14px;
                }
                
                .coffee-button:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 6px 20px rgba(0,0,0,0.3);
                    background: #FFE642;
                    color: #000;
                    text-decoration: none;
                }
                
                /* Mobile responsive */
                @media (max-width: 768px) {
                    .anchorstack-footer-grid {
                        grid-template-columns: 1fr;
                        gap: 20px;
                    }
                    
                    .anchorstack-footer {
                        padding: 30px 15px 15px;
                    }
                    
                    .anchorstack-coffee {
                        bottom: 10px;
                        right: 10px;
                    }
                    
                    .coffee-button {
                        padding: 10px 15px;
                        font-size: 12px;
                    }
                }
            </style>
        `;
        
        document.head.insertAdjacentHTML('beforeend', styles);
    }

    // Check if footer should be inserted
    function shouldInsertFooter() {
        // Don't insert if footer already exists
        if (document.getElementById('anchorstack-footer')) {
            return false;
        }
        
        // Don't insert on certain pages (customize as needed)
        const excludedPages = [
            '/admin',
            '/wp-admin',
            '/login',
            '/checkout'
        ];
        
        const currentPath = window.location.pathname;
        for (const excluded of excludedPages) {
            if (currentPath.includes(excluded)) {
                return false;
            }
        }
        
        return true;
    }

    // Insert footer into page
    function insertFooter() {
        if (!shouldInsertFooter()) {
            return;
        }
        
        // Inject styles first
        injectFooterStyles();
        
        // Generate and insert footer HTML
        const footerHTML = generateFooterHTML();
        
        // Find the best place to insert footer
        const body = document.body;
        const main = document.querySelector('main');
        const insertPoint = main ? main : body;
        
        insertPoint.insertAdjacentHTML('beforeend', footerHTML);
        
        // Initialize footer functionality
        initializeFooterFeatures();
    }

    // Initialize interactive features
    function initializeFooterFeatures() {
        // Track footer link clicks (for analytics)
        const footerLinks = document.querySelectorAll('.anchorstack-footer a');
        footerLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                // Track with Google Analytics if available
                if (typeof gtag !== 'undefined') {
                    gtag('event', 'footer_click', {
                        'link_text': this.textContent.trim(),
                        'link_url': this.href
                    });
                }
            });
        });
        
        // Coffee button animation
        const coffeeButton = document.querySelector('.coffee-button');
        if (coffeeButton) {
            // Add pulse animation on hover
            coffeeButton.addEventListener('mouseenter', function() {
                this.style.animation = 'pulse 0.5s';
            });
            
            coffeeButton.addEventListener('animationend', function() {
                this.style.animation = '';
            });
        }
        
        // Update year automatically
        updateCopyrightYear();
    }

    // Update copyright year
    function updateCopyrightYear() {
        const yearElements = document.querySelectorAll('.anchorstack-footer-year');
        const currentYear = new Date().getFullYear();
        yearElements.forEach(el => {
            el.textContent = currentYear;
        });
    }

    // Initialize when DOM is ready
    function init() {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', insertFooter);
        } else {
            // DOM already loaded
            insertFooter();
        }
    }

    // Add pulse animation for coffee button
    const pulseKeyframes = `
        @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.05); }
            100% { transform: scale(1); }
        }
    `;
    
    // Add animation to existing styles or create new style element
    if (!document.querySelector('#anchorstack-animations')) {
        const animStyle = document.createElement('style');
        animStyle.id = 'anchorstack-animations';
        animStyle.textContent = pulseKeyframes;
        document.head.appendChild(animStyle);
    }

    // Start the script
    init();
    
    // Expose API for manual control if needed
    window.AnchorStackFooter = {
        refresh: insertFooter,
        update: initializeFooterFeatures,
        config: FOOTER_CONFIG
    };

})();
