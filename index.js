window.onload = () => {
  setTimeout(() => {
      toggleVisibility('loader', 'none');
      toggleVisibility('main-content', 'block');
  }, 1000);
};


function toggleVisibility(elementId, displayStyle) {
  document.getElementById(elementId).style.display = displayStyle;
}

function showLoader(timeout = 1000) {
  toggleVisibility('loader', 'flex');
  setTimeout(() => {
      toggleVisibility('loader', 'none');
  }, timeout);
}

function toggleDetails(element) {
  const detailsContent = element.querySelector('.details-content');
  detailsContent.style.display = detailsContent.style.display === "block" ? "none" : "block";
}



document.getElementById('playButton')?.addEventListener('click', () => {
  playVideo();
});

document.getElementById('myButton')?.addEventListener('click', (event) => {
  event.preventDefault();
  showLoader();
});

document.getElementById('myLink')?.addEventListener('click', (event) => {
  event.preventDefault();
  showLoader();
});

document.getElementById('loginForm')?.addEventListener('submit', (event) => {
  event.preventDefault();
  handleLoginFormSubmission();
});


document.addEventListener('DOMContentLoaded', function () {
  
  const scrollButton = document.getElementById('scrollToPricingButton');
  const pricingSection = document.getElementById('pricing');

  
  if (scrollButton && pricingSection) {
    scrollButton.addEventListener('click', () => {
      scrollToElement('pricing');
    });
  }
});

function scrollToElement(elementId) {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}



function playVideo() {
  const video = document.getElementById('video');
  toggleVisibility('playButton', 'none');
  video.controls = true;
  video.play();
}


function toggleMenu() {
  const mobileNavbar = document.getElementById('mobileNavbar');
  const mobileBtn = document.getElementById('mobile-btn');
  const menuIcon = document.getElementById('menuIcon');
  const closeIcon = document.getElementById('closeIcon');

  mobileNavbar.classList.toggle('active');
  mobileBtn.classList.toggle('active');
  menuIcon.classList.toggle('hidden');
  closeIcon.classList.toggle('hidden');
}

document.querySelectorAll('#mobileNavbar li').forEach(link => {
  link.addEventListener('click', () => {
    toggleMenu();  
  });
});

function handleLoginFormSubmission() {
  toggleVisibility('loader', 'block');
  document.getElementById('submit-btn').disabled = true;

  setTimeout(() => {
      document.getElementById('loginForm').submit();
  }, 1000);
}


document.addEventListener('DOMContentLoaded', () => {
  const theme = localStorage.getItem('theme') || 'light';
  if (theme === 'dark') {
      applyDarkMode();
  } else {
      applyLightMode();
  }
});

function themes() {
  const currentTheme = localStorage.getItem('theme') || 'light';
  if (currentTheme === 'dark') {
      applyLightMode();
      localStorage.setItem('theme', 'light');
  } else {
      applyDarkMode();
      localStorage.setItem('theme', 'dark');
  }
}

function applyDarkMode() {
  document.body.classList.add('dark-mode');
  toggleDarkModeForElements(true);
}

function applyLightMode() {
  document.body.classList.remove('dark-mode');
  toggleDarkModeForElements(false);
}

function toggleDarkModeForElements(enableDarkMode) {
  const elements = document.querySelectorAll(
      '.second-container, .third-container, .quickly-div, .start-div, .flex-div, .person, .second-grouped-div, ' +
      '.sixth-grouped-div, .comment-container, .msg-div, .quickly-look-div, .grps-div, .event-div, .giving-div, ' +
      '.help-container div, .help-container div a, .first-container, .our-story, .service-div.form, ' +
      '.fifth-groupd-div, .cs-div, .faq, .first-div-contact, .first-service-container,.longdiv,.forth-grouped-div, ' +
      '.form, .form input, .form textarea,.longdiv-mobile, .first-container-abt'
  );
  
  elements.forEach((el) => {
      if (enableDarkMode) {
          el.classList.add('dark-mode');
      } else {
          el.classList.remove('dark-mode');
      }
  });
}
