// Redirects the user to desired link when clicked on a navbar button

let buttons = document.querySelectorAll(".nav-button");

buttons.forEach(function(button) {
  button.addEventListener("click", function () {
    let link = this.getAttribute("data-href");
    window.open(link, "_blank");
  });
});

// Changes the content when clicked on a different tab in the "Learn more about crypto" section.

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