"use strict";

var header = document.getElementById("load-header");

var imgBanner = "";
if(header.dataset.img != null)
{
    imgBanner = 
    `<div id="site-banner">
        <div id="site-banner-img">
            <img src="${header.dataset.img}" alt="">
        </div>
    </div>
    `;
}

header.innerHTML =
`
<header class="site-header">
    <p id="site-title"><strong>Michael's Portfolio</strong></p>
    <p id="site-description">Collective Location of Imagination</p>
    <nav id="h-nav" class="h-nav">
        <ul>
            <li><a href="/index.html">Home</a></li>
            <li><a href="/Pages/projects.html">Projects</a></li>
            <li><a href="/Pages/articles.html">Articles</a></li>
            <li><a href="/Pages/experience.html">Experience</a></li>
            <li><a href="/Pages/aboutme.html">About Me</a></li>
            <li><a href="/Pages/contactme.html">Contact Me</a></li>
        </ul>
    </nav>
</header>

${imgBanner}
`;

var vNavHighlightScript = document.createElement("script");
vNavHighlightScript.type = "module";
vNavHighlightScript.innerHTML = 
`
"use strict";
import { NavHighlighter } from "/Scripts/NavHighlighter.js";
const h_nav1 = new NavHighlighter("h-nav", "li");
`;
header.appendChild(vNavHighlightScript);