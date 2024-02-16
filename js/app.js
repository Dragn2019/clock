(() => {
    "use strict";
    function isWebp() {
        function testWebP(callback) {
            let webP = new Image;
            webP.onload = webP.onerror = function() {
                callback(webP.height == 2);
            };
            webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
        }
        testWebP((function(support) {
            let className = support === true ? "webp" : "no-webp";
            document.documentElement.classList.add(className);
        }));
    }
    let addWindowScrollEvent = false;
    setTimeout((() => {
        if (addWindowScrollEvent) {
            let windowScroll = new Event("windowScroll");
            window.addEventListener("scroll", (function(e) {
                document.dispatchEvent(windowScroll);
            }));
        }
    }), 0);
    const hrs = document.getElementById("hrs");
    const min = document.getElementById("min");
    const sec = document.getElementById("sec");
    setInterval((() => {
        const time = new Date;
        hrs.innerHTML = (time.getHours() < 10 ? "0" : "") + time.getHours();
        min.innerHTML = (time.getMinutes() < 10 ? "0" : "") + time.getMinutes();
        sec.innerHTML = (time.getSeconds() < 10 ? "0" : "") + time.getSeconds();
    }), 0);
    window["FLS"] = true;
    isWebp();
})();