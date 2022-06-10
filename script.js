// preloader
var loader = document.getElementById("preloader");
window.addEventListener("load", function(){
  loader.style.display = "none";
});

// section 1 start button click
$(".ourServices").click(function () {
  window.location = "index.html#?id=" + this.id;
});
// section 1 end button click

$(".bg-color-1").on("click", function () {
  window.location = "blog.html";
});
// why us slider start
$(document).ready(function () {
  $(".items").slick({
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: ".next",
    prevArrow: ".previous",
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          // centerMode: true,
        },
      },
    ],
  });
});

// why us slider end

// testimonial slider start
$(document).ready(function () {
  $(".slider-testimonial").slick({
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrow: false,
    dots: false,
    nextArrow: ".arrow-right-long",
    prevArrow: ".arrow-left-small",
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          // centerMode: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});
var beginNow;
$(document).ready(function () {
  $(".arrow-right-long").click(function () {
    clearInterval(beginNow);
    forwardImage();
  });
});
$(document).ready(function () {
  $(".arrow-left-small").click(function () {
    clearInterval(beginNow);
    backwardsImage();
  });
});

// left arrow and right arrow color change onclick
// $(".arrows-left-right").on('click','svg path',function(){
//   // remove classname 'active' from all li who already has classname 'active'
//   $(".arrows-left-right svg path.active-3").removeClass("active-3");
//   // adding classname 'active' to current click li
//   $(this).addClass("active-3");
// });
//   testimonial slider end

// our mission slider start
function openPara(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active-1", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active-1";
}
document.getElementById("defaultOpen").click();
//   our mission slider end

// flip box start


$(document).ready(function() {
  var front = document.getElementsByClassName("front");
  var back = document.getElementsByClassName("back");

  var highest = 0;
  var absoluteSide = "";

  for (var i = 0; i < front.length; i++) {
    if (front[i].offsetHeight > back[i].offsetHeight) {
      if (front[i].offsetHeight > highest) {
        highest = front[i].offsetHeight;
        absoluteSide = ".front";
      }
    } else if (back[i].offsetHeight > highest) {
      highest = back[i].offsetHeight;
      absoluteSide = ".back";
    }
  }
  $(".front").css("height", highest);
  $(".back").css("height", highest);
  $(absoluteSide).css("position", "absolute");
});

// flip box end

// portfolio our work start

// $(".list-group").on("click", ".list-group-item", function () {
//   $(".list-group .list-group-item.active-1").removeClass("active-1");
//   $(this).addClass("active-1");
// });

$(document).ready(function () {
  $(".our-class").slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    rows: 2,
    dots: true,
    prevArrow: false,
    nextArrow: false,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1198,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          // centerMode: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          rows: 1,
          slidesPerRow: 1,
          slidesToShow: 1,
          // centerMode: true,
        },
      },
    ],
  });
});
$('a[data-toggle="tab"]').on("shown.bs.tab", function (e) {
  $(".our-class").slick("setPosition");
});
// Add active class to the current button (highlight it)
$(document).ready(function () {
  $(".list-group li a").click(function (e) {
    $(".list-group li a").removeClass("active-2");

    var $this = $(this);
    if (!$this.hasClass("active-2")) {
      $this.addClass("active-2");
    }
    //e.preventDefault();
  });
});

// Add active class to the current button (highlight it)
// var listGroup = document.getElementById("listGroup");
// var listGroupItem = listGroup.getElementsByClassName("list");
// for (var i = 0; i < listGroupItem.length; i++) {
//   listGroupItem[i].addEventListener("click", function () {
//     var current = document.getElementsByClassName("active-1");
//     current[0].className = current[0].className.replace("active-1", "");
//     this.className += "active-1";
//   });
// }

// portfolio our work end


// section 5 counter

$(document).ready(function(){
  $(".counter").counterUp({
    delay: 10,
    time: 1200
  });
});

// smooth scroll
var scroll = new SmoothScroll('.navbar a[href*="#"]', {
	speed: 800,
	speedAsDuration: true
});