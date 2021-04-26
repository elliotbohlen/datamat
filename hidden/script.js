// var count = $('.obj').length;
// // var count = document.getElementById("container").length;
// console.log(count)

// var randscale = Math.floor(Math.random() * 28);
// var smallran = Math.floor(Math.random() * 10);
// console.log(randscale)
// console.log(rando)


// var array = document.getElementById("container");
// console.log(array)
// array.removeChild(array.childNodes[0]);


document.querySelectorAll('.obj').forEach(function(element) {

    // console.log(randscale)
    if (1 == 1) {
        console.log("removed")
            // $('.obj').remove();

    } else {
        console.log("hsfdlak")


    }

});



// var x = document.getElementById("mySelect");
// if (x.length > 0) {
//   x.remove(x.length-1);
// }


// var x = document.querySelector("#container");
// if (x.length > 0) {
//     x.remove(x.length - 1);
//     console.log("klasdf")
// }


let currentDate = new Date();
let hour = currentDate.getHours();
let min = currentDate.getMinutes();
let sec = currentDate.getSeconds();
console.log(hour);
console.log(min);


// timeinfo = document.getElementById('clock');
// timeinfo.innerText = (hour + ":" + min + ":" + sec);

$(function() {
    setInterval(function() {
        let currentDate = new Date();
        let hour = currentDate.getHours();
        let min = currentDate.getMinutes();
        let sec = currentDate.getSeconds();
        $("#clock").html("IN THE LAB " + hour + ":" + min + ":" + sec);
    }, 1000);
});




// sun is down 
if (hour >= 19 && hour <= 7) {
    console.log("its dark")
    var o = (hour / 24);  
    console.log(o)
    $('.obj').css('opacity', o);

} else { //sunlight
    console.log("its sun"); 
    var o = (hour / 24);  
    console.log(o)
    $('.obj').css('opacity', o);
}


// $('#container').click(function() {
//     $("#protocol").toggleClass("protocollive");
// });


$(document).ready(function() {
    $("body").click(function() {
        console.log("click")
        $("#protocol").toggle()
    });
});

// function autorun() {

// }
// if (window.addEventListener) window.addEventListener("load", autorun, false);
// else if (window.attachEvent) window.attachEvent("onload", autorun);
// // else window.onload = autorun;
// document.onmousemove = function mousePosition(event) {
//     console.log("hello")
//     var elements = document.getElementsByTagName("*");

//     for (var i = 0; i < elements.length; i++) {
//         var element = elements[i];

//         element.style.left = event.pageX / 40 + "%";
//         element.style.top = event.pageY / 90 + "%";

//     }
// }










// let currentDate = new Date();
// let hour = currentDate.getHours();
// let min = currentDate.getMinutes();
// let sec = currentDate.getSeconds();
// console.log(hour);
// console.log(min);


// timeinfo = document.getElementById('clock');
// timeinfo.innerText = (hour + ":" + min + ":" + sec);

// $(function() {
//     setInterval(function() {
//         let currentDate = new Date();
//         let hour = currentDate.getHours();
//         let min = currentDate.getMinutes();
//         let sec = currentDate.getSeconds();
//         $("#clock").html("IN THE LAB " + hour + ":" + min + ":" + sec);
//     }, 1000);
// });




// // sun is down 
// if (hour >= 19 && hour <= 7) {
//     console.log("its dark")
//     var o = (hour / 24);  
//     console.log(o)
//     $('div').css('opacity', o);

// } else { //sunlight
//     console.log("its sun"); 
//     var o = (hour / 24);  
//     console.log(o)
//     $('div').css('opacity', o);
// }

// let dynamicStyles = null;

// function addAnimation(body) {
//     if (!dynamicStyles) {
//         dynamicStyles = document.createElement('style');
//         dynamicStyles.type = 'text/css';
//         document.head.appendChild(dynamicStyles);
//     }

//     dynamicStyles.sheet.insertRule(body, dynamicStyles.length);
// }

// addAnimation(`
//       @keyframes changeColor { 
//          0% {

//             text-shadow: 0 0 ${sec}px lime;
//          }
//          50%{
//             text-shadow: 0 0 0px lime;
//          }
//         100%{
//             text-shadow: 0 0 ${sec}px lime;
//         }
//       }
//     `);



// var element = document.querySelector("div");
// element.className = "syd";
// // element.style.height = "50px";
// // element.style.width = "50px";
// // element.style.backgroundImage = "linear-gradient(to right,rgba(255, 0, 0, 0.1) 25%,rgba(255, 0, 0) 50%,rgba(255, 0, 0, 0.1) 75%)";
// element.style.animation = "5s infinite changeColor";

// document.body.appendChild(element);

// // ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds();
// // console.log(time);