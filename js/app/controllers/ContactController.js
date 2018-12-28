function ContactController(){
    this.name="Olena"
    this.phone="333-333-3333"
    this.email="email"

 var vm = this;
 
  this.changeName = function () {
    vm.name = 'Vasyl'
  }

}

angular
.module('app')
.controller('ContactController',ContactController)