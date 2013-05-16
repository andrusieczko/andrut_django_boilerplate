from django.db import models

class Address(models.Model):
    postal_code = models.CharField(max_length=10)
    city = models.CharField(max_length=64)
    region = models.CharField(max_length=64)
    # def __unicode__(self):
    #     return '%s (%s), %s' % (self.city, self.region, self.region)

class Person(models.Model):
    name = models.CharField(max_length=20)
    age = models.IntegerField()
    address = models.ForeignKey(Address)