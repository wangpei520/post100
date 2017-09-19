/**
 * Created by Administrator on 2017/8/29.
 */

$(document).ready(function(){
    //注册模态框

    //搜索查询快递信息
    $('#query').on('click',function(){
        var postId = $('#postid').val();
        console.log(postId);
        var postInfo = $('#info');
        postInfo.css({
            'display':'block'
        });
        $.ajax({
            type:"get",
            dataType:"jsonp",
            url:"http://v.juhe.cn/exp/index?key=111e06000027c6dd5f296aec1744d6aa&com=sf&no="+postId,
            success:function(data){
                if(data.resultcode!=200){
                    postInfo.text("抱歉没有找到您需要查找的快递单号!");
                    return;
                }
                var info = data.result;
                var infoBox = $("<div class='infoBox'></div>");
                postInfo.append(infoBox);
                var tel = $("<p class='post-tel'>"+info.no+"</p>");
                infoBox.append(tel);
                // 遍历快递具体信息
                for(var i =0; i < info.list.length; i++){
                    var lists = info.list[i];
                    var listBox = $("<div class='post-list'></div>");
                    infoBox.append(listBox);
                    var time = $("<p class='post-time'>"+lists.datetime+"</p>");
                    listBox.append(time);
                    var site = $("<p class='post-site'>"+lists.remark+"</p>");
                    listBox.append(site);
                }
            },
            error:function(){
                postInfo.text("亲，出错了！");
            }
        });
    });
})