from rest_framework import serializers
from .models import *


class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactForm
        fields = ['name', 'phone_number', 'email', 'comment']


class CalendarEventSerializer(serializers.ModelSerializer):
    date_from = serializers.DateTimeField(format="%Y-%m-%d %H:%M:%S")
    date_to = serializers.DateTimeField(format="%Y-%m-%d %H:%M:%S")

    class Meta:
        model = CalendarEvent
        fields = ['date_from', 'date_to', 'name', 'description', 'place']
