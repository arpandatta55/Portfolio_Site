
// Projects Slider
$('.projects_holder>ul').slick({
  centerMode: false,
  centerPadding: '0px',
  slidesToShow: 3,
  slidesToScroll: 1,
  infinite: false,
  dots: false,
  autoplay: false,
  // autoplaySpeed: 3000,
  arrows: true,
  // rtl: true,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      }
    }
  ]
});


// React Slider
if (window.innerWidth <= 575) {
  $('.react_row').slick({
    centerMode: false,
    centerPadding: '0px',
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: false,
    dots: false,
    autoplay: false,
    // autoplaySpeed: 3000,
    arrows: true,
    // rtl: true,
    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });

}


// Hamburger Toggle
$(document).ready(function () {
  $(".menu-link-wrapper").click(function () {
    $("body").addClass("ham_added");
  });
  $(".close").click(function () {
    $("body").removeClass("ham_added");
  });
  $(".navitem").click(function () {
    $("body").removeClass("ham_added");
  });
});


// Close Menu when click outside

$(document).click(function (event) {
  if (
    !$(event.target).closest(".menu-link-wrapper,.header_listing_holder").length // 1st er ta click korle kaj start hbe ebong dwitiyo ta te click korale bondho hbe na
  ) {
    $("body").removeClass("ham_added"); //class sore jabe
  }
});


// Counter

var counterStarted = false;

$('.work_count').waypoint(function () {
  if (!counterStarted) {
    $(".counter").each(function () {
      var $this = $(this),
        countTo = parseInt($this.attr("data-countto")),
        countDuration = parseInt($this.attr("data-duration"));

      $({ counter: 0 }).animate(
        {
          counter: countTo
        },
        {
          duration: countDuration,
          easing: "linear",
          step: function () {
            let val = Math.floor(this.counter);
            $this.text(val < 10 ? "0" + val : val);
          },
          complete: function () {
            let val = this.counter;
            $this.text(val < 10 ? "0" + val : val);
          }
        }
      );
    });

    counterStarted = true;
  }
}, {
  offset: '80%' // scroll e viewport e 80% ashle fire hobe
});


// Section Scrolling
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function (event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {

        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 100, function () {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) {
            return false;
          } else {
            $target.attr('tabindex', '-1');
            $target.focus();
          };
        });
      }
    }
  });


$(function () {

  var link = $('.navlink');

  // Move to specific section when click on menu link
  link.on('click', function (e) {
    var target = $($(this).attr('href'));
    $('html, body').animate({
      scrollTop: target.offset().top
    }, 200);
    $(this).addClass('active_one');
    e.preventDefault();
  });

  // Run the scrNav when scroll
  $(window).on('scroll', function () {
    scrNav();
  });


  function scrNav() {
    var sTop = $(window).scrollTop();
    $('section,footer').each(function () {
      var id = $(this).attr('id'),
        offset = $(this).offset().top - 1,
        height = $(this).height();
      if (sTop >= offset && sTop < offset + height) {
        link.removeClass('active_one');
        $('.navitem').find('[data-scroll="' + id + '"]').addClass('active_one');
      }
    });
  }
  scrNav();
});

// Section Scrolling


// Bulb Light On Js

// function applyLightonByScreen() {
//   if (window.innerWidth < 768) {
//     // Always add class below 768px
//     $('.skills_section').addClass('lighton');
//   }
// }

// $(document).ready(function () {
//   // Run on page load
//   applyLightonByScreen();

//   // Run on window resize
//   $(window).on('resize', function () {
//     applyLightonByScreen();
//   });

//   // Checkbox toggle only for >=768px
//   $('.rocker input[type="checkbox"]').change(function () {
//     if (window.innerWidth >= 768) {
//       $('.skills_section').toggleClass('lighton');
//     }
//   });
// });



// ScrollSpy Equal Height
window.addEventListener('load', () => {
  const sections = document.querySelectorAll('.item_wrap');
  const listItems = document.querySelectorAll('.list-group-item');

  sections.forEach((section, index) => {
    const height = section.offsetHeight;
    if (listItems[index]) {
      listItems[index].style.height = height + 'px';
    }
  });
});

// Optional: if layout changes on resize
window.addEventListener('resize', () => {
  const sections = document.querySelectorAll('.item_wrap');
  const listItems = document.querySelectorAll('.list-group-item');

  sections.forEach((section, index) => {
    const height = section.offsetHeight;
    if (listItems[index]) {
      listItems[index].style.height = height + 'px';
    }
  });
});


// Dark Mode 
$(document).ready(function () {
  $(".darkmode label").click(function () {
    $('body').toggleClass("dark");
  });
});

// Dark Mode


// Scroll To Top

$(document).ready(function () {
  // Show/hide button by adding/removing class
  $(window).scroll(function () {
    if ($(this).scrollTop() > 1000) {
      $('.to_top').addClass('visible');
    } else {
      $('.to_top').removeClass('visible');
    }
  });

  // Scroll to top on click
  $('.to_top').click(function () {
    $('html, body').animate({ scrollTop: 0 }, 500);
    return false;
  });
});

// Scroll To Top


// Scroll Moo
if (window.innerWidth >= 768) {
  let SM = ScrollMoo({
    ".whoami_img": {
      indicatorStart: 80,
      ease: "easeOutQuad",
      keyframes: {
        transform: {
          translateY: {
            0: "100px",
            25: "20px",
            50: "0px",
            100: "0px"
          }
        }
      }
    },
  });
}

// TEXT REVEAL ANIMATION
$(document).ready(function () {
  new SplitType(".whoami_content p", { types: "words" });
  let manifestoTl = gsap.timeline({
    scrollTrigger: {
      trigger: ".whoami_content",
      markers: false,
      start: "top 80%",
      end: "bottom 50%",
      scrub: { scrub: true, ease: "power4.inOut" },
    },
  });
  manifestoTl.fromTo(
    ".whoami_content p .word",
    { opacity: 0.16 },
    {
      opacity: 1,
      stagger: {
        each: 0.1,
      },
    }
  );
});


// Disabled inspect mode 

// document.addEventListener('contextmenu', event => event.preventDefault());
// document.onkeydown = function (e) {
//   if (
//     e.keyCode === 123 || // F12
//     (e.ctrlKey && e.shiftKey && e.keyCode === 73) || // Ctrl+Shift+I
//     (e.ctrlKey && e.shiftKey && e.keyCode === 74) || // Ctrl+Shift+J
//     (e.ctrlKey && e.keyCode === 85) // Ctrl+U (View source)
//   ) {
//     return false;
//   } 
// };

// Disabled inspect mode 


// Add class in header in 991px scroll_up

let lastScrollTop = 0;
const header = document.querySelector('header');
const threshold = 100;

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

  if (window.innerWidth <= 991) {
    if (Math.abs(currentScroll - lastScrollTop) <= 5) return;

    if (currentScroll > lastScrollTop && currentScroll > threshold) {
      // Scrolling down
      header.classList.add('header-hide');
      header.classList.remove('header-show');
    } else {
      // Scrolling up
      header.classList.add('header-show');
      header.classList.remove('header-hide');
    }

    lastScrollTop = currentScroll;
  }
});


// Email JS

(function () {
  emailjs.init("uUdemqlEi4BwdfSCW"); // Replace with your EmailJS public key
})();


document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();

  emailjs.sendForm("service_h0m3h0r", "template_c2kuqia", this).then(
    function () {
      alert("Message sent successfully!");
    },
    function (error) {
      alert("Failed to send message. Please try again.\n" + JSON.stringify(error));
    }
  );

  // Optional: Reset form
  this.reset();
});