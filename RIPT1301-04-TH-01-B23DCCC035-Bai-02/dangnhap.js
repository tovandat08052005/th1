function button() {
    var user = document.getElementsByClassName("user")[0].value;
    var password= document.getElementsByClassName("user")[1].value;
    if (user== "admin" && password=="admin") {
        window.location.href= "quantri.html"
    }
    else {
        alert("Tài khoản mật khẩu không chính xác")
    }
}