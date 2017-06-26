function StaffController() {
  var vm = this

  this.name = "John"
  this.email = "howdy@aol.com"
  this.phone = "518-622-6765"

  this.changeName = function() {
    vm.name = 'Inside Staff Controlla!!'
  }

}

angular
    .module('app')
    .controller('StaffController', StaffController);
