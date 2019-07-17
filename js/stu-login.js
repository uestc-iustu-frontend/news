'use strict'

//header函数
var SUser = document.getElementById('s-user');
var SAd = document.getElementById('s-ad');
    SUser.onclick = function () {

        SAd.style.textDecoration = 'none';
        SAd.style.color = '#a0a0a0';
        SUser.style.color = '#00cbd1';
        SUser.style.textDecoration = 'underline';
        return 's-user';

    }
    SAd.onclick = function () {

        SUser.style.color = '#a0a0a0';
        SUser.style.textDecoration = 'none';
        SAd.style.color = '#00cbd1';
        SAd.style.textDecoration = 'underline';
        return 's-ad';
    }

//验证码函数
function createCode() {
        var datas = ['A','B','C','D','E','F'];
        var code = "";
        for(var i = 0;i < 4;i++){
            var index = Math.floor(Math.random()*datas.length);
            code += datas[index];
        }

        var spanNode = document.getElementById("code");
        spanNode.innerHTML = code;
    }

function ready() {
    createCode();
}

document.getElementById('code').onclick=createCode();

