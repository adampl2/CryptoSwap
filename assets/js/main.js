
// Redirects the user to desired link when clicked on a navbar button

let buttons = document.getElementsByClassName("nav-button");

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    let link = this.getAttribute("data-href");
    window.open(link, "_blank");
  });
}

// Changes the content when clicked on a different tab in the "Learn more about crypto" section.

const tabs = document.querySelectorAll('[data-tab-value]');
const tabInfos = document.querySelectorAll('[data-tab-info]');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = document
      .querySelector(tab.dataset.tabValue);

    tabInfos.forEach(tabInfo => {
      tabInfo.classList.remove('active')
    })
    target.classList.add('active');
  })
})