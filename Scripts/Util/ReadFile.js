function readFile(path, func)
{
    var request = new XMLHttpRequest();
    request.open("GET", path);

    request.addEventListener("readystatechange", function()
    {
        if(request.readyState === XMLHttpRequest.DONE && request.status === 200)
        {
            func(request.responseText);
        }
    });

    request.send(null);
}