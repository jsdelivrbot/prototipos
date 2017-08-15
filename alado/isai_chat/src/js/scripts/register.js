/*jshint esversion: 6 */
import NewUser from '../classes/newUser';

let container = function () {
    const uriel621 = document.querySelector('#uriel621')
    const container = document.createElement('div');
    container.setAttribute('class', 'container');
    uriel621.appendChild(container);
}

let input = function () {
    const container = document.querySelector('.container');
    const div = document.createElement('div');
    const label = document.createElement('label');
    const username = document.createElement('input');
    const email = document.createElement('input');
    const password = document.createElement('input');
    const confirmPassword = document.createElement('input');
    const code_admin = document.createElement('input');
    const button = document.createElement('button');
    button.innerHTML = 'Register';

    container.appendChild(div);
    div.appendChild(label);
    label.appendChild(username)

    container.appendChild(div);
    label.appendChild(email);

    // container.appendChild(div);
    // div.appendChild(label);
    // label.appendChild(password)

    // container.appendChild(div);
    // div.appendChild(label);
    // label.appendChild(confirmPassword)

    // container.appendChild(div);
    // div.appendChild(label);
    // label.appendChild(code_admin)

    // container.appendChild(div);
    // div.appendChild(label);
    // label.appendChild(button)



};

let uriel = new NewUser('uriel621', 'uriel621@live.com', 'mercerst.13');
const register_button = document.querySelector('#register > div > div > button')
const register = () => {
    container();
    input()
    console.log(
        '-------------------','\n',
        'Created Account', '\n',
        'variable: ', uriel, '\n',
        '-------------------','\n',
        register_button
    );
    uriel.log();
};
export default register;