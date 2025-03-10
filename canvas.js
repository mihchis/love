var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');


canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

var texts = 'I LOVE Y'.split('');

var fontSize = 16;
var columns = canvas.width / fontSize;
// 用于计算输出文字时坐标，所以长度即为列数
var drops = [];
//初始值
for (var x = 0; x < columns; x++) {
    drops[x] = 1;
}

function draw() {
    //让背景逐渐由透明到不透明
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    //文字颜色
    ctx.fillStyle = '#f584b7';
    //ctx.fillStyle = '#8c4afd';
    ctx.font = fontSize + 'px arial';
    //逐行输出文字
    for (var i = 0; i < drops.length; i++) {
        var text = texts[Math.floor(Math.random() * texts.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height || Math.random() > 0.95) {
            drops[i] = 0;
        }

        drops[i]++;
    }
}
setInterval(draw, 33);