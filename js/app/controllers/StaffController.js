function StaffController($scope) {
  var vm = this;
  vm.name = "Staff";
  vm.email = "Another Email";
  vm.phone = "777-777-7777";
  
}

angular.module("app").controller("StaffController", StaffController);