function ContactController() {
  var vm = this

  this.name = "Mike"
  this.email = "heh@aol.com"
  this.phone = "718-662-6765"

  this.changeName = function() {
    vm.name = 'Anotha one!!'
  }

}

angular
    .module('app')
    .controller('ContactController', ContactController);
