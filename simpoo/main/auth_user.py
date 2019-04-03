from django.shortcuts import render, redirect
from django.http import HttpResponse, JsonResponse
from django.contrib.auth import login, authenticate, logout
from django.contrib.auth.forms import UserCreationForm, AuthenticationForm
from django.shortcuts import render, redirect
from .views import index
from django.contrib.auth.models import User



from .forms import SignUpForm


def user_login(request):
    if request.method == 'POST':
        if request.is_ajax():
            username = request.POST.get('username')
            password = request.POST.get('password')
            print(password, username)
            user = authenticate(username=username, password=password)
            if user:
                login(request, user)
                return JsonResponse({
                    'auth': True
                })
            else:

                return JsonResponse({
                    'error': 'Неправильний логін/пароль'
                })


def user_register(request):
    if request.method == 'POST':
        form = SignUpForm(request.POST)
        all_users = User.objects.all()
        if request.is_ajax():
            if form.is_valid():
                cleaned_data = form.cleaned_data
                form.save()
                username = cleaned_data.get('username')
                raw_password = cleaned_data.get('password1')
                user = authenticate(username=username, password=raw_password)
                login(request, user)
                return JsonResponse({
                    'auth': 'ok'
                })
            else:
                exists_username = all_users.filter(username=request.POST.get('username')).exists()
                exists_email = all_users.filter(email=request.POST.get('email')).exists()
                if exists_email or exists_username:
                    return JsonResponse({
                        'exists': 'Такий користувач вже існує.'
                    })
                return render(request , 'custom_admin/partials/register_form.html' , {
                    'register_form' : form
                })


def user_logout(request):
    if request.user.is_authenticated:
        print('true')
        logout(request)
    else:
        pass
    return redirect('/')