(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

fetch('https://my-json-server.typicode.com/grigoriyostapenko/fake-database/menu').then(function (response) {
  response.json().then(function (data) {
    // for (let i = 0; i < data.length; i++) {
    //   $(".fp-header__list").append('<li class="fp-header__list-item"><a href="#'+data[i]+'" class="fp-header__list-link">' + data[i] + '</a></li>');
    //   $("#mySidenav").append('<a class="sidenav__link" href="#'+data[i]+'">'+data[i]+'<a>')
    // }
    $(".fp-header__list").append('<li class="fp-header__list-item"><a href="#" class="fp-header__list-link">' + data[0] + '</a></li>');
    $(".fp-header__list").append('<li class="fp-header__list-item"><a href="#offer" class="fp-header__list-link">' + data[1] + '</a></li>');
    $(".fp-header__list").append('<li class="fp-header__list-item"><a href="#gallery" class="fp-header__list-link">' + data[2] + '</a></li>');
    $(".fp-header__list").append('<li class="fp-header__list-item"><a href="#about" class="fp-header__list-link">' + data[3] + '</a></li>');
    $(".fp-header__list").append('<li class="fp-header__list-item"><a href="#testim" class="fp-header__list-link">' + data[4] + '</a></li>');
    $(".fp-header__list").append('<li class="fp-header__list-item"><a href="#contact" class="fp-header__list-link">' + data[5] + '</a></li>');
    $("#mySidenav").append('<a class="sidenav__link" href="#">' + data[0] + '<a>');
    $("#mySidenav").append('<a class="sidenav__link" href="#offer">' + data[1] + '<a>');
    $("#mySidenav").append('<a class="sidenav__link" href="#gallery">' + data[2] + '<a>');
    $("#mySidenav").append('<a class="sidenav__link" href="#about">' + data[3] + '<a>');
    $("#mySidenav").append('<a class="sidenav__link" href="#testim">' + data[4] + '<a>');
    $("#mySidenav").append('<a class="sidenav__link" href="#contact">' + data[5] + '<a>');
  });
})["catch"](function (err) {
  console.log('Fetch Error :-S', err);
}); // <!-- LIST WITH EX:
// CUSTOM SCROLL 
// PRELOADER
// COMMENTS IS ARTICLE
//  -->

$('.fp-gallery').Mosaic({
  maxRowHeight: 600
});
document.body.style.overflow = 'hidden';
var preloaderBlock = document.querySelector(".preloader");

function preloader() {
  document.body.style.overflow = 'visible';
  preloaderBlock.style.display = 'none';
}

;
setTimeout(preloader, 3000);
var closeTimes = document.querySelector(".closebtn");
var openBars = document.querySelector(".fp-menu__bars");
openBars.addEventListener('click', openNav);
closeTimes.addEventListener('click', closeNav);

function openNav(event) {
  event.preventDefault();
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("mySidenav").style.paddingLeft = "20px";
}

function closeNav(event) {
  event.preventDefault();
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("mySidenav").style.paddingLeft = "0px";
}

function closeMenu() {
  var menuClose = document.querySelector(".sidenav__link");
  menuClose.addEventListener('click', closeNav);
}

setTimeout(closeMenu, 3000);
var lastScrollTop = 0;
$(window).scroll(function (event) {
  var st = $(this).scrollTop();

  if (st < 100) {
    $("#btnTop").removeClass('active');
  } else {
    if (st > lastScrollTop) {
      $("#btnTop").removeClass('active');
    } else {
      $("#btnTop").addClass('active');
    }
  }

  lastScrollTop = st;
}); // // Scroll to bottom on document ready
// $(document).ready(function(){
//   $("html, body").animate({ scrollTop: $(document).height() }, 200);
//   return false;
// });
// // Smooth scroll
// $(document).ready(function(){
//   $('a[href^="#"]').on('click',function (e) {
//     e.preventDefault();
//     const target = this.hash,
//     $target = $(target);
//     $('html, body').stop().animate({
//       'scrollTop': $target.offset().top
//     }, 200, function () {
//       window.location.hash = target;
//     });
//   });
// });

var anchors = document.querySelector(".btnTop");
anchors.addEventListener('click', function (event) {
  event.preventDefault();
  var blockID = anchors.getAttribute('href').substr(1);
  document.getElementById(blockID).scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
});
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!

var yyyy = today.getFullYear();
today = dd + '-' + mm + '-' + yyyy;
console.log(today);
var dateControl = document.getElementById("start");
dateControl.value = today;

},{}]},{},[1])

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJwcm9qZWN0cy9maW5hbFByb2plY3Qvc3JjL2pzL2FwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUEsS0FBSyxDQUFDLDBFQUFELENBQUwsQ0FDQyxJQURELENBRUUsVUFBVSxRQUFWLEVBQW9CO0FBQ2xCLEVBQUEsUUFBUSxDQUFDLElBQVQsR0FBZ0IsSUFBaEIsQ0FBcUIsVUFBUyxJQUFULEVBQWU7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFBLENBQUMsQ0FBQyxrQkFBRCxDQUFELENBQXNCLE1BQXRCLENBQTZCLCtFQUErRSxJQUFJLENBQUMsQ0FBRCxDQUFuRixHQUF5RixXQUF0SDtBQUNBLElBQUEsQ0FBQyxDQUFDLGtCQUFELENBQUQsQ0FBc0IsTUFBdEIsQ0FBNkIsb0ZBQW9GLElBQUksQ0FBQyxDQUFELENBQXhGLEdBQThGLFdBQTNIO0FBQ0EsSUFBQSxDQUFDLENBQUMsa0JBQUQsQ0FBRCxDQUFzQixNQUF0QixDQUE2QixzRkFBc0YsSUFBSSxDQUFDLENBQUQsQ0FBMUYsR0FBZ0csV0FBN0g7QUFDQSxJQUFBLENBQUMsQ0FBQyxrQkFBRCxDQUFELENBQXNCLE1BQXRCLENBQTZCLG9GQUFvRixJQUFJLENBQUMsQ0FBRCxDQUF4RixHQUE4RixXQUEzSDtBQUNBLElBQUEsQ0FBQyxDQUFDLGtCQUFELENBQUQsQ0FBc0IsTUFBdEIsQ0FBNkIscUZBQXFGLElBQUksQ0FBQyxDQUFELENBQXpGLEdBQStGLFdBQTVIO0FBQ0EsSUFBQSxDQUFDLENBQUMsa0JBQUQsQ0FBRCxDQUFzQixNQUF0QixDQUE2QixzRkFBc0YsSUFBSSxDQUFDLENBQUQsQ0FBMUYsR0FBZ0csV0FBN0g7QUFDQSxJQUFBLENBQUMsQ0FBQyxZQUFELENBQUQsQ0FBZ0IsTUFBaEIsQ0FBdUIsdUNBQXFDLElBQUksQ0FBQyxDQUFELENBQXpDLEdBQTZDLEtBQXBFO0FBQ0EsSUFB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LENBQVQ7QUFDQSxJQUFJLEVBQUUsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLFFBQU4sS0FBbUIsQ0FBcEIsQ0FBTixDQUE2QixRQUE3QixDQUFzQyxDQUF0QyxFQUF5QyxHQUF6QyxDQUFULEMsQ0FBd0Q7O0FBQ3hELElBQUksSUFBSSxHQUFHLEtBQUssQ0FBQyxXQUFOLEVBQVg7QUFFQSxLQUFLLEdBQUcsRUFBRSxHQUFHLEdBQUwsR0FBVyxFQUFYLEdBQWdCLEdBQWhCLEdBQXNCLElBQTlCO0FBQ0EsT0FBTyxDQUFDLEdBQVIsQ0FBWSxLQUFaO0FBRUEsSUFBTSxXQUFXLEdBQUcsUUFBUSxDQUFDLGNBQVQsQ0FBd0IsT0FBeEIsQ0FBcEI7QUFDQSxXQUFXLENBQUMsS0FBWixHQUFvQixLQUFwQiIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiZmV0Y2goJ2h0dHBzOi8vbXktanNvbi1zZXJ2ZXIudHlwaWNvZGUuY29tL2dyaWdvcml5b3N0YXBlbmtvL2Zha2UtZGF0YWJhc2UvbWVudScpICBcclxuLnRoZW4oICBcclxuICBmdW5jdGlvbiAocmVzcG9uc2UpIHsgXHJcbiAgICByZXNwb25zZS5qc29uKCkudGhlbihmdW5jdGlvbihkYXRhKSB7IFxyXG4gICAgICAvLyBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcclxuICAgICAgLy8gICAkKFwiLmZwLWhlYWRlcl9fbGlzdFwiKS5hcHBlbmQoJzxsaSBjbGFzcz1cImZwLWhlYWRlcl9fbGlzdC1pdGVtXCI+PGEgaHJlZj1cIiMnK2RhdGFbaV0rJ1wiIGNsYXNzPVwiZnAtaGVhZGVyX19saXN0LWxpbmtcIj4nICsgZGF0YVtpXSArICc8L2E+PC9saT4nKTtcclxuICAgICAgLy8gICAkKFwiI215U2lkZW5hdlwiKS5hcHBlbmQoJzxhIGNsYXNzPVwic2lkZW5hdl9fbGlua1wiIGhyZWY9XCIjJytkYXRhW2ldKydcIj4nK2RhdGFbaV0rJzxhPicpXHJcbiAgICAgIC8vIH1cclxuXHJcbiAgICAgICQoXCIuZnAtaGVhZGVyX19saXN0XCIpLmFwcGVuZCgnPGxpIGNsYXNzPVwiZnAtaGVhZGVyX19saXN0LWl0ZW1cIj48YSBocmVmPVwiI1wiIGNsYXNzPVwiZnAtaGVhZGVyX19saXN0LWxpbmtcIj4nICsgZGF0YVswXSArICc8L2E+PC9saT4nKTtcclxuICAgICAgJChcIi5mcC1oZWFkZXJfX2xpc3RcIikuYXBwZW5kKCc8bGkgY2xhc3M9XCJmcC1oZWFkZXJfX2xpc3QtaXRlbVwiPjxhIGhyZWY9XCIjb2ZmZXJcIiBjbGFzcz1cImZwLWhlYWRlcl9fbGlzdC1saW5rXCI+JyArIGRhdGFbMV0gKyAnPC9hPjwvbGk+Jyk7XHJcbiAgICAgICQoXCIuZnAtaGVhZGVyX19saXN0XCIpLmFwcGVuZCgnPGxpIGNsYXNzPVwiZnAtaGVhZGVyX19saXN0LWl0ZW1cIj48YSBocmVmPVwiI2dhbGxlcnlcIiBjbGFzcz1cImZwLWhlYWRlcl9fbGlzdC1saW5rXCI+JyArIGRhdGFbMl0gKyAnPC9hPjwvbGk+Jyk7XHJcbiAgICAgICQoXCIuZnAtaGVhZGVyX19saXN0XCIpLmFwcGVuZCgnPGxpIGNsYXNzPVwiZnAtaGVhZGVyX19saXN0LWl0ZW1cIj48YSBocmVmPVwiI2Fib3V0XCIgY2xhc3M9XCJmcC1oZWFkZXJfX2xpc3QtbGlua1wiPicgKyBkYXRhWzNdICsgJzwvYT48L2xpPicpO1xyXG4gICAgICAkKFwiLmZwLWhlYWRlcl9fbGlzdFwiKS5hcHBlbmQoJzxsaSBjbGFzcz1cImZwLWhlYWRlcl9fbGlzdC1pdGVtXCI+PGEgaHJlZj1cIiN0ZXN0aW1cIiBjbGFzcz1cImZwLWhlYWRlcl9fbGlzdC1saW5rXCI+JyArIGRhdGFbNF0gKyAnPC9hPjwvbGk+Jyk7XHJcbiAgICAgICQoXCIuZnAtaGVhZGVyX19saXN0XCIpLmFwcGVuZCgnPGxpIGNsYXNzPVwiZnAtaGVhZGVyX19saXN0LWl0ZW1cIj48YSBocmVmPVwiI2NvbnRhY3RcIiBjbGFzcz1cImZwLWhlYWRlcl9fbGlzdC1saW5rXCI+JyArIGRhdGFbNV0gKyAnPC9hPjwvbGk+Jyk7XHJcbiAgICAgICQoXCIjbXlTaWRlbmF2XCIpLmFwcGVuZCgnPGEgY2xhc3M9XCJzaWRlbmF2X19saW5rXCIgaHJlZj1cIiNcIj4nK2RhdGFbMF0rJzxhPicpO1xyXG4gICAgICAkKFwiI215U2lkZW5hdlwiKS5hcHBlbmQoJzxhIGNsYXNzPVwic2lkZW5hdl9fbGlua1wiIGhyZWY9XCIjb2ZmZXJcIj4nK2RhdGFbMV0rJzxhPicpO1xyXG4gICAgICAkKFwiI215U2lkZW5hdlwiKS5hcHBlbmQoJzxhIGNsYXNzPVwic2lkZW5hdl9fbGlua1wiIGhyZWY9XCIjZ2FsbGVyeVwiPicrZGF0YVsyXSsnPGE+Jyk7XHJcbiAgICAgICQoXCIjbXlTaWRlbmF2XCIpLmFwcGVuZCgnPGEgY2xhc3M9XCJzaWRlbmF2X19saW5rXCIgaHJlZj1cIiNhYm91dFwiPicrZGF0YVszXSsnPGE+Jyk7XHJcbiAgICAgICQoXCIjbXlTaWRlbmF2XCIpLmFwcGVuZCgnPGEgY2xhc3M9XCJzaWRlbmF2X19saW5rXCIgaHJlZj1cIiN0ZXN0aW1cIj4nK2RhdGFbNF0rJzxhPicpO1xyXG4gICAgICAkKFwiI215U2lkZW5hdlwiKS5hcHBlbmQoJzxhIGNsYXNzPVwic2lkZW5hdl9fbGlua1wiIGhyZWY9XCIjY29udGFjdFwiPicrZGF0YVs1XSsnPGE+Jyk7XHJcbiAgICB9KTsgIFxyXG4gIH0gIFxyXG4gICkgIFxyXG4uY2F0Y2goZnVuY3Rpb24oZXJyKSB7ICBcclxuICBjb25zb2xlLmxvZygnRmV0Y2ggRXJyb3IgOi1TJywgZXJyKTsgIFxyXG59KTtcclxuXHJcbi8vIDwhLS0gTElTVCBXSVRIIEVYOlxyXG4vLyBDVVNUT00gU0NST0xMIFxyXG4vLyBQUkVMT0FERVJcclxuLy8gQ09NTUVOVFMgSVMgQVJUSUNMRVxyXG4vLyAgLS0+XHJcblxyXG4kKCcuZnAtZ2FsbGVyeScpLk1vc2FpYyh7XHJcbiAgbWF4Um93SGVpZ2h0OiA2MDBcclxufSk7XHJcblxyXG5kb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XHJcbmNvbnN0IHByZWxvYWRlckJsb2NrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcmVsb2FkZXJcIik7XHJcbmZ1bmN0aW9uIHByZWxvYWRlcigpIHtcclxuICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJ3Zpc2libGUnO1xyXG4gIHByZWxvYWRlckJsb2NrLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbn07XHJcblxyXG5zZXRUaW1lb3V0KHByZWxvYWRlciwgMzAwMCk7XHJcblxyXG5jb25zdCBjbG9zZVRpbWVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jbG9zZWJ0blwiKTtcclxuY29uc3Qgb3BlbkJhcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZwLW1lbnVfX2JhcnNcIik7XHJcblxyXG5vcGVuQmFycy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9wZW5OYXYpO1xyXG5jbG9zZVRpbWVzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VOYXYpO1xyXG5cclxuXHJcbmZ1bmN0aW9uIG9wZW5OYXYoZXZlbnQpIHtcclxuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXlTaWRlbmF2XCIpLnN0eWxlLndpZHRoID0gXCIyNTBweFwiO1xyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXlTaWRlbmF2XCIpLnN0eWxlLnBhZGRpbmdMZWZ0ID0gXCIyMHB4XCI7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNsb3NlTmF2KGV2ZW50KSB7XHJcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm15U2lkZW5hdlwiKS5zdHlsZS53aWR0aCA9IFwiMFwiO1xyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXlTaWRlbmF2XCIpLnN0eWxlLnBhZGRpbmdMZWZ0ID0gXCIwcHhcIjtcclxufVxyXG5cclxuZnVuY3Rpb24gY2xvc2VNZW51KCkge1xyXG4gIGNvbnN0IG1lbnVDbG9zZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2lkZW5hdl9fbGlua1wiKTtcclxuICBtZW51Q2xvc2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZU5hdik7XHJcbn1cclxuXHJcbnNldFRpbWVvdXQoY2xvc2VNZW51LCAzMDAwKTtcclxuXHJcblxyXG5sZXQgbGFzdFNjcm9sbFRvcCA9IDA7XHJcblxyXG4kKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uKGV2ZW50KXtcclxuXHJcbiAgbGV0IHN0ID0gJCh0aGlzKS5zY3JvbGxUb3AoKTtcclxuICBcclxuICBpZiAoc3QgPCAxMDApe1xyXG4gICAgJChcIiNidG5Ub3BcIikucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBpZiAoc3QgPiBsYXN0U2Nyb2xsVG9wKXtcclxuICAgICAgJChcIiNidG5Ub3BcIikucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgJChcIiNidG5Ub3BcIikuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgfSAgIFxyXG4gIH1cclxuICBcclxuICBsYXN0U2Nyb2xsVG9wID0gc3Q7XHJcbiAgXHJcbn0pO1xyXG5cclxuXHJcbi8vIC8vIFNjcm9sbCB0byBib3R0b20gb24gZG9jdW1lbnQgcmVhZHlcclxuLy8gJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcclxuLy8gICAkKFwiaHRtbCwgYm9keVwiKS5hbmltYXRlKHsgc2Nyb2xsVG9wOiAkKGRvY3VtZW50KS5oZWlnaHQoKSB9LCAyMDApO1xyXG4vLyAgIHJldHVybiBmYWxzZTtcclxuLy8gfSk7XHJcblxyXG5cclxuLy8gLy8gU21vb3RoIHNjcm9sbFxyXG4vLyAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xyXG4vLyAgICQoJ2FbaHJlZl49XCIjXCJdJykub24oJ2NsaWNrJyxmdW5jdGlvbiAoZSkge1xyXG4vLyAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4vLyAgICAgY29uc3QgdGFyZ2V0ID0gdGhpcy5oYXNoLFxyXG4vLyAgICAgJHRhcmdldCA9ICQodGFyZ2V0KTtcclxuLy8gICAgICQoJ2h0bWwsIGJvZHknKS5zdG9wKCkuYW5pbWF0ZSh7XHJcbi8vICAgICAgICdzY3JvbGxUb3AnOiAkdGFyZ2V0Lm9mZnNldCgpLnRvcFxyXG4vLyAgICAgfSwgMjAwLCBmdW5jdGlvbiAoKSB7XHJcbi8vICAgICAgIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gdGFyZ2V0O1xyXG4vLyAgICAgfSk7XHJcbi8vICAgfSk7XHJcbi8vIH0pO1xyXG5cclxuY29uc3QgYW5jaG9ycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnRuVG9wXCIpXHJcblxyXG5hbmNob3JzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XHJcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKVxyXG5cclxuICBjb25zdCBibG9ja0lEID0gYW5jaG9ycy5nZXRBdHRyaWJ1dGUoJ2hyZWYnKS5zdWJzdHIoMSlcclxuXHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYmxvY2tJRCkuc2Nyb2xsSW50b1ZpZXcoe1xyXG4gICAgYmVoYXZpb3I6ICdzbW9vdGgnLFxyXG4gICAgYmxvY2s6ICdzdGFydCdcclxuICB9KVxyXG59KTtcclxuXHJcblxyXG5cclxuXHJcblxyXG5sZXQgdG9kYXkgPSBuZXcgRGF0ZSgpO1xyXG5sZXQgZGQgPSBTdHJpbmcodG9kYXkuZ2V0RGF0ZSgpKS5wYWRTdGFydCgyLCAnMCcpO1xyXG5sZXQgbW0gPSBTdHJpbmcodG9kYXkuZ2V0TW9udGgoKSArIDEpLnBhZFN0YXJ0KDIsICcwJyk7IC8vSmFudWFyeSBpcyAwIVxyXG5sZXQgeXl5eSA9IHRvZGF5LmdldEZ1bGxZZWFyKCk7XHJcblxyXG50b2RheSA9IGRkICsgJy0nICsgbW0gKyAnLScgKyB5eXl5O1xyXG5jb25zb2xlLmxvZyh0b2RheSk7XHJcblxyXG5jb25zdCBkYXRlQ29udHJvbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3RhcnRcIilcclxuZGF0ZUNvbnRyb2wudmFsdWUgPSB0b2RheTsiXSwicHJlRXhpc3RpbmdDb21tZW50IjoiLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW01dlpHVmZiVzlrZFd4bGN5OWljbTkzYzJWeUxYQmhZMnN2WDNCeVpXeDFaR1V1YW5NaUxDSndjbTlxWldOMGN5OW1hVzVoYkZCeWIycGxZM1F2YzNKakwycHpMMkZ3Y0M1cWN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaVFVRkJRVHM3TzBGRFFVRXNTMEZCU3l4RFFVRkRMREJGUVVGRUxFTkJRVXdzUTBGRFF5eEpRVVJFTEVOQlJVVXNWVUZCVlN4UlFVRldMRVZCUVc5Q08wRkJRMnhDTEVWQlFVRXNVVUZCVVN4RFFVRkRMRWxCUVZRc1IwRkJaMElzU1VGQmFFSXNRMEZCY1VJc1ZVRkJVeXhKUVVGVUxFVkJRV1U3UVVGRGJFTTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkZRU3hKUVVGQkxFTkJRVU1zUTBGQlF5eHJRa0ZCUkN4RFFVRkVMRU5CUVhOQ0xFMUJRWFJDTEVOQlFUWkNMQ3RGUVVFclJTeEpRVUZKTEVOQlFVTXNRMEZCUkN4RFFVRnVSaXhIUVVGNVJpeFhRVUYwU0R0QlFVTkJMRWxCUVVFc1EwRkJReXhEUVVGRExHdENRVUZFTEVOQlFVUXNRMEZCYzBJc1RVRkJkRUlzUTBGQk5rSXNiMFpCUVc5R0xFbEJRVWtzUTBGQlF5eERRVUZFTEVOQlFYaEdMRWRCUVRoR0xGZEJRVE5JTzBGQlEwRXNTVUZCUVN4RFFVRkRMRU5CUVVNc2EwSkJRVVFzUTBGQlJDeERRVUZ6UWl4TlFVRjBRaXhEUVVFMlFpeHpSa0ZCYzBZc1NVRkJTU3hEUVVGRExFTkJRVVFzUTBGQk1VWXNSMEZCWjBjc1YwRkJOMGc3UVVGRFFTeEpRVUZCTEVOQlFVTXNRMEZCUXl4clFrRkJSQ3hEUVVGRUxFTkJRWE5DTEUxQlFYUkNMRU5CUVRaQ0xHOUdRVUZ2Uml4SlFVRkpMRU5CUVVNc1EwRkJSQ3hEUVVGNFJpeEhRVUU0Uml4WFFVRXpTRHRCUVVOQkxFbEJRVUVzUTBGQlF5eERRVUZETEd0Q1FVRkVMRU5CUVVRc1EwRkJjMElzVFVGQmRFSXNRMEZCTmtJc2NVWkJRWEZHTEVsQlFVa3NRMEZCUXl4RFFVRkVMRU5CUVhwR0xFZEJRU3RHTEZkQlFUVklPMEZCUTBFc1NVRkJRU3hEUVVGRExFTkJRVU1zYTBKQlFVUXNRMEZCUkN4RFFVRnpRaXhOUVVGMFFpeERRVUUyUWl4elJrRkJjMFlzU1VGQlNTeERRVUZETEVOQlFVUXNRMEZCTVVZc1IwRkJaMGNzVjBGQk4wZzdRVUZEUVN4SlFVRkJMRU5CUVVNc1EwRkJReXhaUVVGRUxFTkJRVVFzUTBGQlowSXNUVUZCYUVJc1EwRkJkVUlzZFVOQlFYRkRMRWxCUVVrc1EwRkJReXhEUVVGRUxFTkJRWHBETEVkQlFUWkRMRXRCUVhCRk8wRkJRMEVzU1VGQlFTeERRVUZETEVOQlFVTXNXVUZCUkN4RFFVRkVMRU5CUVdkQ0xFMUJRV2hDTEVOQlFYVkNMRFJEUVVFd1F5eEpRVUZKTEVOQlFVTXNRMEZCUkN4RFFVRTVReXhIUVVGclJDeExRVUY2UlR0QlFVTkJMRWxCUVVFc1EwRkJReXhEUVVGRExGbEJRVVFzUTBGQlJDeERRVUZuUWl4TlFVRm9RaXhEUVVGMVFpdzRRMEZCTkVNc1NVRkJTU3hEUVVGRExFTkJRVVFzUTBGQmFFUXNSMEZCYjBRc1MwRkJNMFU3UVVGRFFTeEpRVUZCTEVOQlFVTXNRMEZCUXl4WlFVRkVMRU5CUVVRc1EwRkJaMElzVFVGQmFFSXNRMEZCZFVJc05FTkJRVEJETEVsQlFVa3NRMEZCUXl4RFFVRkVMRU5CUVRsRExFZEJRV3RFTEV0QlFYcEZPMEZCUTBFc1NVRkJRU3hEUVVGRExFTkJRVU1zV1VGQlJDeERRVUZFTEVOQlFXZENMRTFCUVdoQ0xFTkJRWFZDTERaRFFVRXlReXhKUVVGSkxFTkJRVU1zUTBGQlJDeERRVUV2UXl4SFFVRnRSQ3hMUVVFeFJUdEJRVU5CTEVsQlFVRXNRMEZCUXl4RFFVRkRMRmxCUVVRc1EwRkJSQ3hEUVVGblFpeE5RVUZvUWl4RFFVRjFRaXc0UTBGQk5FTXNTVUZCU1N4RFFVRkRMRU5CUVVRc1EwRkJhRVFzUjBGQmIwUXNTMEZCTTBVN1FVRkRSQ3hIUVd4Q1JEdEJRVzFDUkN4RFFYUkNTQ3hYUVhkQ1R5eFZRVUZUTEVkQlFWUXNSVUZCWXp0QlFVTnVRaXhGUVVGQkxFOUJRVThzUTBGQlF5eEhRVUZTTEVOQlFWa3NhVUpCUVZvc1JVRkJLMElzUjBGQkwwSTdRVUZEUkN4RFFURkNSQ3hGTEVOQk5FSkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRXNRMEZCUXl4RFFVRkRMR0ZCUVVRc1EwRkJSQ3hEUVVGcFFpeE5RVUZxUWl4RFFVRjNRanRCUVVOMFFpeEZRVUZCTEZsQlFWa3NSVUZCUlR0QlFVUlJMRU5CUVhoQ08wRkJTVUVzVVVGQlVTeERRVUZETEVsQlFWUXNRMEZCWXl4TFFVRmtMRU5CUVc5Q0xGRkJRWEJDTEVkQlFTdENMRkZCUVM5Q08wRkJRMEVzU1VGQlRTeGpRVUZqTEVkQlFVY3NVVUZCVVN4RFFVRkRMR0ZCUVZRc1EwRkJkVUlzV1VGQmRrSXNRMEZCZGtJN08wRkJRMEVzVTBGQlV5eFRRVUZVTEVkQlFYRkNPMEZCUTI1Q0xFVkJRVUVzVVVGQlVTeERRVUZETEVsQlFWUXNRMEZCWXl4TFFVRmtMRU5CUVc5Q0xGRkJRWEJDTEVkQlFTdENMRk5CUVM5Q08wRkJRMEVzUlVGQlFTeGpRVUZqTEVOQlFVTXNTMEZCWml4RFFVRnhRaXhQUVVGeVFpeEhRVUVyUWl4TlFVRXZRanRCUVVORU96dEJRVUZCTzBGQlJVUXNWVUZCVlN4RFFVRkRMRk5CUVVRc1JVRkJXU3hKUVVGYUxFTkJRVlk3UVVGRlFTeEpRVUZOTEZWQlFWVXNSMEZCUnl4UlFVRlJMRU5CUVVNc1lVRkJWQ3hEUVVGMVFpeFhRVUYyUWl4RFFVRnVRanRCUVVOQkxFbEJRVTBzVVVGQlVTeEhRVUZITEZGQlFWRXNRMEZCUXl4aFFVRlVMRU5CUVhWQ0xHZENRVUYyUWl4RFFVRnFRanRCUVVWQkxGRkJRVkVzUTBGQlF5eG5Ra0ZCVkN4RFFVRXdRaXhQUVVFeFFpeEZRVUZ0UXl4UFFVRnVRenRCUVVOQkxGVkJRVlVzUTBGQlF5eG5Ra0ZCV0N4RFFVRTBRaXhQUVVFMVFpeEZRVUZ4UXl4UlFVRnlRenM3UVVGSFFTeFRRVUZUTEU5QlFWUXNRMEZCYVVJc1MwRkJha0lzUlVGQmQwSTdRVUZEZEVJc1JVRkJRU3hMUVVGTExFTkJRVU1zWTBGQlRqdEJRVU5CTEVWQlFVRXNVVUZCVVN4RFFVRkRMR05CUVZRc1EwRkJkMElzVjBGQmVFSXNSVUZCY1VNc1MwRkJja01zUTBGQk1rTXNTMEZCTTBNc1IwRkJiVVFzVDBGQmJrUTdRVUZEUVN4RlFVRkJMRkZCUVZFc1EwRkJReXhqUVVGVUxFTkJRWGRDTEZkQlFYaENMRVZCUVhGRExFdEJRWEpETEVOQlFUSkRMRmRCUVRORExFZEJRWGxFTEUxQlFYcEVPMEZCUTBRN08wRkJSVVFzVTBGQlV5eFJRVUZVTEVOQlFXdENMRXRCUVd4Q0xFVkJRWGxDTzBGQlEzWkNMRVZCUVVFc1MwRkJTeXhEUVVGRExHTkJRVTQ3UVVGRFFTeEZRVUZCTEZGQlFWRXNRMEZCUXl4alFVRlVMRU5CUVhkQ0xGZEJRWGhDTEVWQlFYRkRMRXRCUVhKRExFTkJRVEpETEV0QlFUTkRMRWRCUVcxRUxFZEJRVzVFTzBGQlEwRXNSVUZCUVN4UlFVRlJMRU5CUVVNc1kwRkJWQ3hEUVVGM1FpeFhRVUY0UWl4RlFVRnhReXhMUVVGeVF5eERRVUV5UXl4WFFVRXpReXhIUVVGNVJDeExRVUY2UkR0QlFVTkVPenRCUVVWRUxGTkJRVk1zVTBGQlZDeEhRVUZ4UWp0QlFVTnVRaXhOUVVGTkxGTkJRVk1zUjBGQlJ5eFJRVUZSTEVOQlFVTXNZVUZCVkN4RFFVRjFRaXhuUWtGQmRrSXNRMEZCYkVJN1FVRkRRU3hGUVVGQkxGTkJRVk1zUTBGQlF5eG5Ra0ZCVml4RFFVRXlRaXhQUVVFelFpeEZRVUZ2UXl4UlFVRndRenRCUVVORU96dEJRVVZFTEZWQlFWVXNRMEZCUXl4VFFVRkVMRVZCUVZrc1NVRkJXaXhEUVVGV08wRkJSMEVzU1VGQlNTeGhRVUZoTEVkQlFVY3NRMEZCY0VJN1FVRkZRU3hEUVVGRExFTkJRVU1zVFVGQlJDeERRVUZFTEVOQlFWVXNUVUZCVml4RFFVRnBRaXhWUVVGVExFdEJRVlFzUlVGQlpUdEJRVVU1UWl4TlFVRkpMRVZCUVVVc1IwRkJSeXhEUVVGRExFTkJRVU1zU1VGQlJDeERRVUZFTEVOQlFWRXNVMEZCVWl4RlFVRlVPenRCUVVWQkxFMUJRVWtzUlVGQlJTeEhRVUZITEVkQlFWUXNSVUZCWVR0QlFVTllMRWxCUVVFc1EwRkJReXhEUVVGRExGTkJRVVFzUTBGQlJDeERRVUZoTEZkQlFXSXNRMEZCZVVJc1VVRkJla0k3UVVGRFJDeEhRVVpFTEUxQlJVODdRVUZEVEN4UlFVRkpMRVZCUVVVc1IwRkJSeXhoUVVGVUxFVkJRWFZDTzBGQlEzSkNMRTFCUVVFc1EwRkJReXhEUVVGRExGTkJRVVFzUTBGQlJDeERRVUZoTEZkQlFXSXNRMEZCZVVJc1VVRkJla0k3UVVGRFJDeExRVVpFTEUxQlJVODdRVUZEVEN4TlFVRkJMRU5CUVVNc1EwRkJReXhUUVVGRUxFTkJRVVFzUTBGQllTeFJRVUZpTEVOQlFYTkNMRkZCUVhSQ08wRkJRMFE3UVVGRFJqczdRVUZGUkN4RlFVRkJMR0ZCUVdFc1IwRkJSeXhGUVVGb1FqdEJRVVZFTEVOQmFFSkVMRVVzUTBGdFFrRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVkQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJMRWxCUVUwc1QwRkJUeXhIUVVGSExGRkJRVkVzUTBGQlF5eGhRVUZVTEVOQlFYVkNMRk5CUVhaQ0xFTkJRV2hDTzBGQlJVRXNUMEZCVHl4RFFVRkRMR2RDUVVGU0xFTkJRWGxDTEU5QlFYcENMRVZCUVd0RExGVkJRVU1zUzBGQlJDeEZRVUZYTzBGQlF6TkRMRVZCUVVFc1MwRkJTeXhEUVVGRExHTkJRVTQ3UVVGRlFTeE5RVUZOTEU5QlFVOHNSMEZCUnl4UFFVRlBMRU5CUVVNc1dVRkJVaXhEUVVGeFFpeE5RVUZ5UWl4RlFVRTJRaXhOUVVFM1FpeERRVUZ2UXl4RFFVRndReXhEUVVGb1FqdEJRVVZCTEVWQlFVRXNVVUZCVVN4RFFVRkRMR05CUVZRc1EwRkJkMElzVDBGQmVFSXNSVUZCYVVNc1kwRkJha01zUTBGQlowUTdRVUZET1VNc1NVRkJRU3hSUVVGUkxFVkJRVVVzVVVGRWIwTTdRVUZGT1VNc1NVRkJRU3hMUVVGTExFVkJRVVU3UVVGR2RVTXNSMEZCYUVRN1FVRkpSQ3hEUVZSRU8wRkJaVUVzU1VGQlNTeExRVUZMTEVkQlFVY3NTVUZCU1N4SlFVRktMRVZCUVZvN1FVRkRRU3hKUVVGSkxFVkJRVVVzUjBGQlJ5eE5RVUZOTEVOQlFVTXNTMEZCU3l4RFFVRkRMRTlCUVU0c1JVRkJSQ3hEUVVGT0xFTkJRWGRDTEZGQlFYaENMRU5CUVdsRExFTkJRV3BETEVWQlFXOURMRWRCUVhCRExFTkJRVlE3UVVGRFFTeEpRVUZKTEVWQlFVVXNSMEZCUnl4TlFVRk5MRU5CUVVNc1MwRkJTeXhEUVVGRExGRkJRVTRzUzBGQmJVSXNRMEZCY0VJc1EwRkJUaXhEUVVFMlFpeFJRVUUzUWl4RFFVRnpReXhEUVVGMFF5eEZRVUY1UXl4SFFVRjZReXhEUVVGVUxFTXNRMEZCZDBRN08wRkJRM2hFTEVsQlFVa3NTVUZCU1N4SFFVRkhMRXRCUVVzc1EwRkJReXhYUVVGT0xFVkJRVmc3UVVGRlFTeExRVUZMTEVkQlFVY3NSVUZCUlN4SFFVRkhMRWRCUVV3c1IwRkJWeXhGUVVGWUxFZEJRV2RDTEVkQlFXaENMRWRCUVhOQ0xFbEJRVGxDTzBGQlEwRXNUMEZCVHl4RFFVRkRMRWRCUVZJc1EwRkJXU3hMUVVGYU8wRkJSVUVzU1VGQlRTeFhRVUZYTEVkQlFVY3NVVUZCVVN4RFFVRkRMR05CUVZRc1EwRkJkMElzVDBGQmVFSXNRMEZCY0VJN1FVRkRRU3hYUVVGWExFTkJRVU1zUzBGQldpeEhRVUZ2UWl4TFFVRndRaUlzSW1acGJHVWlPaUpuWlc1bGNtRjBaV1F1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaUtHWjFibU4wYVc5dUtDbDdablZ1WTNScGIyNGdjaWhsTEc0c2RDbDdablZ1WTNScGIyNGdieWhwTEdZcGUybG1LQ0Z1VzJsZEtYdHBaaWdoWlZ0cFhTbDdkbUZ5SUdNOVhDSm1kVzVqZEdsdmJsd2lQVDEwZVhCbGIyWWdjbVZ4ZFdseVpTWW1jbVZ4ZFdseVpUdHBaaWdoWmlZbVl5bHlaWFIxY200Z1l5aHBMQ0V3S1R0cFppaDFLWEpsZEhWeWJpQjFLR2tzSVRBcE8zWmhjaUJoUFc1bGR5QkZjbkp2Y2loY0lrTmhibTV2ZENCbWFXNWtJRzF2WkhWc1pTQW5YQ0lyYVN0Y0lpZGNJaWs3ZEdoeWIzY2dZUzVqYjJSbFBWd2lUVTlFVlV4RlgwNVBWRjlHVDFWT1JGd2lMR0Y5ZG1GeUlIQTlibHRwWFQxN1pYaHdiM0owY3pwN2ZYMDdaVnRwWFZzd1hTNWpZV3hzS0hBdVpYaHdiM0owY3l4bWRXNWpkR2x2YmloeUtYdDJZWElnYmoxbFcybGRXekZkVzNKZE8zSmxkSFZ5YmlCdktHNThmSElwZlN4d0xIQXVaWGh3YjNKMGN5eHlMR1VzYml4MEtYMXlaWFIxY200Z2JsdHBYUzVsZUhCdmNuUnpmV1p2Y2loMllYSWdkVDFjSW1aMWJtTjBhVzl1WENJOVBYUjVjR1Z2WmlCeVpYRjFhWEpsSmlaeVpYRjFhWEpsTEdrOU1EdHBQSFF1YkdWdVozUm9PMmtyS3lsdktIUmJhVjBwTzNKbGRIVnliaUJ2ZlhKbGRIVnliaUJ5ZlNrb0tTSXNJbVpsZEdOb0tDZG9kSFJ3Y3pvdkwyMTVMV3B6YjI0dGMyVnlkbVZ5TG5SNWNHbGpiMlJsTG1OdmJTOW5jbWxuYjNKcGVXOXpkR0Z3Wlc1cmJ5OW1ZV3RsTFdSaGRHRmlZWE5sTDIxbGJuVW5LU0FnWEhKY2JpNTBhR1Z1S0NBZ1hISmNiaUFnWm5WdVkzUnBiMjRnS0hKbGMzQnZibk5sS1NCN0lGeHlYRzRnSUNBZ2NtVnpjRzl1YzJVdWFuTnZiaWdwTG5Sb1pXNG9ablZ1WTNScGIyNG9aR0YwWVNrZ2V5QmNjbHh1SUNBZ0lDQWdMeThnWm05eUlDaHNaWFFnYVNBOUlEQTdJR2tnUENCa1lYUmhMbXhsYm1kMGFEc2dhU3NyS1NCN1hISmNiaUFnSUNBZ0lDOHZJQ0FnSkNoY0lpNW1jQzFvWldGa1pYSmZYMnhwYzNSY0lpa3VZWEJ3Wlc1a0tDYzhiR2tnWTJ4aGMzTTlYQ0ptY0Mxb1pXRmtaWEpmWDJ4cGMzUXRhWFJsYlZ3aVBqeGhJR2h5WldZOVhDSWpKeXRrWVhSaFcybGRLeWRjSWlCamJHRnpjejFjSW1ad0xXaGxZV1JsY2w5ZmJHbHpkQzFzYVc1clhDSStKeUFySUdSaGRHRmJhVjBnS3lBblBDOWhQand2YkdrK0p5azdYSEpjYmlBZ0lDQWdJQzh2SUNBZ0pDaGNJaU50ZVZOcFpHVnVZWFpjSWlrdVlYQndaVzVrS0NjOFlTQmpiR0Z6Y3oxY0luTnBaR1Z1WVhaZlgyeHBibXRjSWlCb2NtVm1QVndpSXljclpHRjBZVnRwWFNzblhDSStKeXRrWVhSaFcybGRLeWM4WVQ0bktWeHlYRzRnSUNBZ0lDQXZMeUI5WEhKY2JseHlYRzRnSUNBZ0lDQWtLRndpTG1ad0xXaGxZV1JsY2w5ZmJHbHpkRndpS1M1aGNIQmxibVFvSnp4c2FTQmpiR0Z6Y3oxY0ltWndMV2hsWVdSbGNsOWZiR2x6ZEMxcGRHVnRYQ0krUEdFZ2FISmxaajFjSWlOY0lpQmpiR0Z6Y3oxY0ltWndMV2hsWVdSbGNsOWZiR2x6ZEMxc2FXNXJYQ0krSnlBcklHUmhkR0ZiTUYwZ0t5QW5QQzloUGp3dmJHaytKeWs3WEhKY2JpQWdJQ0FnSUNRb1hDSXVabkF0YUdWaFpHVnlYMTlzYVhOMFhDSXBMbUZ3Y0dWdVpDZ25QR3hwSUdOc1lYTnpQVndpWm5BdGFHVmhaR1Z5WDE5c2FYTjBMV2wwWlcxY0lqNDhZU0JvY21WbVBWd2lJMjltWm1WeVhDSWdZMnhoYzNNOVhDSm1jQzFvWldGa1pYSmZYMnhwYzNRdGJHbHVhMXdpUGljZ0t5QmtZWFJoV3pGZElDc2dKend2WVQ0OEwyeHBQaWNwTzF4eVhHNGdJQ0FnSUNBa0tGd2lMbVp3TFdobFlXUmxjbDlmYkdsemRGd2lLUzVoY0hCbGJtUW9KenhzYVNCamJHRnpjejFjSW1ad0xXaGxZV1JsY2w5ZmJHbHpkQzFwZEdWdFhDSStQR0VnYUhKbFpqMWNJaU5uWVd4c1pYSjVYQ0lnWTJ4aGMzTTlYQ0ptY0Mxb1pXRmtaWEpmWDJ4cGMzUXRiR2x1YTF3aVBpY2dLeUJrWVhSaFd6SmRJQ3NnSnp3dllUNDhMMnhwUGljcE8xeHlYRzRnSUNBZ0lDQWtLRndpTG1ad0xXaGxZV1JsY2w5ZmJHbHpkRndpS1M1aGNIQmxibVFvSnp4c2FTQmpiR0Z6Y3oxY0ltWndMV2hsWVdSbGNsOWZiR2x6ZEMxcGRHVnRYQ0krUEdFZ2FISmxaajFjSWlOaFltOTFkRndpSUdOc1lYTnpQVndpWm5BdGFHVmhaR1Z5WDE5c2FYTjBMV3hwYm10Y0lqNG5JQ3NnWkdGMFlWc3pYU0FySUNjOEwyRStQQzlzYVQ0bktUdGNjbHh1SUNBZ0lDQWdKQ2hjSWk1bWNDMW9aV0ZrWlhKZlgyeHBjM1JjSWlrdVlYQndaVzVrS0NjOGJHa2dZMnhoYzNNOVhDSm1jQzFvWldGa1pYSmZYMnhwYzNRdGFYUmxiVndpUGp4aElHaHlaV1k5WENJamRHVnpkR2x0WENJZ1kyeGhjM005WENKbWNDMW9aV0ZrWlhKZlgyeHBjM1F0YkdsdWExd2lQaWNnS3lCa1lYUmhXelJkSUNzZ0p6d3ZZVDQ4TDJ4cFBpY3BPMXh5WEc0Z0lDQWdJQ0FrS0Z3aUxtWndMV2hsWVdSbGNsOWZiR2x6ZEZ3aUtTNWhjSEJsYm1Rb0p6eHNhU0JqYkdGemN6MWNJbVp3TFdobFlXUmxjbDlmYkdsemRDMXBkR1Z0WENJK1BHRWdhSEpsWmoxY0lpTmpiMjUwWVdOMFhDSWdZMnhoYzNNOVhDSm1jQzFvWldGa1pYSmZYMnhwYzNRdGJHbHVhMXdpUGljZ0t5QmtZWFJoV3pWZElDc2dKend2WVQ0OEwyeHBQaWNwTzF4eVhHNGdJQ0FnSUNBa0tGd2lJMjE1VTJsa1pXNWhkbHdpS1M1aGNIQmxibVFvSnp4aElHTnNZWE56UFZ3aWMybGtaVzVoZGw5ZmJHbHVhMXdpSUdoeVpXWTlYQ0lqWENJK0p5dGtZWFJoV3pCZEt5YzhZVDRuS1R0Y2NseHVJQ0FnSUNBZ0pDaGNJaU50ZVZOcFpHVnVZWFpjSWlrdVlYQndaVzVrS0NjOFlTQmpiR0Z6Y3oxY0luTnBaR1Z1WVhaZlgyeHBibXRjSWlCb2NtVm1QVndpSTI5bVptVnlYQ0krSnl0a1lYUmhXekZkS3ljOFlUNG5LVHRjY2x4dUlDQWdJQ0FnSkNoY0lpTnRlVk5wWkdWdVlYWmNJaWt1WVhCd1pXNWtLQ2M4WVNCamJHRnpjejFjSW5OcFpHVnVZWFpmWDJ4cGJtdGNJaUJvY21WbVBWd2lJMmRoYkd4bGNubGNJajRuSzJSaGRHRmJNbDBySnp4aFBpY3BPMXh5WEc0Z0lDQWdJQ0FrS0Z3aUkyMTVVMmxrWlc1aGRsd2lLUzVoY0hCbGJtUW9KenhoSUdOc1lYTnpQVndpYzJsa1pXNWhkbDlmYkdsdWExd2lJR2h5WldZOVhDSWpZV0p2ZFhSY0lqNG5LMlJoZEdGYk0xMHJKenhoUGljcE8xeHlYRzRnSUNBZ0lDQWtLRndpSTIxNVUybGtaVzVoZGx3aUtTNWhjSEJsYm1Rb0p6eGhJR05zWVhOelBWd2ljMmxrWlc1aGRsOWZiR2x1YTF3aUlHaHlaV1k5WENJamRHVnpkR2x0WENJK0p5dGtZWFJoV3pSZEt5YzhZVDRuS1R0Y2NseHVJQ0FnSUNBZ0pDaGNJaU50ZVZOcFpHVnVZWFpjSWlrdVlYQndaVzVrS0NjOFlTQmpiR0Z6Y3oxY0luTnBaR1Z1WVhaZlgyeHBibXRjSWlCb2NtVm1QVndpSTJOdmJuUmhZM1JjSWo0bksyUmhkR0ZiTlYwckp6eGhQaWNwTzF4eVhHNGdJQ0FnZlNrN0lDQmNjbHh1SUNCOUlDQmNjbHh1SUNBcElDQmNjbHh1TG1OaGRHTm9LR1oxYm1OMGFXOXVLR1Z5Y2lrZ2V5QWdYSEpjYmlBZ1kyOXVjMjlzWlM1c2IyY29KMFpsZEdOb0lFVnljbTl5SURvdFV5Y3NJR1Z5Y2lrN0lDQmNjbHh1ZlNrN1hISmNibHh5WEc0dkx5QThJUzB0SUV4SlUxUWdWMGxVU0NCRldEcGNjbHh1THk4Z1ExVlRWRTlOSUZORFVrOU1UQ0JjY2x4dUx5OGdVRkpGVEU5QlJFVlNYSEpjYmk4dklFTlBUVTFGVGxSVElFbFRJRUZTVkVsRFRFVmNjbHh1THk4Z0lDMHRQbHh5WEc1Y2NseHVKQ2duTG1ad0xXZGhiR3hsY25rbktTNU5iM05oYVdNb2UxeHlYRzRnSUcxaGVGSnZkMGhsYVdkb2REb2dOakF3WEhKY2JuMHBPMXh5WEc1Y2NseHVaRzlqZFcxbGJuUXVZbTlrZVM1emRIbHNaUzV2ZG1WeVpteHZkeUE5SUNkb2FXUmtaVzRuTzF4eVhHNWpiMjV6ZENCd2NtVnNiMkZrWlhKQ2JHOWpheUE5SUdSdlkzVnRaVzUwTG5GMVpYSjVVMlZzWldOMGIzSW9YQ0l1Y0hKbGJHOWhaR1Z5WENJcE8xeHlYRzVtZFc1amRHbHZiaUJ3Y21Wc2IyRmtaWElvS1NCN1hISmNiaUFnWkc5amRXMWxiblF1WW05a2VTNXpkSGxzWlM1dmRtVnlabXh2ZHlBOUlDZDJhWE5wWW14bEp6dGNjbHh1SUNCd2NtVnNiMkZrWlhKQ2JHOWpheTV6ZEhsc1pTNWthWE53YkdGNUlEMGdKMjV2Ym1Vbk8xeHlYRzU5TzF4eVhHNWNjbHh1YzJWMFZHbHRaVzkxZENod2NtVnNiMkZrWlhJc0lETXdNREFwTzF4eVhHNWNjbHh1WTI5dWMzUWdZMnh2YzJWVWFXMWxjeUE5SUdSdlkzVnRaVzUwTG5GMVpYSjVVMlZzWldOMGIzSW9YQ0l1WTJ4dmMyVmlkRzVjSWlrN1hISmNibU52Ym5OMElHOXdaVzVDWVhKeklEMGdaRzlqZFcxbGJuUXVjWFZsY25sVFpXeGxZM1J2Y2loY0lpNW1jQzF0Wlc1MVgxOWlZWEp6WENJcE8xeHlYRzVjY2x4dWIzQmxia0poY25NdVlXUmtSWFpsYm5STWFYTjBaVzVsY2lnblkyeHBZMnNuTENCdmNHVnVUbUYyS1R0Y2NseHVZMnh2YzJWVWFXMWxjeTVoWkdSRmRtVnVkRXhwYzNSbGJtVnlLQ2RqYkdsamF5Y3NJR05zYjNObFRtRjJLVHRjY2x4dVhISmNibHh5WEc1bWRXNWpkR2x2YmlCdmNHVnVUbUYyS0dWMlpXNTBLU0I3WEhKY2JpQWdaWFpsYm5RdWNISmxkbVZ1ZEVSbFptRjFiSFFvS1R0Y2NseHVJQ0JrYjJOMWJXVnVkQzVuWlhSRmJHVnRaVzUwUW5sSlpDaGNJbTE1VTJsa1pXNWhkbHdpS1M1emRIbHNaUzUzYVdSMGFDQTlJRndpTWpVd2NIaGNJanRjY2x4dUlDQmtiMk4xYldWdWRDNW5aWFJGYkdWdFpXNTBRbmxKWkNoY0ltMTVVMmxrWlc1aGRsd2lLUzV6ZEhsc1pTNXdZV1JrYVc1blRHVm1kQ0E5SUZ3aU1qQndlRndpTzF4eVhHNTlYSEpjYmx4eVhHNW1kVzVqZEdsdmJpQmpiRzl6WlU1aGRpaGxkbVZ1ZENrZ2UxeHlYRzRnSUdWMlpXNTBMbkJ5WlhabGJuUkVaV1poZFd4MEtDazdYSEpjYmlBZ1pHOWpkVzFsYm5RdVoyVjBSV3hsYldWdWRFSjVTV1FvWENKdGVWTnBaR1Z1WVhaY0lpa3VjM1I1YkdVdWQybGtkR2dnUFNCY0lqQmNJanRjY2x4dUlDQmtiMk4xYldWdWRDNW5aWFJGYkdWdFpXNTBRbmxKWkNoY0ltMTVVMmxrWlc1aGRsd2lLUzV6ZEhsc1pTNXdZV1JrYVc1blRHVm1kQ0E5SUZ3aU1IQjRYQ0k3WEhKY2JuMWNjbHh1WEhKY2JtWjFibU4wYVc5dUlHTnNiM05sVFdWdWRTZ3BJSHRjY2x4dUlDQmpiMjV6ZENCdFpXNTFRMnh2YzJVZ1BTQmtiMk4xYldWdWRDNXhkV1Z5ZVZObGJHVmpkRzl5S0Z3aUxuTnBaR1Z1WVhaZlgyeHBibXRjSWlrN1hISmNiaUFnYldWdWRVTnNiM05sTG1Ga1pFVjJaVzUwVEdsemRHVnVaWElvSjJOc2FXTnJKeXdnWTJ4dmMyVk9ZWFlwTzF4eVhHNTlYSEpjYmx4eVhHNXpaWFJVYVcxbGIzVjBLR05zYjNObFRXVnVkU3dnTXpBd01DazdYSEpjYmx4eVhHNWNjbHh1YkdWMElHeGhjM1JUWTNKdmJHeFViM0FnUFNBd08xeHlYRzVjY2x4dUpDaDNhVzVrYjNjcExuTmpjbTlzYkNobWRXNWpkR2x2YmlobGRtVnVkQ2w3WEhKY2JseHlYRzRnSUd4bGRDQnpkQ0E5SUNRb2RHaHBjeWt1YzJOeWIyeHNWRzl3S0NrN1hISmNiaUFnWEhKY2JpQWdhV1lnS0hOMElEd2dNVEF3S1h0Y2NseHVJQ0FnSUNRb1hDSWpZblJ1Vkc5d1hDSXBMbkpsYlc5MlpVTnNZWE56S0NkaFkzUnBkbVVuS1R0Y2NseHVJQ0I5SUdWc2MyVWdlMXh5WEc0Z0lDQWdhV1lnS0hOMElENGdiR0Z6ZEZOamNtOXNiRlJ2Y0NsN1hISmNiaUFnSUNBZ0lDUW9YQ0lqWW5SdVZHOXdYQ0lwTG5KbGJXOTJaVU5zWVhOektDZGhZM1JwZG1VbktUdGNjbHh1SUNBZ0lIMGdaV3h6WlNCN1hISmNiaUFnSUNBZ0lDUW9YQ0lqWW5SdVZHOXdYQ0lwTG1Ga1pFTnNZWE56S0NkaFkzUnBkbVVuS1R0Y2NseHVJQ0FnSUgwZ0lDQmNjbHh1SUNCOVhISmNiaUFnWEhKY2JpQWdiR0Z6ZEZOamNtOXNiRlJ2Y0NBOUlITjBPMXh5WEc0Z0lGeHlYRzU5S1R0Y2NseHVYSEpjYmx4eVhHNHZMeUF2THlCVFkzSnZiR3dnZEc4Z1ltOTBkRzl0SUc5dUlHUnZZM1Z0Wlc1MElISmxZV1I1WEhKY2JpOHZJQ1FvWkc5amRXMWxiblFwTG5KbFlXUjVLR1oxYm1OMGFXOXVLQ2w3WEhKY2JpOHZJQ0FnSkNoY0ltaDBiV3dzSUdKdlpIbGNJaWt1WVc1cGJXRjBaU2g3SUhOamNtOXNiRlJ2Y0RvZ0pDaGtiMk4xYldWdWRDa3VhR1ZwWjJoMEtDa2dmU3dnTWpBd0tUdGNjbHh1THk4Z0lDQnlaWFIxY200Z1ptRnNjMlU3WEhKY2JpOHZJSDBwTzF4eVhHNWNjbHh1WEhKY2JpOHZJQzh2SUZOdGIyOTBhQ0J6WTNKdmJHeGNjbHh1THk4Z0pDaGtiMk4xYldWdWRDa3VjbVZoWkhrb1puVnVZM1JwYjI0b0tYdGNjbHh1THk4Z0lDQWtLQ2RoVzJoeVpXWmVQVndpSTF3aVhTY3BMbTl1S0NkamJHbGpheWNzWm5WdVkzUnBiMjRnS0dVcElIdGNjbHh1THk4Z0lDQWdJR1V1Y0hKbGRtVnVkRVJsWm1GMWJIUW9LVHRjY2x4dUx5OGdJQ0FnSUdOdmJuTjBJSFJoY21kbGRDQTlJSFJvYVhNdWFHRnphQ3hjY2x4dUx5OGdJQ0FnSUNSMFlYSm5aWFFnUFNBa0tIUmhjbWRsZENrN1hISmNiaTh2SUNBZ0lDQWtLQ2RvZEcxc0xDQmliMlI1SnlrdWMzUnZjQ2dwTG1GdWFXMWhkR1VvZTF4eVhHNHZMeUFnSUNBZ0lDQW5jMk55YjJ4c1ZHOXdKem9nSkhSaGNtZGxkQzV2Wm1aelpYUW9LUzUwYjNCY2NseHVMeThnSUNBZ0lIMHNJREl3TUN3Z1puVnVZM1JwYjI0Z0tDa2dlMXh5WEc0dkx5QWdJQ0FnSUNCM2FXNWtiM2N1Ykc5allYUnBiMjR1YUdGemFDQTlJSFJoY21kbGREdGNjbHh1THk4Z0lDQWdJSDBwTzF4eVhHNHZMeUFnSUgwcE8xeHlYRzR2THlCOUtUdGNjbHh1WEhKY2JtTnZibk4wSUdGdVkyaHZjbk1nUFNCa2IyTjFiV1Z1ZEM1eGRXVnllVk5sYkdWamRHOXlLRndpTG1KMGJsUnZjRndpS1Z4eVhHNWNjbHh1WVc1amFHOXljeTVoWkdSRmRtVnVkRXhwYzNSbGJtVnlLQ2RqYkdsamF5Y3NJQ2hsZG1WdWRDa2dQVDRnZTF4eVhHNGdJR1YyWlc1MExuQnlaWFpsYm5SRVpXWmhkV3gwS0NsY2NseHVYSEpjYmlBZ1kyOXVjM1FnWW14dlkydEpSQ0E5SUdGdVkyaHZjbk11WjJWMFFYUjBjbWxpZFhSbEtDZG9jbVZtSnlrdWMzVmljM1J5S0RFcFhISmNibHh5WEc0Z0lHUnZZM1Z0Wlc1MExtZGxkRVZzWlcxbGJuUkNlVWxrS0dKc2IyTnJTVVFwTG5OamNtOXNiRWx1ZEc5V2FXVjNLSHRjY2x4dUlDQWdJR0psYUdGMmFXOXlPaUFuYzIxdmIzUm9KeXhjY2x4dUlDQWdJR0pzYjJOck9pQW5jM1JoY25RblhISmNiaUFnZlNsY2NseHVmU2s3WEhKY2JseHlYRzVjY2x4dVhISmNibHh5WEc1Y2NseHViR1YwSUhSdlpHRjVJRDBnYm1WM0lFUmhkR1VvS1R0Y2NseHViR1YwSUdSa0lEMGdVM1J5YVc1bktIUnZaR0Y1TG1kbGRFUmhkR1VvS1NrdWNHRmtVM1JoY25Rb01pd2dKekFuS1R0Y2NseHViR1YwSUcxdElEMGdVM1J5YVc1bktIUnZaR0Y1TG1kbGRFMXZiblJvS0NrZ0t5QXhLUzV3WVdSVGRHRnlkQ2d5TENBbk1DY3BPeUF2TDBwaGJuVmhjbmtnYVhNZ01DRmNjbHh1YkdWMElIbDVlWGtnUFNCMGIyUmhlUzVuWlhSR2RXeHNXV1ZoY2lncE8xeHlYRzVjY2x4dWRHOWtZWGtnUFNCa1pDQXJJQ2N0SnlBcklHMXRJQ3NnSnkwbklDc2dlWGw1ZVR0Y2NseHVZMjl1YzI5c1pTNXNiMmNvZEc5a1lYa3BPMXh5WEc1Y2NseHVZMjl1YzNRZ1pHRjBaVU52Ym5SeWIyd2dQU0JrYjJOMWJXVnVkQzVuWlhSRmJHVnRaVzUwUW5sSlpDaGNJbk4wWVhKMFhDSXBYSEpjYm1SaGRHVkRiMjUwY205c0xuWmhiSFZsSUQwZ2RHOWtZWGs3SWwxOSJ9
