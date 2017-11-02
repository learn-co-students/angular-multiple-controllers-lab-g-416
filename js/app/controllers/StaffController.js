function StaffController() {
    const vm = this;

    vm.name = "Tom";
    vm.email = "tom@home";
    vm.phone = "555-5555";

    vm.changeName = function() {
        vm.name = "Something else!";
    };
}

angular.module("app").controller("StaffController", StaffController);
