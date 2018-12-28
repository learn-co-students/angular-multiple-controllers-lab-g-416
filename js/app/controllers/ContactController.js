function ContactController(){
    this.name="Name"
    this.phone="phone"
    this.email="email"

 var vm = this;
 
  this.changeName = function () {
    vm.name = 'Something else!'
  }

}

angular
.module('app')
.controller('ContactController',ContactController)