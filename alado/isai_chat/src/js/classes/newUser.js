/*jshint esversion: 6 */
class NewUser {
    constructor (username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }

    log () {
        console.log(`${this.username} has been added to Isai Chat`);
    }
    

}

export default NewUser;