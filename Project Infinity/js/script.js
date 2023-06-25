let navbar = document.querySelector('.header .navbar');
let menuSliderBtn = document.querySelector('#menu-slider-btn');

menuSliderBtn.onclick = () => {
  menuSliderBtn.classList.toggle('fa-times');
  navbar.classList.toggle('active');
}

var swiper = new Swiper(".menu-slider", {
  grabCursor: true,
  loop: true,
  centeredSlides: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper(".food-slider", {
  loop: true,
  centeredSlides: true,
  allowTouchMove: false,
  preventClicks: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      allowTouchMove: true,
    },
    700: {
      slidesPerView: 3,
    },
    1000: {
      slidesPerView: 4,
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// Open about-us preview
let aboutUspreContainer = document.querySelector('.about-us-preview');
let aboutUspreBox = aboutUspreContainer.querySelectorAll('.aboutus-preview');

document.querySelectorAll('.about .icons').forEach(icons => {
  icons.onclick = () => {
    aboutUspreContainer.style.display = 'flex';
    let fName = icons.getAttribute('data-name');
    aboutUspreBox.forEach(AUpreview => {
      let target = AUpreview.getAttribute('data-target');
      if (fName == target) {
        AUpreview.classList.add('active');
      }
    });
  };
});

// Close preview
aboutUspreContainer.querySelector('#aboutus-close-preview').onclick = () => {
  aboutUspreContainer.style.display = 'none';
  aboutUspreBox.forEach(close => {
    close.classList.remove('active');
  });
};

let reservationpreContainer = document.querySelector('.reservation-preview');
let reservationpreBox = reservationpreContainer.querySelectorAll('.reserve-preview');

document.querySelectorAll('.header .reservation-btn').forEach(reservation => {
  reservation.onclick = () => {
    reservationpreContainer.style.display = 'flex';
    let fName = reservation.getAttribute('data-name');
    reservationpreBox.forEach(RFpreview => {
      let target = RFpreview.getAttribute('data-target');
      if (fName == target) {
        RFpreview.classList.add('active');
      }
    });
  };
});

// Close preview
reservationpreContainer.querySelector('#reserve-close-preview').onclick = () => {
  reservationpreContainer.style.display = 'none';
  reservationpreBox.forEach(close => {
    close.classList.remove('active');
  });
};

// Open food preview
let previewContainer = document.querySelector('.food-preview-container');
let previewBox = previewContainer.querySelectorAll('.food-preview');

document.querySelectorAll('.food .slide').forEach(food => {
  food.onclick = () => {
    previewContainer.style.display = 'flex';
    let fName = food.getAttribute('data-name');
    previewBox.forEach(preview => {
      let target = preview.getAttribute('data-target');
      if (fName == target) {
        preview.classList.add('active');
      }
    });
  };
});

// Close food preview
previewContainer.querySelector('#close-preview').onclick = () => {
  previewContainer.style.display = 'none';
  previewBox.forEach(close => {
    close.classList.remove('active');
  });
};

// Food menu preview
var swiper = new Swiper(".food-menu-slider", {
  grabCursor: false,
  allowTouchMove: false,
  loop: true,
  autoHeight: true,
  centeredSlides: true,
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      allowTouchMove: true,
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })
})()

// Stores booking details
document.getElementById("booking").onsubmit = store;
function store(event) {
  event.preventDefault();

  const firstName = document.getElementById("validationCustom01").value;
  const lastName = document.getElementById("validationCustom02").value;
  const userName = document.getElementById("validationCustom03").value;
  const bookDate = document.getElementById("validationCustom04").value;
  const bookTime = document.getElementById("validationCustom05").value;
  const bookPax = document.getElementById("validationCustom06").value;
  const mobileNumber = document.getElementById("validationCustom07").value;

  var RF_BookedTimes = 0;
  //validation
  if ((firstName == "") || (lastName == "") ||
    (bookDate == "") || (bookTime == "") || (bookPax == "") || (mobileNumber == "")) {
    alert("Error: Please fill in all the details before submitting!");
  } else {

    localStorage.setItem("RF_firstname", firstName);
    console.log("Message: Booking information stored!");

    localStorage.setItem("RF_lastname", lastName);
    console.log("Message: Booking information stored!");

    localStorage.setItem("RF_username", userName);
    console.log("Message: Booking information stored!");

    localStorage.setItem("RF_booking-date", bookDate);
    console.log("Message: Booking information stored!");

    localStorage.setItem("RF_booking-time", bookTime);
    console.log("Message: Booking information stored!");

    localStorage.setItem("RF_numberofPax", bookPax);
    console.log("Message: Booking information stored!");

    localStorage.setItem("RF_mobilenumber", mobileNumber);
    console.log("Message: Booking information stored!");

    alert("Message: Booking confirmed!\tYou may check the booking details by toggling the check reservation button.");
  }
};

// Show booking details
function checkReservation() {
  var getfName = localStorage.getItem("RF_firstname");
  var getlName = localStorage.getItem("RF_lastname");
  var getbookDate = localStorage.getItem("RF_booking-date");
  var getbookTime = localStorage.getItem("RF_booking-time");
  var getbookPax = localStorage.getItem("RF_numberofPax");
  var getmobileNumber = localStorage.getItem("RF_mobilenumber");

  if ((getfName !== null) || (getlName !== null) ||
    (getbookDate !== null) || (getbookTime !== null)
    || (getbookPax !== null) || (getmobileNumber !== null)) {
    console.log("Error: No data found!");
    alert("Booking Details:\n Full Name:\t" + getfName + " " + getlName +
      "\nDate:\t" + getbookDate + "\nTime:\t" + getbookTime +
      "\nNumber of Pax:\t" + getbookPax + "\nPhone Number:\t" + getmobileNumber +
      "\n\nNote:\t We will only accept customer who are late for 15mins after the booking time!\nOther than that, late comer will not be served.");
  } else {
    alert("Error: No record found. Failed to fetch booking details.");
  }
};

// Cancel booking details
function deleteBooking() {

  var getfName = localStorage.getItem("RF_firstname");
  var getlName = localStorage.getItem("RF_lastname");
  var getuName = localStorage.getItem("RF_username")
  var getbookDate = localStorage.getItem("RF_booking-date");
  var getbookTime = localStorage.getItem("RF_booking-time");
  var getbookPax = localStorage.getItem("RF_numberofPax");
  var getmobileNumber = localStorage.getItem("RF_mobilenumber");
  console.log("Message: Retrieving booking information....");

  if (confirm("Message:\t Confirm cancel booking?") == true) {

    if ((getfName === null) && (getlName === null) && (getuName === null)
      && (getbookDate === null) && (getbookTime === null)
      && (getbookPax === null) && (getmobileNumber === null)) {
      alert("Message:\n No booking details left to delete!");
      console.log("Message: Data not found.");
    } else {
      localStorage.removeItem("RF_firstname");
      localStorage.removeItem("RF_lastname");
      localStorage.removeItem("RF_username");
      localStorage.removeItem("RF_booking-date");
      localStorage.removeItem("RF_booking-time");
      localStorage.removeItem("RF_numberofPax");
      localStorage.removeItem("RF_mobilenumber");
      console.log("Message: Booking has been cancelled!");

      alert("Message:\t Successfully cancelled booking!\n You may now create another booking :)");
    }
  }
};

// This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
// This function creates an <iframe> (and YouTube player)
// after the API code downloads.
var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '400',
    width: '300',
    videoId: 'FTociictyyE',
    playerVars: {
      'playsinline': 1
    },
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
}
// The API will call this function when the video player is ready.
function onPlayerReady(event) {
  // Leave it empty as default ones will play the video automatically
}
// The API calls this function when the player's state changes.
// The function indicates that when playing a video (state=1),
// the player should play for six seconds and then stop.
var done = false;
function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.PLAYING && !done) {
    setTimeout(stopVideo, 6000);
    done = true;
  }
}
function stopVideo() {
  player.stopVideo();
}


