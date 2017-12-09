function StaffController() {
  this.name = 'Leonard';
  this.email = 'leonard@caltech.edu.gov';
  this.phone = '3456789011';
}

angular
  .module('app')
  .controller('StaffController', StaffController);
