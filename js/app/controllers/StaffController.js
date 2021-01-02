function StaffController(){
    this.name = "Boris"
    this.email = "Boris@Boris.come"
    this.phone = "908-765-4321"
}

angular
.module('app')
.controller('StaffController', StaffController)