function highlightNavigation(id, selector)
{
    let nav = document.getElementById(id);
    let collection = nav.querySelectorAll(selector);

    for(var i = 0; i < collection.length; i++)
    {
        collection[i].onmouseenter = dehighlight;
        collection[i].onmouseleave = highlight;
    }

    function dehighlight(e)
    {
        for(var i = 0; i < collection.length; i++)
        {
            if(e.target.innerText == collection[i].innerText)
                continue;

            collection[i].style.opacity = 1;
            collection[i].style.transition = "opacity 0.5s";
            collection[i].style.opacity = 0.2;
        }
    }

    function highlight(e)
    {
        for(var i = 0; i < collection.length; i++)
        {
            collection[i].style.opacity = 0.2;
            collection[i].style.transition = "opacity 1s";
            collection[i].style.opacity = 1;
        }
    }
}