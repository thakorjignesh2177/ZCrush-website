// ZCrußh Website

const startButton = document.querySelector(".start-btn");

const loginButton = document.querySelector(".login");
const signupButton = document.querySelector(".signup");


// ================= LOGIN =================

const loginModal = document.querySelector("#loginModal");
const closeLogin = document.querySelector("#closeLogin");
const loginForm = document.querySelector("#loginForm");
const loginMessage = document.querySelector("#loginMessage");

loginButton.addEventListener("click", function() {
  loginModal.style.display = "flex";
});

closeLogin.addEventListener("click", function() {
  loginModal.style.display = "none";
});

loginForm.addEventListener("submit", function(event) {
  event.preventDefault();
  
  loginMessage.textContent =
    "Login system will be connected to the database later.";
});

loginModal.addEventListener("click", function(event) {
  if (event.target === loginModal) {
    loginModal.style.display = "none";
  }
});


// ================= SIGN UP =================

const signupModal = document.querySelector("#signupModal");
const closeSignup = document.querySelector("#closeSignup");
const signupForm = document.querySelector("#signupForm");
const signupMessage = document.querySelector("#signupMessage");

signupButton.addEventListener("click", function() {
  signupModal.style.display = "flex";
});

closeSignup.addEventListener("click", function() {
  signupModal.style.display = "none";
});

signupForm.addEventListener("submit", function(event) {
  event.preventDefault();
  
  signupMessage.textContent =
    "Account system will be connected to the database later.";
});

signupModal.addEventListener("click", function(event) {
  if (event.target === signupModal) {
    signupModal.style.display = "none";
  }
});


// ================= GET STARTED =================

startButton.addEventListener("click", function() {
  document.querySelector(".features").scrollIntoView({
    behavior: "smooth"
  });
});


// ================= SHORTS VIEWER =================

const watchButtons = document.querySelectorAll(".watch-btn");

const shortViewer = document.querySelector("#shortViewer");
const closeShort = document.querySelector("#closeShort");

const likeButton = document.querySelector("#likeButton");
const commentButton = document.querySelector("#commentButton");
const shareButton = document.querySelector("#shareButton");

const viewerMessage = document.querySelector("#viewerMessage");


watchButtons.forEach(function(button) {
  
  button.addEventListener("click", function() {
    
    shortViewer.style.display = "flex";
    
    viewerMessage.textContent = "";
    
  });
  
});


closeShort.addEventListener("click", function() {
  
  shortViewer.style.display = "none";
  
});


shortViewer.addEventListener("click", function(event) {
  
  if (event.target === shortViewer) {
    
    shortViewer.style.display = "none";
    
  }
  
});


likeButton.addEventListener("click", function() {
  
  viewerMessage.textContent = "❤️ Liked!";
  
});


commentButton.addEventListener("click", function() {
  
  viewerMessage.textContent =
    "💬 Comment feature coming soon!";
  
});


shareButton.addEventListener("click", function() {
  
  viewerMessage.textContent =
    "🔗 Share feature coming soon!";
  
});