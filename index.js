window.onload = function() {
    setTimeout(function() {
      document.getElementById('loader').style.display = 'none'; 
      document.getElementById('main-content').style.display = 'block'; 
    }, 1000); 
  };
  
  function showLoader() {
    document.getElementById('loader').style.display = 'flex'; 
    setTimeout(function() {
      document.getElementById('loader').style.display = 'none'; 
    }, 1000);
  }

  function toggleDetails(element) {
   
    const detailsContent = element.querySelector('.details-content');

   
    if (detailsContent.style.display === "none" || detailsContent.style.display === "") {
        detailsContent.style.display = "block";
    } else {
        detailsContent.style.display = "none";
    }
}
document.getElementById('scrollToPricingButton').addEventListener('click', function() {
  const pricingDiv = document.getElementById('pricing');
  pricingDiv.scrollIntoView({
      behavior: 'smooth', // Smooth scrolling
      block: 'start' // Scroll to the start of the element
  });
});

const playButton = document.getElementById('playButton');
const video = document.getElementById('video');


video.controls = false;

playButton.addEventListener('click', () => {
    playButton.style.display = 'none'; 
    // video.controls = true; 
    video.play(); 
});


  document.getElementById('myButton').addEventListener('click', function(event) {
    event.preventDefault(); 
    showLoader(); 
  });

  document.getElementById('myLink').addEventListener('click', function(event) {
    event.preventDefault(); 
    showLoader(); 
});
function toggleMenu() {
    const mobileNavbar = document.getElementById('mobileNavbar');
    const mobilebtn = document.getElementById('mobile-btn');
    const menuIcon = document.getElementById('menuIcon');
    const closeIcon = document.getElementById('closeIcon');

    mobileNavbar.classList.toggle('active');
    mobilebtn.classList.toggle('active');
    
    menuIcon.classList.toggle('hidden'); 
    closeIcon.classList.toggle('hidden');
}


document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();


    document.getElementById('loader').style.display = 'block';


    document.getElementById('submit-btn').disabled = true;


    setTimeout(function() {
    
        document.getElementById('loginForm').submit();
    }, 1000);
})


 
  function applyDarkModeToElements() {
    const elements = document.querySelectorAll(
      '.second-container, .third-container, .quickly-div, .start-div, .flex-div, .person, .second-grouped-div, .sixth-grouped-div, .comment-container, .msg-div, .quickly-look-div, .grps-div, .event-div, .giving-div, .help-container div, .help-container div a, .first-container, .our-story, .service-div.form, .fifth-groupd-div, .cs-div, .faq, .first-div-contact, .first-service-container,.longdiv,.forth-grouped-div ,.form,.form input,.form textarea,.first-container-abt'
    );

    elements.forEach((el) => {
      el.classList.add('dark-mode');
    });
  }

 
  function removeDarkModeFromElements() {
    const elements = document.querySelectorAll(
      '.second-container, .third-container, .quickly-div, .start-div, .flex-div, .person, .second-grouped-div, .sixth-grouped-div, .comment-container, .msg-div, .quickly-look-div, .longdiv,.grps-div, .event-div, .giving-div, .help-container div, .help-container div a, .first-container, .our-story, .service-div.form, .fifth-groupd-div, .cs-div, .faq, .first-div-contact, .first-service-container,.forth-grouped-div ,.form,.form input,.form textarea,.first-container-abt'
    );

    elements.forEach((el) => {
      el.classList.remove('dark-mode');
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
   
    const theme = localStorage.getItem('theme') || 'light';

   
    if (theme === 'dark') {
      document.body.classList.add('dark-mode');
      applyDarkModeToElements();
    } else {
      document.body.classList.add('light-mode');
    }
  });

 
  function themes() {
    const body = document.body;
    const currentTheme = localStorage.getItem('theme') || 'light';

    if (currentTheme === 'dark') {
      body.classList.remove('dark-mode');
      localStorage.setItem('theme', 'light');
      removeDarkModeFromElements();
    } else {
      body.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark');
      applyDarkModeToElements();
    }
  }

