function navbar(){

    const nav = document.querySelector('nav');

    const array = [
        {
             title: "КОТИК",
             href: "cat.html"   
        },   
        {
             title: "КОТИК В КОСОМСЕ",
             href: "catspace.html"   
        },   
        {
             title: "ДЛЯ МЯУ-МЯУ",
             href: "meow.html"   
        },   
        {
             title: "ПРОСТО МУР",
             href: "catmeow.html"   
        },
    ];

    const links = array.map(el => {
        return `
            <li>
                <a href="${el.href}">${el.title}</a>
            </li>
        `;
    });

    const linksHtml = links.join('');
    

    nav.innerHTML = `
        <ul class="menu">
           ${linksHtml}
        </ul>
    `;
}

navbar();