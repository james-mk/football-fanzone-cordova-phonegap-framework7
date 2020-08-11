var key = "9642770883cd4f5d8d1f288cc1ab8152";

document.getElementById('panel-logo').style.backgroundImage = "url('img/logo.jpg')";


function preload() {
    myApp.showIndicator();
    setTimeout(function () {
        myApp.hideIndicator();
    }, 2300);

}
