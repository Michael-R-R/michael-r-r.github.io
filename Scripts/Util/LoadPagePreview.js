function loadPagePreview(id, path)
{
    requirejs(["/Scripts/Util/ReadFile.js"],
    function()
    {
        readFile(path, function(content)
        {
            let tempDoc = document.implementation.createHTMLDocument("");
            tempDoc.open();
            tempDoc.write(content);
            tempDoc.close();
            
            let info = tempDoc.getElementById("info");
            let title = info.dataset.title;
            let coverImg = info.dataset.img;
            let date = info.dataset.date;
            let description = tempDoc.getElementById("content").innerText;

            let previewItem = document.getElementById(id);
            previewItem.href = path;
            previewItem.innerHTML = 
            `
                <h1 class="item-preview-title">${title}</h1>
                <img class="item-preview-cover-img" src="${coverImg}" alt="">
                <p class="item-preview-description">${description}</p>
                <p class="item-preview-date">${date}</p>
            `;
        });
    });
}