/*$(function(){
        function banner(targetObj){
            var child=$(targetObj).find(".slide").toArray().length;
            if(child==0||!/^\d+$/.test(child)){
                return false;
            }
            var btns="<li class='on' data-index='0'></li>"
            for(var i=1;i<child;i++){
                btns+="<li data-index='"+i+"'></li>";
            }
            $(targetObj+" .btnList").empty().append(btns);
            //var str="";
            //for(var i=0;i<50;i++){
            //      str+='<div class="lines"></div>';
            //}
            //$(targetObj+" .layorBox").append(str);
            var interV="";
            var now=0;
            var timeS=6;
            var doit=function(seconds,nowS,childs){
                interV=setTimeout(function(){
                    //animate();
                    $(targetObj).find(".onSlide").removeClass("onSlide").animate({"opacity":"0"},1000,function(){
                        $(this).css({"display":"none","z-index":0});
                    });

                    nowS++;
                    now=nowS;
                    if(nowS==childs){
                        nowS=0;
                    }
                    $(targetObj+" .btnList li").removeClass("on");
                    $(targetObj+" .btnList li").eq(nowS).addClass("on");
                    $(targetObj).find(".slide").eq(nowS).addClass("onSlide").css({"display":"block","z-index":100}).animate({"opacity":"1"},1000);
                    doit(seconds,nowS,childs);
                },seconds*1000)
            };
            doit(timeS,now,child);

            var animate=function(){
                $(targetObj+" .layorBox").css("z-index",99);
                $(targetObj+" .layorBox .lines").each(function(index){
                    $(this).delay(index*10).animate({"opacity":"0.8"},100,function(){
                        $(this).animate({"opacity":"0"},200);
                    })
                })
                setTimeout(function(){
                    $(targetObj+" .layorBox").css("z-index",0);
                },800);
            };
            $(targetObj+" .btnList li").each(function(index){
                $(this).click(function(){
                    if($(this).hasClass("on")){
                        return false;
                    }
                    clearTimeout(interV);
                    //animate();
                    $(this).addClass("on").siblings().removeClass("on");
                    $(targetObj).find(".onSlide").removeClass("onSlide").animate({"opacity":"0"},1000,function(){
                        $(this).css({"display":"none","z-index":0});
                    });
                    $(targetObj).find(".slide").eq(index).addClass("onSlide").css({"display":"block","z-index":100}).animate({"opacity":"1"},1000);
                    doit(timeS,index,child);
                })
            })
            $(targetObj+" .rl-btn li.left").click(function(){
                var index=parseInt($(targetObj+" .btnList li.on").attr("data-index"),10);
                var eqs=child-1;
                if(index>0){
                    eqs=index-1
                }
                clearTimeout(interV);
                //animate();
                $(targetObj+" .btnList li").eq(eqs).addClass("on").siblings().removeClass("on");
                $(targetObj).find(".onSlide").removeClass("onSlide").animate({"opacity":"0"},1000,function(){
                    $(this).css({"display":"none","z-index":0});
                });
                $(targetObj).find(".slide").eq(eqs).addClass("onSlide").css({"display":"block","z-index":100}).animate({"opacity":"1"},1000);
                doit(timeS,eqs,child);

            })
            $(targetObj+" .rl-btn li.right").click(function(){
                var index=parseInt($(targetObj+" .btnList li.on").attr("data-index"),10);
                var eqs=index+1;
                if(index==child-1){
                    eqs=0;
                };
                clearTimeout(interV);
                //animate();
                $(targetObj+" .btnList li").eq(eqs).addClass("on").siblings().removeClass("on");
                $(targetObj).find(".onSlide").removeClass("onSlide").animate({"opacity":"0"},1000,function(){
                    $(this).css({"display":"none","z-index":0});
                });
                $(targetObj).find(".slide").eq(eqs).addClass("onSlide").css({"display":"block","z-index":100}).animate({"opacity":"1"},1000);
                doit(timeS,eqs,child);
            })
            $(window).resize(function(){
                $(targetObj).find(".slide").css("width","100%") ;
                var w= $(targetObj).find(".slide:first-child").width();
                $(targetObj+" .slide img").css({"left":w/2}) ;
            })
        }
        getBanner(function(){
            banner("#indexBanner");
        })
    })
    function getBanner(callback){
        var allData = [
            {
                backColor: "#FFFFFF",
                id: 193,
                img: "http://192.168.9.183/assets/img/index/banner.png",
                name: "",
                url: "http://www.baidu.com",
            },
            {
                backColor: "#FFFFFF",
                id: 194,
                img: "http://192.168.9.183/assets/img/logReg/banner.png",
                name: "",
                url: "http://www.baidu.com",
            },
            {
                backColor: "#FFFFFF",
                id: 195,
                img: "http://192.168.9.183/assets/img/index/banner.png",
                name: "",
                url: "http://www.baidu.com",
            }
        ];
        var str="";
        $.each(allData, function(i,val) {
            str+= '<div class="slide" style="background-color: '+val.backColor+';z-index:'+(100-i)+'">'+
                    '<a href="'+val.url+'" target="_blank"><img  src="'+val.img+'"/></a>'+
                    '</div>';
        });
        $("#indexBanner").find(".slides").remove();
        $("#indexBanner .btnList").before(str);
//  $('.reg-box-container').css({right: ((document.body.clientWidth -1200) / (document.body.clientWidth * 2)) })
        callback();
    }*/
