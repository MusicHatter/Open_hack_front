'use strict'

const loginBack = document.querySelector('.login-back'),
    userLoggingRecover = document.querySelector('.user-logging-recover'),
    extraHelpBack = document.querySelector('.extra-help-back'),
    loginPasswordRestore = document.querySelector('.login-password-restore'),
    userLogging = document.querySelector('.user-logging'),
    extraHelpLogin = document.querySelector('.extra-help-login');

loginBack.addEventListener('click', function() {
    userLoggingRecover.classList.toggle('hide-elem');
    extraHelpBack.classList.toggle('hide-elem');
    userLogging.classList.toggle('hide-elem');
    extraHelpLogin.classList.toggle('hide-elem');
});

loginPasswordRestore.addEventListener('click', function() {
    userLoggingRecover.classList.toggle('hide-elem');
    extraHelpBack.classList.toggle('hide-elem');
    userLogging.classList.toggle('hide-elem');
    extraHelpLogin.classList.toggle('hide-elem');
});


