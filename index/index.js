$(function () {
    $("input").on("input.highlight", function () {
       
        var searchTerm = $(this).val();
        
        $("#context").unmark().mark(searchTerm,
            {
                "acrossElements": true,
                "separateWordSearch": false,
            }
        );
    }).trigger("input.highlight").focus();
});

  