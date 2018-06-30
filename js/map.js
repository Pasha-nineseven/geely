google.maps.event.addDomListener(window, 'load', initMap);

function initMap() {
    var icon = "img/map_point.png";
    var pointA = new google.maps.LatLng(53.93253021, 27.45783),
        pointB = new google.maps.LatLng(53.90525543, 27.55353662);

    var myCoordinates = [
        new google.maps.LatLng(53.905260,27.553532),
        new google.maps.LatLng(53.905857,27.552915),
        new google.maps.LatLng(53.906691,27.552014),
        new google.maps.LatLng(53.907052,27.551735),
        new google.maps.LatLng(53.907589,27.551333),
        new google.maps.LatLng(53.907810,27.551140),
        new google.maps.LatLng(53.908309,27.550571),
        new google.maps.LatLng(53.909030,27.549820),
        new google.maps.LatLng(53.909513,27.549284),
        new google.maps.LatLng(53.910531,27.548198),
        new google.maps.LatLng(53.911271,27.547447),
        new google.maps.LatLng(53.911459,27.547286),
        new google.maps.LatLng(53.911560,27.547168),
        new google.maps.LatLng(53.911885,27.546701),
        new google.maps.LatLng(53.912282,27.546054),
        new google.maps.LatLng(53.912440,27.545737),
        new google.maps.LatLng(53.912744,27.545002),
        new google.maps.LatLng(53.912880,27.544600),
        new google.maps.LatLng(53.913076,27.543972),
        new google.maps.LatLng(53.913360,27.543087),
        new google.maps.LatLng(53.913876,27.541419),
        new google.maps.LatLng(53.914280,27.540139),
        new google.maps.LatLng(53.914987,27.538080),
        new google.maps.LatLng(53.915212,27.537479),
        new google.maps.LatLng(53.915521,27.536889),
        new google.maps.LatLng(53.916032,27.535857),
        new google.maps.LatLng(53.916405,27.535283),
        new google.maps.LatLng(53.917071,27.534382),
        new google.maps.LatLng(53.917529,27.533781),
        new google.maps.LatLng(53.918398,27.532667),
        new google.maps.LatLng(53.919168,27.531631),
        new google.maps.LatLng(53.920076,27.530469),
        new google.maps.LatLng(53.920894,27.529401),
        new google.maps.LatLng(53.921888,27.528080),
        new google.maps.LatLng(53.922767,27.526916),
        new google.maps.LatLng(53.923253,27.526230),
        new google.maps.LatLng(53.923830,27.525272),
        new google.maps.LatLng(53.924187,27.524617),
        new google.maps.LatLng(53.924730,27.523582),
        new google.maps.LatLng(53.925109,27.522831),
        new google.maps.LatLng(53.925616,27.521812),
        new google.maps.LatLng(53.926026,27.520949),
        new google.maps.LatLng(53.926633,27.519736),
        new google.maps.LatLng(53.927031,27.518985),
        new google.maps.LatLng(53.927461,27.518100),
        new google.maps.LatLng(53.927895,27.517255),
        new google.maps.LatLng(53.928959,27.515130),
        new google.maps.LatLng(53.929502,27.514090),
        new google.maps.LatLng(53.929603,27.513921),
        new google.maps.LatLng(53.929745,27.513811),
        new google.maps.LatLng(53.929905,27.513741),
        new google.maps.LatLng(53.930011,27.513787),
        new google.maps.LatLng(53.930085,27.513865),
        new google.maps.LatLng(53.930126,27.513937),
        new google.maps.LatLng(53.930167,27.514101),
        new google.maps.LatLng(53.930158,27.514352),
        new google.maps.LatLng(53.930130,27.514564),
        new google.maps.LatLng(53.930029,27.515138),
        new google.maps.LatLng(53.929941,27.515640),
        new google.maps.LatLng(53.929903,27.515806),
        new google.maps.LatLng(53.929859,27.515905),
        new google.maps.LatLng(53.929802,27.515981),
        new google.maps.LatLng(53.929730,27.516010),
        new google.maps.LatLng(53.929643,27.516015),
        new google.maps.LatLng(53.929554,27.515997),
        new google.maps.LatLng(53.929491,27.515919),
        new google.maps.LatLng(53.929444,27.515814),
        new google.maps.LatLng(53.929390,27.515690),
        new google.maps.LatLng(53.929366,27.515559),
        new google.maps.LatLng(53.929364,27.515312),
        new google.maps.LatLng(53.929323,27.514207),
        new google.maps.LatLng(53.929303,27.513461),
        new google.maps.LatLng(53.929167,27.512081),
        new google.maps.LatLng(53.929082,27.511496),
        new google.maps.LatLng(53.928891,27.510453),
        new google.maps.LatLng(53.928756,27.509949),
        new google.maps.LatLng(53.928598,27.509466),
        new google.maps.LatLng(53.928274,27.508607),
        new google.maps.LatLng(53.928005,27.508087),
        new google.maps.LatLng(53.927810,27.507679),
        new google.maps.LatLng(53.927607,27.507357),
        new google.maps.LatLng(53.927431,27.507110),
        new google.maps.LatLng(53.927399,27.506955),
        new google.maps.LatLng(53.927358,27.506837),
        new google.maps.LatLng(53.927323,27.506746),
        new google.maps.LatLng(53.927311,27.506660),
        new google.maps.LatLng(53.927333,27.506558),
        new google.maps.LatLng(53.927405,27.506338),
        new google.maps.LatLng(53.927494,27.506161),
        new google.maps.LatLng(53.927595,27.505962),
        new google.maps.LatLng(53.927705,27.505694),
        new google.maps.LatLng(53.927778,27.505496),
        new google.maps.LatLng(53.927958,27.505136),
        new google.maps.LatLng(53.928204,27.504632),
        new google.maps.LatLng(53.928370,27.504109),
        new google.maps.LatLng(53.928550,27.503433),
        new google.maps.LatLng(53.928702,27.502800),
        new google.maps.LatLng(53.928814,27.502349),
        new google.maps.LatLng(53.928919,27.502006),
        new google.maps.LatLng(53.929010,27.501695),
        new google.maps.LatLng(53.929054,27.501453),
        new google.maps.LatLng(53.929029,27.501367),
        new google.maps.LatLng(53.928972,27.501233),
        new google.maps.LatLng(53.928900,27.501158),
        new google.maps.LatLng(53.928833,27.501083),
        new google.maps.LatLng(53.928758,27.501056),
        new google.maps.LatLng(53.928723,27.500944),
        new google.maps.LatLng(53.928868,27.500391),
        new google.maps.LatLng(53.929061,27.499565),
        new google.maps.LatLng(53.929351,27.498346),
        new google.maps.LatLng(53.929547,27.497413),
        new google.maps.LatLng(53.929749,27.496084),
        new google.maps.LatLng(53.929818,27.495365),
        new google.maps.LatLng(53.929869,27.494423),
        new google.maps.LatLng(53.929913,27.493469),
        new google.maps.LatLng(53.929973,27.492111),
        new google.maps.LatLng(53.929992,27.491505),
        new google.maps.LatLng(53.930064,27.489418),
        new google.maps.LatLng(53.930126,27.486605),
        new google.maps.LatLng(53.930193,27.482713),
        new google.maps.LatLng(53.930282,27.480436),
        new google.maps.LatLng(53.930409,27.478706),
        new google.maps.LatLng(53.930484,27.478132),
        new google.maps.LatLng(53.930592,27.477100),
        new google.maps.LatLng(53.930741,27.476006),
        new google.maps.LatLng(53.930899,27.474852),
        new google.maps.LatLng(53.931009,27.473849),
        new google.maps.LatLng(53.931123,27.472642),
        new google.maps.LatLng(53.931452,27.469390),
        new google.maps.LatLng(53.931569,27.468440),
        new google.maps.LatLng(53.931743,27.466632),
        new google.maps.LatLng(53.931964,27.464333),
        new google.maps.LatLng(53.932071,27.463207),
        new google.maps.LatLng(53.932249,27.461584),
        new google.maps.LatLng(53.932354,27.460908),
        new google.maps.LatLng(53.932597,27.459711),
        new google.maps.LatLng(53.932666,27.459481),
        new google.maps.LatLng(53.932609,27.459438),
        new google.maps.LatLng(53.932483,27.459341),
        new google.maps.LatLng(53.932344,27.459202),
        new google.maps.LatLng(53.932231,27.458961),
        new google.maps.LatLng(53.932212,27.458698),
        new google.maps.LatLng(53.932237,27.458478),
        new google.maps.LatLng(53.932263,27.458087),
        new google.maps.LatLng(53.932414,27.457204),
        new google.maps.LatLng(53.932632,27.456061),
        new google.maps.LatLng(53.932778,27.455336),
        new google.maps.LatLng(53.932788,27.455325),
        new google.maps.LatLng(53.932809,27.455340),
        new google.maps.LatLng(53.932838,27.455369),
        new google.maps.LatLng(53.932872,27.455403),
        new google.maps.LatLng(53.932872,27.455414),
        new google.maps.LatLng(53.932866,27.455443),
        new google.maps.LatLng(53.932803,27.455721),
        new google.maps.LatLng(53.932729,27.456105),
        new google.maps.LatLng(53.932613,27.456711),
        new google.maps.LatLng(53.932502,27.457264),
        new google.maps.LatLng(53.932444,27.457584),
        new google.maps.LatLng(53.932467,27.457755),
        new google.maps.LatLng(53.932494,27.457800),
        new google.maps.LatLng(53.932538,27.457843)
    ];

    
    myOptions = {
        zoom: 12,
        mapTypeControl: false,
        navigationControl: false,
        scrollwheel: false,
        streetViewControl: false,
        zoomControl: true,
        fullscreenControl: false,
        styles: [{"featureType":"all","elementType":"geometry.fill","stylers":[{"weight":"2.00"}]},{"featureType":"all","elementType":"geometry.stroke","stylers":[{"color":"#9c9c9c"}]},{"featureType":"all","elementType":"labels.text","stylers":[{"visibility":"on"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},{"featureType":"landscape","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"landscape.man_made","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},{"featureType":"road","elementType":"geometry.fill","stylers":[{"color":"#eeeeee"}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"color":"#7b7b7b"}]},{"featureType":"road","elementType":"labels.text.stroke","stylers":[{"color":"#ffffff"}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#46bcec"},{"visibility":"on"}]},{"featureType":"water","elementType":"geometry.fill","stylers":[{"color":"#c8d7d4"}]},{"featureType":"water","elementType":"labels.text.fill","stylers":[{"color":"#070707"}]},{"featureType":"water","elementType":"labels.text.stroke","stylers":[{"color":"#ffffff"}]}],
        zoomControlOptions: {
            position: google.maps.ControlPosition.RIGHT_CENTER
        },
        center: pointA,
    },
    map = new google.maps.Map(document.getElementById('header-address-map'), myOptions);

    markerA = new google.maps.Marker({
        position: pointA,
        icon: icon,
        map: map
    });
    markerB = new google.maps.Marker({
        position: pointB,
        icon: icon,
        map: map,
        clickable: false,
    });

    var autoPath = new google.maps.Polyline({
        path: myCoordinates,
        geodesic: true,
        strokeColor: '#0167B2',
        strokeOpacity: 1.0,
        strokeWeight: 4
    });

    autoPath.setMap(map);


    //resize map
    google.maps.event.addDomListener(window, "resize", function() {
        var center = map.getCenter();
        google.maps.event.trigger(map, "resize");
        map.setCenter(center);
    });
}



function marsh1056(){
    var icon = "img/map_point.png";
    var pointA = new google.maps.LatLng(53.93253021, 27.45783),
        pointB = new google.maps.LatLng(53.889742,27.557283);

    var marsh_1056__coords = [
        new google.maps.LatLng(53.889742,27.557283),
        new google.maps.LatLng(53.890792,27.553861),
        new google.maps.LatLng(53.891089,27.552530),
        new google.maps.LatLng(53.891734,27.549430),
        new google.maps.LatLng(53.891968,27.547831),
        new google.maps.LatLng(53.892360,27.545986),
        new google.maps.LatLng(53.892828,27.544076),
        new google.maps.LatLng(53.892881,27.544114),
        new google.maps.LatLng(53.892960,27.544216),
        new google.maps.LatLng(53.893197,27.544575),
        new google.maps.LatLng(53.893498,27.545004),
        new google.maps.LatLng(53.893818,27.545476),
        new google.maps.LatLng(53.894043,27.545793),
        new google.maps.LatLng(53.894147,27.545932),
        new google.maps.LatLng(53.894217,27.545986),
        new google.maps.LatLng(53.894289,27.546034),
        new google.maps.LatLng(53.894397,27.546318),
        new google.maps.LatLng(53.894681,27.547096),
        new google.maps.LatLng(53.895186,27.548463),
        new google.maps.LatLng(53.895386,27.548806),
        new google.maps.LatLng(53.895778,27.549509),
        new google.maps.LatLng(53.896043,27.549976),
        new google.maps.LatLng(53.896207,27.550196),
        new google.maps.LatLng(53.896407,27.550571),
        new google.maps.LatLng(53.896770,27.551328),
        new google.maps.LatLng(53.897176,27.552188),
        new google.maps.LatLng(53.897426,27.552655),
        new google.maps.LatLng(53.897830,27.553502),
        new google.maps.LatLng(53.898070,27.553947),
        new google.maps.LatLng(53.898456,27.554745),
        new google.maps.LatLng(53.898709,27.555222),
        new google.maps.LatLng(53.899186,27.556150),
        new google.maps.LatLng(53.899373,27.556574),
        new google.maps.LatLng(53.899941,27.557684),
        new google.maps.LatLng(53.900575,27.558937),
        new google.maps.LatLng(53.900626,27.558937),
        new google.maps.LatLng(53.900733,27.558797),
        new google.maps.LatLng(53.901226,27.558138),
        new google.maps.LatLng(53.901751,27.557392),
        new google.maps.LatLng(53.902560,27.556345),
        new google.maps.LatLng(53.903549,27.555261),
        new google.maps.LatLng(53.904440,27.554366),
        new google.maps.LatLng(53.904955,27.553840),
        new google.maps.LatLng(53.905811,27.552966),
        new google.maps.LatLng(53.906686,27.552023),
        new google.maps.LatLng(53.907255,27.551589),
        new google.maps.LatLng(53.907836,27.551111),
        new google.maps.LatLng(53.908924,27.549934),
        new google.maps.LatLng(53.909344,27.549478),
        new google.maps.LatLng(53.910466,27.548274),
        new google.maps.LatLng(53.911294,27.547399),
        new google.maps.LatLng(53.911522,27.547239),
        new google.maps.LatLng(53.911702,27.546965),
        new google.maps.LatLng(53.912066,27.546428),
        new google.maps.LatLng(53.912331,27.546015),
        new google.maps.LatLng(53.912657,27.545259),
        new google.maps.LatLng(53.912846,27.544696),
        new google.maps.LatLng(53.913099,27.543912),
        new google.maps.LatLng(53.913495,27.542629),
        new google.maps.LatLng(53.914158,27.540574),
        new google.maps.LatLng(53.914651,27.538976),
        new google.maps.LatLng(53.914986,27.538075),
        new google.maps.LatLng(53.915286,27.537340),
        new google.maps.LatLng(53.915599,27.536653),
        new google.maps.LatLng(53.916022,27.535886),
        new google.maps.LatLng(53.916383,27.535312),
        new google.maps.LatLng(53.916862,27.534641),
        new google.maps.LatLng(53.917292,27.534094),
        new google.maps.LatLng(53.917788,27.533461),
        new google.maps.LatLng(53.918258,27.532833),
        new google.maps.LatLng(53.918735,27.532233),
        new google.maps.LatLng(53.919197,27.531616),
        new google.maps.LatLng(53.920122,27.530396),
        new google.maps.LatLng(53.920843,27.529478),
        new google.maps.LatLng(53.921174,27.529006),
        new google.maps.LatLng(53.921787,27.528228),
        new google.maps.LatLng(53.922457,27.527327),
        new google.maps.LatLng(53.923101,27.526443),
        new google.maps.LatLng(53.923702,27.525509),
        new google.maps.LatLng(53.923939,27.525096),
        new google.maps.LatLng(53.924207,27.524587),
        new google.maps.LatLng(53.924702,27.523607),
        new google.maps.LatLng(53.925325,27.522378),
        new google.maps.LatLng(53.926038,27.520914),
        new google.maps.LatLng(53.926888,27.519267),
        new google.maps.LatLng(53.927788,27.517460),
        new google.maps.LatLng(53.928691,27.515673),
        new google.maps.LatLng(53.929727,27.513635),
        new google.maps.LatLng(53.930697,27.511639),
        new google.maps.LatLng(53.931546,27.509633),
        new google.maps.LatLng(53.932313,27.507508),
        new google.maps.LatLng(53.932957,27.505689),
        new google.maps.LatLng(53.933596,27.503868),
        new google.maps.LatLng(53.934363,27.501675),
        new google.maps.LatLng(53.935137,27.499386),
        new google.maps.LatLng(53.936250,27.496059),
        new google.maps.LatLng(53.936635,27.494654),
        new google.maps.LatLng(53.937013,27.492804),
        new google.maps.LatLng(53.937177,27.491733),
        new google.maps.LatLng(53.937294,27.490709),
        new google.maps.LatLng(53.937417,27.489228),
        new google.maps.LatLng(53.937426,27.488660),
        new google.maps.LatLng(53.937471,27.486916),
        new google.maps.LatLng(53.937532,27.484556),
        new google.maps.LatLng(53.937576,27.482330),
        new google.maps.LatLng(53.937685,27.480709),
        new google.maps.LatLng(53.937765,27.479913),
        new google.maps.LatLng(53.937712,27.479854),
        new google.maps.LatLng(53.937213,27.479490),
        new google.maps.LatLng(53.936745,27.479135),
        new google.maps.LatLng(53.936329,27.478862),
        new google.maps.LatLng(53.936029,27.478760),
        new google.maps.LatLng(53.935751,27.478706),
        new google.maps.LatLng(53.935368,27.478663),
        new google.maps.LatLng(53.934860,27.478604),
        new google.maps.LatLng(53.934158,27.478513),
        new google.maps.LatLng(53.933580,27.478427),
        new google.maps.LatLng(53.932724,27.478218),
        new google.maps.LatLng(53.932301,27.478110),
        new google.maps.LatLng(53.931157,27.477794),
        new google.maps.LatLng(53.930542,27.477612),
        new google.maps.LatLng(53.930529,27.477569),
        new google.maps.LatLng(53.930564,27.477343),
        new google.maps.LatLng(53.930722,27.476195),
        new google.maps.LatLng(53.930939,27.474489),
        new google.maps.LatLng(53.931091,27.473189),
        new google.maps.LatLng(53.931303,27.470934),
        new google.maps.LatLng(53.931562,27.468419),
        new google.maps.LatLng(53.931681,27.467331),
        new google.maps.LatLng(53.931782,27.466193),
        new google.maps.LatLng(53.931947,27.464521),
        new google.maps.LatLng(53.932143,27.462506),
        new google.maps.LatLng(53.932313,27.461107),
        new google.maps.LatLng(53.932481,27.460217),
        new google.maps.LatLng(53.932597,27.459711),
        new google.maps.LatLng(53.933022,27.458081),
        new google.maps.LatLng(53.933931,27.455710)
    ];

    
    myOptions = {
        zoom: 12,
        mapTypeControl: false,
        navigationControl: false,
        scrollwheel: false,
        streetViewControl: false,
        zoomControl: true,
        fullscreenControl: false,
        styles: [{"featureType":"all","elementType":"geometry.fill","stylers":[{"weight":"2.00"}]},{"featureType":"all","elementType":"geometry.stroke","stylers":[{"color":"#9c9c9c"}]},{"featureType":"all","elementType":"labels.text","stylers":[{"visibility":"on"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},{"featureType":"landscape","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"landscape.man_made","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},{"featureType":"road","elementType":"geometry.fill","stylers":[{"color":"#eeeeee"}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"color":"#7b7b7b"}]},{"featureType":"road","elementType":"labels.text.stroke","stylers":[{"color":"#ffffff"}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#46bcec"},{"visibility":"on"}]},{"featureType":"water","elementType":"geometry.fill","stylers":[{"color":"#c8d7d4"}]},{"featureType":"water","elementType":"labels.text.fill","stylers":[{"color":"#070707"}]},{"featureType":"water","elementType":"labels.text.stroke","stylers":[{"color":"#ffffff"}]}],
        zoomControlOptions: {
            position: google.maps.ControlPosition.RIGHT_CENTER
        },
        center: pointA,
    },
    map = new google.maps.Map(document.getElementById('header-address-map'), myOptions);

    markerA = new google.maps.Marker({
        position: pointA,
        icon: icon,
        map: map
    });
    markerB = new google.maps.Marker({
        position: pointB,
        icon: icon,
        map: map,
        clickable: false,
    });

    var autoPath = new google.maps.Polyline({
        path: marsh_1056__coords,
        geodesic: true,
        strokeColor: '#0167B2',
        strokeOpacity: 1.0,
        strokeWeight: 4
    });

    autoPath.setMap(map);


    //resize map
    google.maps.event.addDomListener(window, "resize", function() {
        var center = map.getCenter();
        google.maps.event.trigger(map, "resize");
        map.setCenter(center);
    });

}


function marsh130(){
    var icon = "img/map_point.png";
    var pointA = new google.maps.LatLng(53.93253021, 27.45783),
        pointB = new google.maps.LatLng(53.910715,27.495538);

    var marsh_1056__coords = [
        new google.maps.LatLng(53.910715,27.495538),
        new google.maps.LatLng(53.911511,27.495388),
        new google.maps.LatLng(53.912712,27.495270),
        new google.maps.LatLng(53.914312,27.495002),
        new google.maps.LatLng(53.915045,27.494949),
        new google.maps.LatLng(53.915519,27.494916),
        new google.maps.LatLng(53.916024,27.494992),
        new google.maps.LatLng(53.916530,27.495185),
        new google.maps.LatLng(53.917042,27.495431),
        new google.maps.LatLng(53.917554,27.495764),
        new google.maps.LatLng(53.917794,27.495957),
        new google.maps.LatLng(53.918316,27.496451),
        new google.maps.LatLng(53.918802,27.496977),
        new google.maps.LatLng(53.919800,27.498254),
        new google.maps.LatLng(53.920600,27.499267),
        new google.maps.LatLng(53.921112,27.499879),
        new google.maps.LatLng(53.922072,27.500962),
        new google.maps.LatLng(53.922729,27.501788),
        new google.maps.LatLng(53.923115,27.502282),
        new google.maps.LatLng(53.923624,27.502891),
        new google.maps.LatLng(53.924117,27.503449),
        new google.maps.LatLng(53.924641,27.504072),
        new google.maps.LatLng(53.925309,27.504805),
        new google.maps.LatLng(53.925922,27.505535),
        new google.maps.LatLng(53.926307,27.505985),
        new google.maps.LatLng(53.926939,27.506758),
        new google.maps.LatLng(53.927330,27.507230),
        new google.maps.LatLng(53.927425,27.507455),
        new google.maps.LatLng(53.927457,27.507680),
        new google.maps.LatLng(53.927450,27.507873),
        new google.maps.LatLng(53.927324,27.508024),
        new google.maps.LatLng(53.927172,27.508056),
        new google.maps.LatLng(53.926977,27.507991),
        new google.maps.LatLng(53.926749,27.507895),
        new google.maps.LatLng(53.926661,27.507745),
        new google.maps.LatLng(53.926623,27.507487),
        new google.maps.LatLng(53.926642,27.507262),
        new google.maps.LatLng(53.926743,27.506994),
        new google.maps.LatLng(53.926819,27.506768),
        new google.maps.LatLng(53.927090,27.506135),
        new google.maps.LatLng(53.927463,27.505266),
        new google.maps.LatLng(53.928063,27.503421),
        new google.maps.LatLng(53.928537,27.501715),
        new google.maps.LatLng(53.928947,27.499977),
        new google.maps.LatLng(53.929461,27.497751),
        new google.maps.LatLng(53.929783,27.495777),
        new google.maps.LatLng(53.929930,27.493224),
        new google.maps.LatLng(53.930019,27.490864),
        new google.maps.LatLng(53.930082,27.488370),
        new google.maps.LatLng(53.930151,27.485827),
        new google.maps.LatLng(53.930234,27.482767),
        new google.maps.LatLng(53.930297,27.480503),
        new google.maps.LatLng(53.930451,27.478366),
        new google.maps.LatLng(53.930590,27.477046),
        new google.maps.LatLng(53.930741,27.476102),
        new google.maps.LatLng(53.931046,27.473654),
        new google.maps.LatLng(53.931298,27.471197),
        new google.maps.LatLng(53.931542,27.468550),
        new google.maps.LatLng(53.931769,27.466662),
        new google.maps.LatLng(53.932211,27.461862),
        new google.maps.LatLng(53.932431,27.460458),
        new google.maps.LatLng(53.932696,27.459278),
        new google.maps.LatLng(53.932848,27.458731),
        new google.maps.LatLng(53.933189,27.457712),
        new google.maps.LatLng(53.933612,27.456521),
        new google.maps.LatLng(53.933890,27.455770),
        new google.maps.LatLng(53.933947,27.455652)
    ];

    
    myOptions = {
        zoom: 12,
        mapTypeControl: false,
        navigationControl: false,
        scrollwheel: false,
        streetViewControl: false,
        zoomControl: true,
        fullscreenControl: false,
        styles: [{"featureType":"all","elementType":"geometry.fill","stylers":[{"weight":"2.00"}]},{"featureType":"all","elementType":"geometry.stroke","stylers":[{"color":"#9c9c9c"}]},{"featureType":"all","elementType":"labels.text","stylers":[{"visibility":"on"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},{"featureType":"landscape","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"landscape.man_made","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},{"featureType":"road","elementType":"geometry.fill","stylers":[{"color":"#eeeeee"}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"color":"#7b7b7b"}]},{"featureType":"road","elementType":"labels.text.stroke","stylers":[{"color":"#ffffff"}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#46bcec"},{"visibility":"on"}]},{"featureType":"water","elementType":"geometry.fill","stylers":[{"color":"#c8d7d4"}]},{"featureType":"water","elementType":"labels.text.fill","stylers":[{"color":"#070707"}]},{"featureType":"water","elementType":"labels.text.stroke","stylers":[{"color":"#ffffff"}]}],
        zoomControlOptions: {
            position: google.maps.ControlPosition.RIGHT_CENTER
        },
        center: pointA,
    },
    map = new google.maps.Map(document.getElementById('header-address-map'), myOptions);

    markerA = new google.maps.Marker({
        position: pointA,
        icon: icon,
        map: map
    });
    markerB = new google.maps.Marker({
        position: pointB,
        icon: icon,
        map: map,
        clickable: false,
    });

    var autoPath = new google.maps.Polyline({
        path: marsh_1056__coords,
        geodesic: true,
        strokeColor: '#0167B2',
        strokeOpacity: 1.0,
        strokeWeight: 4
    });

    autoPath.setMap(map);


    //resize map
    google.maps.event.addDomListener(window, "resize", function() {
        var center = map.getCenter();
        google.maps.event.trigger(map, "resize");
        map.setCenter(center);
    });

}


function marsh1419(){
    var icon = "img/map_point.png";
    var pointA = new google.maps.LatLng(53.93253021, 27.45783),
        pointB = new google.maps.LatLng(53.909863,27.499138);

    var marsh_1419__coords = [
        new google.maps.LatLng(53.909863,27.499138),
        new google.maps.LatLng(53.909787,27.497518),
        new google.maps.LatLng(53.909680,27.496209),
        new google.maps.LatLng(53.909743,27.496144),
        new google.maps.LatLng(53.909876,27.495994),
        new google.maps.LatLng(53.909939,27.495801),
        new google.maps.LatLng(53.909983,27.495640),
        new google.maps.LatLng(53.910028,27.495586),
        new google.maps.LatLng(53.910369,27.495554),
        new google.maps.LatLng(53.915045,27.494949),
        new google.maps.LatLng(53.915519,27.494916),
        new google.maps.LatLng(53.916024,27.494992),
        new google.maps.LatLng(53.916530,27.495185),
        new google.maps.LatLng(53.917042,27.495431),
        new google.maps.LatLng(53.917554,27.495764),
        new google.maps.LatLng(53.917794,27.495957),
        new google.maps.LatLng(53.918316,27.496451),
        new google.maps.LatLng(53.918802,27.496977),
        new google.maps.LatLng(53.919800,27.498254),
        new google.maps.LatLng(53.920600,27.499267),
        new google.maps.LatLng(53.921112,27.499879),
        new google.maps.LatLng(53.922072,27.500962),
        new google.maps.LatLng(53.922729,27.501788),
        new google.maps.LatLng(53.923115,27.502282),
        new google.maps.LatLng(53.923624,27.502891),
        new google.maps.LatLng(53.924117,27.503449),
        new google.maps.LatLng(53.924641,27.504072),
        new google.maps.LatLng(53.925309,27.504805),
        new google.maps.LatLng(53.925922,27.505535),
        new google.maps.LatLng(53.926307,27.505985),
        new google.maps.LatLng(53.926939,27.506758),
        new google.maps.LatLng(53.927330,27.507230),
        new google.maps.LatLng(53.927425,27.507455),
        new google.maps.LatLng(53.927457,27.507680),
        new google.maps.LatLng(53.927450,27.507873),
        new google.maps.LatLng(53.927324,27.508024),
        new google.maps.LatLng(53.927172,27.508056),
        new google.maps.LatLng(53.926977,27.507991),
        new google.maps.LatLng(53.926749,27.507895),
        new google.maps.LatLng(53.926661,27.507745),
        new google.maps.LatLng(53.926623,27.507487),
        new google.maps.LatLng(53.926642,27.507262),
        new google.maps.LatLng(53.926743,27.506994),
        new google.maps.LatLng(53.926819,27.506768),
        new google.maps.LatLng(53.927090,27.506135),
        new google.maps.LatLng(53.927463,27.505266),
        new google.maps.LatLng(53.928063,27.503421),
        new google.maps.LatLng(53.928537,27.501715),
        new google.maps.LatLng(53.928947,27.499977),
        new google.maps.LatLng(53.929461,27.497751),
        new google.maps.LatLng(53.929783,27.495777),
        new google.maps.LatLng(53.929930,27.493224),
        new google.maps.LatLng(53.930019,27.490864),
        new google.maps.LatLng(53.930082,27.488370),
        new google.maps.LatLng(53.930151,27.485827),
        new google.maps.LatLng(53.930234,27.482767),
        new google.maps.LatLng(53.930297,27.480503),
        new google.maps.LatLng(53.930451,27.478366),
        new google.maps.LatLng(53.930590,27.477046),
        new google.maps.LatLng(53.930741,27.476102),
        new google.maps.LatLng(53.931046,27.473654),
        new google.maps.LatLng(53.931298,27.471197),
        new google.maps.LatLng(53.931542,27.468550),
        new google.maps.LatLng(53.931769,27.466662),
        new google.maps.LatLng(53.932211,27.461862),
        new google.maps.LatLng(53.932431,27.460458),
        new google.maps.LatLng(53.932696,27.459278),
        new google.maps.LatLng(53.932848,27.458731),
        new google.maps.LatLng(53.933189,27.457712),
        new google.maps.LatLng(53.933612,27.456521),
        new google.maps.LatLng(53.933890,27.455770),
        new google.maps.LatLng(53.933947,27.455652)
    ];

    
    myOptions = {
        zoom: 12,
        mapTypeControl: false,
        navigationControl: false,
        scrollwheel: false,
        streetViewControl: false,
        zoomControl: true,
        fullscreenControl: false,
        styles: [{"featureType":"all","elementType":"geometry.fill","stylers":[{"weight":"2.00"}]},{"featureType":"all","elementType":"geometry.stroke","stylers":[{"color":"#9c9c9c"}]},{"featureType":"all","elementType":"labels.text","stylers":[{"visibility":"on"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},{"featureType":"landscape","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"landscape.man_made","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},{"featureType":"road","elementType":"geometry.fill","stylers":[{"color":"#eeeeee"}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"color":"#7b7b7b"}]},{"featureType":"road","elementType":"labels.text.stroke","stylers":[{"color":"#ffffff"}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#46bcec"},{"visibility":"on"}]},{"featureType":"water","elementType":"geometry.fill","stylers":[{"color":"#c8d7d4"}]},{"featureType":"water","elementType":"labels.text.fill","stylers":[{"color":"#070707"}]},{"featureType":"water","elementType":"labels.text.stroke","stylers":[{"color":"#ffffff"}]}],
        zoomControlOptions: {
            position: google.maps.ControlPosition.RIGHT_CENTER
        },
        center: pointA,
    },
    map = new google.maps.Map(document.getElementById('header-address-map'), myOptions);

    markerA = new google.maps.Marker({
        position: pointA,
        icon: icon,
        map: map
    });
    markerB = new google.maps.Marker({
        position: pointB,
        icon: icon,
        map: map,
        clickable: false,
    });

    var autoPath = new google.maps.Polyline({
        path: marsh_1419__coords,
        geodesic: true,
        strokeColor: '#0167B2',
        strokeOpacity: 1.0,
        strokeWeight: 4
    });

    autoPath.setMap(map);


    //resize map
    google.maps.event.addDomListener(window, "resize", function() {
        var center = map.getCenter();
        google.maps.event.trigger(map, "resize");
        map.setCenter(center);
    });

}


function marsh499(){
    var icon = "img/map_point.png";
    var pointA = new google.maps.LatLng(53.93253021, 27.45783),
        pointB = new google.maps.LatLng(53.909863,27.499138);

    var marsh_499__coords = [
        new google.maps.LatLng(53.909863,27.499138),
        new google.maps.LatLng(53.909787,27.497518),
        new google.maps.LatLng(53.909680,27.496209),
        new google.maps.LatLng(53.909743,27.496144),
        new google.maps.LatLng(53.909876,27.495994),
        new google.maps.LatLng(53.909939,27.495801),
        new google.maps.LatLng(53.909983,27.495640),
        new google.maps.LatLng(53.910028,27.495586),
        new google.maps.LatLng(53.910369,27.495554),
        new google.maps.LatLng(53.915045,27.494949),
        new google.maps.LatLng(53.915519,27.494916),
        new google.maps.LatLng(53.916024,27.494992),
        new google.maps.LatLng(53.916530,27.495185),
        new google.maps.LatLng(53.917042,27.495431),
        new google.maps.LatLng(53.917554,27.495764),
        new google.maps.LatLng(53.917794,27.495957),
        new google.maps.LatLng(53.918316,27.496451),
        new google.maps.LatLng(53.918802,27.496977),
        new google.maps.LatLng(53.919800,27.498254),
        new google.maps.LatLng(53.920600,27.499267),
        new google.maps.LatLng(53.921112,27.499879),
        new google.maps.LatLng(53.922072,27.500962),
        new google.maps.LatLng(53.922729,27.501788),
        new google.maps.LatLng(53.923115,27.502282),
        new google.maps.LatLng(53.923624,27.502891),
        new google.maps.LatLng(53.924117,27.503449),
        new google.maps.LatLng(53.924641,27.504072),
        new google.maps.LatLng(53.925309,27.504805),
        new google.maps.LatLng(53.925922,27.505535),
        new google.maps.LatLng(53.926307,27.505985),
        new google.maps.LatLng(53.926939,27.506758),
        new google.maps.LatLng(53.927330,27.507230),
        new google.maps.LatLng(53.927425,27.507455),
        new google.maps.LatLng(53.927457,27.507680),
        new google.maps.LatLng(53.927450,27.507873),
        new google.maps.LatLng(53.927324,27.508024),
        new google.maps.LatLng(53.927172,27.508056),
        new google.maps.LatLng(53.926977,27.507991),
        new google.maps.LatLng(53.926749,27.507895),
        new google.maps.LatLng(53.926661,27.507745),
        new google.maps.LatLng(53.926623,27.507487),
        new google.maps.LatLng(53.926642,27.507262),
        new google.maps.LatLng(53.926743,27.506994),
        new google.maps.LatLng(53.926819,27.506768),
        new google.maps.LatLng(53.927090,27.506135),
        new google.maps.LatLng(53.927463,27.505266),
        new google.maps.LatLng(53.928063,27.503421),
        new google.maps.LatLng(53.928537,27.501715),
        new google.maps.LatLng(53.928947,27.499977),
        new google.maps.LatLng(53.929461,27.497751),
        new google.maps.LatLng(53.929783,27.495777),
        new google.maps.LatLng(53.929930,27.493224),
        new google.maps.LatLng(53.930019,27.490864),
        new google.maps.LatLng(53.930082,27.488370),
        new google.maps.LatLng(53.930151,27.485827),
        new google.maps.LatLng(53.930234,27.482767),
        new google.maps.LatLng(53.930297,27.480503),
        new google.maps.LatLng(53.930451,27.478366),
        new google.maps.LatLng(53.930590,27.477046),
        new google.maps.LatLng(53.930741,27.476102),
        new google.maps.LatLng(53.931046,27.473654),
        new google.maps.LatLng(53.931298,27.471197),
        new google.maps.LatLng(53.931542,27.468550),
        new google.maps.LatLng(53.931769,27.466662),
        new google.maps.LatLng(53.932211,27.461862),
        new google.maps.LatLng(53.932431,27.460458),
        new google.maps.LatLng(53.932696,27.459278),
        new google.maps.LatLng(53.932848,27.458731),
        new google.maps.LatLng(53.933189,27.457712),
        new google.maps.LatLng(53.933612,27.456521),
        new google.maps.LatLng(53.933890,27.455770),
        new google.maps.LatLng(53.933947,27.455652)
    ];

    
    myOptions = {
        zoom: 12,
        mapTypeControl: false,
        navigationControl: false,
        scrollwheel: false,
        streetViewControl: false,
        zoomControl: true,
        fullscreenControl: false,
        styles: [{"featureType":"all","elementType":"geometry.fill","stylers":[{"weight":"2.00"}]},{"featureType":"all","elementType":"geometry.stroke","stylers":[{"color":"#9c9c9c"}]},{"featureType":"all","elementType":"labels.text","stylers":[{"visibility":"on"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},{"featureType":"landscape","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"landscape.man_made","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},{"featureType":"road","elementType":"geometry.fill","stylers":[{"color":"#eeeeee"}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"color":"#7b7b7b"}]},{"featureType":"road","elementType":"labels.text.stroke","stylers":[{"color":"#ffffff"}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#46bcec"},{"visibility":"on"}]},{"featureType":"water","elementType":"geometry.fill","stylers":[{"color":"#c8d7d4"}]},{"featureType":"water","elementType":"labels.text.fill","stylers":[{"color":"#070707"}]},{"featureType":"water","elementType":"labels.text.stroke","stylers":[{"color":"#ffffff"}]}],
        zoomControlOptions: {
            position: google.maps.ControlPosition.RIGHT_CENTER
        },
        center: pointA,
    },
    map = new google.maps.Map(document.getElementById('header-address-map'), myOptions);

    markerA = new google.maps.Marker({
        position: pointA,
        icon: icon,
        map: map
    });
    markerB = new google.maps.Marker({
        position: pointB,
        icon: icon,
        map: map,
        clickable: false,
    });

    var autoPath = new google.maps.Polyline({
        path: marsh_499__coords,
        geodesic: true,
        strokeColor: '#0167B2',
        strokeOpacity: 1.0,
        strokeWeight: 4
    });

    autoPath.setMap(map);


    //resize map
    google.maps.event.addDomListener(window, "resize", function() {
        var center = map.getCenter();
        google.maps.event.trigger(map, "resize");
        map.setCenter(center);
    });

}


$("body").on("click", ".map-select__link--auto", function(){
    $('.map-select__link').removeClass('active');
    $(this).addClass('active');
    initMap();
});



$("body").on("click", ".map-select__link--1056", function(){
    $('.map-select__link').removeClass('active');
    $(this).addClass('active');
    marsh1056();
});


$("body").on("click", ".map-select__link--130", function(){
    $('.map-select__link').removeClass('active');
    $(this).addClass('active');
    marsh130();
});

$("body").on("click", ".map-select__link--1419", function(){
    $('.map-select__link').removeClass('active');
    $(this).addClass('active');
    marsh1419();
});

$("body").on("click", ".map-select__link--499", function(){
    $('.map-select__link').removeClass('active');
    $(this).addClass('active');
    marsh499();
});