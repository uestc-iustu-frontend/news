function time() {
    let date=new Date();
    let year=date.getFullYear();
    let month=date.getMonth()+1;
    let day=date.getDate();
    let timebox=document.getElementsByClassName("timebox");
    timebox[0].innerHTML=year+"年"+month+"月"+day+"日";
}
addLoadEvent(time);
//页面加载
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
            var newRow = template('template',data3);
            $('#table').append(newRow);
        }
    }
}));
$('.search-botton').click(function () {
    $.ajax({
        url: '/news/search/',
        type: 'get',
        data: {keyword:$('.search-text').val()},
        success: function (data) {
            data1 = JSON.parse(data);
            // data2 = JSON.stringify(data1[0].fields)
            // data3 = JSON.parse(data2)
            for (var i = 0; i < data.length; i++) {
                data2 = JSON.stringify(data1[i].fields);
                data3 = JSON.parse(data2);
                var newRow = template('template',data3);
                $('#table').append(newRow);
            }
        }
    })
})