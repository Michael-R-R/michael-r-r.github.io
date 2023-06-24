"use strict";

requirejs(["/Scripts/Util/ReadFile.js"],
function()
{
    readFile("/Pages/Common/header.html", function(content)
    {
        let headerDiv = document.getElementById("load-header");
        let headerImg = headerDiv.dataset.img;

        let headerBanner = "";
        if(headerImg != null)
        {
            headerBanner = 
            `<div id="site-banner">
                <div id="site-banner-img">
                    <img src="${headerImg}" alt="">
                </div>
            </div>
            `;
        }

        headerDiv.innerHTML = content + headerBanner;

        let highlightNavScript = document.createElement("script");
        highlightNavScript.innerText =
        `
            requirejs(["/Scripts/Util/NavigationHighlighter.js"],
            function()
            {
                highlightNavigation("h-nav", "li");
            });
        `;
        document.body.appendChild(highlightNavScript);
    });
});