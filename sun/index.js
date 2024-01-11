isParam = {
    bizCode: 'cf',
    _ams_id: "610311",
    _act_id: "31367",
    acctype: "",
    userInfo: {},
    isLogin: 0,
    isBind: 0,
    propIdArr: {
        1: ["636238", "恭喜您成功购买复活币x1，赠送抽奖钥匙x1，同时赠送幻灵卡x1"],
        2: ["636241", "恭喜您成功购买复活币x10，赠送抽奖钥匙x11，同时赠送幻灵卡x10"],
        3: ["636237", "恭喜您成功购买复活币x1，赠送抽奖钥匙x1，同时赠送幻灵卡x1"]
    },
    personalLevelScore: {
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0,
    },
    groupLevelScore: {
        1: { personal: 0, group: 0 },
        2: { personal: 0, group: 0 },
        3: { personal: 0, group: 0 },
        4: { personal: 0, group: 0 },
        5: { personal: 0, group: 0 },
    },
    question: {
        '1': '',
        '2': '',
        '3': '',
        '4': '',
        '5': '',
        '6': '',
        '8': '',
        '9': '',
        '10': '',
        '11': '',
        '12': '',
    },
    pointData: {},
    holdData: {},
    teamScore: 0,
    myTeamMembers: 0,
    myTeamId: '',
};
//==================================== login ============================================================
var _share = {
    title: '隼击长空，幻灭神威',
    desc: '全新首发：隼，王者风神（非觉醒版），幻灵厂牌：M200-幻神，限时登场！',
    icon: 'https://game.gtimg.cn/images/appdaoju/act/a20231223cfvastsky/share.jpg',
    link: '//app.daoju.qq.com/act/a20231223cfvastsky/?plat_support=mqq',
};

milo.ready(function () {
    isH5 = location.hostname == "app.daoju.qq.com" ? true : false;
    isNei = milo.request('neiqian') != '' ? true : false;
    isParam.isH5 = location.hostname == "app.daoju.qq.com" ? true : false;
    isParam.isNei = milo.request('neiqian') != '' ? true : false;

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
    // 抽奖弹窗-单抽
    window.alert1 = function (iPackageId, callback) {
        var chouArr = chouGoods[iPackageId];
        $("#text5 .showAlert").html(chouArr[1]);
        TGDialogS('text5');
        typeof callback == "function" ? callback() : console.log("no callback");
    };
    // 抽奖弹窗-单抽
    window.alert2 = function (sMsg, callback) {
        $("#pop5 .showAlert").html(sMsg);
        TGDialogS('pop5');
        typeof callback == "function" ? callback() : console.log("no callback");
    };
    window.confirm = function (msg, callback, callback1, callback2) {
        need("util.modalDialog", function (Dialog) {
            Dialog.confirm(msg, {
                onConfirm: function () {
                    typeof callback == "function" ? callback() : console.log("no callback")
                },
                onCancel: function () {
                    typeof callback1 == "function" ? callback1() : console.log("no callback1")
                },
                onClose: function () {
                    typeof callback1 == "function" ? callback2() : console.log("no callback2")
                }
            });
        })
    };
    ACT.queryBroadcast(); // 数据轮播
    ACT.dologin();
    need("ams.daoju_buy_svr.appid", function (autoappid) {
        autoappid.init(isParam.bizCode, isParam._act_id, function (final_appid) {
            console.log("final_appid:" + final_appid);
            if (final_appid == 8888) {
                window["final_appid_" + isParam._act_id] = "1101";
            }
        });
    });
    setTimeout(function () {
        setShare();
    }, 500);
    if (!Milo.isMobile()) {
        $("#tunlogin a").attr("href", "javascript:userLogin();");
    }
});

//分享初始化
function setShare() {
    if (isH5) {
        need("daoju.ui.share", function (share) {
            if (typeof ek != "undefined") {
                //是腾讯动漫
                ek.share.setShare({
                    title: _share.title,
                    img_url: _share.icon,
                    desc: _share.desc,
                    link: _share.link,
                    callback: function () {
                        alert("分享成功！");
                    }
                });
            } else {
                //不是腾讯动漫
                share.setShare({
                    title: _share.title,
                    icon: _share.icon,
                    desc: _share.desc,
                    link: _share.link
                });
            }
        });
    }
}
// qq登录
$('#btn_qqlogin').click(function () {
    userLogin();
});
$("#dologout").click(function () {
    Milo.logout({
        callback: function () {
            isParam.userInfo = null
            isParam.isBind = false
            location.reload();
        }
    });
});

//判断微信app
function isWxApp() {
    return /MicroMessenger/gi.test(navigator.userAgent);
}

// 掌上道聚城
function isDjcApp() {
    return typeof HostApp != "undefined" || milo.cookie.get("djc_appVersion") != null;
}

//获得大区名称
function getAreaName(area) {
    return CFServerSelect.zoneToName(area)
}

function userLogin() {
    if (Milo.isMobile()) {
        Milo.mobileLoginByQQ();
    } else {
        Milo.loginByQQ();
    }
}

