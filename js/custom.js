$(function(){


  


  // price range


  
  $(document).ready(function() {
    $('.edit-toggle').on('click', function(e) {
        e.preventDefault();
        $(this).closest('.card-body').find('.display-text').toggle();
        $(this).closest('.card-body').find('.edit-input').toggle();
    });
  });

// address
  $(document).ready(function() {
    $('#add-new-btn').click(function() {
        $('#address-book').hide();
        $('#new-address-form').removeClass('hidden');
    });
    $('#go-back').click(function() {
        $('#new-address-form').addClass('hidden');
        $('#address-book').show();
    });
});

    
  $('.new-slide').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 2,
    speed:500,
    arrows:false,
    dots:false,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 991.98,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          infinite: true,
          speed:500,
          arrows:false,
          dots: false
        }
      },
      {
        breakpoint: 766.98,
        settings: {
          infinite: true,
          slidesToShow: 3,
          slidesToScroll: 1,
          speed:500,
          arrows:false,
          dots:false
        }
      },
      {
        breakpoint:  575.98,
        settings: {
          infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    speed:500,
    arrows:false,
    dots:false
        }
      }
    
    ]
  });
  $('.best-slide').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 2,
    speed:500,
    arrows:false,
    dots:false,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 991.98,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          infinite: true,
          speed:500,
          arrows:false,
          dots: false
        }
      },
      {
        breakpoint: 766.98,
        settings: {
          infinite: true,
          slidesToShow: 3,
          slidesToScroll: 1,
          speed:500,
          arrows:false,
          dots:false
        }
      },
      {
        breakpoint:  575.98,
        settings: {
          infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    speed:500,
    arrows:false,
    dots:false
        }
      }
    
    ]
  });

  $('.lap-slide').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 2,
    speed:500,
    arrows:false,
    dots:false,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 991.98,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          infinite: true,
          speed:500,
          arrows:false,
          dots: false
        }
      },
      {
        breakpoint: 766.98,
        settings: {
          infinite: true,
          slidesToShow: 3,
          slidesToScroll: 1,
          speed:500,
          arrows:false,
          dots:false
        }
      },
      {
        breakpoint:  575.98,
        settings: {
          infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    speed:500,
    arrows:false,
    dots:false
        }
      }
    
    ]
  });

  $('.tv-slide').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 2,
    speed:500,
    arrows:false,
    dots:false,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 991.98,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          infinite: true,
          speed:500,
          arrows:false,
          dots: false
        }
      },
      {
        breakpoint: 766.98,
        settings: {
          infinite: true,
          slidesToShow: 3,
          slidesToScroll: 1,
          speed:500,
          arrows:false,
          dots:false
        }
      },
      {
        breakpoint:  575.98,
        settings: {
          infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    speed:500,
    arrows:false,
    dots:false
        }
      }
    
    ]
  });

 
// search

$(document).ready(function(){
  $('.search').click(function(){
      $('.search-input').toggle();
  });
});

})





// color
document.addEventListener('DOMContentLoaded', () => {
  const storageOptions = document.querySelectorAll('.storage-option');
  const colorOptions = document.querySelectorAll('.color-option');

  storageOptions.forEach(option => {
      option.addEventListener('click', () => {
          storageOptions.forEach(opt => opt.classList.remove('active'));
          option.classList.add('active');
      });
  });

  colorOptions.forEach(option => {
      option.addEventListener('click', () => {
          colorOptions.forEach(opt => opt.classList.remove('active'));
          option.classList.add('active');
      });
  });
});
// color
// spec
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}
// spec

// top to bottom

