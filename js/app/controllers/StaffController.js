function StaffController() {
    let vm = this;

    vm.name = "Staff name";
    vm.email = "staff@staff.com";
    vm.phone = "212-333-3333";
}

angular.module('app').controller('StaffController', StaffController);