/*global $, alert, console, jQuery, WOW*/
$(function () {
    "use strict";
    var $iconSwitch      = $("#icon-switch"),
        $containerSwitch = $(".container-switch"),
        $colorchoose     = $("#colorchoose"),
        $switch          = $(".switch"),
        $div1            = $("#div1"),
        $div2            = $("#div2"),
        $div3            = $("#div3"),
        $div4            = $("#div4"),
        $div5            = $("#div5");
    $iconSwitch.on("mouseenter", function () {
        $containerSwitch.css("width", "45px");
        $iconSwitch.css("margin-left", "47px");
    });
    $switch.on("mouseleave", function () {
        $containerSwitch.css("width", "0");
        $iconSwitch.css("margin-left", "2px");
    });
    // Change Color .
    $div1.on("click", function () {
        $colorchoose.attr("href", "css/black.css");
    });
    $div2.on("click", function () {
        $colorchoose.attr("href", "css/crimson.css");
    });
    $div3.on("click", function () {
        $colorchoose.attr("href", "css/yellow.css");
    });
    $div4.on("click", function () {
        $colorchoose.attr("href", "css/paleGreen.css");
    });
    $div5.on("click", function () {
        $colorchoose.attr("href", "css/mediumBlue.css");
    });
});