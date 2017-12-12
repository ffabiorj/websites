var colors = ['#BF3EFF', '#0000CD', '#CAE1FF', '#1E90FF', '#00688B', '#54FF9F',
               '#98FB98', '#8B8B83', '#CDBE70', '#292421', '#FF3030', '#EDEDED'];

function changeColor() {
    var randomColors = Math.floor(Math.random() * (colors.length));
    document.body.style.backgroundColor = colors[randomColors];

}