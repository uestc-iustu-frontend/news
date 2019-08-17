
function listBack(){
    // 鼠标移动改变背景,可以通过给每行绑定鼠标移上事件和鼠标移除事件来改变所在行背景色。
    let row=document.getElementsByTagName("tr");
    for(let i=0;i<row.length;i++){
        row[i].onmouseover=function () {
            row[i].style.backgroundColor="#f2f2f2";
        }
        row[i].onmouseout=function () {
            row[i].style.backgroundColor="#fff";
        }
    }
}
addLoadEvent(listBack);
function show(lb, title) {
    if (title!=null&&title!=""&&lb!=null&&lb!=""){
        let newrow=document.createElement("tr");
        let nlb=document.createElement("td");
        let nbt=document.createElement("td");
        let nsj=document.createElement("td")
        let ncz=document.createElement("td");
        let date=new Date();
        let year=date.getFullYear();
        let month=date.getMonth()+1;
        let day=date.getDate();
        nlb.innerHTML="【"+lb+"】";
        nbt.innerHTML=title;
        nsj.innerHTML=year+"年"+month+"月"+day+"日";
        ncz.innerHTML="<a href=\"javascript:;\" onclick=\"del(this);\" >删除</a>";
        let table=document.getElementById("order");
        table.appendChild(newrow);
        newrow.appendChild(nlb);
        newrow.appendChild(nbt);
        newrow.appendChild(nsj);
        newrow.appendChild(ncz);
        let row=document.getElementsByTagName("tr");
        for(let i=0;i<row.length;i++){
            row[i].onmouseover=function () {
                row[i].style.backgroundColor="#f2f2f2";
            }
            row[i].onmouseout=function () {
                row[i].style.backgroundColor="#fff";
            }
        }
    }else
        add();
}
// 编写一个函数，供添加按钮调用，动态在表格的最后一行添加子节点；
function add() {
    let addNav = document.querySelector("addNav").val();
    let addTitle = document.querySelector("addTitle").val();
    show(addNav, addTitle);
}


// 创建删除函数
function del(obj) {
    let row=obj.parentNode.parentNode;
    row.parentNode.removeChild(row);
}