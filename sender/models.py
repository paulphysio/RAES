from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class emailSender(models.Model):
    sender = models.ForeignKey(User, on_delete=models.CASCADE)
    receiver_email = models.EmailField(max_length=100)
    date_sent = models.DateField(auto_now_add=True)
    message_sent = models.CharField(max_length=1000)

    def __str__(self) -> str:
        return str(self.sender)

