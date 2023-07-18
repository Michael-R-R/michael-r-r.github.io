let info = document.getElementById("info");
let title = info.dataset.title;
let coverImg = info.dataset.img;
let date = info.dataset.date;
let content = document.getElementById("content").innerHTML;

let header =
`
    <link rel="stylesheet" href="/Styles/pagetemplate.css">
    <title>${title}</title>
`;

let body =
`
    <div id="load-header"></div>

    <div class="v-flexbox">
        <h1 id="title">${title}</h1>
        <p id="date">${date}</p>
        <img id="cover-img" src="${coverImg}" alt="">
    </div>

    <div class="h-flexbox">
        <div class="v-flexbox">
            <div class="v-flex-item">
                <div id="content">${content}</div>
            </div>
        </div>
    </div>

    <div id="load-footer"></div>
`;

document.head.innerHTML += header;
document.body.innerHTML = body;