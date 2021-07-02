const questions = document.querySelectorAll(".questions");

const toggleCollapsedClass = function (e) {
  this.classList.toggle("collapsed");
};

questions.forEach(function selectIndividual(question) {
  question.addEventListener("click", toggleCollapsedClass);
});
