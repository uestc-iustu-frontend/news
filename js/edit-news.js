
/*//      添加函数
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
        c1.innerHTML = prompt("请输入新闻栏目","");
        var c1 = row.insertCell(2);
        c1.innerHTML = prompt("请输入新闻标题","");
        var c1 = row.insertCell(3);
        c1.innerHTML = prompt("请输入发布时间","");
        var c1 = row.insertCell(4);
        c1.innerHTML = prompt("请输入发布者ID","");


        var c4 = row.insertCell(5);

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


//      修改简介函数
function update(index){
//          获取表单元素并获取表单的操作列
    var table =document.getElementById("order");
    var cell = table.rows[index].cells[4];

//          将修改按钮改为确定并将点击事件的函数改为exit()
    cell.firstChild.setAttribute("value","确定");
    cell.firstChild.setAttribute("onclick","exit(" + index + ")");

//          获取简介列
    var cellNumber =table.rows[index].cells[2];

//          创建输入框,将该列中的值赋给输入框并将原来的值赋为空字符串
    var tex = document.createElement("input");
    tex.setAttribute("value",cellNumber.innerHTML)
    tex.setAttribute("size",5);
    cellNumber.innerHTML="";

//          将输入框添加为该列的最后一个子节点
    cellNumber.appendChild(tex);

//          修改时将焦点放在输入框并选中内容
    tex.focus();
    tex.select();

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

//导航栏请求
    var nav = document.getElementsByClassName('edit-user')
    nav.onclick = function () {
        document.getElementsByTagName("a")[0] = function (){
            //3.创建 XMLHttpRequest 对象
            var request = new XMLHttpRequest();
            //4.准备发送请求的数据 url
            var url = this.href;
            var method = 'POST';
            //5.调用 XMLHttpRequest 对象 的 open方法
            request.open(method,url);
            //6.调用 XMLHttpRequest 对象 的 send方法
            request.send(null);
            //7.为 XMLHttpRequest 对象 添加 onreadystatechange 响应函数
            request.onreadystatechange = function () {
                //8.判断响应是否完成：XMLHttpRequest 对象 的 readyState 属性值为4的时候
                if(request.readyState === 4){
                    //9.判断响应是否可用：XMLHttpRequest 对象 status 属性值为 200 的时候
                    if(request.status === 200 || request.status === 304){
                        //10.打印响应结果：responseText
                        alert(request.responseText);
                    }
                }
            }
            //2.取消a节点的默认行为
            return false;
        }
    }*/
//      删除单个函数

$(function() {
    //页面加载
    $.ready($.ajax({
            url: '../Data/editNewsData.php',
            type: 'post',
            success: function (data) {
                data1 = JSON.parse(data);
                // data2 = JSON.stringify(data1[0].fields)
                // data3 = JSON.parse(data2)
                for (var i = 0; i < data.length; i++) {
                    data2 = JSON.stringify(data1[i].fields);
                    data3 = JSON.parse(data2);
                    var newRow = '<tr><td><input type="checkbox"></td> <td>' + data3.category + '</td> <td>' + data3.tittle + '</td> <td>' + data3.date + '</td> <td>' + data3.author + '</td> <td><input type="button" value="删除" class="btn-default btn del"></td> </tr>';
                    $('.order').append(newRow);
                }
            }
        }));

    
    //添加框提交
    $('#submit').click(function () {
        //输入
        $.ajax(
            {
            url:'/manage/news/add/',

            data: {
                category: $('#addNav').val(),
                tittle: $('#addTitle').val(),
                user: $('#addAuthor').val()
            },

            type:'post',

            success: function (data) {
                data1=JSON.parse(data);
                //加一行
                console.log(data.reason);
                data2 = JSON.stringify(data1.fields);
                data3 = JSON.parse(data2);
                var newRow = '<tr><td><input type="checkbox"></td> <td>' + data3.category + '</td> <td>' + data3.tittle + '</td> <td>' + data3.date + '</td> <td>' + data3.author + '</td> <td><input type="button" value="删除" class="btn-default btn del"></td> </tr>';
                $('.order').append(newRow);
            },

        });
    });

    //全选&全不选
    $('#allselect').click(function () {

       var check = $(':checkbox');
        console.log(check[0].checked);
        if(check[0].checked == true){
           for (var i = 0; i < check.length; i++) {
               check[i].checked = true;
           }
        }
        else{
            for (var i = 0; i < check.length; i++) {
                check[i].checked = false;
            }
        };

    });

    //批量删除（ajax）
    $('#dels').click(function () {

            var checked = $(':checkbox');
            console.log(checked.length);
            for (var i = 1; i < checked.length; i++) {
                if(checked[i].checked == true){
                    $.ajax(
                        {
                            url:'/manage/news/delete_muli/',
                            type:'post',
                            data:{pk:i},
                            success: function (data) {
                                checked[i].parent().parent().remove();
                            }
                        }
                    );
                }
            }

            });

    //单个删除
    $('.del').click(function(){
        $.ajax(
            {
                url:'/manage/news/delete_single/',
                type:'post',
                data:{pk:i},
                success: function (data) {
                    $(this).parent().parent().remove();
                }
            }
        );

    });

})