// 查询绑定大区
function queryBindArea() {
    var flow_query = {
        actId: isParam._ams_id,
        token: '8e106a',
        loading: true, // 开启loading浮层,默认不开启
        sData: {
            query: true
        },
        success: function (res) {
            // 上线前放开
            if (isParam.isNei && top.location == location) {
                var curHtmlUrl = window.location.href;
                if (curHtmlUrl.indexOf("hdnq.html") >= 0) {
                } else {
                    window.location.href = "https://cf.qq.com/act/a20160516ntclsacts/new_index.htm";
                }
            }
            if (res.data) {
                var data = res.data;
                var details = res.details;
                isParam.userInfo.sArea = data.area;
                isParam.userInfo.sRole = data.roleId;
                isParam.userInfo.areaName = data.areaName;
                isParam.userInfo.roleName = data.roleName;
                isParam.userInfo.uin = details.jData.bindarea.Fuin;

                console.log(isParam.userInfo);
                var areaName = decodeURIComponent(data.areaName);
                var iRoleName = decodeURIComponent(data.roleName);
                isParam.isBind = 1;

                $("#login_qq_span").text(details.jData.bindarea.Fuin);
                $('#unlogin').hide();
                $('#logined').show();
                $("#milo-binded").show();
                $("#milo-unbind").hide();
                $("#milo-areaName").text(areaName);
                $("#milo-roleName").text(iRoleName);
                // 头部
                // $("#tlogin_qq_span").text(details.jData.bindarea.Fuin);
                // $('#tunlogin').hide();
                // $('#tlogined').show();
                // $("#tlogined a").eq(1).attr("href","javascript:ACT.logout();");
                if (milo.request("team_id") != "") {
                    ACT.joinTeam();
                }
                //查询
                ACT.enter(1500);
                ACT.getRecommendTeams();
                ACT.groupRanking();
                ACT.personalRanking();

            } else {
                commitBindArea();
            }
        },
        fail: function (res) {
            ACT.fail(res);
        }
    };
    Milo.emit(flow_query);
}

// 提交绑定大区
function commitBindArea() {
    var flow_commit = {
        actId: isParam._ams_id,
        token: '62c336',
        loading: true, // 开启loading浮层,默认不开启
        sData: {
            query: false
        },
        success: function (res) {
            console.log('提交绑定大区', res);
            if (res.data) {
                // location.reload(true);
                var data = res.data;
                var details = res.details;

                isParam.userInfo.sArea = data.area;
                isParam.userInfo.sRole = data.roleId;
                isParam.userInfo.areaName = data.areaName;
                isParam.userInfo.roleName = data.roleName;
                isParam.userInfo.uin = details.jData.bindarea.Fuin;
                console.log(isParam.userInfo);
                var areaName = decodeURIComponent(data.areaName);
                var iRoleName = decodeURIComponent(data.roleName);
                isParam.isBind = 1;

                $("#userinfo").text(details.jData.bindarea.Fuin);
                $('#unlogin').hide();
                $('#logined').show();
                $("#milo-binded").show();
                $("#milo-unbind").hide();
                $("#milo-areaName").text(areaName);
                $("#milo-roleName").text(iRoleName);
                ACT.enter(1500);
            }
        },
        fail: function (res) {
            ACT.fail(res);
        }
    };
    Milo.emit(flow_commit);
}

function report(buttonType) {
    var page = ''
    var appid = ''
    if (isH5) {
        page = 'h5'
        appid = 1006
    } else {
        if (isNei) {
            page = 'nq'
            appid = 1101
        } else {
            page = 'pc'
            appid = 1003
        }
    }
    //tcss的
    var report_key = "DJC_cf_a20231223cfvastsky" + "." + page + '.' + buttonType;
    need("https://pingjs.qq.com/tcss.ping.https.js", function () {
        pgvSendClick({ hottag: report_key });
    });
    //明哥的
    if (typeof (isParam.userInfo.sRole) != 'undefined') {
        var openid = isParam.userInfo.sRole
        need('daoju.ping', function (ping) {
            ping.easReport({
                biz: 'cf',
                actid: isParam._act_id,
                appid: appid,
                ec: buttonType,
                openid: openid,
                vUrl: location.href
            });
        })
    }
}

