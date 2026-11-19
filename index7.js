

function generatePassword(passwordLength, includeUppercase, includeLowercase, includeNumbers, includeSymbols) {
  const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
  const numberChars = '0123456789';
  const symbolChars = '!@#$%^&*()_+[]{}|;:,.<>?';

  let allowedChars = '';
  let password = '';

  allowedChars += includeUppercase ? uppercaseChars : '';
  allowedChars += includeLowercase ? lowercaseChars : '';
  allowedChars += includeNumbers ? numberChars : '';
  allowedChars += includeSymbols ? symbolChars : '';

  if(passwordLength<=0){
    return `password length must be greater than 0`;
  }
  if (allowedChars.length === 0) {
    return 'No character types selected. Please select at least one character type.';
  }
  for (let i = 0; i < passwordLength; i++) {
    const randomIndex=Math.floor(Math.random()*allowedChars.length);
    password += allowedChars[randomIndex];
  }
  return password;

}

const passwordLength = 12;
const includeUppercase = true;
const includeLowercase = true;
const includeNumbers = true;
const includeSymbols = true;

const password=generatePassword(passwordLength, includeUppercase, includeLowercase, includeNumbers, includeSymbols);
console.log(`Generated Password: ${password}`);