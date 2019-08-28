$(function () {
    $('.submit').click(function () {
        var newCategory = $('#category').val();
        $.ajax({
            url:'',
            type:'post',
            data:{category:newCategory}
        })
    })
})