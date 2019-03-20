function ContactController() {
  var vm = this;

  this.changeName = function() {
    vm.name = 'Something else!';
  };
};

angular
    .module('app')
    .controller('ContactController', ContactController);