// fixed
$(window).scroll(function(){
  var scrolling = $(this).scrollTop();
  var footerTop = $('footer').offset().top;
  var windowHeight = $(window).height();
  
  if (scrolling > 50 && (scrolling + windowHeight) < footerTop) {
      if (!$(".menu-bg").hasClass("nav-bg")) {
          $(".menu-bg").stop().css('display', 'block').animate({ transform: 'translateY(0)' }, 200).addClass("nav-bg");
      }
  } else {
      if ($(".menu-bg").hasClass("nav-bg")) {
          $(".menu-bg").stop().animate({ transform: 'translateY(100%)' }, 200, function() {
              $(this).removeClass("nav-bg").css('display', 'none');
          });
      }
  }

  
  // Hide when reaching the footer
  if ((scrolling + windowHeight) >= footerTop) {
      if ($(".menu-bg").hasClass("nav-bg")) {
          $(".menu-bg").stop().animate({ transform: 'translateY(100%)' }, 0, function() {
              $(this).removeClass("nav-bg").css('display', 'none');
          });
      }
  }
});
// fixed

  
window.onscroll = function() {scrollFunction()};
  
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


// quantity


document.addEventListener('DOMContentLoaded', (event) => {
  const decreaseButton = document.querySelector('.quantity-decrease');
  const increaseButton = document.querySelector('.quantity-increase');
  const quantityValue = document.querySelector('.quantity-value');

  decreaseButton.addEventListener('click', () => {
      let value = parseInt(quantityValue.textContent, 10);
      if (value > 0) {
          value -= 1;
          quantityValue.textContent = value;
      }
  });

  increaseButton.addEventListener('click', () => {
      let value = parseInt(quantityValue.textContent, 10);
      value += 1;
      quantityValue.textContent = value;
  });
});

// checkout

function clearActiveButtons() {
  document.getElementById('btn-cod').classList.remove('active-button');
  document.getElementById('btn-bkash').classList.remove('active-button');
  document.getElementById('btn-online').classList.remove('active-button');
}

document.getElementById('btn-bkash').addEventListener('click', function() {
  clearActiveButtons();
  this.classList.add('active-button');
  document.getElementById('secondary-buttons').style.display = 'block';
});

document.getElementById('btn-online').addEventListener('click', function() {
  clearActiveButtons();
  this.classList.add('active-button');
  document.getElementById('secondary-buttons').style.display = 'block';
});

document.getElementById('btn-cod').addEventListener('click', function() {
  clearActiveButtons();
  this.classList.add('active-button');
  document.getElementById('secondary-buttons').style.display = 'none';
});

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('secondary-buttons').style.display = 'none';
});


$(document).ready(function() {
  $('.edit-toggle').on('click', function(e) {
      e.preventDefault();
      $(this).closest('.card-body').find('.display-text').toggle();
      $(this).closest('.card-body').find('.edit-input').toggle();
  });
});

// create address

$(document).ready(function() {
  $('.edit-toggle').click(function() {
      $(this).siblings('.edit-input').toggle();
      $(this).siblings('.display-text').toggle();
  });
});



//progressbar 

// $(document).ready(function() {
//   let progressStates = ['Pending', 'Confirmed', 'Canceled', 'Processing', 'Shipped', 'Delivered', 'Returned'];
//   let currentProgress = 0; // Update this based on the actual order status

//   function updateProgressBar() {
//       $('.progress-step').each(function(index) {
//           if (index <= currentProgress) {
//               $(this).addClass('completed');
//               $(this).find('.progress-bar-fill').css('width', '100%');
//           } else {
//               $(this).removeClass('completed');
//               $(this).find('.progress-bar-fill').css('width', '0%');
//           }
//       });
//   }

//   updateProgressBar();

//   // Make progress bar functional
//   setInterval(function() {
//       if (currentProgress < progressStates.length - 1) {
//           currentProgress++;
//           updateProgressBar();
//           $('p.text-center').text('The order status is ' + progressStates[currentProgress] + ' at ' + new Date().toLocaleString());
//       }
//   }, 5000); // Change status every 5 seconds for demonstration
// });


//  product details
function changeImage(element) {
  document.getElementById('mainImage').src = element.src;
}

// product details

