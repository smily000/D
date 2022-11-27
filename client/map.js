var gMap; 

function initmap(){
    gMap = new google.maps.Map(document.getElementById('mapid'),{center:{lat:41.878,lng:10},zoom:3});
}
function intiApplication(){
    console.log('map mania')
}