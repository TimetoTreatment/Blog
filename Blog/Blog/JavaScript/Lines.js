/*-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
//
// Lines.css
//
//-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+

    개요 : 배경 선분 효과
    설명 :
        - 배경에 흰색 선분을 그림
        - 무작위로 10개 출력
*/

function lines(options) {
    this.setDefaults();

    if (typeof (options) != 'undefined') {
        if ('canvas' in options)
            this.setCanvas(options.canvas);
        if ('pieces' in options)
            this.setPieces(options.pieces);
        if ('color' in options)
            this.setColor(options.color);
    }

    return this;
}


lines.prototype.defaults = {
    canvas: 'lines-canvas',
    pieces: 10,
    color: '#EEE'
};


lines.prototype.setCanvas = function (canvas) {
    this.canvas = canvas;
    return this;
};


lines.prototype.setPieces = function (pieces) {
    this.pieces = pieces;
    return this;
};


lines.prototype.setColor = function (color) {
    this.color = color;
    return this;
};


lines.prototype.clearCanvas = function () {
    var cnv = document.getElementById(this.canvas);
    var ctx = cnv.getContext("2d");
    ctx.clearRect(0, 0, cnv.width, cnv.height);

    return this;
};


lines.prototype.setDefaults = function () {
    this.canvas = this.defaults.canvas;
    this.pieces = this.defaults.pieces;
    this.color = this.defaults.color;

    return this;
};


lines.prototype.draw = function () {
    this.clearCanvas();

    var cnv = document.getElementById(this.canvas);
    var ctx = cnv.getContext("2d");

    ctx.strokeStyle = this.color;

    ctx.beginPath()

    for (i = 0; i < this.pieces; i++) {
        var rndY = parseInt(Math.random() * 2 * cnv.height - cnv.height);
        var rndY2 = parseInt(Math.random() * 2 * cnv.height - cnv.height);

        if (rndY < 0 && rndY2 < 0)
            rndY2 += parseInt(Math.random() * cnv.height);

        if (rndY > cnv.height && rndY2 > cnv.height)
            rndY2 -= parseInt(Math.random() * cnv.height);

        ctx.moveTo(0, rndY);
        ctx.lineTo(cnv.width, rndY2);
        ctx.stroke();

        console.log('Lines: Drawing piece ' + (i + 1) + ' (0,' + rndY + ') to (' + cnv.width + ',' + rndY2 + ')');
    }

    return this;
};
