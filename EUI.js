//this id EUI`s  javascript function, we named it EUI.js
const $ = {
    name: /[\s]{2-16}$/,
    email: /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/,
    pwd: /^[a-zA-Z0-9_@-]{6,16}$/,
    tel: /^[0-9]{11}$/
};
//封装log
function log(logStr) {
    return console.log(logStr);
}

function dir(dirStr) {
    return console.log(dirStr);
}

function write(wStr) {
    return window.document.write(wStr);
};

function html(into, out) {
    into.innerHTML = out;
}
//添加子元素
function bind(obj, event, callback) {
    obj.bind()
    obj.addEventListener(event, callback);
    return this;
}
/*
//事件构造函数
function Element() {};
Element.prototype.add = (ele, location, node) => {
    //创建元素并添加
    let para = document.createElement(ele);
    let node = document.createTextNode("这是新文本。");
    location.appendChild(node);
    return this;
} */