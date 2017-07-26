function ContactController() {
  this.name = "Alex"
  this.email = "aleksanr.rogachev1994@gmail.com"
  this.phone = "7175782026"

  this.changeName = () => {
    this.name = "Aleksandr"
  }
}

angular
  .module("app")
  .controller("ContactController", ContactController)
