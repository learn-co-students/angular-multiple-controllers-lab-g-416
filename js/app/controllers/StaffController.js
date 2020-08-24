function StaffController() {
    this.name = 'Steve Jobs';
    this.email = 'steve@apple.com';
    this.phone = '123-456-7890'
}

angular
    .module('app')
    .controller('StaffController', StaffController);