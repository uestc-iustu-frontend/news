function add(){
//          获取表单元素
    var table = document.getElementById("order");
//          以表单的行数为索引插入行
    var index = table.rows.length;
    var row = table.insertRow(index);

//          在插入行中插入1列
    var c0 = row.insertCell(0);

//          创建复选框元素并设置该元素的属性
    var c =document.createElement("input");
    c.setAttribute("type","checkbox");
    c.setAttribute("name","single");
    c.setAttribute("onclick","selectc()");
//          将创建好的复选框添加为插入列的最后一个子节点
    c0.appendChild(c);


//          在插入行中插入列并提示框输入值
    var c1 = row.insertCell(1);
    c1.innerHTML = prompt("请输入栏目名","");

    var c4 = row.insertCell(2);

    var b2 = document.createElement("input");
    b2.setAttribute("type","button");
    b2.setAttribute("value","  -  ");
    b2.setAttribute("onclick","del(this)");
    b2.style.borderRadius = '5px';
    b2.style.borderColor = '#7d8586'
    b2.style.border = '0px';
    b2.style.color = '#fff';
//          将按钮添加为插入列的子节点
    c4.appendChild(b2);
}


//      删除单个函数
function del(but){
//      but参数为删除按钮节点,将删除按钮的父节点的父节点移除,
//      即移除删除按钮所在的 <tr>标签及内容;
    but.parentNode.parentNode.remove();

//          判断全选框状态
    allsn();

}


//      删除已选函数
function dels(){
    var item =document.getElementsByName("single");

    alert(item.length);
//           遍历表单，将选中的商品从最后一个开始移除
    for(var i=item.length-1;i>=0;i--){
        if(item[i].checked == true){
            item[i].parentNode.parentNode.remove();

        }

    }
//          判断全选框状态
    allsn();

}


//       当修改完后点击确定按钮执行的函数
function exit(index){
    //将确定按钮的变为修改按钮并将点击事件函数改为修改函数
    var table =document.getElementById("order");
    var cell=table.rows[index].cells[4];
    cell.firstChild.setAttribute("value","修改");
    cell.firstChild.setAttribute("onclick","update("+ index +")");


//          将数量列中的输入框的值赋为该列的内容,并将输入框移除
    var cellNumber =table.rows[index].cells[2];
    var num = cellNumber.firstChild.value;
    cellNumber.firstChild.remove();
    cellNumber.innerHTML=num;

}


//      全选函数
function allSelect(ch){
//          获取所有input元素
    var item =document.getElementsByTagName("input");

//          遍历所有input元素,找到所有复选框,将让复选框的选中状态与全选复选框一致
    for(var i=0;i<item.length;i++){
        if(item[i].type === "checkbox"){
            item[i].checked =ch.checked;
        }
    }

}
//全选后，取消单个复选框的选中状态的同时取消全选状态
function selectc(){
//          遍历所有复选框,当有复选框未被选中时,全选复选框不选中
    var item =document.getElementsByName("single");
    var alls = document.getElementById("alls");
    var tag=true;

    for(var i=0;i<item.length;i++){
        if(item[i].checked === false){
            tag=false;
            break;
        }

    }
    alls.checked=tag;
}

//当表单没有数据时全选框不选中
function allsn(){
    var alls =document.getElementById("alls");
    var item =document.getElementsByName("single");
    if(item.length ===0){
        alls.checked=false;
    }
}