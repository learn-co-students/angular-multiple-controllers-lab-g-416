function ContactController() {
  var vm = this
  vm.name = "sample"
  vm.email = "m@gmail.com"
  vm.phone = "123-234-3345"

  this.changeName = function() {
    vm.name = "new name"
  }
}

angular
  .module('app')
  .controller('ContactController', ContactController)
