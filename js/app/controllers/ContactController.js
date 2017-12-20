function ContactController() {
    let vm = this;
    vm.name = "First name";
    vm.email = "ben@ben.com";
    vm.phone = "212-222-2222";

    this.changeName = function() {
        vm.name = "Something else!";
    }
}

angular.module('app').controller('ContactController', ContactController);