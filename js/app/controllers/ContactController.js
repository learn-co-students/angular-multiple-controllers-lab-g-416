function ContactController() {
  this.name = "Tyler";
  this.email = "t@g.c";
  this.phone = "1800-empire";

  this.changeName = () => this.name = "Something else!";
}

angular
  .module("app")
  .controller("ContactController", ContactController);
