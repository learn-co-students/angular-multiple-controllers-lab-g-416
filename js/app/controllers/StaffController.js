function StaffController() {
    var vm = this;

    vm.name = "staff 1";
    vm.email = "staff@staff.com";
    vm.phone = "1234567";
}

angular
    .module('app')
    .controller('StaffController', StaffController)