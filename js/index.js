// JavaScript Document
	var app = angular.module('sauchieu', []);
	app.controller('sauchieuCtrl', function($scope, $http) {
   
	});
$(function () {


    $('#carousel1').carousel({
        interval:3000,
        pause: "false"
    });
    $('#playButton').click(function () {
        $('#carousel1').carousel('cycle');
    });
    $('#pauseButton').click(function () {
        $('#carousel1').carousel('pause');
    });
});

$("body").click(function(e) {

		$("#navbarSupportedContent").removeClass('show');
       
});
function googleTranslateElementInit() {
  new google.translate.TranslateElement({pageLanguage: 'en', layout: google.translate.TranslateElement.InlineLayout.SIMPLE}, 'google_translate_element');
}


jQuery('.carousel').carousel({interval: 3000 });
// Normalize Carousel Heights - pass in Bootstrap Carousel items.
function carouselNormalization() {
var items = jQuery('#carouselExampleIndicators .carousel-item'), //grab all slides
heights = [], //create empty array to store height values
shortest; //create variable to make note of the shortest slide

if (items.length) {
function normalizeHeights() {
items.each(function() { //add heights to array
heights.push(jQuery(this).height());
});
shortest = Math.min.apply(null, heights); //cache largest value
items.each(function() {
jQuery('.carousel-item').css('height',shortest + 'px').css('overflow','hidden');

});
};
normalizeHeights();

jQuery(window).on('resize orientationchange', function () {
shortest = 0, heights.length = 0; //reset vars
items.each(function() {
jQuery('.carousel-inner').css('height','0'); //reset min-height
});
normalizeHeights(); //run it again
});
}
}
carouselNormalization();