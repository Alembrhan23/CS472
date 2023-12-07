
function askPassword(ok, fail) {
    let password = prompt("Password?", '');
    if (password == "rockstar") ok();
    else fail();
}

let user = {
    name: 'John',

    loginOk() {
        alert(`${this.name} logged in`);
    },

    loginFail() {
        alert(`${this.name} failed to log in`);
    },
};

/* Fixing using the apply method
  to maintain the correct reference to "this"*/

askPassword(user.loginOk.apply(user),
            user.loginFail.apply(user));