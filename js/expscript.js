$(document).ready(function() {

    $(".tabs").tabslet({
        mouseevent: "click",
        attribute: "href",
        animation: true
    });

    $("#expgridall").hide();

    var hideStatus = true;

    $("#showbtn").click(function(){
        if(hideStatus == true){
            $("#expgridall").slideDown(300);
            hideStatus = false;
            $("#showbtn").html("Hide all");
        }
        else{
            $("#expgridall").slideUp(300);
            hideStatus = true;
            $("#showbtn").html("Show all");
        }
    });

    console.log("working");
    
});