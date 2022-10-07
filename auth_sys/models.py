from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    profile_pics = models.ImageField( upload_to = "profile_img", blank=True, null=True)
    is_hod = models.BooleanField(default=False)

    def __str__(self) -> str:
        return str(self.user)
    
