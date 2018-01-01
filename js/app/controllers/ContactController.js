function ContactController() {
	var vm = this;
	vm.name = 'Pam';
	vm.email = 'pam@email.com';
	vm.phone = '1234567890';

	vm.changeName = function () {
		vm.name = 'Bridget';
	};
}

angular
	.module('app')
	.controller('ContactController', ContactController);
