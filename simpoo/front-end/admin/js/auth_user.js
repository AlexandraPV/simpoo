import {getCookie, setCookie} from "../cookies";
import $ from 'jquery';
export default class AuthUser {

    constructor() {
        this.register_form = $('#register_form');
        this.login_form = $('#login_form');
        this.switch_btn = $('.js-switch');
        this.show_auth_btn = $('.js-auth-show');
        this.close_btn = $('.js-close');
        this.show_pass_btn = $('.js-show-pass');
    }

    init() {
        console.log('AuthUser init!');
        this.submitFormRegister(this.register_form);
        this.submitFormLogin(this.login_form);
        this.switchForm(this.switch_btn);
        this.show_auth_block(this.show_auth_btn, this.close_btn);
        this.show_pass(this.show_pass_btn);
    }

    show_pass(btn) {
        $(btn).on('change', function (e) {
            let form = $(this).closest('form');
            let pass_field = $(form).find('.password');
            if (this.checked) {
                pass_field.each(function (index, elem) {
                    $(elem).prop('type', 'text');
                });
            } else {
                pass_field.each(function (index, elem) {
                    $(elem).prop('type', 'password');
                });
            }
        })
    }

    show_auth_block(show_btn, close_btn) {
        $(show_btn).click(function () {
            if ($('.js-popup').hasClass('hidden')) {
                $('.js-popup').removeClass('hidden');
            }
        });
        $(close_btn).click(function () {
            $('.js-popup').addClass('hidden');
        })
    }

    switchForm(switch_btn) {
        $(switch_btn).click(function () {
            let form_for_show = `.popup-content[data-action="${$(this).data('action')}"]`;
            $('.popup-content').addClass('hidden');
            $(form_for_show).removeClass('hidden');
        })
    }

    submitFormRegister(form) {
        let csrf_token = getCookie("csrftoken");
        let component = this;
        form.on('submit', function (e) {
            e.preventDefault();
            let pass1 = this.password1.value;
            let pass2 = this.password2.value;
            let form = this;
            console.log(this.action);
            if (pass1 !== pass2) {
                form.password1.value = '';
                form.password2.value = '';
                this.password1.classList.add('error-field');
                this.password2.classList.add('error-field');
                $('.error').addClass('hidden');
                $('.js-pass').removeClass('hidden');
                e.preventDefault();
                return;
            } else if (pass1.length < 8) {
                this.password1.classList.remove('error-field');
                this.password2.classList.remove('error-field');
                $('.error').addClass('hidden');
                $('.js-len').removeClass('hidden');
                e.preventDefault();
                return;
            } else {
                e.preventDefault();
                let form = this;
                $.ajax({
                    url: form.action,
                    method: form.method,
                    headers: {
                        "X-CSRFToken": csrf_token
                    },
                    data: $(this).serialize(),
                    dataType: 'json',
                    processData: false
                }).done(function (response) {
                    if (response.exists) {
                        form.reset();
                        $('.error').addClass('hidden');
                        $('.js-exists').text(response.exists);
                        $('.js-exists').removeClass('hidden');
                    }
                    if (response.auth === 'ok') {
                        let current_url = window.location.href;
                        location.reload(current_url);
                    }
                }).fail(function (error) {
                    $(form).closest('.form-user').html(error.responseText);
                    component.submitFormRegister($('#register_form'));
                });
                return true;

}

        })
    }

    submitFormLogin(form) {
        let csrf_token = getCookie("csrftoken");
        form.on('submit', function (e) {
            let form = this;
            e.preventDefault();
            let username = this.login;
            let password = this.password;
            if (!username.value.length || !password.value.length) {
                username.classList.add('error-field');
                password.classList.add('error-field');
                alert('empty!');
            } else {
                console.log(username.value);
                console.log(password.value);
                console.log(this.method);
                console.log(this.action);
                $.ajax({
                    method: this.method,
                    url: this.action,
                    data: {
                        'username': username.value,
                        'password': password.value,
                    },
                    headers: {
                        "X-CSRFToken": csrf_token
                    }
                }).done(function (response_200) {
                    if (response_200.auth) {
                        let current_url = window.location.href;
                        location.reload(current_url);
                        return;
                    } else if (response_200.error) {
                        form.reset();
                        $('.error').addClass('hidden');
                        $('.js-failed').text(response_200.error);
                        $('.js-failed').removeClass('hidden');
                        return;
                    }
                })
            }
        })
    }
}