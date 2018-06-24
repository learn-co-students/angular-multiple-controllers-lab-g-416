function StaffController() {
  this.name = "Brian";
  this.email = "brian@gmail.com";
  this.phone = "5558099698";
}

angular
  .module('app')
  .controller('StaffController', StaffController);
