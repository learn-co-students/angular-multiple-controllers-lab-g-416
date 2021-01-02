function ContactController() {
    this.name = "Trevor"
    this.email = "trevor@trevor.come"
    this.phone = "123-456-7890"

    var vm = this;
   
    this.changeName = function (){
      vm.name = "John Lennon"
    }
  }

angular

.module('app')
.controller('ContactController', ContactController)