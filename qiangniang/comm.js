$(window).scroll(function () {
    if ($(document).scrollTop() < 450) {
        $('.btnkfbx').css('display', 'none');
    } else {
        $('.btnkfbx').css('display', 'block');
    }
})
$('.kfclosevid').click(function () {
    $('.btnkfbx').addClass('on')
})




//弹窗
function TGDialogS(e) {
    // 利用milo库引入dialog组件
    need("biz.dialog", function (Dialog) {
        Dialog.show({
            id: e,
            bgcolor: '#000', //弹出“遮罩”的颜色，格式为"#FF6600"，可修改，默认为"#fff"
            opacity: 50 //弹出“遮罩”的透明度，格式为｛10-100｝，可选
        });
    });
}

function closeDialog() {
    // 利用milo库引入dialog组件
    need("biz.dialog", function (Dialog) {
        Dialog.hide();
    });
}


$('.gunbifc').click(function () {
    $(this).parent('.boxfc').hide();
})
$('.listwish .btnchangeyw').click(function () {
    $(this).parent('.bxwhisrig').siblings('.boxfc').show();
})




// 提取共用的代码为一个函数
function updateImagesAndText(element) {
    var img1 = element.children('img').attr('src');
    element.parent('.boxfc').siblings('.bxlfpic').children('img').attr('src', img1);
    var txt1 = element.children('.textnmdj').text();
    element.parent('.boxfc').siblings('.bxlfpic').children('.whisname').text(txt1);
}
let thisClick;
var flag = 0;
var indeXuanz2 = false;
var btnxuanz = $('.boxfc a');

// //道具选择
// $('.boxfc a').click(function() {
//         flag = $(this).index();
//         TGDialogS('tips');
//         thisClick = $(this);
//         !flag ? indeXuanz2 = true : indeXuanz2 = false;
// });
// //确定取消按钮
// $('#tips .boxsure_in a').click(function() {
// 		// 获取被点击的 <a> 元素在其父元素中的索引
//         var index = $(this).index();
//         // 根据索引执行不同的逻辑
//         if(index === 0) {
//                 flag ? flag = 1 : flag = 0;
//                 updateImagesAndText(thisClick);
//                 showDialog.hide();
//                 thisClick.addClass('on').siblings().removeClass('on');

//                 if (indeXuanz2) {
//                         $('.btnxuanz1').parent('.boxfc').siblings('.bxlfpic').children('.bxtagsmbq').hide();
//                 }else{
//                         $('.btnxuanz2').parent('.boxfc').siblings('.bxlfpic').children('.bxtagsmbq').show();
//                 }
//         } else if(index === 1) {
//                 showDialog.hide();
//         }
//         $('.boxfc').hide()
// });


function IEVersion() {
    var userAgent = navigator.userAgent;
    //取得浏览器的userAgent字符串
    var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1;
    //判断是否IE<11浏览器
    var isEdge = userAgent.indexOf("Edge") > -1 && !isIE;
    //判断是否IE的Edge浏览器
    var isIE11 = userAgent.indexOf('Trident') > -1 && userAgent.indexOf("rv:11.0") > -1;
    if (isIE) {
        var reIE = new RegExp("MSIE (\\d+\\.\\d+);");
        reIE.test(userAgent);
        var fIEVersion = parseFloat(RegExp["$1"]);
        if (fIEVersion == 7) {
            return 7;
        } else if (fIEVersion == 8) {
            return 8;
        } else if (fIEVersion == 9) {
            return 9;
        } else if (fIEVersion == 10) {
            return 10;
        } else {
            return 6;
            //IE版本<=7
        }
    } else if (isEdge) {
        return 'edge';
        //edge
    } else if (isIE11) {
        return 11;
        //IE11
    } else {
        return -1;
        //不是ie浏览器
    }
}
var version = IEVersion();
if (version != "edge" && version != -1 && version <= 9 && location.hostname == "act.daoju.qq.com") {
    alert("亲爱的玩家，您的浏览器版本过低，请您升级浏览器版本。推荐您使用chrome浏览器以获得更优质体验。");
}

