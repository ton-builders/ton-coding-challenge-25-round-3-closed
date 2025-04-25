
### 你的答案：

（写下你的转账交易的浏览器地址，以及你的Telegram 用户名用户接受Telegram会员奖励）

1. 转账交易的浏览器地址 = https://testnet.tonviewer.com/transaction/01aacf06f28ef0f77d2d01b17975c68ab615368da0ed8244b2b06fc5ce7aefdd
2. 你的Telegram用户名 = @cryptoo_exe

---

## 任务 2：通过 TON SDK 将你的钱包地址转换成不同格式

### 你的答案：

（写下你的钱包地址的 4 个不同格式的值）

1. mainnet, bounceable = EQAfnIO9w0Auz13OJeOi5rppPYRlwOIEpYkUYKaLkutsn5Oc
2. mainnet, non-bounceable = UQAfnIO9w0Auz13OJeOi5rppPYRlwOIEpYkUYKaLkutsn85Z
3. testnet, bounceable = kQAfnIO9w0Auz13OJeOi5rppPYRlwOIEpYkUYKaLkutsnygW
4. testnet, non-bounceable = 0QAfnIO9w0Auz13OJeOi5rppPYRlwOIEpYkUYKaLkutsn3XT

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
