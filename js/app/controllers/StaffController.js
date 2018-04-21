function StaffController() {
  this.name = "Ben Volio";
  this.email = "benvy@gmail.com";
  this.phone = "123456789";
}

angular
    .module("app")
    .controller("StaffController", StaffController);
