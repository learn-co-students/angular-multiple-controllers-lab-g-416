function ContactController($scope){
  var vm = this;
  vm.name = "Bill Gates"
  vm.email = "thegater@ms.com"
  vm.phone = "1234567890"


  this.changeName = function(){
    vm.name = "Something else!"
  }
}
angular
  .module('app')
  .controller('ContactController', ContactController)
