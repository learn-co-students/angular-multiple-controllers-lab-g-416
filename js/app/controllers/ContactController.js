function ContactController() {
  var vm = this;
  this.name = 'Sheldon';
  this.email = 'sheldon@caltech.edu.gov';
  this.phone = '0123456789';

  this.changeName = function() {
    vm.name = 'Something else!'
  }
}

angular
  .module('app')
  .controller('ContactController', ContactController);
