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
            $("#expgridall").slideDown(500);
            $(".tabs").hide(500);
            hideStatus = false;
            $("#showbtn").html("Tabs view");
        }
        else{
            $("#expgridall").slideUp(500);
            $(".tabs").show(500);
            hideStatus = true;
            $("#showbtn").html("List view");
        }
    });

    console.log("working");
    
});