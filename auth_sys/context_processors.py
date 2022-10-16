from django.conf import settings

from auth_sys.views import SignUpForm, UserCreationForm


def base_data(request):
    data = {}
    # MyForm(request.GET, user=request.user)
    data["my_form"] = SignUpForm()
    data["login_form"] = UserCreationForm()
    
    return data