import  CryptoJS from 'crypto-js';

function gravatarMd5(email = "") {
  return CryptoJS.MD5(email.toLowerCase()).toString();
}
export default gravatarMd5;
