function ContactController() {
	var vm = this;

	vm.name = 'Kelly Powers';
	vm.email = 'kp@gmail.com';
	vm.phone = '1234567';

	vm.changeName = function () {
		vm.name = 'Rugby';
	};
}

angular
	.module('app')
	.controller('ContactController', ContactController);