//==================================== chou ============================================================
var ACT = {
    fail: function (res) {
        if (res.iRet === 101 || res.iRet === '101') {
            // 登录态失效，需要重新调登录方法
            userLogin();
        } else if (res.iRet === 99998 || res.iRet === '99998') {
            // 调用提交绑定大区方法
            queryBindArea();
        } else {
            alert(res.sMsg);
        }
    },
    dologin: function (call) {
        Milo.checkLogin({
            iUseQQConnect: false, //如果当前活动使用的互联登录,请将改参数设置true
            success: function (user) {
                $('#unlogin').hide();
                $('#logined').show();
                isParam.isLogin = 1;
                isParam.acctype = user.userInfo.acctype;
                if (isParam.isBind != 1) {
                    queryBindArea();
                    return;
                }
                $.isFunction(call) && call();
            },
            fail: function (res) {
                userLogin();
            }
        });
    },
    logout: function () {
        Milo.logout({
            callback: function () {
                isParam.userInfo = null
                isParam.isBind = false
                location.reload();
            }
        });
    },
    //绑定大区
    bind: function (call) {
        ACT.dologin(function () {
            if (isParam.userInfo.sArea > 0) {
                $.isFunction(call) && call();
            } else {
                queryBindArea();
            }
        });
    },
    //初始化查询
    enter: function (a) {
        ACT.bind(function () {
            setTimeout(function () {
                var flow_993684 = {
                    actId: isParam._ams_id,
                    token: 'e4f583',
                    loading: true,
                    sData: {},
                    success: function (res) {
                        var jData = res.details.jData;
                        console.log('初始化查询流水:' + res.sAmsSerial, res);
                        $.each(jData.sOutValue1, function (i, v) {
                            $('.jf_' + i).html(v.ticket);
                            isParam.pointData[i] = v.ticket;
                        });
                        isParam.djcCashCoupon = parseInt(jData.sOutValue4);
                        $(".cashCoupon").text(isParam.djcCashCoupon);// 代金券
                        // 团信息
                        isParam.teamScore = parseInt(jData.sOutValue2._team_score_sum);
                        $(".team_score").text('');
                        $(".team_num").text('');
                        $(".team_ranking").text('');
                        $('#my_team').val('');
                        if (jData.sOutValue2._iSecretTeamId && jData.sOutValue2._iSecretTeamId != 0) {
                            $('#my_team').val(jData.sOutValue2._iSecretTeamId);
                            $(".team_score").text(isParam.teamScore);
                            $(".team_num").text(parseInt(jData.sOutValue2._team_member_num));
                            $(".team_ranking").text(parseInt(jData.sOutValue2._team_rank) + 1);
                            isParam.myTeamMembers = jData.sOutValue2._team_member_num;
                            isParam.myTeamId = jData.sOutValue2._iSecretTeamId;
                        }
                        $('#team_info').html('');
                        var teamHtml = '';
                        $.each(jData.sOutValue2._teamInfoArr, function (i, v) {
                            teamHtml += '<div class="box6ct1polc5">' +
                                '<p>' + v.sNickName + '</p>\n' +
                                '<p>' + v.score + '</p>\n' +
                                '</div>'
                        });
                        $('#team_info').html(teamHtml);

                        // 资格处理
                        $.each(jData.sOutValue3, function (i, v) {
                            isParam.holdData[i] = parseInt(v.iLeftNum);
                        });
                        // 个人里程碑领取
                        $('#level_awards_personal .btn_lq1').removeClass('gray').text('点击领取');
                        $('#level_awards_personal .btn_lq1').each(function (index, obj) {
                            var j = index + 1;
                            if (isParam.holdData['hold_level_awards_personal_' + j] < 1) {
                                $(obj).addClass('gray').text('已领取');
                            }
                        });
                        // 团里程碑领取
                        $('#level_awards_group .btn_lq1').removeClass('gray').text('点击领取');
                        $('#level_awards_group .btn_lq1').each(function (index, obj) {
                            var j = index + 1;
                            if (isParam.holdData['hold_level_awards_group_' + j] < 1) {
                                $(obj).addClass('gray').text('已领取');
                            }
                        });
                        // 团排行领取
                        $('#group_ranking .btn_awards').removeClass('gray');
                        $('#group_ranking .btn_awards').each(function (index, obj) {
                            var j = index + 1;
                            if (isParam.holdData['hold_group_ranking_awards_' + j] < 1) {
                                $(obj).addClass('gray').text('已领取');
                            }
                        });
                        // 个人排行领取
                        $('#personal_ranking .btn_awards').removeClass('gray');
                        $('#personal_ranking .btn_awards').each(function (index, obj) {
                            var j = index + 1;
                            if (isParam.holdData['hold_personal_ranking_awards_' + j] < 1) {
                                $(obj).addClass('gray').text('已领取');
                            }
                        });
                        // 问卷反馈填写、领取问卷奖励
                        $('.btnFeedBack').removeClass('gray').attr('href', 'javascript:alert(\'【请先参与本次活动】\')');
                        $('.btnLqFeedBack').removeClass('gray').attr('href', 'javascript:ACT.amsLqFeedBack();');
                        if (isParam.pointData[6137] > 0) {
                            if (isParam.holdData['hold_dj_fk'] > 0) {
                                $('.btnFeedBack').removeClass('gray').attr('href', 'javascript:TGDialogS(\'text12\')')
                            } else {
                                $('.btnFeedBack').addClass('gray').attr('href', 'javascript:;')
                            }
                            if (isParam.holdData['hold_dj_fk_gift'] < 1) {
                                $('.btnLqFeedBack').addClass('gray').attr('href', 'javascript:void(0);');
                            }
                        }
                    },
                    fail: function (res) {
                        console.log('enter failed', res);
                    }
                };
                Milo.emit(flow_993684);
            }, a || 2000);
        })
    },
    //购买
    amsBuy: function (type) {
        ACT.bind(function () {
            var flowId, token;
            var jifen_dikou = 0;
            var user_price = 0;
            var jifen_amount = 0;
            if (type == 3) { // 抵扣购买
                if (isParam.djcCashCoupon >= 9) {
                    user_price = 100;
                    jifen_amount = 9;
                    jifen_dikou = 1;
                } else if (isParam.djcCashCoupon >= 1) {
                    user_price = 1000 - isParam.djcCashCoupon * 100;
                    jifen_amount = isParam.djcCashCoupon;
                    jifen_dikou = 1;
                }
            } else { // 普通购买
                jifen_dikou = 0;
                jifen_amount = 0;
            }
            var cut_price = { user_price: user_price };
            window["flow_255936"] = {
                actId: isParam._ams_id,
                token: 'f882cb',
                sData: {
                    appext: encodeURI(JSON.stringify(cut_price)),
                    propid: isParam.propIdArr[type][0],
                    gameId: isParam.bizCode, // 业务简称
                    buyType: type,
                    jifen_dikou: jifen_dikou, // 是否使用积分抵扣1是 0否
                    jifen_amount: jifen_amount, // 用户传入的积分抵扣数量
                    djcActId: isParam._act_id, // 道聚城活动id
                    paytype: 2, // 1：点券 2：人民币 3：金币 4：点券+金币 5：金币2
                },
                // 支付弹框关闭回调
                onPayClose: function () {
                },
                success: function (res) {
                    console.log("购买成功信息：", res);
                    ACT.enter(2000);
                },
                fail: function (res) {
                    console.log("购买错误信息流水：", res);
                    alert(res.sMsg);
                    // alert(JSON.stringify(res));
                }
            };
            if (type == 3) {
                confirm('您确定抵扣购买吗？', function () {
                    Milo.emit(window["flow_255936"]);
                });
            } else {
                Milo.emit(window["flow_255936"]);
            }
        });
    },

    // 抽奖
    amsChou: function (type) {
        ACT.bind(function () {
            if (type == 1 && isParam.pointData[6131] < 1) {
                return alert('抱歉，您的钥匙不足。');
            }
            if (type == 2 && isParam.pointData[6131] < 10) {
                return alert('抱歉，您的钥匙不足。');
            }
            var flow_lottery = {
                actId: isParam._ams_id,
                token: '92224c',
                sData: {
                    chouType: type
                },
                success: function (res) {
                    if (res.details.jData.chouType == 10) {
                        var html = "";
                        var info, ids;
                        var packageArr = res.details.jData.iPackageId.split(",");
                        $.each(packageArr, function (index, value) {
                            ids = value.split(":");
                            info = chouGoods[ids[0]]; // "4744460": [10, "白虎-霓虹机甲 皮肤"],
                            if (ids.length > 1) {
                                for (let i = 0; i < ids[1]; i++) {
                                    html += '<li><p>' + info[1] + '</p></li>';
                                }
                            } else {
                                html += '<li><p>' + info[1] + '</p></li>';
                            }
                        });
                        $('#text4 #showChouList').html("");
                        $('#text4 #showChouList').html(html);
                        TGDialogS('text4');
                    } else {
                        alert1(res.details.jData.iPackageId);
                    }
                    ACT.enter();
                },
                fail: function (res) {
                    ACT.fail(res);
                }
            };
            Milo.emit(flow_lottery);
        })
    },
    // 抽幻灵卡
    amsHlCardLottery: function (type) {
        if (type == 1 && isParam.pointData[6132] < 1) {
            return alert('抱歉，您的幻灵卡不足。');
        }
        if (type == 2 && isParam.pointData[6132] < 10) {
            return alert('抱歉，您的幻灵卡不足。');
        }

        ACT.bind(function () {
            var flow_lottery = {
                actId: isParam._ams_id,
                token: 'fb60fa',
                sData: {
                    chouType: type
                },
                success: function (res) {
                    if (res.details.jData.chouType == 10) {
                        var html = "";
                        var info, ids;
                        var packageArr = res.details.jData.iPackageId.split(",");
                        $.each(packageArr, function (index, value) {
                            ids = value.split(":");
                            info = chouGoods[ids[0]]; // "4744460": [10, "白虎-霓虹机甲 皮肤"],
                            if (ids.length > 1) {
                                for (let i = 0; i < ids[1]; i++) {
                                    html += '<li><p>' + info[1] + '</p></li>';
                                }
                            } else {
                                html += '<li><p>' + info[1] + '</p></li>';
                            }
                        });
                        $('#text4 #showChouList').html("");
                        $('#text4 #showChouList').html(html);
                        TGDialogS('text4');
                    } else {
                        alert1(res.details.jData.iPackageId);
                    }
                    ACT.enter();
                    ACT.personalRanking();
                    ACT.groupRanking();
                },
                fail: function (res) {
                    ACT.fail(res);
                }
            };
            Milo.emit(flow_lottery);
        })
    },

    // 特权
    amsTq: function () {
        ACT.bind(function () {
            if (isParam.pointData[6133] < 1) {
                return alert('抱歉，您还未在掌上道聚城购买礼包。');
            }
            if (isParam.holdData['hold_tequan'] < 1) {
                return alert(' 抱歉，你已领取此礼包。');
            }
            var flow_999791 = {
                actId: isParam._ams_id,
                token: 'f088c4',
                sData: {},
                success: function (res) {
                    console.log("amsTq res", res);
                    alert(res.sMsg);
                    ACT.enter(1000);
                },
                fail: function (res) {
                    ACT.fail(res);
                }
            };
            Milo.emit(flow_999791);
        });
    },
    // 积分兑换
    amsExchange: function (hid) {
        ACT.bind(function () {
            var hidArr = exchangeArr[hid];
            // if (isParam.pointData[6134] < hidArr[0]) {
            //     return alert('抱歉，您的兑换积分不足。');
            // }
            confirm("您确定消耗【兑换积分x" + hidArr[0] + "】兑换【" + hidArr[1] + "】吗", function () {
                var flow_exchange = {
                    actId: isParam._ams_id,
                    token: '70c97d',
                    sData: {
                        hid: hid
                    },
                    success: function (res) {
                        console.log(res);
                        alert(res.sMsg);
                        ACT.enter();
                    },
                    fail: function (res) {
                        ACT.fail(res);
                    }
                };
                Milo.emit(flow_exchange);
            });
        });
    },
    // 暂存箱领取
    amsZanQu: function (zid, packageName) {
        ACT.bind(function () {
            var flow_993727 = {
                actId: isParam._ams_id,
                token: '5759c4',
                sData: {
                    zid: zid
                },
                success: function (res) {
                    closeDialog();
                    alert(res.sMsg);
                    ACT.enter();
                },
                fail: function (res) {
                    ACT.fail(res);
                }
            };
            confirm('您确定领取【' + packageName + '】到【' + isParam.userInfo.areaName + '】下的【' + isParam.userInfo.roleName + '】吗？', function () {
                Milo.emit(flow_993727);
            });
        });
    },
    // 暂存箱分解
    amsZanFen: function (zid, packageName, key) {
        ACT.bind(function () {
            var flow_993728 = {
                actId: isParam._ams_id,
                token: '61c248',
                sData: {
                    zid: zid
                },
                success: function (res) {
                    closeDialog();
                    var msg = "恭喜您获得了礼包： 钥匙x" + res.details.jData.num;
                    alert(msg);
                    ACT.enter();
                },
                fail: function (res) {
                    ACT.fail(res);
                }
            };
            confirm("您确定分解【" + packageName + "】 获得 【钥匙x" + key + "】 吗？", function () {
                Milo.emit(flow_993728);
            });
        });
    },
    // 个人获奖记录初始化
    amsHistoryList: function (pageNow, status, type) {
        ACT.bind(function () {
            var pageSize = 10;
            var flow_993723 = {
                actId: isParam._ams_id,
                token: 'b791e3',
                loading: true, // 开启loading浮层,默认不开启
                sData: {
                    pageNow: pageNow,
                    pageSize: pageSize,
                    type: type
                },
                success: function (res) {
                    console.log('amsHistoryList success', res)
                    var data = res.data;
                    ACT.nowPage = parseInt(res.details.jData.lottery.history.result.pageNow);
                    ACT.totalPage = parseInt(res.details.jData.lottery.history.result.pageTotal);
                    ACT.totalPage = ACT.totalPage > 0 ? ACT.totalPage : 1;
                    $('.nowPage').html(ACT.nowPage);
                    $('.totalPage').html(ACT.totalPage);

                    // 内容渲染
                    var html = '';
                    if (type == 2) { // 暂存箱
                        if (data.length > 0) {
                            $.each(data, function (index, value) {
                                var pkid = chouGoods[value.iPackageId][0];
                                if (value.iStatus == 3) {
                                    html += '<tr data-id="' + value.id + '" data-name="' + value.sPackageName + '" data-item="' + value.iPackageId + '">';
                                    html += '<td width="40%">' + value.sPackageName + '</td>';
                                    html += '<td width="30%"><a class="btn_pop_fun" ' +
                                        ' href="javascript:ACT.amsZanQu(' + value.id + ",'" + value.sPackageName + "'" + ');">[领取]</a></td>';
                                    html += '<td width="30%"><a class="btn_pop_fun" id="__' + value.id + '" href="javascript:ACT.amsZanFen('
                                        + value.id + ",'" + value.sPackageName + "','" + pkid + "'" + ');">[分解]</a></td>';
                                } else if (value.sExtend2 == 2) {
                                    html += '<tr>';
                                    html += '<td width="40%">' + value.sPackageName + '</td>';
                                    html += '<td width="30%"><a href="javascript:void(0);" class="btn_pop_handle" id="__' + value.id + '">X</a></td>';
                                    html += '<td width="30%"><a href="javascript:void(0);" class="btn_pop_handle" id="__' + value.id + '">已分解</a></td>';
                                } else if (value.sExtend2 == 1) {
                                    html += '<tr>';
                                    html += '<td width="40%">' + value.sPackageName + '</td>';
                                    html += '<td width="30%"><a href="javascript:void(0);" class="btn_pop_handle" id="__' + value.id + '">已领取</a></td>';
                                    html += '<td width="30%"><a href="javascript:void(0);" class="btn_pop_handle" id="__' + value.id + '">X</a></td>';
                                } else {
                                    html += '<tr>';
                                    html += '<td width="40%">' + value.sPackageName + '</td>';
                                    html += '<td width="30%"><a href="javascript:void(0);" class="btn_pop_handle" id="__' + value.id + '">X</a></td>';
                                    html += '<td width="30%"><a href="javascript:void(0);" class="btn_pop_handle" id="__' + value.id + '">X</a></td>';
                                }
                                html += '</tr>';
                            });
                        } else {
                            html = "<tr><td colspan='3' style='text-align:center;'>抱歉，您尚未获得任何礼包</td></tr>";
                        }
                        $('#getGiftContent2').html(html);
                        if (status == 1) TGDialogS('text2');
                    } else { // 获奖记录
                        if (data.length > 0) {
                            $.each(data, function (index, value) {
                                //     iId,sUin,iType,createTime,sLunNum
                                html += '<tr>';
                                html += '<td style="width: 35%;">' + value.dtGetPackageTime + '</td>';
                                html += '<td style="width: 25%;">' + value.sAreaName + '</td>';
                                html += '<td>' + value.sPackageName + '</td>';
                                html += '</tr>';
                            });
                        } else {
                            html = "<tr><td colspan='3'>抱歉，您尚未获得任何礼包</td></tr>";
                        }
                        $('#getGiftContent1').html(html);
                        if (status == 1) TGDialogS('text3');
                    }
                },
                fail: function (res) {
                    console.log('amsHistoryList', res)
                    ACT.fail(res);
                }
            };
            // 用于处理分页的变化
            if (pageNow) {
                flow_993723.sData.pageNow = pageNow;
            }
            Milo.emit(flow_993723);
        });
    },
    // 上一页
    lastPage: function (type) {
        if (ACT.nowPage > 1) {
            ACT.amsHistoryList(ACT.nowPage - 1, 2, type);
        }
    },
    // 下一页
    nextPage: function (type) {
        if (ACT.nowPage < ACT.totalPage) {
            ACT.amsHistoryList(ACT.nowPage + 1, 2, type);
        }
    },
    // 抽奖轮播功能初始化
    queryBroadcast: function () {
        console.log('抽奖轮播')
        var flow_broadcast = {
            actId: isParam._ams_id,
            token: '9d7015',
            loading: true, // 开启loading浮层,默认不开启
            time: 50, // 轮播时间
            sData: {
                // query: false
            },
            success: function (res) {
                console.log('查询轮播success', res);
            },
            fail: function (res) {
                console.log('查询轮播fail', res);
            }
        }
        Milo.emit(flow_broadcast);
    },
    // 领取问卷奖励
    amsLqFeedBack: function () {
        var flow = {
            actId: isParam._ams_id,
            token: '306722',
            loading: true, // 开启loading浮层,默认不开启
            sData: {},
            success: function (res) {
                console.log(res);
                callbackObj = res.details.jData;
                alert(callbackObj.sMsg);
                ACT.enter(1000);
            },
            fail: function (res) {
                ACT.fail(res)
            }
        }
        Milo.emit(flow);
        report('amsLqFeedBack')
    },

    //问卷填写结果提交
    amsFeedBack: function () {
        //验证
        if ($.inArray(isParam.question["1"], [1, 2, 3, 4, 5]) == -1) {
            alert("请选择您对《隼击长空，幻灭神威》活动的满意度");
            return;
        }

        if ($.inArray(isParam.question["2"], [1, -1]) == -1) {
            alert("请选择您认为本次活动的玩法是否有创新");
            return;
        }

        if ($.inArray(isParam.question["3"], [1, -1]) == -1) {
            alert("请选择本次活动奖池内是否有您想要的道具");
            return;
        }

        if ($.inArray(isParam.question["4"], [1, -1]) == -1) {
            alert("请选择您是否获得了想要的道具");
            return;
        }

        if (isParam.question["5"] == '') {
            alert("请填写您最想要本次活动中哪些道具");
            return;
        }

        if ($.inArray(isParam.question["6"], [1, 2, 3, 4, 5]) == -1) {
            alert("请选择您对本次活动首发的全新道具【隼】的满意度");
            return;
        }

        if ($.inArray(isParam.question["7"], [1, 2, 3, 4, 5]) == -1) {
            alert("请选择您对本次活动限时返场道具【M200-幻神】的满意度");
            return;
        }

        if ($.inArray(isParam.question["8"], [1, 2, 3, 4, 5]) == -1) {
            alert("请选择您对本次活动限时返场道具【幻神-周瑜 皮肤兑换券】的满意度");
            return;
        }

        if ($.inArray(isParam.question["9"], [1, 2, 3, 4, 5]) == -1) {
            alert("请选择您对本次活动限时返场道具【灵狐者-职业经理】的满意度");
            return;
        }

        if ($.inArray(isParam.question["10"], [1, 2, 3, 4, 5]) == -1) {
            alert("请选择您对本次活动首发的全新道具【M200-幻神紫橙光效】的满意度");
            return;
        }

        //来源
        if ($.inArray(isParam.question["11"], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) == -1) {
            alert("请选择您是从哪里获知本次活动的消息");
            return;
        }
        var question11_text = ''
        if (isParam.question["11"] == 10) {
            question11_text = $('#question11_text').val()
        } else {
            question11_text = ['掌上穿越火线', '贴吧/论坛/QQ群', '官网', 'Wegame广告', '游戏内活动中心', '视频平台，如B站、抖音、快手', '官方微信和官方微博', '朋友分享', '直播平台，如虎牙、斗鱼', '其他（请填写）'][isParam.question["11"] - 1]
        }
        console.log("question11_text", question11_text);
        if (question11_text == '') {
            alert("请填写您是从哪里获知本次活动的消息");
            return;
        }

        if (question11_text.length > 50) {
            console.log("question11_text", question11_text);
            alert("获知本次活动的消息来源过长，请重新填写");
            return;
        }
        isParam.question["12"] = $('#question12_text').val()

        if (isParam.question["12"].length > 300) {
            alert("建议或意见过长，请重新填写");
            return;
        }

        //实际提交
        var flow = {
            actId: isParam._ams_id,
            token: 'd09981',
            loading: true, // 开启loading浮层,默认不开启
            sData: {
                iQuestion1: isParam.question["1"],
                iQuestion2: isParam.question["2"],
                iQuestion3: isParam.question["3"],
                iQuestion4: isParam.question["4"],
                sQuestion5: isParam.question["5"],
                iQuestion6: isParam.question["6"],
                iQuestion7: isParam.question["7"],
                iQuestion8: isParam.question["8"],
                iQuestion9: isParam.question["9"],
                iQuestion10: isParam.question["10"],
                sQuestion11: encodeURIComponent(question11_text),
                sQuestion12: encodeURIComponent(isParam.question["12"]),
            },
            success: function (res) {
                console.log(res);
                callbackObj = res.details.jData
                alert("反馈成功~");
                ACT.enter(1000);
            },
            fail: function (res) {
                console.log('feedBack failed', res)
                ACT.fail(res)
            }
        }
        Milo.emit(flow);
        report('amsFeedBack')

    },
    // 创建团
    createTeam: function () {
        ACT.bind(function () {
            var flow = {
                actId: isParam._ams_id,
                token: 'b38e6b',
                sData: {
                },
                success: function (res) {
                    alert(res.sMsg);
                    ACT.enter();
                    console.log('创建团', res);
                },
                fail: function (res) {
                    console.log('创建团失败', res);
                    ACT.fail(res);
                }
            };
            Milo.emit(flow);
        })
    },
    // 加入团
    joinTeam: function (teamId) {
        console.log('====', milo.request('team_id'));
        if (!teamId) {
            teamId = milo.request('team_id') || $('#team-id').val();
        }
        if (!teamId) {
            return alert('抱歉，请输入您想要加入的团邀请码');
        }

        ACT.bind(function () {
            var flow = {
                actId: isParam._ams_id,
                token: 'f54988',
                sData: {
                    teamId: teamId,
                },
                success: function (res) {
                    alert(res.sMsg);
                    ACT.enter();
                    console.log('加入团', res);
                },
                fail: function (res) {
                    console.log('加入团', res);
                    ACT.fail(res);
                }
            };
            Milo.emit(flow);
        })
    },
    // 退出团
    quitTeam: function () {
        ACT.bind(function () {
            var flow = {
                actId: isParam._ams_id,
                token: '8bc19e',
                sData: {
                },
                success: function (res) {
                    alert(res.sMsg);
                    ACT.enter();
                    console.log('退出团', res);
                },
                fail: function (res) {
                    console.log('退出团', res);
                    ACT.fail(res);
                }
            };
            Milo.emit(flow);
        })
    },
    // 成为推荐团
    recommendTeam: function () {
        ACT.bind(function () {
            var flow = {
                actId: isParam._ams_id,
                token: '67f91c',
                sData: {
                },
                success: function (res) {
                    console.log('成为推荐团====', res);
                    alert(res.sMsg);
                    ACT.getRecommendTeams();
                },
                fail: function (res) {
                    console.log('成为推荐团失败', res);
                    if (res.iRet == '-530208') {
                        alert('该团已经被推荐了哦~');
                    } else {
                        ACT.fail(res);
                    }
                }
            };
            Milo.emit(flow);
        })
    },
    // 推荐团列表
    getRecommendTeams: function () {
        var flow = {
            actId: isParam._ams_id,
            token: 'd1adfb',
            sData: {
            },
            success: function (res) {
                console.log('推荐团列表', res);
                $('#recommend_teams').html('');
                if (res.details.iRet != 0) {
                    return;
                }
                var recommendTeams = res.details.jData.teams;
                var recommendHtml = '';
                recommendTeams.forEach((item) => {
                    recommendHtml += `<div class="box6ct1polc2">
                            <p>${item}</p>
                            <a href="javascript:ACT.joinTeam('${item}');" class="sp" onclick="PTTSendClick('btn','btnsq1','申请入队');">申请入队</a>
                            </div>`;
                });
                $('#recommend_teams').html(recommendHtml);
            },
            fail: function (res) {
                console.log('获取推荐团列表失败', res);
                ACT.fail(res);
            }
        };
        Milo.emit(flow);
    },
    // 个人排行榜
    personalRanking: function () {
        var flow = {
            actId: isParam._ams_id,
            token: '0f41ce',
            sData: {
            },
            success: function (res) {
                console.log('个人排行榜', res);
                if (res.details.iRet != 0) {
                    return;
                }
                let tpl_html = $("#personal_ranking_template").html();
                // 渲染数据
                var _html = Milo.tpl().compile(tpl_html, res.details.jData.teams.rankRange);
                $('.my_ranking').text('XXX');
                if (res.details.jData.teams.rankScore > 0) {
                    $('.my_ranking').text(parseInt(res.details.jData.teams.rankSort) + 1);
                }
                $("#personal_ranking_box").html(_html);
            },
            fail: function (res) {
                console.log('获取个人排行榜失败', res);
                ACT.fail(res);
            }
        };
        Milo.emit(flow);
    },
    // 团队排行榜
    groupRanking: function () {
        var flow = {
            actId: isParam._ams_id,
            token: 'ddc506',
            sData: {
                pageSize: 50,
                pageNum: 1,
            },
            success: function (res) {
                console.log('团队排行榜===', res);
                if (res.details.iRet != 0) {
                    return;
                }
                let tpl_html = $("#group_ranking_template").html();
                // 渲染数据
                var _html = Milo.tpl().compile(tpl_html, res.details.jData.teams._team_list);
                $("#group_ranking_box").html(_html);
            },
            fail: function (res) {
                console.log('获取团队排行榜失败', res);
                ACT.fail(res);
            }
        };
        Milo.emit(flow);
    },
};
//	复制
var clipboard = new ClipboardJS('.btncopy');
clipboard.on('success', function (e) {
    if ($('#my_team').val() != 'xxxxxx' && $('#my_team').val()) {
        alert('邀请码复制成功，去粘贴看看！');
    } else {
        alert('您还没有邀请码');
    }
    e.clearSelection();
});

