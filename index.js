window.onload = function() {
    setTimeout(function() {
      document.getElementById('loader').style.display = 'none'; 
      document.getElementById('main-content').style.display = 'block'; 
    }, 2000); 
  };
  
  function showLoader() {
    document.getElementById('loader').style.display = 'flex'; 
    setTimeout(function() {
      document.getElementById('loader').style.display = 'none'; 
    }, 2000);
  }

  
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

document.addEventListener("DOMContentLoaded", function() {
    let currentComment = 0;
    const comments = document.querySelectorAll(".comment-container");
    const totalComments = comments.length;

    document.getElementById("next-btn").addEventListener("click", function() {
        comments[currentComment].classList.remove("active");
        currentComment = (currentComment + 1) % totalComments;
        comments[currentComment].classList.add("active");
    });

    document.getElementById("prev-btn").addEventListener("click", function() {
        comments[currentComment].classList.remove("active");
        currentComment = (currentComment - 1 + totalComments) % totalComments;
        comments[currentComment].classList.add("active");
    });
});
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();


    document.getElementById('loader').style.display = 'block';


    document.getElementById('submit-btn').disabled = true;


    setTimeout(function() {
    
        document.getElementById('loginForm').submit();
    }, 1000);
})

<script>
document.addEventListener('DOMContentLoaded', () => {
    // Check for dark mode preference in localStorage or set default to light
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-mode');
        document.body.classList.remove('light-mode');
    } else {
        document.body.classList.add('light-mode');
        document.body.classList.remove('dark-mode');
    }
});

document.addEventListener('DOMContentLoaded', () => {
  // Check for dark mode preference in localStorage or set default to light
  const theme = localStorage.getItem('theme') || 'light'; // Default to light
  if (theme === 'dark') {
      document.body.classList.add('dark-mode');
      document.body.classList.remove('light-mode');
  } else {
      document.body.classList.add('light-mode');
      document.body.classList.remove('dark-mode');
  }
});
const theme = localStorage.getItem('theme') ; //
function themes() {
  const body = document.body;

  // Toggle dark and light mode
  if (body.classList.contains('dark-mode')) {
      body.classList.remove('dark-mode');      
      localStorage.setItem('theme', 'light'); // Store the current theme as 'light'
  } else {      
      body.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark'); // Store the current theme as 'dark'
  }

  // Select all elements that need to switch themes
  const elements = document.querySelectorAll(
      '.second-container, .third-container, .quickly-div, .start-div, .flex-div, .person, .second-grouped-div, .sixth-grouped-div, .comment-container, .msg-div, .quickly-look-div, .grps-div, .event-div, .giving-div, .help-container div, .help-container div a, .first-container, .our-story, .service-div.form, .fifth-groupd-div, .cs-div, .faq, .first-div-contact, .first-service-container,.forth-grouped-div ,.form,.form input,.form textarea'
  );

  // Apply the theme to selected elements
  elements.forEach((el) => {
      if (body.classList.contains('dark-mode')) {
          el.classList.add('dark-mode');         
      } else {
          el.classList.remove('dark-mode');
         
      }
  });
}

// Load theme on page load
document.addEventListener('DOMContentLoaded', () => {
  // const theme = localStorage.getItem('theme') || 'light'; // Default to light if no theme is set
  if (theme === 'dark') {
      document.body.classList.add('dark-mode');
  } else {
      document.body.classList.add('');
  }

  // Apply the theme to elements on load
});
themes(); // Call themes to apply the correct classes to elements
