window.onload=show();
function show() {
    let list=doucument.getElementsByClassName(list);
    window.onload = function(){

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


    // 编写一个函数，供添加按钮调用，动态在表格的最后一行添加子节点；
    let num=2;
    function add() {
        let name=prompt("新闻题目","");
        if (name!=null&&name!=""){
            num++;
            let newrow=document.createElement("tr");
            let nxh=document.createElement("td");
            let nxm=document.createElement("td");
            let ncz=document.createElement("td");
            nxh.innerHTML="xh"+num;
            nxm.innerHTML=name;
            ncz.innerHTML="<a href=\"javascript:;\" onclick=\"del(this);\" >删除</a>";
            let table=document.getElementById("table");
            table.appendChild(newrow);
            newrow.appendChild(nxh);
            newrow.appendChild(nxm);
            newrow.appendChild(ncz);
            let row=document.getElementsByTagName("tr");
            for(let i=0;i<row.length;i++){
                row[i].onmouseover=function () {
                    row[i].style.backgroundColor="#62a8a5";
                }
                row[i].onmouseout=function () {
                    row[i].style.backgroundColor="#fff";
                }
            }
        }else
            add();
    }


    // 创建删除函数
    function del(obj) {
        let row=obj.parentNode.parentNode;
        row.parentNode.removeChild(row);
    }

}