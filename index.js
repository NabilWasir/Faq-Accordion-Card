const btn = document.querySelector(".arrow-button");
const firstQuestion = document.querySelector(".question-one");
const secondQuestion = document.querySelector(".question-two");
const thirdQuestion = document.querySelector(".question-three");
const fourthQuestion = document.querySelector(".question-four");
const fifthQuestion = document.querySelector(".question-five");
const firstButton = document.querySelector(".first-button");
const secondButton = document.querySelector(".second-button");
const thirdButton = document.querySelector(".third-button");
const fourthButton = document.querySelector(".fourth-button");
const fifthButton = document.querySelector(".fifth-button");
const answerOne = document.querySelector(".answer-one");
const answerTwo = document.querySelector(".answer-two");
const answerThree = document.querySelector(".answer-three");
const answerFour = document.querySelector(".answer-four");
const answerFive = document.querySelector(".answer-five");

firstButton.addEventListener("click", function () {
  if ((answerOne.style.display = "none")) {
    answerOne.style.display = "block";
    firstButton.style.transform = "rotate(180deg)";
    answerTwo.style.display = "none";
    answerThree.style.display = "none";
    answerFour.style.display = "none";
    answerFive.style.display = "none";
    firstQuestion.style.fontWeight = "700";
    secondQuestion.style.fontWeight = "400";
    thirdQuestion.style.fontWeight = "400";
    fourthQuestion.style.fontWeight = "400";
    fifthQuestion.style.fontWeight = "400";
  } else {
    answerOne.style.display = "none";
    firstButton.style.transform = "rotate(0deg)";
  }
});

secondButton.addEventListener("click", function () {
  if ((answerTwo.style.display = "none")) {
    answerTwo.style.display = "block";
    secondButton.style.transform = "rotate(180deg)";
    answerOne.style.display = "none";
    answerThree.style.display = "none";
    answerFour.style.display = "none";
    answerFive.style.display = "none";
    secondQuestion.style.fontWeight = "700";
    firstQuestion.style.fontWeight = "400";
    thirdQuestion.style.fontWeight = "400";
    fourthQuestion.style.fontWeight = "400";
    fifthQuestion.style.fontWeight = "400";
  } else {
    answerTwo.style.display = "none";
    secondButton.style.transform = "rotate(0deg)";
  }
});
thirdButton.addEventListener("click", function () {
  if ((answerThree.style.display = "none")) {
    answerThree.style.display = "block";
    thirdButton.style.transform = "rotate(180deg)";
    answerOne.style.display = "none";
    answerTwo.style.display = "none";
    answerFour.style.display = "none";
    answerFive.style.display = "none";
    thirdQuestion.style.fontWeight = "700";
    secondQuestion.style.fontWeight = "400";
    firstQuestion.style.fontWeight = "400";
    fourthQuestion.style.fontWeight = "400";
    fifthQuestion.style.fontWeight = "400";
  } else {
    answerThird.style.display = "none";
    thirdButton.style.transform = "rotate(0deg)";
  }
});

fourthButton.addEventListener("click", function () {
  if ((answerFour.style.display = "none")) {
    answerFour.style.display = "block";
    fourthButton.style.transform = "rotate(180deg)";
    answerOne.style.display = "none";
    answerTwo.style.display = "none";
    answerThree.style.display = "none";
    answerFive.style.display = "none";
    fourthQuestion.style.fontWeight = "700";
    secondQuestion.style.fontWeight = "400";
    thirdQuestion.style.fontWeight = "400";
    firstQuestion.style.fontWeight = "400";
    fifthQuestion.style.fontWeight = "400";
  } else {
    answerFour.style.display = "none";
    fourthButton.style.transform = "rotate(0deg)";
  }
});

fifthButton.addEventListener("click", function () {
  if ((answerFive.style.display = "none")) {
    answerFive.style.display = "block";
    fifthButton.style.transform = "rotate(180deg)";
    answerOne.style.display = "none";
    answerTwo.style.display = "none";
    answerThree.style.display = "none";
    answerFour.style.display = "none";
    fifthQuestion.style.fontWeight = "700";
    secondQuestion.style.fontWeight = "400";
    thirdQuestion.style.fontWeight = "400";
    fourthQuestion.style.fontWeight = "400";
    firstQuestion.style.fontWeight = "400";
  } else {
    answerFive.style.display = "none";
    fifthButton.style.transform = "rotate(0deg)";
  }
});
