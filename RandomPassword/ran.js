function generatePassword(){

  let length = document.getElementById('length').value;
  let includeUpperCase = document.getElementById('upper').checked;
  let includeLowerCase = document.getElementById('lower').checked;
  let includeNumbers = document.getElementById('num').checked;
  let includeCharacter = document.getElementById('char').checked;

  const UpperCase = "QWERTYUIOPLKJHGFDSAZXCVBNM";
  const LowerCase = "qwertyuioplkjhgfdsazxcvbnm";
  const Numbers = "1234567890";
  const Characters = "`~@#$%^&*()_+-=[]{}|:;'',<.>?/";

  let combineChar = "";
  let password = "";

  combineChar += includeUpperCase ? UpperCase: "";
  combineChar += includeLowerCase ? LowerCase: "";
  combineChar += includeNumbers ? Numbers: "";
  combineChar += includeCharacter ? Characters: "";

  if (length < 8){
    document.getElementById('result').innerText = 'Length must be at least 8 characters';
    return;
  }

  if (combineChar.length === 0){
    document.getElementById('result').innerText = 'At least one set of character is required';
    return;
  }

  if (length > 30){
    document.getElementById('result').innerText = 'Length exceeded !!';
    return;
  }

  for (let i=0; i<length; i++){
    let index = Math.floor(Math.random()*combineChar.length);
    password += combineChar[index];
  }

  document.querySelector('#result').innerText = password;
}
