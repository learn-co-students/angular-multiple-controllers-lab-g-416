function StaffController() {
	var vm = this;
	vm.name = 'Bill'
	vm.email = 'Bill@microsoft.com'
	vm.phone = '333555777'
}

angular
	.module('app')
	.controller('StaffController', StaffController);
