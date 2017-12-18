function StaffController() {
  this.name = "TylerB";
  this.email = "t@g.com";
  this.phone = "1800-empire!";
}

angular
  .module("app")
  .controller("StaffController", StaffController);
