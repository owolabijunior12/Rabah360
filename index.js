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
});
