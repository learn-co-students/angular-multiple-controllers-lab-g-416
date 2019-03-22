function StaffController() {
  var vm = this;
  vm.name = "me";
  vm.email = "me@gmail.com";
  vm.phone = "800-111-1111"
}

angular
  .module('app')
  .controller('StaffController', StaffController);