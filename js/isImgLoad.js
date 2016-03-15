//图片预加载

//判断浏览器
var Browser=new Object();
Browser.userAgent=window.navigator.userAgent.toLowerCase();//字符串中的字母被转换为小写字母toLowerCase()
//test() 方法用于检测一个字符串是否匹配某个模式.
Browser.ie=/msie/.test(Browser.userAgent);///msie/正则表达式，判断navigator.userAgent浏览器信息里是否含有MSIE字样，含有则为IE
Browser.Moz=/gecko/.test(Browser.userAgent);//Mozilla
//判断是否加载完成
function Imagess(url,imgid,callback){    
    var val=url;//图片地址、图片id、回调函数
    var img=new Image();//Image()对象
    if(Browser.ie){
        //当请求被发送到服务器时，触发onreadystatechange事件。
        img.onreadystatechange =function(){  
            //readystate属性返回值：complete-载入完成，loaded
            if(img.readyState=="complete"||img.readyState=="loaded"){
                callback(img,imgid);
            }
        }        
    }else if(Browser.Moz){
        img.onload=function(){
            if(img.complete==true){
                callback(img,imgid);
            }
        }        
    }    
    //如果因为网络或图片的原因发生异常，则显示该图片
    img.onerror=function(){
        $(".action").hide();
        $(".error").css("display","block");
        // img.src="http://www.86y.org/images/failed.png"
    }
    img.src=val;
}
//显示图片
function checkimg(obj,imgid){
    document.getElementById(imgid).style.cssText="";
    document.getElementById(imgid).src=obj.src;
}
//初始化需要显示的图片，并且指定显示的位置
window.onload=function(){
    // 获取层(#imagelist)下的img
    var imglist=document.getElementById("imagelist").getElementsByTagName('img');
    for(i=0;i<imglist.length;i++)
    {
        imglist[i].id="img0"+i;
        imglist[i].style.cssText="background:url(http://img.qufaya.com/www/images/ad/app-action-center/loading.gif) no-repeat center center;background-color:#FFD48F"
        Imagess(imglist[i].getAttribute("data"),imglist[i].id,checkimg);
    }
}