function StaffController() {
    const sc = this;
    this.name = 'Paul';
    this.email = 'paul@paul.org';
    this.phone = '8675309';

    this.changeName = () => {
        sc.name = 'Something'
    }
}

angular.module('app').controller('StaffController', StaffController);