from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class message(models.Model):
    sender = models.ForeignKey(User, on_delete=models.CASCADE, related_name="sender")    
    receiver = models.ForeignKey(User, on_delete=models.CASCADE, related_name="receiver")
    msg = models.CharField(max_length=1000)
    msg_picture = models.ImageField(upload_to = "mdeia/msgpicture", null = True, blank=True)
    msg_date = models.DateTimeField(auto_now_add=True)
    
    class Meta:
        ordering = ["-msg_date"]
    
    def __str__(self) -> str:
        return str(self.sender)+ " " + str(self.receiver)+ " " +str(self.msg)