(_ => {

    "use strict";

    const { getel, html, mount } = DOMUtl();

    const newsList = getel("ul");

    const createNewsListItem = obj => html(`
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
    `);

    window.callback = json => {
        delete window.callback;
        
    }

    //test source
    /*
    const data = [
        {
            link: "http://www.comiket.co.jp/",
            img: "news-img/news4.jpg",
            text: "コミックマーケット93に参加します",
            date: "2017/11/7"
        },
        {
            link: "http://www.comiket.co.jp/",
            img: "news-img/news2.jpg",
            text: "コミックマーケットに参加申し込み中！",
            date: "2017/1/10"
        },
        {
            link: "https://twitter.com/TakushokuDCRC/status/816654051194482688",
            img: "news-img/news3.jpg",
            text: "TwitterのIDを変更しました",
            date: "2017/1/4"
        },
        {
            link: "http://keydororo.hatenablog.com/entry/2016/12/23/234955",
            img: "news-img/news1.jpg",
            text: "忘年会をしました",
            date: "2016/12/23"
        }
    ];
    data.map(createNewsListItem).forEach(item => mount(newsList, item));
    */

})();
