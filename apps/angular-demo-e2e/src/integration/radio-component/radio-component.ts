import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import properties from "../../fixtures/properties.json";

Given(/^cs I am a user of GOA application$/, function () {
  cy.visit("http://localhost:4200/");
});

When(/^cs Navigating to Radio basic component$/, function () {
  cy.get("[label='Radio']").click();
});

Then(/^cs I should be able to validate radio basic button css property when unchecked$/, function () {
  cy.get('goa-radio-group[name="color"]').shadow().find('label[class="goa-radio"]').find('div[class="goa-radio-icon"]').should("have.css", "border");
  cy.get('goa-radio-group[name="color"]').shadow().find('label[class="goa-radio"]').find('div[class="goa-radio-icon"]').should("have.css", "border-radius", "50%");
  cy.get('goa-radio-group[name="color"]').shadow().find('label[class="goa-radio"]').find('div[class="goa-radio-icon"]').should("have.css", "border", properties["goa-radio-border-width"] + " solid " + hexToRgb(properties["color-gray-600"]));
  cy.get('goa-radio-group[name="color"]').shadow().find('label[class="goa-radio"]').find('div[class="goa-radio-icon"]').should("have.css", "width", remToPx(properties["goa-radio-diameter"]));
  cy.get('goa-radio-group[name="color"]').shadow().find('label[class="goa-radio"]').find('div[class="goa-radio-icon"]').should("have.css", "height", remToPx(properties["goa-radio-diameter"]));
  cy.get('goa-radio-group[name="color"]').shadow().find('label[class="goa-radio"]').find('div[class="goa-radio-icon"]').should("have.css", "box-sizing", properties["box-sizing"]);
  cy.get('goa-radio-group[name="color"]').shadow().find('label[class="goa-radio"]').find('div[class="goa-radio-icon"]').should("have.css", "color", hexToRgb(properties["goa-color-text"]));
  cy.get('goa-radio-group[name="color"]').shadow().find('label[class="goa-radio"]').find('div[class="goa-radio-icon"]').should("have.css", "font-size", remToPx(properties["fs-base"]));
  cy.get('goa-radio-group[name="color"]').shadow().find('label[class="goa-radio"]').find('div[class="goa-radio-icon"]').should("have.css", "font-family", properties["font-family"]);

});

Then(/^cs I should be able to validate radio basic button css property when checked$/, function () {
  cy.get('goa-radio-group[name="color"]').shadow().find('label[data-testid="radio-option-orange"]').find('div[class="goa-radio-icon"]').should("have.css", "border");
  cy.get('goa-radio-group[name="color"]').shadow().find('label[data-testid="radio-option-orange"]').find('div[class="goa-radio-icon"]').should("have.css", "border-radius", "50%");
  cy.get('goa-radio-group[name="color"]').shadow().find('label[data-testid="radio-option-orange"]').find('div[class="goa-radio-icon"]').should("have.css", "border", properties["goa-radio-border-width--checked"] + " solid " + hexToRgb(properties["goa-color-interactive--active"]));
  cy.get('goa-radio-group[name="color"]').shadow().find('label[data-testid="radio-option-orange"]').find('div[class="goa-radio-icon"]').should("have.css", "width", remToPx(properties["goa-radio-diameter"]));
  cy.get('goa-radio-group[name="color"]').shadow().find('label[data-testid="radio-option-orange"]').find('div[class="goa-radio-icon"]').should("have.css", "height", remToPx(properties["goa-radio-diameter"]));
  cy.get('goa-radio-group[name="color"]').shadow().find('label[data-testid="radio-option-orange"]').find('div[class="goa-radio-icon"]').should("have.css", "box-sizing", properties["box-sizing"]);
  cy.get('goa-radio-group[name="color"]').shadow().find('label[data-testid="radio-option-orange"]').find('div[class="goa-radio-icon"]').should("have.css", "color", hexToRgb(properties["goa-color-text"]));
  cy.get('goa-radio-group[name="color"]').shadow().find('label[data-testid="radio-option-orange"]').find('div[class="goa-radio-icon"]').should("have.css", "font-size", remToPx(properties["fs-base"]));
  cy.get('goa-radio-group[name="color"]').shadow().find('label[data-testid="radio-option-orange"]').find('div[class="goa-radio-icon"]').should("have.css", "font-family", properties["font-family"]);
});

Then(/^cs I should be able to validate radio error button css property when unchecked$/, function () {
  cy.get('goa-radio-group[name="color"]').shadow().find('label[class="goa-radio goa-radio--error"]').find('div[class="goa-radio-icon"]').should("have.css", "border");
  cy.get('goa-radio-group[name="color"]').shadow().find('label[class="goa-radio goa-radio--error"]').find('div[class="goa-radio-icon"]').should("have.css", "border-radius", "50%");
  cy.get('goa-radio-group[name="color"]').shadow().find('label[class="goa-radio goa-radio--error"]').find('div[class="goa-radio-icon"]').should("have.css", "border", properties["goa-radio-border-width--checked"] + " solid " + hexToRgb(properties["goa-color-interactive--active"]));
  cy.get('goa-radio-group[name="color"]').shadow().find('label[class="goa-radio goa-radio--error"]').find('div[class="goa-radio-icon"]').should("have.css", "width", remToPx(properties["goa-radio-diameter"]));
  cy.get('goa-radio-group[name="color"]').shadow().find('label[class="goa-radio goa-radio--error"]').find('div[class="goa-radio-icon"]').should("have.css", "height", remToPx(properties["goa-radio-diameter"]));
  cy.get('goa-radio-group[name="color"]').shadow().find('label[class="goa-radio goa-radio--error"]').find('div[class="goa-radio-icon"]').should("have.css", "box-sizing", properties["box-sizing"]);
  cy.get('goa-radio-group[name="color"]').shadow().find('label[class="goa-radio goa-radio--error"]').find('div[class="goa-radio-icon"]').should("have.css", "color", hexToRgb(properties["goa-color-text"]));
  cy.get('goa-radio-group[name="color"]').shadow().find('label[class="goa-radio goa-radio--error"]').find('div[class="goa-radio-icon"]').should("have.css", "font-size", remToPx(properties["fs-base"]));
  cy.get('goa-radio-group[name="color"]').shadow().find('label[class="goa-radio goa-radio--error"]').find('div[class="goa-radio-icon"]').should("have.css", "font-family", properties["font-family"]);
});


function remToPx(rem) {
  return rem.replace("rem", "") * 16 + "px";
}

//function to convery hex to rgb
// return rgb(r, g, b)
function hexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? "rgb(" + parseInt(result[1], 16) + ", " + parseInt(result[2], 16) + ", " + parseInt(result[3], 16) + ")" : null;
}