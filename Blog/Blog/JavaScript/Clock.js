/************************/
/* 대한민국 표준시 출력 */
/************************/
window.onload = function () {
    var footerClock = document.getElementById('footerClock');

    setInterval(function () {
        var now = new Date();
        footerClock.innerHTML = now.toString();

    }, 1000);
};