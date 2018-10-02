(_ => {

    "use strict";

    const scriptSrc = "https://script.google.com/macros/s/AKfycbyJfLQYJrm1VwNEodsDb0T6X4BzJAQnRvf2dUe9YFWoWl2_BKz0/exec";
    const newsList = document.querySelector("ul");

    const createNewsListItem = obj => `
        <li>
            <a class="eventBlockAreaLink" href="${obj.link}" target="_top">
                <div class="eventBlockArea">
                    <div class="eventBlockArea__img"><img src="${obj.img}" alt="event"></div>
                    <div class="eventBlockArea__textArea">
                        <p class="eventBlockArea__text">${obj.text}</p>
                        <p class="eventBlockArea__date">${obj.date}</p>
                    </div>
                </div>
            </a>
        </li>
    `;

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
