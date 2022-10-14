from email.policy import default
from random import choices
from django.db import models
from django.contrib.auth.models import User, AnonymousUser

# Create your models here.
class activity(models.Model):
    level_choices = [("100",'100'), ("200",'200'), ("300",'300'), ("400",'400'), ("500",'500'), ("600",'600')]
    dept_choices = [("PET", 'PET'), ("CHEM", 'CHEM'), ("MECH", 'MECH')]
    semester_choices = [("Rain", 'Rain'), ("Harmattan", 'Harmattan')]
    session_choices = [("2020/2021", '2020/2021'), ("2021/2022", '2021/2022'), ("2022/2023", '2022/2023')]
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    file_uploaded = models.FileField(upload_to = "sheets")
    result_level = models.CharField(choices=level_choices , default = "", max_length=200)
    Department = models.CharField(choices = dept_choices ,max_length=200, default="")
    session = models.CharField(choices = session_choices, max_length = 10, default="")
    semester = models.CharField(choices = semester_choices, max_length = 10, default="")
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