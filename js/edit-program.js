/*
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
}*/
$(function () {
    //ajax获取总页数
    $(document).ready(function () {
    $.ajax({
        url:'',
        type:'post',
        data:{},
        success:function (data) {
            for(var i=1;i<=6;i++){
                $('.pagination li').last().before('<li class="page-nums"><a href="#">'+i+'</a></li>');
            }
            var page=4;

            $('.pagination li').eq(1).addClass('active');
        }
    })
});
    //ajax换页
    $(document).on("click",".page-nums",function(){

        $(".page-nums").removeClass("active");
        $(this).addClass('active');
        var index = $(".page-nums").index($(this))+1;
        console.log(index);
        $.ajax({
            url:'',
            type:'post',
            data:{page:'index'},
            success: function (data) {
                data1 = JSON.parse(data);
                // data2 = JSON.stringify(data1[0].fields)
                // data3 = JSON.parse(data2)
                for (var i = 0; i < data.length; i++) {
                    data2 = JSON.stringify(data1[i].fields);
                    data3 = JSON.parse(data2);
                    var newRow = '<tr class="news"><td><input type="checkbox"></td> <td>' + data3.category + '</td> <td class="tittle">' + data3.tittle + '</td> <td>' + data3.date + '</td> <td>' + data3.author + '</td> <td><input type="button" value="删除" class="btn-default btn del"></td> </tr>';
                    $('.order').append(newRow);
                }
            }
        });
    });

    //添加————模板引擎
    $('#submit').click(function () {
        $.ajax({
            url:'',
            type:'post',
            data:{
                category:$('#addcategory').val()
            },
            success:function (data) {
                data = JSON.parse(data);
                var result = template('template', data);
                $('.row').append(result);
            }
        })
     /* var data = {
            category:$('#addcategory').val()
        }
        var result = template('template', data);
        $('.row').append(result);*/
    });
    /*var data1 = {
        name:{category: 'policy'}
    };
    var data2 = {
        category: 'biology'
    }
    var result = template('template', data1.name);
    $('.row').append(result);
    var result2 = template('template', data2);
    $('.row').append(result2);*/
    //全选&全不选
    $('#All').click(function () {

        var check = $(':checkbox');
        console.log(check[0].checked);
        if(check[0].checked==true){
            for (var i = 0; i < check.length; i++) {
                check[i].checked = true;
            }
        }else {
            for (var i = 0; i < check.length; i++) {
                check[i].checked = false;
            }
        }
    });
    //单个删除
    $('.del').click(function () {
        console.log($(this).parent().parent().parent().parent());
        console.log($(".del").index($(this)));
        $.ajax({
            url:'' ,
            type:'',
            data:{
                pk:$(".del").index($(this))
            },
            success:$(this).parent().parent().parent().parent().remove()
        })
    });
    //批量删除
    $('#dels').click(function () {
        var checkbox = $(':checked');
        console.log(checkbox[1]);
        $("input[type='checkbox']:gt(0):checked").parent().parent().remove();
        /*console.log(checkbox.length);
        for(var i=1;i<checkbox.length;i++){
            if(checkbox[i].checked == true){
                console.log(checkbox[i]);
                console.log(i);
                checkbox[i].fadeOut(3000);
                /!*i--;*!/
            }
        }*/
    })


})