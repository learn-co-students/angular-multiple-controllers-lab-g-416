function ContactController() {
  this.name = "Bob";
  this.email = "bob@email.com";
  this.phone = 01234465;

  var vm = this;
 
  this.changeName = function () {
    vm.name = 'Something else!'
  }
}


angular
    .module('app')
    .controller('ContactController', ContactController);