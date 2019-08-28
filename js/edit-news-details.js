$(function () {
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
                    $('.form-control').append(selectRow);
                }
            }

        });
    })
    //提交
    $('#agree').click(function () {
        $.ajax({
            url:'/manage/news/update/',
            type:'post',
            data:{
                pk:$('#pk').val(),
                title:$('#title').val(),
                category:$('#category').val(),
                author:$('#author').val(),
                text:$('#text').val()
            },
            success:function(data){
                alert(data.msg)
            }
        })
    });

})
