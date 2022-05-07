//this id EUI`s  javascript function, we named it EUI.js
const $ = {
    name: /[\s]{2-16}$/,
    email: /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/,
    pwd: /^[a-zA-Z0-9_@-]{6,16}$/,
    tel: /^[0-9]{11}$/
};

function log(logStr) {
    return console.log(logStr);
}

function dir(dirStr) {
    return console.log(dirStr);
}

function write(wStr) {
    return window.document.write(wStr);
};