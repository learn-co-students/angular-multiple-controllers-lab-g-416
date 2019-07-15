function StaffController() {
  this.name = "Charles";
  this.email = "charles@email.com";
  this.phone = 123456;
}


angular
    .module('app')
    .controller('StaffController', StaffController);