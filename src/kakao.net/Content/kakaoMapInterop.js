window.kakaoMapInterop =
    {
        drawMap: function (latitude, longitude) {
            var container = document.getElementById('map'); // DOM element that holds the map
            var options =
            {
                // basic options for map creation
                center: new daum.maps.LatLng(latitude, longitude), // map center
                level: 3 // zoom level
            };

            var map = new daum.maps.Map(container, options); // create map instance and return
            return true;
        },
        drawTraffic: function (latitude, longitude) {
            var container = document.getElementById('map'); // DOM element that holds the map
            var options =
            {
                // basic options for map creation
                center: new daum.maps.LatLng(latitude, longitude), // map center
                level: 3 // zoom level
            };

            var map = new daum.maps.Map(container, options); // create map instance and return
            // add traffic overlay to the map
            map.addOverlayMapTypeId(daum.maps.MapTypeId.TRAFFIC);

            return true;
        }
    };