//================================问卷 start =========================================
/**
 *
 * @param item  1-5
 */
function select_question1(order, item) {
    var width = [8, 29, 50, 71, 100][item - 1]
    $('.question' + order + '_progress').css('width', width + '%')
    $('.question' + order + '_btn').removeClass('cur')
    for (var i = 1; i <= 5; i++) {
        if (i <= item) {
            $('.question' + order + '_btn_' + i).addClass('cur')
        }
    }
    isParam.question[order] = item
}

/**
 *
 * @param item  1,-1
 */
function select_question2(order, item) {
    $('.question' + order + '_btn').removeClass('cur')
    $('.question' + order + '_btn_' + item).addClass('cur')
    isParam.question[order] = item
}

/**
 *
 * @param item  1-25
 */
function select_question3(item) {
    //初始化参数：问卷互斥选项id
    var order = 5
    var diffItem = 23
    var max = 5
    //
    var dom = $('.question' + order + '_btn_' + item)
    var domDiff = $('.question' + order + '_btn_' + diffItem)
    if (dom.hasClass('cur')) {
        //通用-去选项
        dom.removeClass('cur')
    } else {
        //增加选择
        if (item == diffItem) {
            //选择互斥选项
            $('.question' + order + '_btn').removeClass('cur')
            dom.addClass('cur')
        } else {
            domDiff.removeClass('cur')
            var len = isParam.question[order].split('|').length
            if (len >= max) {
                alert('最多选择5个')
            } else {
                dom.addClass('cur')
            }
        }
    }
    getManySelect(order, diffItem)
}

