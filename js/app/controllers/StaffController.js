function StaffController() {
  var vm = this;
  vm.name = "Ben Volio";
  vm.email = "benvy@gmail.com";
  vm.phone = "123456789";
}

angular
    .module("app")
    .controller("StaffController", StaffController);
