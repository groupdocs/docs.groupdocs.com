document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("#gdoc-search-input-ext").addEventListener("keypress", function (e) {
        if (e.keyCode !== 13) { return; }
        var query = e.target.value.replace(/ /g, "-"); 
        var searchPageUrl = "https://search.groupdocs.com/q/" + query + ".html"; 
        window.location.replace(searchPageUrl); 
        return false;
    });
});