function getManySelect(order, diffItem) {
    isParam.question[order] = ''
    var arr = []
    for (var i = 1; i <= diffItem; i++) {
        var dom = $('.question' + order + '_btn_' + i)
        if (dom.hasClass('cur')) {
            arr.push(i)
        }
    }
    isParam.question[order] = arr.join('|')
}

//问卷选择切换==========================================================end


//============================================= fun ==================================================
//道聚城app判断
function isDJApp() {
    var result = milo.cookie.get("djc_appVersion") != null || typeof HostApp != 'undefined' || milo.request("djc_appVersion");
    return result;
}

//判断ios
function isIOS() {
    var u = navigator.userAgent;
    var result = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
    return result;
}

// 个人幻灵值里程碑领取
$('#level_awards_personal').on('click', '.btn_lq1', function () {
    var level = $(this).attr('data-id');
    if (isParam.holdData['hold_level_awards_personal_' + level] < 1) {
        return
    }
    if (isParam.pointData[6135] < isParam.personalLevelScore[level]) {
        return alert('抱歉，您的幻灵值不足。');
    }
    ACT.bind(function () {
        var flow = {
            actId: isParam._ams_id,
            token: '8e4fde',
            sData: {
                level: level
            },
            success: function (res) {
                alert(res.sMsg);
                ACT.enter();
                console.log('个人幻灵值里程碑领取', res);
            },
            fail: function (res) {
                console.log('个人幻灵值里程碑领取失败', res);
                ACT.fail(res);
            }
        };
        Milo.emit(flow);
    })
})

