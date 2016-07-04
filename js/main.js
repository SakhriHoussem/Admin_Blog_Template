
$(document).ready(function(){
    /*  side menu toggle start */
    $("#button-menu").click(function(){
        $("#content").toggleClass("col-xs-12");
        $("#content").toggleClass("col-xs-10");
        $("#side-menu").toggleClass("hidden-xs"); // add/remove visiblite
    });
    /*  side menu toggle end */


    /* tag select multipe config  start*/
    var config = {
        '.chosen-select-deselect' : {allow_single_deselect: true},
        '.chosen-select-no-single' : {disable_search_threshold: 10},
        '.chosen-select-no-result' : {no_results_text: 'Oops, Nothing Found!!'},
        '.chosen-select-width' : {width: "95%"}
    }
    for(var selector in config){
        $(".chosen-select").chosen(config[selector]);
    }
    /* tag select multipe config  end*/

    /* textedit summernote config  start*/

        $(".summernote").summernote({
            height : 200
        });

    /* textedit summer config  end*/
});