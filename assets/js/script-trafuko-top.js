$(function(){function e(){var e=2;setInterval(function(){switch(e){case 1:$(".img2").fadeOut(1e3),$(".img1").fadeIn(1e3);break;case 2:$(".img1").fadeOut(1e3),$(".img2").fadeIn(1e3)}$("#debug").text(e),e++,e>2&&(e=1)},4e3)}$(window).on("load",function(){e()}),$(window).scroll(function(){$(document).scrollTop()>=$(window).height()-75?$("#header").addClass("white"):$("#header").removeClass("white")})});
