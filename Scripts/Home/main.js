requirejs(["/Scripts/Util/LoadHeader.js",
           "/Scripts/Util/LoadFooter.js",
           "/Scripts/Util/ReadFile.js",
           "/Scripts/Util/LoadPagePreview.js",
           "/Scripts/Util/NavigationHighlighter.js",
           "/Pages/Projects/paths.js",
           "/Pages/Articles/paths.js"],
function()
{
    createPreviews("project-preview", "project-preview-", "/Pages/Projects/", getProjectFileNames());
    createPreviews("article-preview", "article-preview-", "/Pages/Articles/", getArticleFileNames());

    highlightNavigation("v-nav-projects", "li");
    highlightNavigation("v-nav-articles", "li");

    function createPreviews(ulID, previewId, dirPath, fileNames)
    {
        let ul = document.getElementById(ulID);
        for(let i = 0; i < 3; i++)
        {
            let liPreview = document.createElement("li");
            liPreview.className = "item-preview-post";

            let aPreview = document.createElement("a");
            aPreview.id = previewId + i;

            liPreview.appendChild(aPreview);
            ul.appendChild(liPreview);

            loadPagePreview(aPreview.id, dirPath + fileNames[i]);
        }
    }
});