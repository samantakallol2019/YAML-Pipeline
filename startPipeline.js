const envVar = process.env.MY_ENV_VAR;
let myMsg = "Hello DevOps Pipeline";
function writeMessage(text){
  console.log(text);
  return text;
}

let result = writeMessage(myMsg);
console.log(result + '-' + envVar);