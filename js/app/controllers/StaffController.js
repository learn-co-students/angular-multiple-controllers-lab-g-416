function StaffController() {
  var vm = this;

  vm.name = "Emily";
  vm.email = "emily@me.com";
  vm.phone = "1234567890";
}

angular
	.module('app')
	.controller('StaffController', StaffController);
