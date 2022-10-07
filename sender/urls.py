from django.urls import path
from .views import sendMail
urlpatterns = [
    path('sender/<int:pk>', sendMail, name = "send_mail")
]