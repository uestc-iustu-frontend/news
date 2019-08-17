/*
按时间、点击量排序
 */
var order=function(clickType){
    $.ajax({
        url: 'xxxxxx',//接口不知道
        data: {clickType:clickType},
        type: 'post',
        success: function (data) {
            data1 = JSON.parse(data);
            // data2 = JSON.stringify(data1[0].fields)
            // data3 = JSON.parse(data2)
            for (var i = 0; i < data.length; i++) {
                data2 = JSON.stringify(data1[i].fields);
                data3 = JSON.parse(data2);
                var newRow = template('#template',data3);
                $('#table').append(newRow);
            }
        }
    })
}
$(".bytime").click(order("-date"));
$(".byclick").click(order("-click_count"));

$.ready($.ajax({
    url: '/news/',
    type: 'post',
    success: function (data) {
        data1 = JSON.parse(data);
        // data2 = JSON.stringify(data1[0].fields)
        // data3 = JSON.parse(data2)
        for (var i = 0; i < data.length; i++) {
            data2 = JSON.stringify(data1[i].fields);
            data3 = JSON.parse(data2);
            var newRow = template('#template',data3);
            $('#table').append(newRow);
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
