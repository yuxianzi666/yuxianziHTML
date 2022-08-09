var tittle = document.getElementById("tittle");
tittle.onclick = function(){
    var color1=Math.round(Math.random()*15).toString(16);
    var color2=Math.round(Math.random()*15).toString(16);
    var color3=Math.round(Math.random()*15).toString(16);
    var color4=Math.round(Math.random()*15).toString(16);
    var color5=Math.round(Math.random()*15).toString(16);
    var color6=Math.round(Math.random()*15).toString(16);
    var size=Math.round(Math.random()*30+40);
    tittle.style.fontSize=size+"px";
    tittle.style.color="#"+color1+color2+color3+color4+color5+color6;
}

