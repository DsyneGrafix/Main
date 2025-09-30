(function(){console.log("🚀 Universal Navigation: Starting...");const CONFIG={currentPage:window.location.pathname,siteName:"AnchorStack",siteStructure:{"/":{name:"Home",parent:null},"/index.html":{name:"Home",parent:null},"/bible-studies/":{name:"Bible Studies",parent:"/"},"/systematic_bible_study_guide.html":{name:"Systematic Study Guide",parent:"/bible-studies/"},"/bible-studies-hub.html":{name:"Bible Studies Hub",parent:"/bible-studies/"},"/seminary-study-plan.html":{name:"Seminary Study Plan",parent:"/bible-studies/"},"/prayer-guides/":{name:"Prayer Guides",parent:"/"},"/interactive_prayer_guide.html":{name:"Interactive Prayer Guide",parent:"/prayer-guides/"},"/enhanced_prayer_guide.html":{name:"Enhanced Prayer Guide",parent:"/prayer-guides/"},"/devotionals/":{name:"Devotionals",parent:"/"},"/individual_studies.html":{name:"Individual Studies",parent:"/devotionals/"},"/mary_magdalene.html":{name:"Mary Magdalene Study",parent:"/devotionals/"},"/The_Lost_Gospels.html":{name:"The Lost Gospels",parent:"/"},"/ministry-time-management.html":{name:"Ministry Time Management",parent:"/"},"/testimonials.html":{name:"Testimonials",parent:"/"}}};function injectStyles(){if(document.getElementById("universal-nav-styles"))return;const styles=`
            /* Universal Navigation Styles */
            .universal-breadcrumb {
                background: #ffffff;
                border-bottom: 1px solid #e5e5e5;
                padding: 12px 20px;
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                font-size: 14px;
            }
            
            .universal-breadcrumb ol {
                list-style: none;
                padding: 0;
                margin: 0;
                display: flex;
                flex-wrap: wrap;
            }
            
            .universal-breadcrumb li {
                display: inline-block;
            }
            
            .universal-breadcrumb li:after {
                content: '›';
                margin: 0 8px;
                color: #999;
            }
            
            .universal-breadcrumb li:last-child:after {
                display: none;
            }
            
            .universal-breadcrumb a {
                color: #2563eb;
                text-decoration: none;
            }
            
            .universal-breadcrumb a:hover {
                text-decoration: underline;
            }
            
            .universal-breadcrumb li:last-child {
                color: #666;
            }
            
            /* Table of Contents */
            .universal-toc {
                background: #f8f9fa;
                border: 2px solid #e5e5e5;
                border-radius: 8px;
                padding: 20px;
                margin: 20px 0;
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            }
            
            .universal-toc h2 {
                margin: 0 0 15px 0;
                color: #1e3a5f;
                font-size: 18px;
            }
            
            .universal-toc ol {
                margin: 0;
                padding-left: 20px;
                counter-reset: toc-counter;
            }
            
            .universal-toc li {
                counter-increment: toc-counter;
                margin: 5px 0;
            }
            
            /* FIXED: Remove automatic numbering since headings already have numbers */
            .universal-toc li:before {
                display: none;
            }
            
            .universal-toc a {
                color: #333;
                text-decoration: none;
            }
            
            .universal-toc a:hover {
                color: #2563eb;
                text-decoration: underline;
            }
            
            .universal-toc a.active {
                font-weight: bold;
                color: #1e3a5f;
            }
            
            .universal-toc-progress {
                margin-top: 15px;
                padding-top: 15px;
                border-top: 1px solid #ddd;
                font-size: 14px;
                color: #666;
            }
            
            .universal-toc-progress strong {
                color: #1e3a5f;
            }
        `;const styleSheet=document.createElement("style");styleSheet.id="universal-nav-styles";styleSheet.textContent=styles;document.head.appendChild(styleSheet)}function createBreadcrumbs(){console.log("📍 Creating breadcrumbs...");let insertPoint=document.querySelector("header, h1, body > *:first-child");if(!insertPoint){console.log("❌ Could not find insertion point for breadcrumbs");return}const trail=[];let current=CONFIG.currentPage;while(current&&CONFIG.siteStructure[current]){trail.unshift({path:current,name:CONFIG.siteStructure[current].name});current=CONFIG.siteStructure[current].parent}if(trail.length===0||trail[0].path!=="/"&&trail[0].path!=="/index.html"){trail.unshift({path:"/",name:"Home"})}const breadcrumbNav=document.createElement("nav");breadcrumbNav.className="universal-breadcrumb";breadcrumbNav.setAttribute("aria-label","Breadcrumb");let html="<ol>";trail.forEach((item,index)=>{if(index<trail.length-1){html+=`<li><a href="${item.path}">${item.name}</a></li>`}else{html+=`<li>${item.name}</li>`}});html+="</ol>";breadcrumbNav.innerHTML=html;if(insertPoint.tagName==="BODY"){document.body.insertBefore(breadcrumbNav,document.body.firstChild)}else{insertPoint.parentNode.insertBefore(breadcrumbNav,insertPoint.nextSibling)}console.log("✅ Breadcrumbs created!")}function createTOC(){console.log("📑 Creating table of contents...");const headings=document.querySelectorAll("h2, h3");if(headings.length<3){console.log("ℹ️ Not enough headings for TOC (found "+headings.length+")");return}const toc=document.createElement("nav");toc.className="universal-toc";toc.setAttribute("aria-label","Table of contents");let html="<h2>📑 On This Page</h2><ol>";headings.forEach((heading,index)=>{if(!heading.id){heading.id="heading-"+index}const headingText=heading.textContent;const hasNumber=/^\d+\./.test(headingText);const level=parseInt(heading.tagName.charAt(1));const indent=level===3?'style="margin-left: 20px;"':"";const displayText=hasNumber?headingText:`${index+1}. ${headingText}`;html+=`<li ${indent}><a href="#${heading.id}" class="toc-link">${headingText}</a></li>`});html+="</ol>";html+='<div class="universal-toc-progress">Reading progress: <strong><span id="reading-progress">0</span>%</strong></div>';toc.innerHTML=html;const firstH2=document.querySelector("h2");const firstH1=document.querySelector("h1");if(firstH2){firstH2.parentNode.insertBefore(toc,firstH2)}else if(firstH1){firstH1.parentNode.insertBefore(toc,firstH1.nextSibling)}else{const breadcrumb=document.querySelector(".universal-breadcrumb");if(breadcrumb){breadcrumb.parentNode.insertBefore(toc,breadcrumb.nextSibling)}}toc.querySelectorAll("a").forEach(link=>{link.addEventListener("click",e=>{e.preventDefault();const target=document.querySelector(link.getAttribute("href"));if(target){target.scrollIntoView({behavior:"smooth",block:"start"})}})});console.log("✅ Table of contents created with "+headings.length+" headings!");trackScrollProgress(headings)}function trackScrollProgress(headings){let ticking=false;function updateProgress(){const scrolled=window.pageYOffset;const height=document.documentElement.scrollHeight-window.innerHeight;const progress=Math.round(scrolled/height*100);const progressElement=document.getElementById("reading-progress");if(progressElement){progressElement.textContent=progress}let currentSection=null;headings.forEach((heading,index)=>{if(heading.offsetTop<=scrolled+100){currentSection=index}});document.querySelectorAll(".toc-link").forEach((link,index)=>{if(index===currentSection){link.classList.add("active")}else{link.classList.remove("active")}});ticking=false}window.addEventListener("scroll",()=>{if(!ticking){window.requestAnimationFrame(updateProgress);ticking=true}});updateProgress()}function init(){if(document.readyState==="loading"){document.addEventListener("DOMContentLoaded",init);return}console.log("🎯 Initializing Universal Navigation...");injectStyles();createBreadcrumbs();createTOC();console.log("✨ Universal Navigation ready!");window.UniversalNav={rebuildBreadcrumbs:createBreadcrumbs,rebuildTOC:createTOC,addPage:function(path,name,parent){CONFIG.siteStructure[path]={name:name,parent:parent};console.log("Added: "+path);createBreadcrumbs()},help:function(){console.log(`
Universal Navigation Commands:
==============================
UniversalNav.rebuildBreadcrumbs() - Recreate breadcrumbs
UniversalNav.rebuildTOC()         - Recreate table of contents
UniversalNav.addPage(path, name, parent) - Add a new page

Current page: ${CONFIG.currentPage}
Total pages configured: ${Object.keys(CONFIG.siteStructure).length}
                `)}};console.log('💡 Type "UniversalNav.help()" for commands')}(function(){"use strict";const baseOrganization={"@context":"https://schema.org","@type":"Organization",name:"AnchorStack",url:"https://anchorstack.pro",logo:"https://anchorstack.pro/images/anchorstack-logo.png",description:"Free biblical education resources with interactive guides, prayer materials, and seminary-level Bible studies",founder:{"@type":"Person",name:"Ricky Jarnagin"},contactPoint:{"@type":"ContactPoint",contactType:"customer service",url:"https://anchorstack.pro/contact.html"},sameAs:["https://rickyjarnagin.substack.com"]};function generatePageSchema(){const url=window.location.pathname.toLowerCase();const title=document.title;const metaDescription=document.querySelector('meta[name="description"]')?.content||"";let pageSchema=null;if(url.includes("prayer")||title.toLowerCase().includes("prayer")){pageSchema={"@context":"https://schema.org","@type":"Article",headline:title,description:metaDescription,author:{"@type":"Person",name:"Ricky Jarnagin"},publisher:{"@type":"Organization",name:"AnchorStack",url:"https://anchorstack.pro"},dateModified:(new Date).toISOString().split("T")[0],mainEntityOfPage:window.location.href,about:{"@type":"Thing",name:"Prayer Guide"}}}else if(url.includes("daniel")||url.includes("revelation")||url.includes("ezekiel")||url.includes("bible")||url.includes("study")||url.includes("gospel")){pageSchema={"@context":"https://schema.org","@type":"Article",headline:title,description:metaDescription,author:{"@type":"Person",name:"Ricky Jarnagin"},publisher:{"@type":"Organization",name:"AnchorStack",url:"https://anchorstack.pro"},dateModified:(new Date).toISOString().split("T")[0],mainEntityOfPage:window.location.href,about:{"@type":"Thing",name:"Biblical Studies"}}}else if(url.includes("book")||url.includes("gideon")){pageSchema={"@context":"https://schema.org","@type":"Book",name:title.replace(" | AnchorStack",""),description:metaDescription,author:{"@type":"Person",name:"Ricky Jarnagin"},publisher:{"@type":"Organization",name:"AnchorStack"},genre:"Religious",inLanguage:"en",isAccessibleForFree:false}}else if(url.includes("archaeology")||url.includes("temple")||url.includes("tabernacle")||url.includes("history")||url.includes("tribes")){pageSchema={"@context":"https://schema.org","@type":"Article",headline:title,description:metaDescription,author:{"@type":"Person",name:"Ricky Jarnagin"},publisher:{"@type":"Organization",name:"AnchorStack",url:"https://anchorstack.pro"},dateModified:(new Date).toISOString().split("T")[0],mainEntityOfPage:window.location.href,articleSection:"Biblical Archaeology",about:{"@type":"Thing",name:"Biblical History"}}}else if(url.includes("seminary")||url.includes("theology")||url.includes("doctrine")){pageSchema={"@context":"https://schema.org","@type":"EducationalOccupationalCredential",name:title,description:metaDescription,provider:{"@type":"Organization",name:"AnchorStack",url:"https://anchorstack.pro"},educationalLevel:"graduate",credentialCategory:"degree",isAccessibleForFree:true}}else{pageSchema={"@context":"https://schema.org","@type":"Article",headline:title,description:metaDescription,author:{"@type":"Person",name:"Ricky Jarnagin"},publisher:{"@type":"Organization",name:"AnchorStack",url:"https://anchorstack.pro"},dateModified:(new Date).toISOString().split("T")[0],mainEntityOfPage:window.location.href,about:{"@type":"Thing",name:"Biblical Education"}}}return pageSchema}function insertSchemas(){const orgScript=document.createElement("script");orgScript.type="application/ld+json";orgScript.textContent=JSON.stringify(baseOrganization);document.head.appendChild(orgScript);const pageSchema=generatePageSchema();if(pageSchema){const pageScript=document.createElement("script");pageScript.type="application/ld+json";pageScript.textContent=JSON.stringify(pageSchema);document.head.appendChild(pageScript)}if(window.location.pathname!=="/"){const breadcrumbSchema={"@context":"https://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,name:"Home",item:"https://anchorstack.pro"},{"@type":"ListItem",position:2,name:document.title.replace(" | AnchorStack",""),item:window.location.href}]};const breadcrumbScript=document.createElement("script");breadcrumbScript.type="application/ld+json";breadcrumbScript.textContent=JSON.stringify(breadcrumbSchema);document.head.appendChild(breadcrumbScript)}}if(document.readyState==="loading"){document.addEventListener("DOMContentLoaded",insertSchemas)}else{insertSchemas()}console.log("🔍 AnchorStack Schema Auto-Generator loaded for:",window.location.pathname)})();init()})();
