"use strict";

requirejs(["/Scripts/Util/ReadFile.js"],
function()
{
    read("/Pages/Common/header.html", function(content)
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

        let script = document.getElementById("header-script");
        (0, eval)(script.innerText);
    });
});