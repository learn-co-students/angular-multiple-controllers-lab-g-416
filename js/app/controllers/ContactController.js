function ContactController() {
    this.name = 'Bill Gates';
    this.email = 'william@microsoft.com';
    this.phone = '123-456-7890';

    var vm = this;
 
    this.changeName = function () {
      vm.name = 'Something else!'
    }

}

angular
    .module('app')
    .controller('ContactController', ContactController);