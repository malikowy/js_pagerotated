$(document).ready(function () {
  console.log("page.js loaded");
  $('#main-div').show("fast");
  $('ul').on('click', '#main', function () {
    $('.content').hide("fast");
    $('#main-div').show("slow");
  });
  $('ul').on('click', '#about', function () {
    $('.content').hide("fast");
    $('#about-div').show("slow");
  });
  $('ul').on('click', '#contact', function () {
    $('.content').hide("fast");
    $('#contact-div').show("slow");
  });
});
