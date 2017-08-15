/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

/*jshint esversion: 6 */
//import newUser from './classes/newUser.js'

function chat() {
    document.querySelector("#uriel621").setAttribute("class", "container");
    chat_area();
    chat_message();

    message();
    messages_textarea();
    send_button();

    communication();
};

//------------------------

function chat_area() {
    const uriel621 = document.querySelector("#uriel621");
    const chat_div = document.createElement("div");
    chat_div.setAttribute("id", "message_view");
    uriel621.appendChild(chat_div);
}

function chat_message() {
    const chat_area = document.querySelector("#message_view");
    const chat_ul = document.createElement("ul");
    chat_ul.setAttribute("id", "chat_messages");
    chat_area.appendChild(chat_ul);
}

//------------------------

function message() {
    const uriel621 = document.querySelector("#uriel621");
    const message_div = document.createElement("div");
    message_div.setAttribute("id", "message_write");
    uriel621.appendChild(message_div);
}
function messages_textarea() {
    const message_div = document.querySelector("#message_write");
    const message_textarea = document.createElement("textarea");
    message_textarea.setAttribute("class", "form-control");
    message_textarea.setAttribute("id", "messages_textarea");
    message_textarea.setAttribute("placeholder", "type your message");
    message_div.appendChild(message_textarea);
}

function send_button() {
    const message_write = document.querySelector("#message_write");
    const send_button = document.createElement("button");
    send_button.setAttribute("class", "pull-right btn btn-success");
    send_button.setAttribute("id", "send_button");
    send_button.innerHTML = "Send";
    message_write.appendChild(send_button);
}

//------------------------

function communication() {
    console.log("communication called");
    const socket = io.connect();
    const send_button = document.querySelector("#send_button");
    const messages_textarea = document.querySelector("#messages_textarea");
    const chat_ul = document.querySelector("#chat_messages");
    const chat_li = document.createElement("li");

    send_button.addEventListener("click", function () {

        socket.emit('chat message', messages_textarea.value);
        messages_textarea.value = "";
        return false;
    });

    socket.on('chat message', function (msg) {
        //$(chat_ul).append($(chat_li).html(msg));
        $('#chat_messages').append($('<li>').text(msg));
        console.log(msg);
    });
}

function log() {
    console.log("chat");
}

/* unused harmony default export */ var _unused_webpack_default_export = (chat);

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__classes_newUser__ = __webpack_require__(2);
/*jshint esversion: 6 */


let container = function () {
    const uriel621 = document.querySelector('#uriel621');
    const container = document.createElement('div');
    container.setAttribute('class', 'container');
    uriel621.appendChild(container);
};

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
    label.appendChild(username);

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

let uriel = new __WEBPACK_IMPORTED_MODULE_0__classes_newUser__["a" /* default */]('uriel621', 'uriel621@live.com', 'mercerst.13');
const register_button = document.querySelector('#register > div > div > button');
const register = () => {
    container();
    input();
    console.log('-------------------', '\n', 'Created Account', '\n', 'variable: ', uriel, '\n', '-------------------', '\n', register_button);
    uriel.log();
};
/* harmony default export */ __webpack_exports__["a"] = (register);

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/*jshint esversion: 6 */
class NewUser {
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }

    log() {
        console.log(`${this.username} has been added to Isai Chat`);
    }

}

/* harmony default export */ __webpack_exports__["a"] = (NewUser);

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__scripts_chat__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__scripts_register__ = __webpack_require__(1);
/*jshint esversion: 6 */




// var password = prompt('Whats the password')
// if(password === 'mercerst.') {
//     chat()
// }
// else {
//     register()
//     console.log(password)
// }

__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__scripts_register__["a" /* default */])();

console.log("index.js");

/***/ })
/******/ ]);