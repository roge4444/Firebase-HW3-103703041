$(function(){
    $("#top").click(function(){
        jQuery("html,body").animate({
            scrollTop:0
        },1000);
    });
});

function small(){
    document.body.style.fontSize="small";
}

function medium(){
    document.body.style.fontSize="medium";
}

function large(){
    document.body.style.fontSize="large";
}