function ContactController(){
    var vm = this;

    vm.name = "Paul";
    vm.email = "paul@yahoo.com";
    vm.phone = "234-234-5456";
    
    vm.changeName = function() {
        vm.name = "Jack";
    }
}

angular
    .module('app')
    .controller('ContactController', ContactController);