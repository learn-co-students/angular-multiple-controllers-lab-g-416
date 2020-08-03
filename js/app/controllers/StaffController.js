function StaffController() {
    var vm = this;
    
    vm.name = "Bob";
    vm.email = "bob@yahoo.com";
    vm.phone = "455-534-5367";
}
    
angular
    .module('app')
    .controller('StaffController', StaffController);
  