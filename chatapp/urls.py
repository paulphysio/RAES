from django.urls import path
from .views import chatList, chatView

urlpatterns = [
   path('', chatList, name="chat_list"),
   path('message/<int:pk>', chatView, name="chat")
]