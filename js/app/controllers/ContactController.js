function ContactController() {
    const vm = this;

    vm.name = "Mike";
    vm.email = "mike@home";
    vm.phone = "444-4444";

    vm.changeName = function() {
        vm.name = "Something else!";
    };
}

angular.module("app").controller("ContactController", ContactController);
