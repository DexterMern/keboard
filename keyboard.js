let $ = document;
let locationKey = $.querySelector("#location");
let keyCodeElem = $.getElementById("keycode");
let keyElem = $.getElementById("key");
let locationElem = $.getElementById("location");
let whichElem = $.getElementById("which");
let CodeElem = $.getElementById("code");


document.body.addEventListener("keydown", function (event) {
  event.preventDefault();
  
  let eventKeyCode = event.keyCode;
  let eventKey = event.key;
  let eventLocation = event.location;
  let eventWhich = event.which;
  let eventCode = event.code;

  keyCodeElem.innerHTML =eventKeyCode;
  keyElem.innerHTML =eventKey;
  locationElem.innerHTML =eventLocation;
  whichElem.innerHTML =eventWhich;
  CodeElem.innerHTML =eventCode;
});
//href:javascript:void or javascript:false