function time() {
    let date=new Date();
    let year=date.getFullYear();
    let month=date.getMonth()+1;
    let day=date.getDay()+1;
    let timebox=document.getElementsByClassName("timebox");
    timebox[0].innerHTML=year+"年"+month+"月"+day+"日";
}
addLoadEvent(time);