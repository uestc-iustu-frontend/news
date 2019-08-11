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


