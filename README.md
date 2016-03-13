# JustGage Packaged and meteorized

The library can be invoked as normal using standard Javascript, or using {{> JustGage yourcustomhelper}}

Your custom helper should look like this: 

    yourcustomhelper: function() {
            return {
                gage: {
                    id: "gauge",
                    class: "dave",
                    value: 30,
                    min: 0,
                    max: 100,
                    title: "Visitors",
                    levelColorsGradient: false
                },
                size: {
                    height: "400px",
                    width: "400px"
                }
            };
        }
The you can use any gage parameters as per [the JustGage documentation](http://justgage.com/)

NOTE THAT THIS PACKAGE INCLUDES RAPHAELJS ASWELL