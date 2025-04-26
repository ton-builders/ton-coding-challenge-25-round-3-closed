# TON Coding Challenge 2025


## 任务 1：在TON测试网领取测试代币，并给指定地址转账


### 你的答案：

（写下你的转账交易的浏览器地址，以及你的Telegram 用户名用户接受Telegram会员奖励）

1. 转账交易的浏览器地址 = https://testnet.tonviewer.com/transaction/7eebf37f2758ae79714360737415fb26475351413151262992aa27f9b8cb1162
2. 你的Telegram用户名 = @samyar_kd

---

## 任务 2：通过 TON SDK 将你的钱包地址转换成不同格式

### 任务描述：

1. TON 的主网和测试网的合约地址有不同的格式
2. 因为 TON 是基于消息模式的，消息发送方可以指定回弹(bounceable)异常消息，在接收方地址上有差异
3. 因此，根据一个合约地址是否是主网，以及是否可以回弹(bounceable)，共有 4 个地址格式
4. 通过 [TON SDK](https://docs.ton.org/v3/guidelines/dapps/apis-sdks/sdk) 中的 Address 类可以处理不同格式的地址

### 你的答案：

（写下你的钱包地址的 4 个不同格式的值）

1. mainnet, bounceable = EQDYHR9xrhd-bl5bItd4P7IQ9P3lDW_NZlDRNEGo2SpM-eoH
2. mainnet, non-bounceable = UQDYHR9xrhd-bl5bItd4P7IQ9P3lDW_NZlDRNEGo2SpM-bfC
3. testnet, bounceable = kQDYHR9xrhd-bl5bItd4P7IQ9P3lDW_NZlDRNEGo2SpM-VGN
4. testnet, non-bounceable = 0QDYHR9xrhd-bl5bItd4P7IQ9P3lDW_NZlDRNEGo2SpM-QxI
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
