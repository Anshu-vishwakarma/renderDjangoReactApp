from django.db import models

# Create your models here.

class EmployData(models.Model):
    EmployID=models.IntegerField()
    EmployName=models.CharField(max_length=50)
    EmployAddress=models.CharField(max_length=50)
    EmploySalary=models.IntegerField()