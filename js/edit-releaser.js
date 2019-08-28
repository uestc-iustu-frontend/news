$(function () {
    //ajax获取总页数
    $(document).ready(function () {
        $.ajax({
            url:'/manage/releaser/get_pages/',
            type:'post',
            data:{},
            success:function (data) {
                for(var i=1;i<=data;i++){
                    $('.pagination li').last().before('<li class="page-nums"><a href="#">'+i+'</a></li>');
                }

                $('.pagination li').eq(1).addClass('active');
            }
        })
    });
    //加载页面内容
    $(document).ready($.ajax({
        url: '/manage/releaser/edit/',
        type: 'post',
        data:{},
        success: function (data) {
            // data = -data;
            data1 = JSON.parse(data);
            // data2 = JSON.stringify(data1[0].fields)
            // data3 = JSON.parse(data2)
            for (var i = 0; i < data.length; i++) {
                data2 = JSON.stringify(data1[i].fields);
                data3 = JSON.parse(data2);
                var newRow =  template('template', data3);
                $('.row').append(newRow);
            }
        }
    }));
    //ajax换页
    $(document).on("click",".page-nums",function(){

        $(".page-nums").removeClass("active");
        $(this).addClass('active');
        var index = $(".page-nums").index($(this))+1;
        console.log(index);
        $('.rowChild').remove();
        $.ajax({
            url:'/manage/releaser/edit/',
            type:'post',
            data:{page:index},
            success: function(data) {
                $('.rowChild').remove();
                data1 = JSON.parse(data);
                // data2 = JSON.stringify(data1[0].fields)
                // data3 = JSON.parse(data2)
                for (var i = 0; i < data.length; i++) {
                    data2 = JSON.stringify(data1[i].fields);
                    data3 = JSON.parse(data2);
                    var newRow =  template('template', data3);
                    $('.row').append(newRow);
                }
            }
        });
    });
    //翻页
    //上一页
    $('.pagination>li').first().click(function () {
        var newPage=$('.pagination>.active').index('.pagination>li')-1;
        var page=$('.pagination>.active').index('.pagination>li');
        console.log(newPage);
        $.ajax({
            url:'/manage/releaser/edit/',
            type:'post',
            data:{page:newPage},
            success: function(data) {
                $('.rowChild').remove();
                $('.pagination>.active').removeClass("active");
                $('.pagination>li').eq(newPage).addClass('active');
                data1 = JSON.parse(data);
                // data2 = JSON.stringify(data1[0].fields)
                // data3 = JSON.parse(data2)
                for (var i = 0; i < data.length; i++) {
                    data2 = JSON.stringify(data1[i].fields);
                    data3 = JSON.parse(data2);
                    var newRow =  template('template', data3);
                    $('.row').append(newRow);
                }
            }
        });

    });
    //下一页
    $('.pagination>li').last().click(function () {
        var newPage=$('.pagination>.active').index('.pagination>li')+1;
        var page=$('.pagination>.active').index('.pagination>li');
        console.log(newPage);
        $.ajax({
            url:'/manage/releaser/edit/',
            type:'post',
            data:{page:newPage},
            success: function(data) {
                $('.rowChild').remove();
                $('.pagination>.active').removeClass("active");
                $('.pagination>li').eq(newPage).addClass('active');
                data1 = JSON.parse(data);
                // data2 = JSON.stringify(data1[0].fields)
                // data3 = JSON.parse(data2)
                for (var i = 0; i < data.length; i++) {
                    data2 = JSON.stringify(data1[i].fields);
                    data3 = JSON.parse(data2);
                    var newRow =  template('template', data3);
                    $('.row').append(newRow);
                }
            }
        });
    });
    //添加————模板引擎
    $('#submit').click(function () {
        $.ajax({
            url: '/manage/releaser/add/',
            type: 'post',
            data: {
                releaser_name: $('#addReleaser').val()
            },
            success: function (data) {
                if(data.error_code === 1){
                    alert(data.msg)
                }
                else {
                    data1 = JSON.parse(data);
                    data2 = JSON.stringify(data1.fields);
                    data3 = JSON.parse(data2);
                    var result = template('template', data3);
                    $('.row').append(result);
                    alert('Add successfully.')
                }
            }
        });
    })
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
    $(document).on('click','.del',function() {
        var index = $(".del").index($(this));
        console.log(index);
        var releaser_name = $('h3').eq(index).text();
        console.log(releaser_name);
        $.ajax({
            url: '/manage/releaser/delete_single/',
            type: 'post',
            data: {
                releaser_name: releaser_name
            },
            success:function(data){
                $(this).parent().parent().parent().parent().remove();
                alert(data.msg);
            }
        })
    })
    //批量删除
    $('#dels').click(function () {
        var length = $(":checkbox").length;
        for(let i=1;i<length;i++){
            if($(":checkbox")[i].checked==true){
                var releaser_name = $("h3").eq(i-1).text();
                console.log(releaser_name);
                $.ajax({
                    url:'/manage/releaser/delete_single/',
                    type:'post',
                    data:{releaser_name: releaser_name},
                    success:function (data) {
                        alert(data.msg);
                    }
                })
            };
        };
        if($(':checkbox')[0].checked == false) {
            $(':checked').parent().parent().parent().remove();
        }else{
            let checked = $(':checked').length;
            for(let i=1;i< checked;i++){
                $(':checked').eq(1).parent().parent().parent().remove();
            }
            $(':checkbox')[0].checked = false;
        }
    })


})