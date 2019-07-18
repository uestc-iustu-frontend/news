function leftCol(){
    let sidebtn=document.getElementsByClassName("sidebtn");
    function mouseOn(obj) {
        let oldColor=obj.style.backgroundColor;
        obj.onmouseover=function () {
            obj.style.backgroundColor="#7d8586";
            obj.style.cursor="pointer";
        }
        obj.onmouseout=function () {
            obj.style.backgroundColor=oldColor;
        }

    }
    for (let i = 0; i < sidebtn.length; i++) {
        mouseOn(sidebtn[i]);
    }
}
addLoadEvent(leftCol);