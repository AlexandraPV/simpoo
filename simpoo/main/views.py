from .forms import SignUpForm, CustomAuthenticationForm
from django.shortcuts import render
from django.contrib.auth.models import User

# Create your views here.

base_context = {
    'register_form': SignUpForm,

}

def index(request):
    ctx = {
        'all_users' : User.objects.all()
    }
    ctx.update(base_context)
    return render(request , 'custom_admin/index.html' , ctx)



def template(request):
    return render(request , 'client/template_one.html' , {})