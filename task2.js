// Add before using library
import("buffer");
import {TonClient, WalletContractV4, internal} from "ton";
import {mnemonicNew, mnemonicToPrivateKey} from "ton-crypto";

// Create Client
const client = new TonClient({
    endpoint: 'https://toncenter.com/api/v2/jsonRPC',
});

// Generate new key
let mnemonics = await mnemonicNew();
let keyPair = await mnemonicToPrivateKey(mnemonics);


// Create wallet contract
let workchain = 0; // Usually you need a workchain 0
let wallet = WalletContractV4.create({workchain, publicKey: keyPair.publicKey});
let contract = client.open(wallet);
console.log('主网 可回弹地址：', wallet.address.toString({bounceable: true, testOnly: false}));
console.log('主网 不可回弹地址：', wallet.address.toString({bounceable: false, testOnly: false}));
console.log('测试网 可回弹地址：', wallet.address.toString({bounceable: true, testOnly: true}));
console.log('测试网 不可回弹地址：', wallet.address.toString({bounceable: false, testOnly: true}));
