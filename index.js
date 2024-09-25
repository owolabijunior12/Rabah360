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
