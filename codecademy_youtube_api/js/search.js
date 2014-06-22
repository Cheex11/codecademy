var xhr = new XMLHttpRequest();
xhr.open("GET", "http://www.codecademy.com/", false);
// Add your code below!
xhr.send()
console.log(xhr.status)
console.log(xhr.statusText)


==============================
POST /codecademy/learn-http HTTP/1.1
Host: www.codecademy.com
Content-Type: text/html; charset=UTF-8

Name=Eric&Age=26

==============================
var xhr = new XMLHttpRequest();
xhr.open("GET", "http://www.codecademy.com/files/samples/javascript_learn_apis.xml", false);

xhr.setRequestHeader('Content-Type', 'text/xml');
xhr.send();

xmlDocument = xhr.responseXML;
console.log(xmlDocument.childNodes['0'].textContent);


==============================
var demo = '{"pets": { "name": "Jeffrey", "species": "Giraffe"}}';
var json = JSON.parse(demo);
console.log(json);


==============================
// Add your code below this line!
xhr = new XMLHttpRequest();
xhr.open("GET", "http://www.codecademy.com/", false);
xhr.send();

// Add your code above this line!
console.log(xhr.status);
console.log(xhr.statusText);

==============================




==============================




==============================




==============================




==============================

