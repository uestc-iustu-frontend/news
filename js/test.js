
var detail_div = 1;
function add_div() {
    var e = document.getElementById("details");
    var div = document.createElement("div");
    div.className = "form-group";
    div.id = "details" + detail_div;
    div.innerHTML = e.innerHTML;
    document.getElementById("form").appendChild(div);
    detail_div++;
}

function del_div() {
    var id = "details" + (detail_div - 1).toString();
    var e = document.getElementById(id);
    document.getElementById("form").removeChild(e);
    detail_div--;
}
