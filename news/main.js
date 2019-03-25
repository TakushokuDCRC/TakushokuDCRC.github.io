(_ => {

    "use strict";

    const scriptSrc = "https://script.google.com/macros/s/AKfycbyJfLQYJrm1VwNEodsDb0T6X4BzJAQnRvf2dUe9YFWoWl2_BKz0/exec";
    const newsList = document.querySelector("ul");

    const createNewsListItem = obj => {
        if (obj.img.includes("drive.google.com")) {
            const id = obj.img.match(/d\/.+?\//)[0].replace(/d\/|\//g, "");
            obj.img = `http://drive.google.com/uc?export=view&id=${id}`;
        }
        return `
            <li>
                <a class="eventBlockAreaLink" href="${obj.link}" target="_top">
                    <div class="eventBlockArea">
                        <div class="eventBlockArea__img"><img src="${obj.img}" alt="event"></div>
                        <div class="eventBlockArea__textArea">
                            <p class="eventBlockArea__text">${obj.text}</p>
                            <p class="eventBlockArea__date">${formatDate(obj.date)}</p>
                        </div>
                    </div>
                </a>
            </li>
        `;
    };

    const formatDate = s => `${s.substr(0, 4)}/${s.substr(4, 2)}/${s.substr(6, 2)}`;

    window.callback = json => {
        delete window.callback;
        document.querySelector(".loading-animation-panel").className += " hide-panel";
        const content = json.map(item => createNewsListItem(item)).join("");
        newsList.innerHTML = content;
        window.scrollTo(0, 0);
    }
    const script = document.createElement("script");
    script.src = scriptSrc + "?callback=callback";
    document.querySelector("head").appendChild(script);

})();
