$(document).ready(function() {
    $(document).on('keypress', '.td-search-input', function(e) {
        if (e.keyCode !== 13) {
            return;
        }
        var query = $(this).val().replace(/ /g,"_");
        searchPageUrl = "https://search.groupdocs.com/q/"+ query + ".html";            
        window.location.replace(searchPageUrl);
        return false;
    });
});;