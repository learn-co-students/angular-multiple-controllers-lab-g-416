function StaffController() {
  this.name = "Lucy"
  this.email = "Lucy@gmail.com"
  this.phone = "???"

  this.changeName = () => {
    this.name = "Liudmila"
  }
}

angular
  .module("app")
  .controller("StaffController", StaffController)
