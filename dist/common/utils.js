"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CryptoJS = require("crypto-js");
const key = CryptoJS.enc.Utf8.parse("U2FsdGVkX1+9qiNsVs+gCDFkG975DX47lUaZ0MTPy3pr149+34ZGgA==");
const iv = CryptoJS.enc.Utf8.parse('U2FsdGVkX1+IXULGfBMRRRzDt7j6thYAHcoffCX2W0U=');
exports.encryptSecret = (value) => {
    let temp;
    temp = CryptoJS.DES.encrypt(value.toString(), key, { iv: iv, mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7 }).toString();
    temp = CryptoJS.enc.Utf8.parse(temp);
    temp = CryptoJS.enc.Base64.stringify(temp);
    return temp;
};
function encryptSecretPC(value) {
    let temp;
    temp = CryptoJS.DES.encrypt(value.toString(), key, { iv: iv, mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7 }).toString();
    temp = CryptoJS.enc.Utf8.parse(temp);
    temp = CryptoJS.enc.Base64.stringify(temp);
    return temp;
}
exports.decryptSecret = (value) => {
    let temp;
    temp = CryptoJS.enc.Base64.parse(value);
    temp = temp.toString(CryptoJS.enc.Utf8);
    temp = CryptoJS.DES.decrypt(temp, key, { iv: iv, mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7 }).toString(CryptoJS.enc.Utf8);
    return temp;
};
function decryptSecretPC(value) {
    let temp;
    temp = CryptoJS.enc.Base64.parse(value);
    temp = temp.toString(CryptoJS.enc.Utf8);
    temp = CryptoJS.DES.decrypt(temp, key, { iv: iv, mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7 }).toString(CryptoJS.enc.Utf8);
    return temp;
}
exports.arrColor = ['#E0FFFF', '#FAFAD2', '#D3D3D3', '#90EE90', '#FFB6C1', '#FFA07A', '#20B2AA', '#87CEFA', '#8470FF', '#778899',
    '#B0C4DE', '#FFFFE0', '#00FF00', '#32CD32', '#FAF0E6', '#FF00FF', '#800000', '#66CDAA', '#BA55D3', '#9370D8', '#3CB371', '#7B68EE', '#00FA9A', '#0000CD'];
exports.asideColor = ['#FFF8DC', '#FAEBD7', '#FFEFD5', '#F5F5DC', '#FFE4C4'];
