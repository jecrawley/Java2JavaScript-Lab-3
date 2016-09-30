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
        display.innerHTML += PhoneBook[name] + "</br>";
    }
};

function showAdd() {
  var name = prompt("Enter full name");
  var number = prompt("Enter phone number");
  PhoneBook[name] = number;
};

function showRemove() {
  var remove = prompt("Enter name to remove");
  delete PhoneBook[remove];
};

function showLookup() {
  var lookup = prompt("Enter name to lookup");
  var lookupNum = "Name not found";
  if (PhoneBook[lookup] !== undefined) {
      lookupNum = PhoneBook[lookup];
  }
  display.innerHTML = lookupNum;
};

function reverseLookup () {
    var lookup = prompt("Enter a number to lookup");
    var lookupName = "Number not found";
    for (var name in PhoneBook) {
        if (PhoneBook[name] === lookup) {
            lookupName = name;
        }
    }
    display.innerHTML = lookupName;
}

var display = document.getElementById("display");
