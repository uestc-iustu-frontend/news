
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
    var clickType_ = '-date'
    //页面加载:默认--按时间&第一页
    //get总页数
    //问题：获得页数需要传入什么以及返回格式？？
    // 分页
    //<li class="page-nums"><a href="#">1</a></li>
    $(document).ready($.ajax({
        url: '/manage/news/edit_1_/',
        type: 'post',
        data:{clickType:clickType_},
        success: function (data) {
            // data = -data;
            data1 = JSON.parse(data);
            // data2 = JSON.stringify(data1[0].fields)
            // data3 = JSON.parse(data2)
            for (var i = 0; i < data.length; i++) {
                data2 = JSON.stringify(data1[i].fields);
                data3 = JSON.parse(data2);
                var newRow = '<tr class="news"><td><input type="checkbox"></td> <td>' + data3.category + '</td> <td class="tittle">' + data3.tittle + '</td> <td>' + data3.date + '</td> <td>' + data3.author + '</td> <td><input type="button" value="删除" id="del" class="btn-default btn del"></td> </tr>';
                $('.order').append(newRow);
            }
        }
    }));
    $(document).ready(function () {
        $.ajax({
            url:'/manage/news/get_pages/',
            type:'post',
            data:{},
            success:function (data) {
                for(var i=1;i<=data;i++){
                    $('.pagination li').last().before('<li class="page-nums"><a href="#">'+i+'</a></li>');
                }
                $('.pagination li').eq(1).addClass('active');

            }
        })
    })
    $(document).ready(function () {
        // var selectRow = "<option value='data'>data</option>";
        // $('#addNav').append(selectRow);
        $.ajax({
            url:'/news/category_get/',
            type:'post',
            data:{},
            success:function (data) {
                data4 = JSON.parse(data);
                for (var i = 0; i < data.length; i++) {
                    data5 = JSON.stringify(data4[i].fields);
                    data6 = JSON.parse(data5);
                    var selectRow = '<option value= ' + data6.category + ' >' + data6.category + '</option>';
                    $('#addNav').append(selectRow);
                }
            }

        });
    })

    //翻页
    //上一页
    $('.pagination>li').first().click(function () {
        var newPage=$('.pagination>.active').index('.pagination>li')-1;
        var page=$('.pagination>.active').index('.pagination>li');
        console.log(page);
        console.log(newPage);
        $.ajax({
            url:'/manage/news/edit_1_/',
            type:'post',
            data:{page:newPage, clickType:clickType_},
            success: function(data) {
                $('.news').remove();
                $('.pagination>.active').removeClass("active");
                $('.pagination>li').eq(newPage).addClass('active');
                data1 = JSON.parse(data);
                // data2 = JSON.stringify(data1[0].fields)
                // data3 = JSON.parse(data2)
                for (var i = 0; i < data.length; i++) {
                    data2 = JSON.stringify(data1[i].fields);
                    data3 = JSON.parse(data2);
                    var newRow = '<tr class="news"><td><input type="checkbox"></td> <td class="tittle">' + data3.category + '</td> <td class="tittle">' + data3.tittle + '</td> <td>' + data3.date + '</td> <td>' + data3.author + '</td> <td><input type="button" value="删除" id="del" class="btn-default btn del"></td> </tr>';
                    $('.order').append(newRow);
                }
            }
        });

    });
    //下一页
    $('.pagination>li').last().click(function () {
        var newPage=$('.pagination>.active').index('.pagination>li')+1;
        var page=$('.pagination>.active').index('.pagination>li');
        console.log(page);
        console.log(newPage);
        $.ajax({
            url:'/manage/news/edit_1_/',
            type:'post',
            data:{page:newPage, clickType:clickType_},
            success: function(data) {
                $('.news').remove();
                $('.pagination>.active').removeClass("active");
                $('.pagination>li').eq(newPage).addClass('active');
                data1 = JSON.parse(data);
                // data2 = JSON.stringify(data1[0].fields)
                // data3 = JSON.parse(data2)
                for (var i = 0; i < data.length; i++) {
                    data2 = JSON.stringify(data1[i].fields);
                    data3 = JSON.parse(data2);
                    var newRow = '<tr class="news"><td><input type="checkbox"></td> <td class="tittle">' + data3.category + '</td> <td class="tittle">' + data3.tittle + '</td> <td>' + data3.date + '</td> <td>' + data3.author + '</td> <td><input type="button" value="删除" id="del" class="btn-default btn del"></td> </tr>';
                    $('.order').append(newRow);
                }
            }
        });
    });

    //ajax传入参数：page: ;
    $(document).on("click",".page-nums",function(){

        $(".page-nums").removeClass("active");
        $(this).addClass('active');
        var index = $(".page-nums").index($(this))+1;
        console.log(index);
        $.ajax({
            url:'/manage/news/edit_1_/',
            type:'post',
            data:{page:index, clickType:clickType_},
            success: function(data) {
                $('.news').remove();
                data1 = JSON.parse(data);
                // data2 = JSON.stringify(data1[0].fields)
                // data3 = JSON.parse(data2)
                for (var i = 0; i < data.length; i++) {

                    data2 = JSON.stringify(data1[i].fields);
                    data3 = JSON.parse(data2);
                    var newRow = '<tr class="news"><td><input type="checkbox"></td> <td class="tittle">' + data3.category + '</td> <td class="tittle">' + data3.tittle + '</td> <td>' + data3.date + '</td> <td>' + data3.author + '</td> <td><input type="button" value="删除" id="del" class="btn-default btn del"></td> </tr>';
                    $('.order').append(newRow);
                }
            }
        });
    });
    //添加框提交
    $('#submit').click(function () {
        //输入
        $.ajax(
            {
                url:'/manage/news/add/',

                data: {
                    category: $('#addNav').val(),
                    tittle: $('#addTitle').val(),
                    author: $('#addAuthor').val()
                },

                type:'post',

                success: function (data) {
                    if(data.error_code === 1){
                        alert(data.msg)
                    }
                    else {
                        data1 = JSON.parse(data);
                        //加一行
                        console.log(data.reason);
                        data2 = JSON.stringify(data1.fields);
                        data3 = JSON.parse(data2);
                        var newRow = '<tr class="news"><td><input type="checkbox"></td> <td>' + data3.category + '</td> <td class="tittle">' + data3.tittle + '</td> <td>' + data3.date + '</td> <td>' + data3.author + '</td> <td><input type="button" value="删除" id="del" class="btn-default btn del"></td> </tr>';
                        $('.order').append(newRow);
                        alert('Add successfully!');
                    }
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
    // /*var tittle = $("td[class='tittle']").eq(i).text();*/
    $('#dels').click(function () {
        var length = $(":checkbox").length;
        console.log(length);
        for(let i=1;i<length;i++){
            if($(":checkbox")[i].checked==true){
                var tittle = $("td[class='tittle']").eq(i-1).text();
                console.log(tittle);
                $.ajax({
                    url:'/manage/news/delete_single/',
                    type:'post',
                    data:{tittle:tittle}
                })
            };
        };
        if($(':checkbox')[0].checked == false) {
            $(':checked').parent().parent().remove();
        }else{
            let checked = $(':checked').length;
            for(let i=1;i< checked;i++){
                $(':checked').eq(1).parent().parent().remove();
            }
            $(':checkbox')[0].checked = false;
        }



        /*  $(":checked").parent().parent().remove();*/
        /* $.ajax(
                 {
                     url:'/manage/news/delete_muli/',
                     type:'post',
                     data:{tittle:tittle},
                     success: function (data) {
                         $(":checked").parent().parent().remove();
                     }
                 }
             )*/

    });

    //单个删除
    $(document).on('click','.del',function(){
        var index = $(".del").index($(this));
        console.log(index);
        var tittle = $("td[class='tittle']").eq(index).text();
        console.log(tittle);
        $.ajax(
            {
                url:'/manage/news/delete_single/',
                type:'post',
                data:{tittle:tittle},
                success: function (data) {
                    alert(data);
                    // $(this).parent().parent().remove();
                }
            }
        );

    });

    //导航栏--按时间/按点击量
    //传入：clickType:time
    $('.nav-tabs li').last().click(function () {
        $('.nav-tabs li').last().addClass('active');
        $('.nav-tabs li').first().removeClass('active');
        clickType_ = '-click_count';
        $.ajax({
            url:'/manage/news/edit_1_/',
            type:'post',
            data:{clickType:clickType_},
            success: function (data) {
                $('.news').remove();
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
    //传入：clickType:click
    $('.nav-tabs li').first().click(function () {
        $('.nav-tabs li').first().addClass('active');
        $('.nav-tabs li').last().removeClass('active');
        clickType_ = '-date'
        $.ajax({
            url:'/manage/news/edit_1_/',
            type:'post',
            data:{clickType:clickType_},
            success: function (data) {
                $('.news').remove();
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
    
})