// Function cookie declaration
function setcookie(name, value, days) {
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    var expires = "; expires=" + date.toGMTString();
  }
  else
    var expires = "";
  document.cookie = name + "=" + value + expires + ";path=/";
}

function feedbackSubmit() {
  var valName = document.querySelector("#FB_fullname").value;
  var valEmail = document.querySelector("#FB_email").value;
  var valphoneNumber = document.querySelector("#FB_phonenumber").value;
  var valSubject = document.querySelector("#FB_subjectTitle").value;
  var valMessage = document.querySelector("#FB_message").value;

  if ((valName === "") || (valEmail === "") || (valphoneNumber === "") ||
    (valSubject === "") || (valMessage === "")) {
    console.log("Error: Blank input found!");
    alert("Error:\nPlease fill in all the details required.");
  } else {
    // Cookie expiry date = half a day
    setcookie("FB_FullName", valName, 0.5);
    setcookie("FB_Subject", valSubject, 0.5);
    setcookie("FB_Content", valMessage, 0.5);
    sessionStorage.setItem("FeedBackForm_email", valEmail);
    sessionStorage.setItem("FeedBackForm_phone-number", valphoneNumber);

    var NumberOfPerson = localStorage.getItem("FeedBackForm_No_of_Person");
    console.log("NumberofPerson = " + NumberOfPerson);

    if ((NumberOfPerson == 0) || (NumberOfPerson == null)) {
      console.log("Message: No one submitted the form.");
      NumberOfPerson + 1;
    }

    ++NumberOfPerson;
    localStorage.setItem("FeedBackForm_No_of_Person", NumberOfPerson);

    console.log("NumberofPerson = " + NumberOfPerson);
    alert("Message:\n Form submitted!");
    console.log("Message: Cookies set!");
  }
}

