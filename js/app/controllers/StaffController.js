function StaffController() {
  var vm = this
  vm.name = "some"
  vm.email = "r@gmail.com"
  vm.phone = "345-567-7789"
}

angular.module('app').controller('StaffController', StaffController)