// 团队幻灵值里程碑领取
$('#level_awards_group').on('click', '.btn_lq1', function () {
    var level = $(this).attr('data-id');
    if (isParam.holdData['hold_level_awards_group_' + level] < 1) {
        return
    }
    if (isParam.myTeamMembers < 2) {

    }
    if (isParam.pointData[6135] < isParam.groupLevelScore[level].personal) {
        return alert('抱歉，您的个人幻灵值不足。');
    }
    if (isParam.teamScore < isParam.groupLevelScore[level].group) {
        return alert('抱歉，您的团队幻灵值不足。');
    }
    ACT.bind(function () {
        var flow = {
            actId: isParam._ams_id,
            token: 'd08cd9',
            sData: {
                level: level
            },
            success: function (res) {
                alert(res.sMsg);
                ACT.enter();
                console.log('团队幻灵值里程碑领取', res);
            },
            fail: function (res) {
                console.log('团队幻灵值里程碑领取失败', res);
                ACT.fail(res);
            }
        };
        Milo.emit(flow);
    })
})

// 团队排行榜奖励领取
$('#group_ranking').on('click', '.btn_awards', function () {
    var level = $(this).attr('data-id');
    if (isParam.holdData['hold_group_ranking_awards_' + level] < 1) {
        return
    }
    ACT.bind(function () {
        var flow = {
            actId: isParam._ams_id,
            token: '046cb4',
            sData: {
                level: level
            },
            success: function (res) {
                alert(res.sMsg);
                ACT.enter();
                console.log('团队排行榜奖励领取', res);
            },
            fail: function (res) {
                console.log('团队排行榜奖励领取失败', res);
                ACT.fail(res);
            }
        };
        Milo.emit(flow);
    })
})

// 个人排行榜奖励领取
$('#personal_ranking').on('click', '.btn_awards', function () {
    var level = $(this).attr('data-id');
    if (isParam.holdData['hold_personal_ranking_awards_' + level] < 1) {
        return;
    }
    ACT.bind(function () {
        var flow = {
            actId: isParam._ams_id,
            token: 'f144e1',
            sData: {
                level: level
            },
            success: function (res) {
                alert(res.sMsg);
                ACT.enter();
                console.log('个人排行榜奖励领取', res);
            },
            fail: function (res) {
                console.log('个人排行榜奖励领取失败', res);
                ACT.fail(res);
            }
        };
        Milo.emit(flow);
    })
})