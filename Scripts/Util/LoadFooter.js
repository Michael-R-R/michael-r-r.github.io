"use strict";

requirejs(["/Scripts/Util/ReadFile.js"],
function()
{
    read("/Pages/Common/footer.html", function(content)
    {
        var footer = document.getElementById("load-footer");
        footer.innerHTML = content;
    });
});