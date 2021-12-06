im
var colors = ["red", "blue", "green", "purple"]

function getColorName(){
    return colors[Math.random(0,colors.length)]
}

document.getElementById("101").style.color = `${getColorName()}`;