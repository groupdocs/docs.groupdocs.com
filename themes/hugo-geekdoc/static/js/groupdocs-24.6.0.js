/* Feedback */
document.addEventListener("DOMContentLoaded", () => {

    const FEEDBACK_FORM_VERSION = "22.10";
    const FEEDBACK_API_ENDPOINT = "https://docs.groupdocs.com/api/feedback";

    const feedbackData = { page: window.location.pathname, pageTitle: document.title, referrer: document.referrer, appVersion: FEEDBACK_FORM_VERSION };
    const feedbackForm = document.querySelector("#feedback");

    init();

    function init() {
        if (!feedbackForm)
            return;

        feedbackForm.querySelector('#feedback_yes').addEventListener('click', yesClick);
        feedbackForm.querySelector('#feedback_no').addEventListener('click', noClick);
        feedbackForm.querySelector('#feedback_yes_skip').addEventListener('click', skip);
        feedbackForm.querySelector('#feedback_no_skip').addEventListener('click', skip);
        feedbackForm.querySelector('#feedback_yes_send').addEventListener('click', yesSend);
        feedbackForm.querySelector('#feedback_no_send').addEventListener('click', noSend);

    }

    function yesClick() {
        sendFeedbackData(1);
        setTab('feedback_tab_yes');
        feedbackForm.querySelector('#feedback_yes_msg').focus();

    }
    function noClick() {
        sendFeedbackData(-1);
        setTab('feedback_tab_no');
        feedbackForm.querySelector('#feedback_no_msg').focus();
    }

    function yesSend() {
        if (!validateMessage('#feedback_yes_msg'))
            return;

        sendFeedbackData(1, feedbackForm.querySelector('#feedback_yes_msg').value);
        setTab('feedback_tab_thanks');

    }

    function noSend() {
        if (!validateMessage('#feedback_no_msg'))
            return;

        sendFeedbackData(-1, feedbackForm.querySelector('#feedback_no_msg').value);
        setTab('feedback_tab_thanks');

    }


    function skip() {
        setTab('feedback_tab_thanks');
    }

    function setTab(id) {
        feedbackForm.querySelectorAll('.gdoc-feedback__tab').forEach((tab) => tab.classList.remove('active'));
        feedbackForm.querySelector('#' + id).classList.add('active');
    }

    function validateMessage(selector) {
        const $message = feedbackForm.querySelector(selector);
        if (!$message || !$message.value || $message.value.trim() === '') {
            $message.classList.add('invalid');
            $message.focus();
            return false;
        }
        return true;
    }

    function sendFeedbackData(rateValue, message) {
        var data = { ...feedbackData, rateValue: rateValue };
        if (message)
            data.message = message;

        return fetch(FEEDBACK_API_ENDPOINT, {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });
    }



});


/* To top button */
document.addEventListener("DOMContentLoaded", () => {
    var MIN_SCROLL_ACTIVATE = window.outerHeight;
    var gotopButton = document.querySelector('#gotop_button');

    init();

    function init() {
        if (!gotopButton)
            return;

        gotopButton.addEventListener('click', goTop);
        document.addEventListener('scroll', updateVisibility);
    }

    function goTop() {
        window.scrollTo(0, 0);
    }

    function updateVisibility(e) {

        if (window.scrollY > MIN_SCROLL_ACTIVATE) {
            gotopButton.classList.add('gdoc-gotop--visible');
        }
        else {
            gotopButton.classList.remove('gdoc-gotop--visible');
        }
    }


});


/* Search block */
document.addEventListener("DOMContentLoaded", () => {
    var MOBILE_SCREEN_WIDTH = 1024;
    var SEARCH_URL = "https://search.groupdocs.com/q/[query].html"
    var searchToggle = document.querySelector('#search_toggle');
    var searchClose = document.querySelector('#search_close');
    var menuBlock = document.querySelector('.gdoc-header__menu-inner');
    var brandBlock = document.querySelector('.gdoc-header__brand');

    var searchBlock = document.querySelector('.gdoc-header__search');
    var searchInput = document.querySelector('#gdoc-search-input-ext');

    var searchVisible = false;

    init();

    function init() {
        if (!searchInput)
            return;

        searchInput.addEventListener('keypress', doSearch);
        searchToggle.addEventListener('click', toggleSearch);
        searchClose.addEventListener('click', toggleSearch);

    }

    function doSearch(e) {
        if (e.key !== 'Enter') { return; }

        var query = e.target.value.replace(/ /g, "-");
        var searchPageUrl = SEARCH_URL.replace('[query]', query);
        window.location.replace(searchPageUrl);
        return false;
    }

    function toggleSearch() {

        var isMobile = document.documentElement.clientWidth <= MOBILE_SCREEN_WIDTH;
        searchVisible ? hideSearch(isMobile) : showSearch(isMobile);

    }

    function hideSearch(isMobile) {
        if (!searchVisible)
            return;
        searchToggle.style.display = 'block';
        brandBlock.style.display = 'block';
        menuBlock.style.display = 'block';
        searchBlock.style.display = 'none';
        searchVisible = false;
    }

    function showSearch(isMobile) {
        if (searchVisible)
            return;
        searchToggle.style.display = 'none';
        if (isMobile) { brandBlock.style.display = 'none'; }
        menuBlock.style.display = 'none';
        searchBlock.style.display = 'block';
        searchInput.focus();
        searchVisible = true;
    }


});

