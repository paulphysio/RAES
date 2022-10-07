from django.urls import path
from .views import signUpView, loginView, createProfileView, editProfileView, EditProfileNameView, UserView
from .views import signUpView, loginView, createProfileView, editProfileView, EditProfileNameView
from django.contrib.auth import views as auth_views

urlpatterns = [
    
    path('signup/', signUpView.as_view(), name='sign_up' ),
    path('login/', loginView, name='login' ),
    path('profile/create', createProfileView, name='create_profile' ),
    path('profile/edit/<int:pk>', editProfileView.as_view(), name='edit_profile' ),
    path('profile/edit/bio/<int:pk>', EditProfileNameView.as_view(), name='edit_profile_name' ),
    
    
    path('password-reset/', auth_views.PasswordResetView.as_view(template_name = 'registration/custom_password_reset.html'), name = 'password_reset'),
    path('password-reset/done/', auth_views.PasswordResetDoneView.as_view(template_name = 'registration/custom_password_reset_done.html'), name = 'password_reset_done'),
    path('password-reset-confirm/<uidb64>/<token>/', auth_views.PasswordResetConfirmView.as_view(template_name = 'registration/custom_password_reset_confirm.html'), name = 'password_reset_confirm'),
    path('reset/done', auth_views.PasswordResetCompleteView.as_view(template_name = 'registration/custom_password_reset_complete.html'), name="password_reset_complete"),
    
    path('user-api/', UserView.as_view(), name="user-api" )
]