requirejs(["/Scripts/Util/LoadHeader.js",
           "/Scripts/Util/LoadFooter.js",
           "/Scripts/Util/NavigationHighlighter.js",
           "/Scripts/Util/LoadPagePreview.js",
           "/Pages/Articles/paths.js"],
function()
{
    var postCount = 0;
    var loadButton = document.getElementById("load-more-button");

    loadButton.onclick = loadMorePosts;

    createPreviews("article-preview", "article-preview-", "/Pages/Articles/", getArticleFileNames(), 0, 6);
    highlightNavigation("v-nav-1", "li");

    function createPreviews(ulID, previewId, dirPath, fileNames, start, end)
    {
        end = (end > fileNames.length) ? fileNames.length : end;

        let ul = document.getElementById(ulID);
        for(let i = start; i < end; i++)
        {
            let liPreview = document.createElement("li");
            liPreview.className = "item-preview-post";

            let aPreview = document.createElement("a");
            aPreview.id = previewId + i;

            liPreview.appendChild(aPreview);
            ul.appendChild(liPreview);

            loadPagePreview(aPreview.id, dirPath + fileNames[i]);

            postCount++;
        }

        loadButton.style.display = (postCount >= fileNames.length) ? "none": "block";
    }

    function loadMorePosts(e)
    {
        createPreviews("article-preview", "article-preview-", "/Pages/Articles/", getArticleFileNames(), postCount, postCount + 3);
        
        highlightNavigation("v-nav-1", "li");
    }
});