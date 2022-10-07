from django.db import models
from django.contrib.auth.models import User, AnonymousUser

# Create your models here.
class activity(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    file_uploaded = models.FileField(upload_to = "sheets")
    date_added = models.DateTimeField(auto_now_add=True)
    class Meta:
        ordering = ['-date_added']

    def __str__(self):
        return str(self.user)
    
class askedQuestions(models.Model):
    """ user = models.ForeignKey(User, on_delete=models.CASCADE, null = True, blank = True) """
    question = models.TextField(max_length=200)
    def __str__(self):
        return str(self.question)
    """ if user != None :
        def __str__(self):
            return str(self.user) +" ____ "+ str(self.question)
    else:
        def __str__(self):
            return "Anonymous " + str(self.question) """