let buttons = document.getElementsByClassName("nav-button");

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function() {
      let link = this.getAttribute("data-href");
      window.open(link, "_blank");
    });
  }
