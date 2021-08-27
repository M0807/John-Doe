


function mainSearch() {

    let searchName = document.getElementById("search").value;

    if (searchName.length > 0) {


        document.getElementById("search").value = "";

    }
}

function sendSearch() {


    let sendName = document.getElementById("send").value;

    if ( sendName.length > 0) {


        document.getElementById("send").value = "";
    }
}



function myFunction(x) {
    x.classList.toggle("change");
}


$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        loop: true,
        items: 3.2,
        margin: 30,
        autoplay: true,
        autoplayTimeout: 1000,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            500: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });
});

