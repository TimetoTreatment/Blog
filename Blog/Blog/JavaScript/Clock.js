/************************/
/* ���ѹα� ǥ�ؽ� ��� */
/************************/
window.onload = function () {
    var footerClock = document.getElementById('footerClock');

    setInterval(function () {
        var now = new Date();
        footerClock.innerHTML = now.toString();

    }, 1000);
};