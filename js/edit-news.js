
$(function() {
    var clickType_ = '-date'
    //页面加载:默认--按时间&第一页
    //get总页数
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
                var newRow = '<tr class="news"><td><input type="checkbox"></td> <td>' + data3.category + '</td> <td class="title"><a href="/manage/news/' +data1[i].pk + '/">' + data3.title + '</a></td> <td>' + data3.date + '</td> <td>' + data3.author + '</td> <td><input type="button" value="删除" id="del" class="btn-default btn del"></td> </tr>';
                $('.order').append(newRow);
            }
        }
    }));
    //ajax传入参数：page: ;
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
    //加载栏目
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
                    var newRow = '<tr class="news"><td><input type="checkbox"></td> <td>' + data3.category + '</td> <td class="title"><a href="/manage/news/' +data1[i].pk + '/">' + data3.title + '</a></td> <td>' + data3.date + '</td> <td>' + data3.author + '</td> <td><input type="button" value="删除" id="del" class="btn-default btn del"></td> </tr>';
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
                    var newRow = '<tr class="news"><td><input type="checkbox"></td> <td>' + data3.category + '</td> <td class="title"><a href="/manage/news/' +data1[i].pk + '/">' + data3.title + '</a></td> <td>' + data3.date + '</td> <td>' + data3.author + '</td> <td><input type="button" value="删除" id="del" class="btn-default btn del"></td> </tr>';
                    $('.order').append(newRow);
                }
            }
        });
    });
    //点击某一页
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
                    var newRow = '<tr class="news"><td><input type="checkbox"></td> <td>' + data3.category + '</td> <td class="title"><a href="/manage/news/' +data1[i].pk + '/">' + data3.title + '</a></td> <td>' + data3.date + '</td> <td>' + data3.author + '</td> <td><input type="button" value="删除" id="del" class="btn-default btn del"></td> </tr>';
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
                    title: $('#addTitle').val(),
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
                        var newRow = '<tr class="news"><td><input type="checkbox"></td> <td>' + data3.category + '</td> <td class="title"><a href="/manage/news/' +data1.pk + '/">' + data3.title + '</a></td> <td>' + data3.date + '</td> <td>' + data3.author + '</td> <td><input type="button" value="删除" id="del" class="btn-default btn del"></td> </tr>';
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
    // /*var title = $("td[class='title']").eq(i).text();*/
    $('#dels').click(function () {
        var length = $(":checkbox").length;
        console.log(length);
        for(let i=1;i<length;i++){
            if($(":checkbox")[i].checked==true){
                var title = $("td[class='title']").eq(i-1).text();
                console.log(title);
                $.ajax({
                    url:'/manage/news/delete_single/',
                    type:'post',
                    data:{title:title}
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
                     data:{title:title},
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
        var title = $("td[class='title']").eq(index).text();
        console.log(title);
        $.ajax(
            {
                url:'/manage/news/delete_single/',
                type:'post',
                data:{title:title},
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
                    var newRow = '<tr class="news"><td><input type="checkbox"></td> <td>' + data3.category + '</td> <td class="title"><a href="/manage/news/' +data1[i].pk + '/">' + data3.title + '</a></td> <td>' + data3.date + '</td> <td>' + data3.author + '</td> <td><input type="button" value="删除" id="del" class="btn-default btn del"></td> </tr>';
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
                    var newRow = '<tr class="news"><td><input type="checkbox"></td> <td>' + data3.category + '</td> <td class="title"><a href="/manage/news/' +data1[i].pk + '/">' + data3.title + '</a></td> <td>' + data3.date + '</td> <td>' + data3.author + '</td> <td><input type="button" value="删除" id="del" class="btn-default btn del"></td> </tr>';
                    $('.order').append(newRow);
                }
            }
        });
    });
})
