" use strict ";

function PhoneBook(){

};

function listAllNames() {
    display.innerHTML = "";
  for (name in PhoneBook) {
      display.innerHTML += name + "</br>";
  }
};

function listAllNumbers() {
    display.innerHTML = "";
    for (name in PhoneBook) {
        PhoneBook[name].forEach(arrElements);
    }
};

function showAdd() {
  var name = prompt("Enter full name");
  var number = prompt("Enter phone number");
  var arr = PhoneBook[name] === undefined ? [] : PhoneBook[name];
  arr.push(number);
  PhoneBook[name] = arr;
};

function removeOne () {

    var removeName = prompt ("Enter name of removal");
    var removeNum = prompt("Enter number to remove");
    var index = PhoneBook[removeName].indexOf(removeNum);

    PhoneBook[removeName].splice(index, index + 1);

};

function showRemove() {
  var remove = prompt("Enter name to remove");
  delete PhoneBook[remove];
};

function showLookup() {
  var lookup = prompt("Enter name to lookup");
  var lookupNum = "Name not found";

  display.innerHTML = "";
  if (PhoneBook[lookup] !== undefined) {
      lookupNum = PhoneBook[lookup];
      lookupNum.forEach(arrElements);
  } else {
      display.innerHTML = lookupNum;
  }


};

function reverseLookup () {
    var lookup = prompt("Enter a number to lookup");
    var lookupName = "Number not found";
    for (var name in PhoneBook) {
        if (PhoneBook[name].indexOf(lookup) !== -1) {
            lookupName = name;
        }
    }
    display.innerHTML = lookupName;
};

function arrElements(element, index, array) {

    display.innerHTML += element + "</br>";

};

var display = document.getElementById("display");