/* Toc menu highlight */
document.addEventListener('DOMContentLoaded', () => {

    var toc = document.querySelector('#TableOfContents');
    var anchors = document.querySelectorAll('.gdoc-page__anchor');
    var links = document.querySelectorAll('#TableOfContents a');

    init();

    function init() {

        if (!toc)
            return;

        window.addEventListener('resize', updateToc);
        window.addEventListener('scroll', updateToc);
        updateToc();
    }


    function updateToc() {

        for (const anchor of anchors) {
            if (isInViewport(anchor)) {
                setActiveToc(anchor.attributes['href'].value);
                break;
            }
        }

    }

    function setActiveToc(href) {

        for (const link of links) {
            if (link.attributes['href'].value === href) {
                link.classList.add('active');
            }
            else {
                link.classList.remove('active');
            }
        }
    }


    function isInViewport(el) {

        const rect = el.getBoundingClientRect();

        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );


    }



});


/* Mobile Toc block */
document.addEventListener("DOMContentLoaded", () => {

    var tocToggle = document.querySelector('#TableOfContentsMobileHeader');
    var tocBlock = document.querySelector('#TableOfContentsMobile');
    var tocVisible = false;

    init();

    function init() {
        if (!tocToggle)
            return;
        tocToggle.addEventListener("click", toggleToc);
    }


    function toggleToc() {

        if (tocVisible) {
            tocBlock.style.display = 'none';
            tocToggle.classList.remove('expanded');
        } else {
            tocBlock.style.display = 'block';
            tocToggle.classList.add('expanded');
        }

        tocVisible = !tocVisible;
    }
});

/* Table filter */

const filterInput = document.getElementById('tableFilter');
const article = document.getElementsByTagName('article');

if (article.length == 1) {
    const tables = article[0].getElementsByTagName('table');

    filterInput.addEventListener('keyup', function (e) {
        let filterValue = this.value.toLowerCase();
        if(e.code == "Escape") {
            this.value = '';
            filterValue = '';
        }
        for (let t = 0; t < tables.length; t++) {
            let table = tables[t];
            let hasVisibleRows = false;
            for (let i = 1; i < table.rows.length; i++) { // Start from row 1 (skip header)
                let rowVisible = false;
                for (let j = 0; j < 1; j++) { // or table.rows[i].cells.length
                    const cellText = table.rows[i].cells[j].textContent.toLowerCase();
                    if (cellText.includes(filterValue)) {
                        rowVisible = true;
                        break;
                    }
                }
                table.rows[i].style.display = rowVisible ? 'table-row' : 'none';

                if (rowVisible) {
                    hasVisibleRows = true;
                }
            }

            let tableWrap = table.parentElement;
            tableWrap.style.display = hasVisibleRows ? '' : 'none';

            let prevElement = tableWrap.previousElementSibling;
            prevElement.style.display = hasVisibleRows ? '' : 'none';
            while (prevElement.className !== 'gdoc-page__anchorwrap') {
                prevElement = prevElement.previousElementSibling;
                prevElement.style.display = hasVisibleRows ? '' : 'none';
            }

            let nextElement = tableWrap.nextElementSibling;
            if (nextElement) {
                if (nextElement.className !== "gdoc-feedback") {
                    nextElement.style.display = hasVisibleRows ? '' : 'none';
                    while (nextElement 
                        && nextElement.className !== 'gdoc-page__anchorwrap' 
                        && nextElement.className !== "gdoc-feedback") 
                    {
                        nextElement.style.display = hasVisibleRows ? '' : 'none';
                        nextElement = nextElement.nextElementSibling;
                    }
                }
            }
        }
    });
}