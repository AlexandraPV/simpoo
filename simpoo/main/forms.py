from django import forms
from django.contrib.auth.forms import UserCreationForm, AuthenticationForm
from django.contrib.auth.models import User


my_default_errors = {
    'required': 'This field is required',
    'invalid': 'Enter a valid value'
}

class SignUpForm(UserCreationForm):
    email = forms.EmailField(max_length=254, help_text='Required. Inform a valid email address.')

    def __init__(self, *args, **kwargs):
        super(SignUpForm, self).__init__(*args, **kwargs)
        self.fields['email'].label = "Ваш e-mail"
        self.fields['username'].label = "Логін"
        self.fields['password1'].label = "Пароль"
        self.fields['password2'].label = "Пітвердіть пароль"
        self.fields['password2'].widget.attrs['class'] = 'password'
        self.fields['password1'].widget.attrs['class'] = 'password'

        # self.fields['username'](error_messages=my_default_errors)

    class Meta:
        model = User
        fields = ('username', 'email', 'password1', 'password2',)


class CustomAuthenticationForm(AuthenticationForm):
    def __init__(self, *args, **kwargs):
        super(CustomAuthenticationForm, self).__init__(*args, **kwargs)
        self.fields['username'] = 'Логін'
        self.fields['password'] = 'password1'