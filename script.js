document.querySelector("form").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Message sent! We'll get back to you soon.");
});


window.onscroll = function () {
  document.getElementById("topBtn").style.display =
    document.body.scrollTop > 300 || document.documentElement.scrollTop > 300
      ? "block"
      : "none";
};

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