function browserRedirect() {
    var sUserAgent = navigator.userAgent.toLowerCase();
    var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
    var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
    var bIsMidp = sUserAgent.match(/midp/i) == "midp";
    var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
    var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
    var bIsAndroid = sUserAgent.match(/android/i) == "android";
    var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
    var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
    if (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) {
        if (location.hostname == "app.daoju.qq.com") {
            return;
        }
        if (window.location.search) {
            // window.location.href = '//app.daoju.qq.com' + location.pathname + window.location.search + '&plat_support=mqq';
            window.location.href = '//app.daoju.qq.com' + location.pathname + window.location.search;
        } else {
            window.location.href = '//app.daoju.qq.com' + location.pathname;
        }
    } else {
        if (location.hostname == "act.daoju.qq.com") {
            return;
        }
        location.href = '//act.daoju.qq.com' + location.pathname + window.location.search
    }

}
// browserRedirect();







// 页面，弹窗使用
window.alert = function (msg, callback, callback1) {
    need("util.modalDialog", function (Dialog) {
        Dialog.alert(msg, {
            onConfirm: function () {
                typeof callback == "function" ? callback() : console.log("no callback")
            },
            onClose: function () {
                typeof callback1 == "function" ? callback1() : console.log("no callback1")
            }
        });
    })
};

window.confirm = function (msg) {
    return new Promise(function (resolve, reject) {
        need("util.modalDialog", function (Dialog) {
            Dialog.confirm(msg, {
                onConfirm: function () {
                    resolve(true);
                },
                onCancel: function () {
                    resolve(false);
                },
                onClose: function () {
                    resolve(false);
                }
            });
        });
    });
};



//是否在掌上道聚城内
function isApp(a) {
    a = $.extend({
        ADTAG: "", //渠道
        url: location.href, //道聚城外点击，前往道聚城打开指定页面
        callback: function () {
            //是在道聚城内打开
        }
    }, a);
    need(['daoju.util', 'daoju.ui.app'], function (util, app) {
        setTimeout(function () {
            if (app.isApp()) {
                $.isFunction(a.callback) && a.callback();
            } else {
                var _url = "tencent-daojucheng://webpage?url=" + encodeURIComponent(a.url);
                if (isWxApp()) {
                    WeixinJSBridge.invoke('launchApplication', {
                        "schemeUrl": _url //原始 scheme 链接
                    }, function (res) {
                        if (res.err_msg == "launchApplication:ok") {
                            //alert(res.err_msg);
                        } else if (res.err_msg == "launchApplication:fail") {
                            confirm("请下载掌上道聚城APP参与活动", function () {
                                location.href = location.protocol + "//app.daoju.qq.com/download/all.htm?ADTAG=" + a.ADTAG;
                            });
                        }
                    });
                } else {
                    util.getScript("//daoju.qq.com/app/js/url.js", function () {
                        if (milo.browser.android() || milo.browser.ios()) {
                            app.pingUrl(_url, function (b) {
                                if (b) {
                                    location.href = _url;
                                } else {
                                    confirm("请下载掌上道聚城APP参与活动", function () {
                                        location.href = location.protocol + "//app.daoju.qq.com/download/all.htm?ADTAG=" + a.ADTAG;
                                    });
                                }
                            });
                        } else {
                            alert("对不起，目前只支持安卓和ios道聚城app");
                        }
                    });
                }
            }
        }, 500);
    });
}

//判断微信app
function isWxApp() {
    return /MicroMessenger/gi.test(navigator.userAgent);
}

// 掌上道聚城
function isDjcApp() {
    return typeof HostApp != "undefined" || milo.cookie.get("djc_appVersion") != null;
}

//判断掌火
function isZhApp() {
    return /GameHelper_1001/.test(navigator.userAgent) || /cfapp/.test(navigator.userAgent);
}
//对连抽数据结果处理
function tenResult(iPackageIdCnt, sPackageName) {
    var idArr = iPackageIdCnt.substring(0, iPackageIdCnt.length - 1).split(",");
    var nameArr = sPackageName.split(",");
    var obj = [];

    $.each(idArr, function (k, v) {
        tmp = {
            id: v.split(":")[0],
            name: nameArr[k]
        }
        num = v.split(":")[1];
        for (var i = 0; i < num; i++) {
            obj.push(tmp)
        }
    })
    //console.log(obj)
    return obj;
}
