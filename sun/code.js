
var keys = 0, jf = 0, hlz = 0, hlzt = 0, hlk = 0;//钥匙 积分 个人幻灵值 团队幻灵值 幻灵卡
var itemsX = [];
const items_b = [0];//看是否发送或分解 0无 1发送 2分解
var pagesid = 1, totalPagesX = 1;//当前页 总页数




function drawLottery(x, prizes, PZX) {//x-抽奖次数 prizes-奖品列表 PZX-暂存箱列表


    // 定义一个空数组，用于存储抽中的物品
    const selectedItems = [];

    // 计算所有奖品的总概率
    const totalProbability = prizes.reduce((total, prize) => total + prize.probability, 0);

    // 循环抽奖次数
    for (let i = 0; i < x; i++) {
        // 生成一个随机概率值
        const randomProbability = Math.random() * totalProbability;

        // 初始化当前概率和选中的物品
        let currentProbability = 0;
        let selectedItem = null;

        // 遍历奖品列表，根据随机概率值确定选中的物品
        for (const prize of prizes) {
            currentProbability += prize.probability;
            if (randomProbability <= currentProbability) {
                selectedItem = prize.name;
                //注意修改
                if (selectedItem.substring(0, 3) == '积分x') { jf += parseInt(selectedItem.match(/\d+(\.\d+)?/g)[0]); }
                if (selectedItem.substring(0, 4) == '幻灵值x') { hlz += parseInt(selectedItem.match(/\d+(\.\d+)?/g)[0]); }
                //其他积分加成
                break;
            }
        }
        //进入暂存箱
        for (var j = 0; j < PZX.length; j++) {
            if (selectedItem == PZX[j]) {
                addzc(selectedItem);
                break;
            }
        }

        // 将选中的物品添加到数组中

        selectedItems.push(selectedItem);
    }
    showPopup(selectedItems);

    // 调用显示函数，展示抽中的物品
    /*
    if (x == 1) {
        newshowPopup(selectedItems, 'jlname');//注意修改
        showpages("popdc");//注意修改
    }
    else {
        newshowPopup(selectedItems, 'choulist');//注意修改
        showpages("popJl");//注意修改
    }官方还没有写出来*/

    //showPopup(selectedItems);
}
function showPopup(items) {
    // 显示遮罩和弹窗
    document.getElementById('overlay').style.display = 'block';
    document.getElementById('popup').style.display = 'block';

    // 在弹窗中显示抽中的物品
    const itemList = document.getElementById('prizeList');
    itemList.innerHTML = ''; // 清空之前的内容

    items.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = item;
        itemList.appendChild(listItem);
    });
}
function hidePopup() {
    // 隐藏遮罩和弹窗
    document.getElementById('overlay').style.display = 'none';
    document.getElementById('popup').style.display = 'none';
}
function hidePopup1() {
    // 隐藏遮罩和弹窗
    document.getElementById('overlay1').style.display = 'none';
    document.getElementById('popup1').style.display = 'none';
}

function showpages(st) {//展示弹窗
    // 获取弹窗元素
    var popup = document.getElementById(st);

    // 设置弹窗可见性
    if (popup) {
        popup.style.visibility = "visible";
    }
}
function hiddenpages(st) {//隐藏弹窗
    // 获取弹窗元素
    var popup = document.getElementById(st);

    // 设置弹窗可见性
    if (popup)
        popup.style.visibility = "hidden";
}


function newshowPopup(items, id) {//id是看展示页面是什么就写什么  领奖页面
    var choulistDiv = document.getElementById(id);

    // Clear previous content in choulistDiv
    choulistDiv.innerHTML = '';

    // Loop through items and append each one in <p> tags to choulistDiv
    items.forEach(function (item) {
        var pElement = document.createElement('p');
        pElement.textContent = item;
        choulistDiv.appendChild(pElement);
    });
}


function showGiftContent(items, currentPage) {
    pagesid = currentPage;
    updateDisplay('now', pagesid);
    var container = document.getElementById('showMyGiftContent2');
    var tableContainer = document.getElementById('getGiftContent2');

    // 清空现有内容
    tableContainer.innerHTML = '';

    var itemsPerPage = 4;
    var totalPages = Math.ceil(items.length / itemsPerPage);

    totalPagesX = Math.max(1, totalPages);
    updateDisplay('total', totalPagesX);






    var start = (currentPage - 1) * itemsPerPage;
    var end = Math.min(start + itemsPerPage, items.length);

    for (var i = start; i < end; i++) {
        // 创建表格行和单元格
        var row = document.createElement('tr');
        var itemNameCell = document.createElement('th');
        itemNameCell.style.width = '118px';  // 设置宽度
        row.appendChild(itemNameCell);
        itemNameCell.textContent = items[i];
        var receiveItemCell = document.createElement('th');
        receiveItemCell.style.width = '127px';  // 设置宽度
        row.appendChild(receiveItemCell);
        var decomposeItemCell = document.createElement('th');
        row.appendChild(decomposeItemCell);

        if (items_b[i] == 0) {
            receiveItemCell.innerHTML = '<a href="javascript:fs(' + (i) + ');" style="color: white;">[发送]</a>';
            decomposeItemCell.innerHTML = '<a href="javascript:fj(' + (i) + ');" style="color: white;">[分解]</a>';
        } else if (items_b[i] == 1) {
            receiveItemCell.innerHTML = '<a href="javascript:void();" style="color: white;">[已发送]</a>';
            decomposeItemCell.innerHTML = '<a href="javascript:void();" style="color: white;">[分解]</a>';
        } else if (items_b[i] == 2) {
            receiveItemCell.innerHTML = '<a href="javascript:void();" style="color: white;">[发送]</a>';
            decomposeItemCell.innerHTML = '<a href="javascript:void();" style="color: white;">[已分解]</a>';
        }

        // 将行添加到tableContainer
        tableContainer.appendChild(row);

    }
}

function fs(id) {
    alert('【' + itemsX[id] + '】' + '已发送到仓库');
    items_b[id] = 1;
    showGiftContent(itemsX, pagesid);
}

function fj(id) {
    const sitem = [
        ['王者风神（非觉醒版）', 12],
        ['M200-幻神', 10],
        ['隼', 10],
        ['灵狐者-职业经理', 8],
        ['Barrett-极光音效卡（不可交易）', 6],
        ['炫金毁灭', 6],
        ['M4A1-青龙', 4],
        ['AK47-黑鲨', 4],
        ['M200-幻神紫橙光效（不可交易）', 2],
        ['天使灵狐玩偶', 1]
    ];
    const sitemMap = new Map(sitem);

    alert('【' + itemsX[id] + '】' + '分解成功获得钥匙*' + sitemMap.get(itemsX[id]));
    keys += sitemMap.get(itemsX[id]);
    updateDisplay("keys", keys);
    items_b[id] = 2;
    showGiftContent(itemsX, pagesid);
}

function updateDisplay(dis, res) {//更新指定dis文本为res
    var Display = document.getElementById(dis);
    if (Display) {
        Display.textContent = res;
    }
}


function addzc(its) {//暂存箱记录函数
    itemsX.unshift(its);
    items_b.unshift(0);
}

