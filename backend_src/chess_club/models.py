from django.db import models


class ContactForm(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100)
    phone_number = models.CharField(max_length=11)
    email = models.EmailField()
    comment = models.CharField(max_length=500)

    def __str__(self):
        return f"{self.id}) {self.name} - {self.email}"


class CalendarEvent(models.Model):
    id = models.AutoField(primary_key=True)
    date_from = models.DateTimeField()
    date_to = models.DateTimeField()
    name = models.CharField(max_length=100)
    description = models.CharField(max_length=500)
    place = models.CharField(max_length=200)

    def __str__(self):
        # print(dir(self.date_from))
        return f"{self.date_from} - {self.date_to} {self.name}"