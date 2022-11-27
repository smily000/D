

var LM 



var favoritePlaces = [
    {content:'<strong>Home Sweet Home!<strong>', coordinates:{lat:41.6480783,lng:-88.0870552}, iconImagePath:"one.png"},                                                                                                   
    {content:'New Delhi', coordinates:{lat:28.6139,lng:77.2090}, iconImagePath:"flag.png"},
    {content:'mexico city ', coordinates:{lat:19.4326,lng:99.1332}, iconImagePath:"flag.png"},
    {content:'seoul', coordinates:{lat:37.5665,lng:37.5665}, iconImagePath:"flag.png"},
    {content:'beijing', coordinates:{lat:39.9042,lng:116.4074}, iconImagePath:"flag.png"},
    {content:'tokyo', coordinates:{lat:35.6762,lng:139.6503}, iconImagePath:"flag.png"},
    {content:'berlin', coordinates:{lat:52.5200,lng:13.4050}, iconImagePath:"flag.png"},
    {content:'london', coordinates:{lat:51.5072,lng:0.1276}, iconImagePath:"flag.png"},

]; 

var currentPlaceIndex = 0;
var currentPlace = favoritePlaces[currentPlaceIndex];
var score = 0


function initstart() {
    console.log('map')
    
}



function initMap() {
    
    LM = new google.maps.Map(document.getElementById('ID'), {
        center: {lat:0,lng:0},zoom: 8});

        var marker1 = new google.maps.Marker({position:{lat:37.0902,lng:-95.7129}, map:LM});
        marker1.setIcon('https://maps.google.com/mapfiles/kml/shapes/info-i_maps.png');
        var infoWindow = new google.maps.InfoWindow({content:"United States"});
        marker1.addListener('click', function() {
            infoWindow.open(LM, marker1);
            ++score
            SetScore(score)
            
            
        });
        var marker2= new google.maps.Marker({position:{lat:23.6345,lng:-102.5528}, map:LM});
        marker2.setIcon('https://maps.google.com/mapfiles/kml/shapes/info-i_maps.png');
        var infoWindow2 = new google.maps.InfoWindow({content:'Mexico'});
        marker2.addListener('click', function() {
            infoWindow2.open(LM, marker2);
            ++score
            SetScore(score)
            
        });
        var marker3= new google.maps.Marker({position:{lat:35.9078,lng:127.7669}, map:LM});
        marker3.setIcon('https://maps.google.com/mapfiles/kml/shapes/info-i_maps.png');
        var infoWindow3 = new google.maps.InfoWindow({content:'South Korea'});
        marker3.addListener('click', function() {
            infoWindow3.open(LM, marker3);
            ++score
            SetScore(score)
            
        });

        var marker4= new google.maps.Marker({position:{lat:35.8617,lng:104.1954}, map:LM});
        marker4.setIcon('https://maps.google.com/mapfiles/kml/shapes/info-i_maps.png');
        var infoWindow4 = new google.maps.InfoWindow({content:'China'});
        marker4.addListener('click', function() {
            infoWindow4.open(LM, marker4);
            ++score
            SetScore(score)
            
        });
        var marker5= new google.maps.Marker({position:{lat:36.2048,lng:138.2529}, map:LM});
        marker5.setIcon('https://maps.google.com/mapfiles/kml/shapes/info-i_maps.png');
        var infoWindow5 = new google.maps.InfoWindow({content:'Japan'});
        marker5.addListener('click', function() {
            infoWindow5.open(LM, marker5);
            ++score
            SetScore(score)
            
        });
        var marker6= new google.maps.Marker({position:{lat:51.1657,lng:10.4515}, map:LM});
        marker6.setIcon('https://maps.google.com/mapfiles/kml/shapes/info-i_maps.png');
        var infoWindow6 = new google.maps.InfoWindow({content:'Germany'});
        marker6.addListener('click', function() {
            infoWindow6.open(LM, marker6);
            ++score
            SetScore(score)
            
        });
        var marker7= new google.maps.Marker({position:{lat:55.3781,lng:3.4360}, map:LM});
        marker7.setIcon('https://maps.google.com/mapfiles/kml/shapes/info-i_maps.png');
        var infoWindow7 = new google.maps.InfoWindow({content:'United Kingdom '});
        marker7.addListener('click', function() {
            infoWindow7.open(LM, marker7);
            ++score
            SetScore(score)
            
        });


        var marker8= new google.maps.Marker({position:{lat:20.5937,lng:78.9629}, map:LM});
        marker8.setIcon('https://maps.google.com/mapfiles/kml/shapes/info-i_maps.png');
        var infoWindow8 = new google.maps.InfoWindow({content:'India  '});
        marker8.addListener('click', function() {
            infoWindow8.open(LM, marker8);
            
            
        });
       
        
    SetScore(score);
    SetHint("hint")
    
    google.maps.event.addListener(LM,'idle', function () {
    
        updateGame();
    });
}





function SetScore(newScore) {
    
    document.getElementById("lol-id").value = newScore;
    
    if (newScore == 7){
        alert("Congrats in winning this are the countries that I want to visit")
    }
    

    
}


function SetHint(hint) {
    document.getElementById("lol2-id").value = hint;  
    
};




function updateGame() {
    console.log('UpdateGame()');
    var zoomLevel = LM.getZoom();


    var inBounds = false;
    SetHint("You are getting cold");

    
    
    if (inBounds == false){
        SetHint("You are getting warm keep going!");
        
        
    } 
    
   

   
    if (LM.getBounds().contains(currentPlace.coordinates)) {
        inBounds = true;
        SetHint("you are on fire keep going")  
         
    }

    
   
    console.log("inBounds:"+inBounds+" zoomLevel:"+zoomLevel);
}

