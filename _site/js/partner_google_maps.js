var markers = [
  ['Staatliche Berufsschule II Bayreuth', new google.maps.LatLng(49.9409134, 11.5993013)],
  ['SPS el-it Dobruska', new google.maps.LatLng(50.2883585, 16.1557452)],
  ['LBS Tschuggmall Brixen', new google.maps.LatLng(46.7081057, 11.6502283)]
];

function makeInfoWindowEvent(map, infowindow, contentString, marker) {
  google.maps.event.addListener(marker, 'click', function() {
    infowindow.setContent(contentString);
    infowindow.open(map, marker);
  });
}

function initialize() {
    var myOptions = {
        zoom: 4,
        center: new google.maps.LatLng(49.0, 13.0),
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    var map = new google.maps.Map(document.getElementById('map_canvas'), myOptions);

    console.log('mapping ');

    var marker = new google.maps.Marker({
      position: markers[0][1],
      map: map
    });
    makeInfoWindowEvent(map, new google.maps.InfoWindow(), markers[0][0], marker);

    var marker1 = new google.maps.Marker({
        position: markers[1][1],
        map: map
    });
    makeInfoWindowEvent(map, new google.maps.InfoWindow(), markers[1][0], marker1);

    var marker2 = new google.maps.Marker({
        position: markers[2][1],
        map: map
    });
    makeInfoWindowEvent(map, new google.maps.InfoWindow(), markers[2][0], marker2);
}
google.maps.event.addDomListener(window, 'load', initialize);