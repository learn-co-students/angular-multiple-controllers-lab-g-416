function ContactController() {
    const cc = this;
    this.name = 'Paul';
    this.email = 'paul@paul.org';
    this.phone = '8675309';

    this.changeName = () => {
        cc.name = 'Something'
    }
}

angular.module('app').controller('ContactController', ContactController);