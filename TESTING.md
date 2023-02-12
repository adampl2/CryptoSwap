# CryptoSwap - Testing

![multi screen img](docs/Multidevice-screenshot.jpg)

[View deployed site here](https://adampl2.github.io/CryptoSwap/index.html)

- - -

## CONTENTS

* [Automated testing](#Automated-testing)

Testing progressed at every stage of this project. This ensured that most issues were fixed before the website was finished. Chrome DevTools were utilised when building the website to help with troubleshooting as the website transformed.

## Automated Testing

### W3C Validator

The [W3C validator](https://validator.w3.org/) was used to validate the HTML and CSS pages.

- - -

### JavaScript Validator

[jshint](https://jshint.com/) was used to validate all JavaScript code on this page.

- - -

### Lighthouse

### Desktop

### Mobile

- - -

## Manual Testing

### User Stories

`Client Goals`

- - -

### Full Testing

I have fully tested the website using Google Chrome and Mozilla Firefox on desktop (HP Pavilion Convertible 14 inch) and mobile (Samsung Note9).

It was ensured that through the testing process content was responsive using the Google Developer Tools.

Further testing was performed by friends & family. No issues reported.

`Home Page`

| Feature | Expected Outcome | Testing Performed | Result | Pass/Fail |
| --- | --- | --- | --- | --- |
| The Logo | Link should refresh the page | Logo clicked | Home page reloads | Pass |
| *Buy Crypto!* button | Redirects user to external Binance page | Clicked on button | Binance page opens in a separate window | Pass |
| *Coinmarketcap* button | Redirects user to external Coinmarketcap page | Clicked on button | Coinmarketcap page opens in a separate window | Pass |
| *News* button | Redirects user to external Coindesk page | Clicked on button | Coindesk page opens in a separate window | Pass |
| *Learn about crypto* button | Redirects user to Learn about crypto section on the page | Clicked on button | User redirected to Learn about crypto section | Pass |   

`Home page - Convert Your Bitcoin`

| Feature | Expected Outcome | Testing Performed | Result | Pass/Fail |
| --- | --- | --- | --- | --- |
| Enter amount in BTC input | User should see converter amount in EUR | Any amount entered from 0 to 21,000,000 | BTC/EUR conversion | Pass |
| Enter amount in BTC input | User should see "Please enter only numeric values" message | Entered anything other than a Number | "Please enter only numeric values" message appears below in red | Pass |
| Enter amount in BTC input | User should see "The max limit is 21000000" message | Enter a number greater than 21,000,000BTC | "The max limit is 21000000" appears below in red| Pass |