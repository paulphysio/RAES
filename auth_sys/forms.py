from cProfile import label
from django.forms import ModelForm
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User
from .models import profile



class SignUpForm(UserCreationForm):
    
    class Meta:
        model = User
        fields = ("username","first_name", "last_name", "email", "password1", "password2")
        label={
            "username":""
        }
    def __init__(self, *args, **kwargs):
        super(SignUpForm, self).__init__(*args, **kwargs)

        self.fields['username'].widget.attrs['class'] = 'form-control'
        self.fields['username'].widget.attrs['style'] = 'max-width: 500px'
        self.fields['username'].widget.attrs['placeholder'] = 'Username'
        self.fields['username'].label= ''
        self.fields['first_name'].widget.attrs['class'] = 'form-control'
        self.fields['first_name'].widget.attrs['style'] = 'max-width: 500px'
        self.fields['first_name'].widget.attrs['placeholder'] = 'First Name'
        self.fields['first_name'].label = ''
        self.fields['last_name'].widget.attrs['class'] = 'form-control'
        self.fields['last_name'].widget.attrs['style'] = 'max-width: 500px'
        self.fields['last_name'].widget.attrs['placeholder'] = 'Last Name'
        self.fields['last_name'].label = ''
        self.fields['email'].widget.attrs['class'] = 'form-control'
        self.fields['email'].widget.attrs['style'] = 'max-width: 500px'
        self.fields['email'].widget.attrs['placeholder'] = 'Email'
        self.fields['email'].label = ''
        self.fields['password1'].widget.attrs['class'] = 'form-control'
        self.fields['password1'].widget.attrs['style'] = 'max-width: 500px'
        self.fields['password1'].widget.attrs['placeholder'] = 'Password'
        self.fields['password1'].label = ''
        self.fields['password2'].widget.attrs['class'] = 'form-control'
        self.fields['password2'].widget.attrs['style'] = 'max-width: 500px'
        self.fields['password2'].widget.attrs['placeholder'] = 'Confirm Password'
        self.fields['password2'].label = ''


class ProfileEditForm(ModelForm):
    class Meta:
        model = profile
        fields = ("profile_pics",)
        
class ProfileNameForm(ModelForm):
    class Meta:
        model = User
        fields = ("username","first_name", "last_name", "email",)
    def __init__(self, *args, **kwargs):
        super(ProfileNameForm, self).__init__(*args, **kwargs)

        self.fields['username'].widget.attrs['class'] = 'form-control'
        self.fields['username'].widget.attrs['style'] = 'max-width: 300px'
        self.fields['username'].widget.attrs['placeholder'] = 'Username'
        self.fields['first_name'].widget.attrs['class'] = 'form-control'
        self.fields['first_name'].widget.attrs['style'] = 'max-width: 300px'
        self.fields['first_name'].widget.attrs['placeholder'] = 'First Name'
        self.fields['last_name'].widget.attrs['class'] = 'form-control'
        self.fields['last_name'].widget.attrs['style'] = 'max-width: 300px'
        self.fields['last_name'].widget.attrs['placeholder'] = 'Last Name'
        self.fields['email'].widget.attrs['class'] = 'form-control'
        self.fields['email'].widget.attrs['style'] = 'max-width: 300px'
        self.fields['email'].widget.attrs['placeholder'] = 'Email'