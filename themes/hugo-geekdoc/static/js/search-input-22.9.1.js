document.addEventListener("DOMContentLoaded", function () {
    var input = document.getElementById("#gdoc-search-input-ext");
    if(input) {
        input.addEventListener("keypress", function (e) {
            if (e.key !== 'Enter') { return; }
            var query = e.target.value.replace(/ /g, "-"); 
            var searchPageUrl = "https://search.groupdocs.com/q/" + query + ".html"; 
            window.location.replace(searchPageUrl); 
            return false;
        });
    }
});