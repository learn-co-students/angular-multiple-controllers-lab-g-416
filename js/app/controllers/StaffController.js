function StaffController() {
  var vm = this;

  vm.name = "us";
  vm.email = "us@email.com";
  vm.phone = "888-0000";

}

angular
  .module('app')
  .controller('StaffController', StaffController)
