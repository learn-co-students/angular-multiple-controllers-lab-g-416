function ContactController() {
  var vm = this;
  vm.name = "Me";
  vm.email = "me@gmail.com";
  vm.phone = "800-111-1111"

  this.changeName = function() {
    vm.name = 'Something else!';
  };
};

angular
    .module('app')
    .controller('ContactController', ContactController);
