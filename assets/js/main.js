// Redirects the user to desired link when clicked on a navbar button

let buttons = document.querySelectorAll(".nav-button");

buttons.forEach(function (button) {
  button.addEventListener("click", function () {
    let link = this.getAttribute("data-href");
    window.open(link, "_blank");
  });
});

// Changes the content when clicked on a different tab in the "Learn more about crypto" section.
// Credits to (https://www.w3schools.com/howto/howto_js_tabs.asp) for guidance.

const tabs = document.querySelectorAll('[data-tab-value]');
const tabInfos = document.querySelectorAll('.tabs__tab ');

tabs.forEach(tab => {
  tab.addEventListener('click', event => {
    const target = document.querySelector(event.target.dataset.tabValue);
    tabInfos.forEach(tabInfo => {
      tabInfo.classList.remove('active');
      if (tabInfo.id === target.id) {
        tabInfo.classList.add('active');
      }
    });
  });
});

/*
This loop iterates through hiddenTexts and readMoreButtons to display the text when the button
is clicked if the inner width is <= 430px

Credits to (https://www.w3schools.com/howto/howto_js_read_more.asp) for guidance.
*/

let dots = document.querySelectorAll('.dots');
let hiddenTexts = document.querySelectorAll('.hidden-text');
let buttonMore = document.querySelectorAll('.read-more-button');

function readMore() {
  for (let i = 0; i < dots.length; i++) {
    let dot = dots[i];
    let hiddenText = hiddenTexts[i];
    let button = buttonMore[i];

    if (dot.style.display === "none") {
      dot.style.display = "inline";
      button.innerHTML = "Read more";
      hiddenText.style.display = "none";
    } else {
      dot.style.display = "none";
      button.innerHTML = "Read less";
      hiddenText.style.display = "inline";
    }
  }
}