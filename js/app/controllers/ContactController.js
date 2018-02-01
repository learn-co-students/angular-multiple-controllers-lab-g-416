function ContactController() {
  var vm = this;
  this.name = "Billy the Kid"
  this.email = "email@email.com"
  this.phone = "7181234567"
 
  this.changeName = function () {
    vm.name = "random new name"
  }
}


angular
  .module('app')
  .controller('ContactController', ContactController);