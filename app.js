
function reverseString(str) {
    if (str === "")
      return "";
    else
      return reverseString(str.substr(1)) + str.charAt(0);
  }
  

let http = require("http");

let servidor = http.createServer((req, res) =>{


res.writeHead(200, { "Content-type": "text/html; charset=utf-8" });
res.write(`<!DOCTYPE html>
<html>
<body>

<h2>Comprueba si es un palíndromo...</h2>

<form action="/comprobar">
  <label for="palabra">Palabra/s</label><br>
  <input type="text" id="palabra" name="palabra" value=""><br><br>
  <input type="submit" value="Enviar">
</form> 


</body>
</html>`) 

//endpoint comprobar

if(req.url.includes("comprobar")){
    let palabra = req.url.split("palabra=")[1];
    let palabraReves = reverseString(palabra);
    if(palabra == palabraReves){
    return res.end(`La palabra ${palabra} es un palindromo`)
    }
    else {
        return res.end(`La palabra ${palabra} no es un palindromo`)
    }

}


res.end();

});



servidor.listen(3000);