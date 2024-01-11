README
===========================

该文件用来测试和展示（仅供测试）

```diff
- [x] !  __ 已加密* __
```

****

|#|目录|
|---|----|
|1|[CF抽奖模拟器](https://yyanxxi2018.github.io/CrossFire-Lottery-Simulator/) |
|2|[幻灵抽奖模拟器](https://yyanxxi2018.github.io/CrossFire-Lottery-Simulator/huanling/) |
|3|[枪娘抽奖模拟器](https://yyanxxi2018.github.io/CrossFire-Lottery-Simulator/qiangniang/) |
|4|[隼(非官方概率)模拟器](https://yyanxxi2018.github.io/CrossFire-Lottery-Simulator/sun/) |


## 幻灵抽奖

抽奖概率-拼团

|道具名称|概率|
|----|-----|
|高爆手雷-幻灵|***16.67%***|
|烟雾弹-幻灵|***16.67%***|
|闪光弹-幻灵|***16.67%***|
|王者之石x10|***16.67%***|
|幻灵礼盒x1|***16.67%***|
|随机盲盒x1|***16.65%***|

抽奖概率-幻灵礼盒

|道具名称|概率|
|----|-----|
|M4A1-幻灵|***0.90%***|
|COP 357-幻灵|***0.90%***|
|幻灵之锋|***3.00%***|
|高爆手雷-幻灵|***3.00%***|
|烟雾弹-幻灵|***9.00%***|
|闪光弹-幻灵|***9.00%***|
|属性变更券x10|***37.10%***|
|交易专用钥匙x10|***37.10%***|

抽奖概率-随机盲盒

|道具名称|概率|
|----|-----|
|王者影豹|***0.75%***|
|影豹|***0.75%***|
|雷神-小红|***1.50%***|
|英雄级通用角色普通栏位扩展券x1|***1.50%***|
|稀有角色通用扩展栏位x1|***3.00%***|
|高级角色通用扩展栏位x1|***3.00%***|
|属性变更券x10|***44.75%***|
|交易专用钥匙x10|***44.75%***|

***
## 枪娘抽奖

抽奖概率-主奖池

|道具名称|概率|
|----|-----|
|觉醒版 QBZ-03-王者蔷薇|***0.20%***|
|王者-春|***0.25%***|
|星神-枪娘默 皮肤（不可交易）|***0.25%***|
|斯泰尔-枪娘暗刃|***0.30%***|
|毁灭耀金皮肤（不可交易）|***0.40%***|
|裁决-雪莉杨|***0.40%***|
|Barrett-极光|***0.60%***|
|M4A1-黑骑士|***0.60%***|
|枪娘阿敏玩偶（不可交易）|***0.80%***|
|天使灵狐玩偶（不可交易）|***1.20%***|
|王者之石x1|***4.90%***|
|积分*100|***0.10%***|
|积分*12|***5.00%***|
|积分*6|***15.00%***|
|积分*4|***30.00%***|
|积分*3|***40.00%***|

抽奖概率-许愿池

|道具名称|概率|
|----|-----|
|许愿值50|***0.20%***|
|许愿值20|***0.60%***|
|许愿值10|***1.20%***|
|许愿值5|***3.00%***|
|许愿值2|***35.00%***|
|许愿值1|***60.00%***|

***
## 隼(非官方概率)

```
const prizes = [
            { name: &#39;王者风神（非觉醒版）&#39;, probability: 0.001411 },
            { name: &#39;隼&#39;, probability: 0.002095 },
            { name: &#39;M200-幻神&#39;, probability: 0.002095 },
            { name: &#39;灵狐者-职业经理&#39;, probability: 0.002928 },
            { name: &#39;Barrett-极光音效卡（不可交易）&#39;, probability: 0.003148 },
            { name: &#39;炫金毁灭&#39;, probability: 0.005748 },
            { name: &#39;M4A1-青龙&#39;, probability: 0.005748 },
            { name: &#39;AK47-黑鲨&#39;, probability: 0.008466 },
            { name: &#39;M200-幻神紫橙光效（不可交易）&#39;, probability: 0.011605 },
            { name: &#39;天使灵狐玩偶&#39;, probability: 0.014756 },
            { name: &#39;王者之石x1&#39;, probability: 0.05 },
            { name: &#39;积分x100&#39;, probability: 0.002 },
            { name: &#39;积分x10&#39;, probability: 0.05 },
            { name: &#39;积分x5&#39;, probability: 0.15 },
            { name: &#39;积分x4&#39;, probability: 0.32 },
            { name: &#39;积分x3&#39;, probability: 0.42 },
        ];
        const prizes2 = [
            { name: &#39;幻灵值x100&#39;, probability: 0.002 },
            { name: &#39;幻灵值x50&#39;, probability: 0.008 },
            { name: &#39;幻灵值x20&#39;, probability: 0.01 },
            { name: &#39;幻灵值x10&#39;, probability: 0.08 },
            { name: &#39;幻灵值x5&#39;, probability: 0.02 },
            { name: &#39;幻灵值x4&#39;, probability: 0.03 },
            { name: &#39;幻灵值x3&#39;, probability: 0.04 },
        ];
        const prizesggs = [[//1
            { name: &#39;M200-幻神&#39;, probability: 0.0001 },
            { name: &#39;M200-幻神紫橙光效（不可交易）&#39;, probability: 0.005 },
            { name: &#39;天使灵狐玩偶&#39;, probability: 0.005 },
            { name: &#39;王者之石x3&#39;, probability: 0.0099 },
            { name: &#39;属性变更券x5&#39;, probability: 0.08 },
            { name: &#39;交易专用钥匙x1&#39;, probability: 0.9 },
        ], [//2
            { name: &#39;M200-幻神&#39;, probability: 0.0005 },
            { name: &#39;M4A1-青龙&#39;, probability: 0.0075 },
            { name: &#39;AK47-黑鲨&#39;, probability: 0.0075 },
            { name: &#39;M200-幻神紫橙光效（不可交易）&#39;, probability: 0.01 },
            { name: &#39;天使灵狐玩偶&#39;, probability: 0.01 },
            { name: &#39;王者之石x3&#39;, probability: 0.0545 },
            { name: &#39;属性变更券x5&#39;, probability: 0.91 },
        ], [//3
            { name: &#39;M200-幻神&#39;, probability: 0.001 },
            { name: &#39;Barrett-极光音效卡（不可交易）&#39;, probability: 0.005 },
            { name: &#39;炫金毁灭&#39;, probability: 0.004 },
            { name: &#39;M4A1-青龙&#39;, probability: 0.02 },
            { name: &#39;AK47-黑鲨&#39;, probability: 0.02 },
            { name: &#39;M200-幻神紫橙光效（不可交易）&#39;, probability: 0.04 },
            { name: &#39;天使灵狐玩偶&#39;, probability: 0.05 },
            { name: &#39;王者之石x3&#39;, probability: 0.86 },
        ], [//4
            { name: &#39;M200-幻神&#39;, probability: 0.002 },
            { name: &#39;灵狐者-职业经理&#39;, probability: 0.002 },
            { name: &#39;Barrett-极光音效卡（不可交易）&#39;, probability: 0.015 },
            { name: &#39;炫金毁灭&#39;, probability: 0.015 },
            { name: &#39;M4A1-青龙&#39;, probability: 0.038 },
            { name: &#39;AK47-黑鲨&#39;, probability: 0.038 },
            { name: &#39;M200-幻神紫橙光效（不可交易）&#39;, probability: 0.44 },
            { name: &#39;天使灵狐玩偶&#39;, probability: 0.45 },
        ], [//5
            { name: &#39;隼&#39;, probability: 0.004 },
            { name: &#39;M200-幻神&#39;, probability: 0.004 },
            { name: &#39;灵狐者-职业经理&#39;, probability: 0.004 },
            { name: &#39;Barrett-极光音效卡（不可交易）&#39;, probability: 0.039 },
            { name: &#39;炫金毁灭&#39;, probability: 0.032 },
            { name: &#39;M4A1-青龙&#39;, probability: 0.25 },
            { name: &#39;AK47-黑鲨&#39;, probability: 0.627 },
            { name: &#39;M200-幻神紫橙光效（不可交易）&#39;, probability: 0.04 },

        ], [//2-1
            { name: &#39;M200-幻神&#39;, probability: 0.0005 },
            { name: &#39;M4A1-青龙&#39;, probability: 0.0075 },
            { name: &#39;AK47-黑鲨&#39;, probability: 0.0075 },
            { name: &#39;M200-幻神紫橙光效（不可交易）&#39;, probability: 0.01 },
            { name: &#39;天使灵狐玩偶&#39;, probability: 0.01 },
            { name: &#39;王者之石x3&#39;, probability: 0.0545 },
            { name: &#39;属性变更券x5&#39;, probability: 0.91 },
        ], [//2-2
            { name: &#39;M200-幻神&#39;, probability: 0.001 },
            { name: &#39;Barrett-极光音效卡（不可交易）&#39;, probability: 0.005 },
            { name: &#39;炫金毁灭&#39;, probability: 0.004 },
            { name: &#39;M4A1-青龙&#39;, probability: 0.02 },
            { name: &#39;AK47-黑鲨&#39;, probability: 0.02 },
            { name: &#39;M200-幻神紫橙光效（不可交易）&#39;, probability: 0.04 },
            { name: &#39;天使灵狐玩偶&#39;, probability: 0.05 },
            { name: &#39;王者之石x3&#39;, probability: 0.86 },
        ], [//2-3
            { name: &#39;M200-幻神&#39;, probability: 0.002 },
            { name: &#39;灵狐者-职业经理&#39;, probability: 0.002 },
            { name: &#39;Barrett-极光音效卡（不可交易）&#39;, probability: 0.015 },
            { name: &#39;炫金毁灭&#39;, probability: 0.015 },
            { name: &#39;M4A1-青龙&#39;, probability: 0.038 },
            { name: &#39;AK47-黑鲨&#39;, probability: 0.038 },
            { name: &#39;M200-幻神紫橙光效（不可交易）&#39;, probability: 0.44 },
            { name: &#39;天使灵狐玩偶&#39;, probability: 0.45 },
        ], [//2-4
            { name: &#39;隼&#39;, probability: 0.004 },
            { name: &#39;M200-幻神&#39;, probability: 0.004 },
            { name: &#39;灵狐者-职业经理&#39;, probability: 0.004 },
            { name: &#39;Barrett-极光音效卡（不可交易）&#39;, probability: 0.039 },
            { name: &#39;炫金毁灭&#39;, probability: 0.032 },
            { name: &#39;M4A1-青龙&#39;, probability: 0.25 },
            { name: &#39;AK47-黑鲨&#39;, probability: 0.627 },
            { name: &#39;M200-幻神紫橙光效（不可交易）&#39;, probability: 0.04 },

        ], [//2-5
            { name: &#39;隼&#39;, probability: 0.008 },
            { name: &#39;M200-幻神&#39;, probability: 0.008 },
            { name: &#39;灵狐者-职业经理&#39;, probability: 0.012 },
            { name: &#39;Barrett-极光音效卡（不可交易）&#39;, probability: 0.039 },
            { name: &#39;炫金毁灭&#39;, probability: 0.032 },
            { name: &#39;M4A1-青龙&#39;, probability: 0.39 },
            { name: &#39;AK47-黑鲨&#39;, probability: 0.511 },
        ]];
```