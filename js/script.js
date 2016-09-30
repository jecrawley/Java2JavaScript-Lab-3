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
  display.innerHTML = PhoneBook[name];
};

var display = document.getElementById("display");
