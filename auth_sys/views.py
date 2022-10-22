from django.http import HttpResponse, HttpResponseRedirect, JsonResponse
from django.shortcuts import render, redirect
from django.contrib.auth.forms import UserCreationForm
from django.urls import reverse_lazy, reverse
from django.views.generic import CreateView, UpdateView, View
from django.http import HttpResponse, HttpResponseRedirect
from django.shortcuts import render, redirect
from django.contrib.auth.forms import UserCreationForm
from django.urls import reverse_lazy
from django.views.generic import CreateView, UpdateView
from .models import profile
from django.contrib.auth.decorators import login_required
from django.contrib import messages
from django.contrib.auth.models import User
from .forms import SignUpForm, ProfileEditForm, ProfileNameForm
from django.contrib.auth import login, authenticate
from django.core import serializers
# Create your views here.

class UserView(View):
    def get(self, request):
        qs = User.objects.all()
        data = serializers.serialize('json', qs)
        return JsonResponse({'data':data}, safe=False)

# Create your views here.

class EditProfileNameView(UpdateView):
    model = User
    template = "auth/user_form.html"
    form_class = ProfileNameForm
    success_url=reverse_lazy("home")

# class signUpView(CreateView):
#     form_class = SignUpForm
#     template_name = "registration/signup.html"
#     success_url = reverse_lazy("login")
    
def signUpView(request):
    signupform = SignUpForm(request.POST)
    if request.method=='POST':
        if signupform.is_valid():
            signupform.save()
            username = signupform.cleaned_data.get('username')
            raw_password = signupform.cleaned_data.get('password1')
            user = authenticate(username=username, password=raw_password, first_name=request.POST['first_name'],last_name=request.POST['last_name'], email=request.POST['email'])
            
            return redirect('login')
    else:
        signupform = SignUpForm()
    return render(request, "registration/signup.html", {"signupform":signupform})

def loginView(request):
    context = {}  
    form = UserCreationForm()
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']
        #check i form is valid
        if form.is_valid:
            UserCreationForm(username = username, password=password)
            form.save()
            context['messages']='login successful'
        else:
            context['messages']='Invalid Credentials'
            
    return render(request, 'registration/login.html', context)

@login_required
def createProfileView(request):
    if request.method == 'POST':
        user = request.user
        profile_pics = request.FILES["profile_pics"]
        
        profile(profile_pics = profile_pics, user = user, is_hod = False).save()

        return HttpResponseRedirect("/")
    return render(request, "registration/create_profile.html")

class editProfileView(UpdateView):
    model = profile
    form_class = ProfileEditForm
    template_name = "registration/edit_profile.html"
    def get_success_url(self):
        return reverse("edit_profile", args=[self.object.pk])