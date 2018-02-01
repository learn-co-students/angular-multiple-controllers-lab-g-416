function StaffController() {
	var vm = this
	this.name = "Austin Powers"
	this.email = "austinP@powers.com"
	this.phone = "2128008691"

}

angular
	.module('app')
	.controller('StaffController', StaffController)