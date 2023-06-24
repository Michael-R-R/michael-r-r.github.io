requirejs(["/Scripts/Util/LoadHeader.js",
           "/Scripts/Util/LoadFooter.js",
           "/Scripts/Util/ReadFile.js",
           "/Scripts/Util/LoadPagePreview.js",
           "/Scripts/Util/NavigationHighlighter.js",
           "/Pages/Projects/paths.js",
           "/Pages/Articles/paths.js"],
function()
{
    highlightNavigation("v-nav-1", "li");
    highlightNavigation("v-nav-2", "li");

    // Project previews
    let prjFileNames = getProjectFileNames();
    for(let i = 0; i < 3; i++)
    {
        loadPagePreview("ul-project-preview-" + i, "/Pages/Projects/" + prjFileNames[i]);
    }

    // Article previews
    let artFileNames = getArticleFileNames();
    for(let i = 0; i < 3; i++)
    {
        loadPagePreview("ul-article-preview-" + i, "/Pages/Articles/" + artFileNames[i]);
    }
});