// Work Application Form
//Reset Btn
function resetField() {
  let name = document.getElementById('name');
  let email = document.getElementById('email');
  let phonenumber = document.getElementById('phonenumber');
  let uploadFile = document.getElementById('uploadFile');
  let message = document.getElementById('message');

  //Set Value
  name.value = '';
  email.value = '';
  phonenumber.value = '';
  uploadFile.value = '';
  message.value = '';

};

//SendBtn

function sendFunction() {
  //Set Value And LocalStorage
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var phonenumber = document.getElementById('phonenumber').value;
  var uploadFile = document.getElementById('uploadFile').value;
  var message = document.getElementById('message').value;

  if ((name != "") && (email != "")
    && (phonenumber != "") && (uploadFile != "")
    && (message != "")) {
    localStorage.setItem('WF_name', name);
    localStorage.setItem('WF_email', email);
    localStorage.setItem('WF_phonenumber', phonenumber);
    localStorage.setItem('WF_uploadFile', uploadFile);
    localStorage.setItem('WF_message', message);
    console.log("Success!");

    alert("Message:\nForm has been submitted. We'll reach you out soon!");
    window.location.href = "index.html";
  } else {
    alert("Error: Please fill in the details!");
  }
}

// GoogleMap API
function initMap() {
  const infinityLocation = { lat: 1.2959994233961154, lng: 103.85263513603854 };
  const sgLocation = { lat: 3.3801543946461297, lng: 101.7274993876476 };
  const map = new google.maps.Map(document.getElementById("google-map"), {
    center: sgLocation,
    zoom: 5,
  });

  new google.maps.Marker({
    position: infinityLocation,
    label: "We are here!",
    map,
  });
}
window.initMap = initMap;

//save contactForm data to local storage
function submitContactForm() {
  //creating array to store
  let contactFormData = JSON.parse(localStorage.getItem('contactFormData')) || [];

  const name = document.getElementById('contactName').value;
  const email = document.getElementById('contactEmail').value;
  const message = document.getElementById('contactMessage').value;

  //if statement to validate
  if (name === "") {
      Swal.fire({
          icon: 'error',
          title: 'Please fill in the name',
          showConfirmButton: true

      });
      return false;
  } else if (email === "") {
      Swal.fire({
          icon: 'error',
          title: 'Please fill in the email',
          showConfirmButton: true

      });
  } else if (message === "") {
      Swal.fire({
          icon: 'error',
          title: 'Please fill in the message',
          showConfirmButton: true

      });
  } else {
      //if not empty then push to local storage.
      contactFormData.push({
          Name: name,
          Email: email,
          Message: message
      });

      localStorage.setItem('contactFormData', JSON.stringify(contactFormData));

      //display message
      Swal.fire({
          icon: 'success',
          title: 'Message Send !!',
          showConfirmButton: false,
          timer: 1500
      }).then(function () {
          //to refresh the page back to the top
          location.replace("contact.html");
      });

  }
}

//subscribe newsletter
// Function cookie declaration
function setCookie(name, value, days) {
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    var expires = "; expires=" + date.toGMTString();
  }
  else
    var expires = "";
  document.cookie = name + "=" + value + expires + ";path=/";
}

function subscribeNewsletter(){
  var uEmail = document.getElementById("inputSubscribe").value;

  if(uEmail == ""){
    alert("Message: Please fill in your email before subscribing!");
  }else{
    setCookie("NewsLetterSubscribe_Email", uEmail, 1);
    alert("Message: Successfully subscribe to our newsletter!");
  }
}