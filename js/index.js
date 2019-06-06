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
