"use strict";

import { read } from "/Scripts/ReadFile.js";

// Projects
loadPreview("ul-item-preview-0", "/Pages/Projects/6-21-23.html");
loadPreview("ul-item-preview-1", "/Pages/Projects/6-20-23.html");
loadPreview("ul-item-preview-2", "/Pages/Projects/6-19-23.html");

// Articles
loadPreview("ul-item-preview-3", "/Pages/Articles/6-21-23.html");
loadPreview("ul-item-preview-4", "/Pages/Articles/6-20-23.html");
loadPreview("ul-item-preview-5", "/Pages/Articles/6-19-23.html");

function loadPreview(previewId, pagePath,)
{
    read(pagePath, function(str)
    {
        let previewItem = document.getElementById(previewId);
        previewItem.href = pagePath;
        previewItem.innerHTML = str;
    });
}