// Add before using library
import {Buffer} from "buffer";

import("buffer");
import {TonClient, WalletContractV4, internal,} from "ton";
import {Cell,Slice,beginCell,Address} from "@ton/core";
import {mnemonicNew, mnemonicToPrivateKey} from "ton-crypto";

// 1. 解析BOC
const hex = 'b5ee9c7241010101003600006700000000000007e98007ebd0a3f5bd5b9b3c4e0b75b17ea9db2b7e0c6074aa8b2683ce6ea571587550890cad8d8de40a89e9c43037e8b30d';
const cell = Cell.fromBoc(Buffer.from(hex,'hex'))[0];

// 2.读取数据
const slice = cell.beginParse();

const a = slice.loadUint(64)
console.log(a)

const addr = slice.loadAddress();
console.log(addr)

const s = slice.loadStringTail();
console.log(s)
