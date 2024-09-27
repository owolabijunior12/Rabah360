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

// Select the toggle button
const themeToggleBtn = document.getElementById('theme-toggle');
themeToggleBtn.addEventListener("click",()=>{
  console.log("hello");
  
})
// Check if the user has a previously saved theme preference
let darkMode = localStorage.getItem('darkMode');

// Enable Dark Mode
const enableDarkMode = () => {
    document.body.classList.add('dark-mode'); // Add the dark-mode class to body
    localStorage.setItem('darkMode', 'enabled'); // Store user's preference
};

// Disable Dark Mode
const disableDarkMode = () => {
    document.body.classList.remove('dark-mode'); // Remove the dark-mode class from body
    localStorage.setItem('darkMode', 'disabled'); // Store user's preference
};

// Check the user's theme preference and apply it
if (darkMode === 'enabled') {
    enableDarkMode();
} else {
    disableDarkMode();
}
const themes = ()=>{
  console.log("hello");
  
    darkMode = localStorage.getItem('darkMode'); // Get current state

    if (darkMode !== 'enabled') {
        enableDarkMode(); // Enable dark mode if it is not enabled
    } else {
        disableDarkMode(); // Disable dark mode if it is enabled
    }
}

// Toggle between themes on button click
themeToggleBtn.addEventListener('click', () => {
  console.log("hello");
  
    darkMode = localStorage.getItem('darkMode'); // Get current state

    if (darkMode !== 'enabled') {
        enableDarkMode(); // Enable dark mode if it is not enabled
    } else {
        disableDarkMode(); // Disable dark mode if it is enabled
    }
});
