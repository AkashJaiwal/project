from django.db import models

# Create your models here.

class Patient(models.Model):
    id=models.AutoField(primary_key=True,editable=False)
    name=models.TextField(null=True,blank=True)
    prn=models.TextField(null=True,blank=True,unique=True)
    date=models.TextField(null=True,blank=True)
    bed_no=models.TextField(null=True,blank=True)
    diagnosis=models.TextField(null=True,blank=True)
    category=models.TextField(null=True,blank=True)
    total_score=models.IntegerField(null=True,blank=True)
    total_category_score=models.IntegerField(null=True,blank=True)
    
    def __str__(self):
        return self.prn