document.addEventListener("DOMContentLoaded", function() {
  removeCredits();
});

function removeCredits(){
  document.querySelectorAll('.md-footer')[0].getElementsByClassName("md-footer-meta")[0].remove();
  document.querySelectorAll('.md-footer-meta')[0].childNodes[1].remove();
}