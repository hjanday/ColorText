
var colors = ["red", "blue", "green", "purple"]

function getColorName(v){
    var item = v[Math.floor(Math.random()*v.length)];
    return item;
}
    
function setColorName(setterItem){
    document.getElementById("101").style.color = `${setterItem}`
}

setColorName(getColorName(colors));
