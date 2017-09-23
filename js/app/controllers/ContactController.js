angular
  .module('app')
  .controller('ContactController', function () {
    var vm = this

    this.name = "Andrew"
    this.email = "me2@gmail.com"
    this.phone = "(555) 555-5555"

    this.changeName = function () {
      vm.name = "Nancy"
    }
  })
