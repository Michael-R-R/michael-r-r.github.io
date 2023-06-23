requirejs(["/Scripts/Util/LoadHeader.js",
           "/Scripts/Util/LoadFooter.js",
           "/Scripts/Util/ReadFile.js",
           "/Scripts/Common/NavigationHighlighter.js"],
function()
{
    highlightNavigation("v-nav-1", "li");
    highlightNavigation("v-nav-2", "li");

    // Projects
    loadPreview("ul-item-preview-0", "/Pages/Projects/2023-06-21.html");
    loadPreview("ul-item-preview-1", "/Pages/Projects/2023-06-20.html");
    loadPreview("ul-item-preview-2", "/Pages/Projects/2023-06-19.html");

    // Articles
    loadPreview("ul-item-preview-3", "/Pages/Articles/2023-03-20.html");
    loadPreview("ul-item-preview-4", "/Pages/Articles/2022-11-17.html");
    loadPreview("ul-item-preview-5", "/Pages/Articles/2022-10-13.html");
});

function loadPreview(previewId, pagePath,)
{
    read(pagePath, function(str)
    {
        let previewItem = document.getElementById(previewId);
        previewItem.href = pagePath;
        previewItem.innerHTML = str;
    });
}