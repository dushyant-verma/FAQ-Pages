document.addEventListener("DOMContentLoaded", function () {
  const questions = document.querySelectorAll(".faq-question");

  questions.forEach(question => {
    question.addEventListener("click", function() {
      this.classList.toggle("active");
      const answer = this.nextElementSibling;
      if (this.classList.contains("active")) {
        answer.style.display = "block";
      } else {
        answer.style.display = "none";
      }
    });
  });
});
