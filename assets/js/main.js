
/** Selects elements from the DOM and stores them in variables. */ 

let dots = document.querySelectorAll('.dots');
let hiddenTexts = document.querySelectorAll('.hidden-text');
let buttonMore = document.querySelectorAll('.read-more-button');
let tabInfos = document.querySelectorAll('.tabs__tab ');


/** 
 * Opens a new paragraph when "Read more" button clicked
 * Changes "Read more" to "Read less"
 * Hides the paragraph if "Read less" is clicked
*/

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

/** Opens NavBar link in a new tab */ 

function onNavButtonClick() {
  let link = this.getAttribute("data-href");
  window.open(link, "_blank");
}

/** Changes contents of tabInfos when different tab is clicked. */

function onTabClick(event) {
  const target = document.querySelector(event.target.dataset.tabValue);
  tabInfos.forEach(tabInfo => {
    tabInfo.classList.remove('active');
    if (tabInfo.id === target.id) {
      tabInfo.classList.add('active');
    }
  });
}

/** initialises an event handling for some elements in the DOM */ 

function initializePage() {
  let buttons = document.querySelectorAll(".nav-button");

  buttons.forEach(function(button) {
    button.addEventListener("click", onNavButtonClick);
  });

  let tabs = document.querySelectorAll('[data-tab-value]');

  tabs.forEach(tab => {
    tab.addEventListener('click', onTabClick);
  });
}

/** Initialises the content once the page is loaded */ 

addEventListener('DOMContentLoaded', initializePage);




