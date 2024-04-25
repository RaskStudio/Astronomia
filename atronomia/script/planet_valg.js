const pvJorden = document.getElementById("pv_jorden");
const pvJupiter = document.getElementById("pv_jupiter");
const pvMars =  document.getElementById("pv_mars");
const pvNeptun = document.getElementById("pv_neptun");
const pvSaturn = document.getElementById("pv_saturn");
const pvUranus = document.getElementById("pv_uranus");
const pvVenus = document.getElementById("pv_venus");
const pvUfo = document.getElementById("pv_ufo");
const pvSol =  document.getElementById("pv_sol");
const pvHoejtaler =  document.getElementById("hoejtaler");

pvJorden.onclick = jodensZoom;
pvJupiter.onclick = jupiterZoom;
pvMars.onclick = marsZoom;
pvNeptun.onclick = neptunZoom;
pvSaturn.onclick = saturnZoom;
pvUranus.onclick = uranusZoom;
pvVenus.onclick = venusZoom;
pvUfo.onclick = ufoZoom;
pvHoejtaler.onclick = hoejtalerAfspil

let astronautLyd = document.getElementById("astronaut_lyd");
function hoejtalerAfspil() { 
    astronautLyd.autoplay = true;
    astronautLyd.load();
}


function jodensZoom(){
    /*Bagrunds elementer fader ud*/
    pvJupiter.style = "opacity:0"
    pvMars.style = "opacity:0"
    pvNeptun.style = "opacity:0"
    pvSaturn.style = "opacity:0"
    pvUranus.style = "opacity:0"
    pvVenus.style = "opacity:0"
    pvUfo.style = "opacity:0"
    pvSol.style = "opacity:0"

    /*Forstørrelse af klikkede planet*/
    pvJorden.style = "width:80%; left:10%; top:45%;"

    /*Liker videre til infromationsside*/
    setTimeout(function() {
        window.location.href = "jorden.html";
      }, 800);
}   

function marsZoom(){
    /*Bagrunds elementer fader ud*/
    pvJupiter.style = "opacity:0"
    pvJorden.style = "opacity:0"
    pvNeptun.style = "opacity:0"
    pvSaturn.style = "opacity:0"
    pvUranus.style = "opacity:0"
    pvVenus.style = "opacity:0"
    pvUfo.style = "opacity:0"
    pvSol.style = "opacity:0"

    /*Forstørrelse af klikkede planet*/
    pvMars.style = "width:80%; left:10%; top:45%;"

    /*Liker videre til infromationsside*/
    setTimeout(function() {
        window.location.href = "mars.html";
      }, 800);
}

function ufoZoom(){
    /*Bagrunds elementer fader ud*/
    pvJupiter.style = "opacity:0"
    pvJorden.style = "opacity:0"
    pvNeptun.style = "opacity:0"
    pvSaturn.style = "opacity:0"
    pvUranus.style = "opacity:0"
    pvVenus.style = "opacity:0"
    pvMars.style = "opacity:0"
    pvSol.style = "opacity:0"

    /*Forstørrelse af klikkede planet*/
    pvUfo.style = "width:80%; left:10%; top:25%;"

    /*Liker videre til infromationsside*/
    setTimeout(function() {
        window.location.href = "teorier.html";
      }, 800);
}

function jupiterZoom(){
    alert("Du har valgt en planet som ikke er lavet. Vælg JORDEN, MARS eller UFO");
}

function neptunZoom(){
    alert("Du har valgt en planet som ikke er lavet. Vælg JORDEN, MARS eller UFO");
}

function saturnZoom(){
    alert("Du har valgt en planet som ikke er lavet. Vælg JORDEN, MARS eller UFO");
}

function uranusZoom(){
    alert("Du har valgt en planet som ikke er lavet. Vælg JORDEN, MARS eller UFO");
}

function venusZoom(){
    alert("Du har valgt en planet som ikke er lavet. Vælg JORDEN, MARS eller UFO");
}