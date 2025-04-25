# TON Coding Challenge 2025


为了帮助大家快速掌握 TON 生态的开发技能，我们特别设计了有趣的编程入门挑战赛。快来参与并有机会赢取 Telegram Premium 大会员！详细的比赛规则请查看群组公告。

https://t.me/TON_HongKong


> 如何参与？
> 
> Fork 本仓库的代码，回答下面的问题，然后发起一个 Pull Requests 就算成功参与。

---

## 任务 1：在TON测试网领取测试代币，并给指定地址转账

### 任务描述：

1. 你可以使用 [Tonkeeper](https://tonkeeper.com/) 等钱包创建测试网钱包
2. 你可以通过 [@testgiver_ton_bot](https://t.me/testgiver_ton_bot) 领取测试网代币
3. 给下面的地址转账任意金额的 TON，并且Comments里面填写你的Telegram用户名

### 你的答案：

（写下你的转账交易的浏览器地址，以及你的Telegram 用户名用户接受Telegram会员奖励）

1. 转账交易的浏览器地址 = https://testnet.tonviewer.com/kQA-xidpMmv1WT4x_tpHN-pNS0PRO3mNWSD7TdCh9i-JuSi-
2. 你的Telegram用户名 = @Dmitrii_Borzov

---

## 任务 2：通过 TON SDK 将你的钱包地址转换成不同格式

### 任务描述：

1. TON 的主网和测试网的合约地址有不同的格式
2. 因为 TON 是基于消息模式的，消息发送方可以指定回弹(bounceable)异常消息，在接收方地址上有差异
3. 因此，根据一个合约地址是否是主网，以及是否可以回弹(bounceable)，共有 4 个地址格式
4. 通过 [TON SDK](https://docs.ton.org/v3/guidelines/dapps/apis-sdks/sdk) 中的 Address 类可以处理不同格式的地址

### 你的答案：

（写下你的钱包地址的 4 个不同格式的值）

1. mainnet, bounceable = EQA-xidpMmv1WT4x_tpHN-pNS0PRO3mNWSD7TdCh9i-JuZM0
2. mainnet, non-bounceable = UQA-xidpMmv1WT4x_tpHN-pNS0PRO3mNWSD7TdCh9i-Juc7x
3. testnet, bounceable = kQA-xidpMmv1WT4x_tpHN-pNS0PRO3mNWSD7TdCh9i-JuSi-
4. testnet, non-bounceable = 0QA-xidpMmv1WT4x_tpHN-pNS0PRO3mNWSD7TdCh9i-JuXV7

---

## 任务 3：通过 TON SDK 解析这个，获取对应信息

### 任务描述：

1. 下面有一串”`b5ee9c72`”开头的 [Bag of Cell](https://www.notion.so/1745274bd2cf80e4b8efeae385fea2b3?pvs=21) 编码
2. 这个编码包含一个 64 bit 的 unit，后面是一个 Address，再后面是一串字符串
3. 通过 [TON SDK](https://docs.ton.org/v3/guidelines/dapps/apis-sdks/sdk) 中的 Cell、Slice 等类进行解析，将 unit，address 和 string 的值打印出来

b5ee9c7241010101003600006700000000000007e98007ebd0a3f5bd5b9b3c4e0b75b17ea9db2b7e0c6074aa8b2683ce6ea571587550890cad8d8de40a89e9c43037e8b30d

### 你的答案：

（将 unit，address 和 string 的值打印出来）

1. unit = 2025
2. address = EQA_XoUfrerc2eJwW62L9U7ZW_BjA6VUWTQec3UrisOqhP8a
3. string = Hello TON!

---
