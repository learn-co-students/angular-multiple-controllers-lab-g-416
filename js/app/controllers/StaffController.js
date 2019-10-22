function StaffController(){
  var vm = this
  vm.name = "A"
  vm.email = "A"
  vm.phone = "A"

}

angular
  .module('app')
  .controller('StaffController',StaffController)
