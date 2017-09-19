/**
 * Created by Administrator on 2017-07-17.
 */
$(document).ready(function(){
    $("#ctrl-gotop").click(function(){
        $("html,body").animate({
            "scrollTop" :0
        },1000);
    });
})
