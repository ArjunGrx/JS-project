let inputSlider = document.getElementById('inputSlider');
let sliderValue = document.getElementById('sliderValue');

sliderValue.textContent = inputSlider.value;
inputSlider.addEventListener('input',()=>{
  sliderValue.textContent = inputSlider.value;
})




function generatePassword(){

  let length = document.getElementById('inputSlider').value;
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


  if (combineChar.length === 0){
    document.getElementById('passResult').value = 'Include something !!';
    return;
  }



  for (let i=0; i<length; i++){
    let index = Math.floor(Math.random()*combineChar.length);
    password += combineChar[index];
  }

  let result = document.getElementById('passResult');
  result.value = password;
}
