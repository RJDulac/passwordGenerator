import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  //properties
  includeLetters = false;
  includesNumbers = false;
  includeSymbols = false;

  password = "";
  passwordLength = 0;

  //event handlers
  onButtonClick() {
    const numbers = "1234567890";
    const letters = "abcdefghijklmnopqrstuvwzyz";
    const symbols = "!@#$%^&*()";

    let validChars = "";
    if (this.includesNumbers) {
      validChars += numbers;
    }
    if (this.includeLetters) {
      validChars += letters;
    }
    if (this.includeSymbols) {
      validChars += symbols;
    }
    let generatedPassword = "";
    for (let i = 0; i < this.passwordLength; i++) {
      const index = Math.floor(Math.random() * validChars.length);
      generatedPassword += validChars[index];
    }
    this.password = generatedPassword;
  }
  onChangeUseLetters() {
    this.includeLetters = !this.includeLetters;
  }
  onChangeUseNumbers() {
    this.includesNumbers = !this.includesNumbers;
  }
  onChangeUseSymbols() {
    this.includeSymbols = !this.includeSymbols;
  }
  onChangeLength(value: string) {
    const parsedValue = parseInt(value);
    this.passwordLength = parsedValue;
    if (!isNaN(parsedValue)) {
      this.passwordLength = parsedValue;
    } else if (isNaN(this.passwordLength)) {
      this.passwordLength = 0;
    }
    {
    }
  }
}
