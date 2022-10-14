from email.policy import default
from random import choices
from django.db import models
from django.contrib.auth.models import User, AnonymousUser

# Create your models here.
class activity(models.Model):
    level_choices = [("one",'100'), ("two",'200'), ("three",'300'), ("four",'400'), ("five",'500'), ("six",'600')]
    dept_choices = [("PET", 'PET'), ("CHEM", 'CHEM'), ("MECH", 'MECH')]
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    file_uploaded = models.FileField(upload_to = "sheets")
    result_level = models.CharField(choices=level_choices , default = 100, max_length=200)
    Department = models.CharField(choices = dept_choices ,max_length=200, default="")
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