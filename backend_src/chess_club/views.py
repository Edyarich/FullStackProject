from rest_framework import generics
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework.exceptions import APIException
from rest_framework.permissions import IsAuthenticated
from django.core.serializers import serialize
from .models import *
from .serializers import *


def lazy_bulk_fetch(max_obj, max_count, fetch_func, start=0):
    counter = start
    while counter < max_count:
        yield fetch_func()[counter:counter + max_obj].values()
        counter += max_obj


def batch_generator(batch_size):
    return lazy_bulk_fetch(batch_size, CalendarEvent.objects.count(),
                           lambda: CalendarEvent.objects.order_by('date_from'))


class ContactCreate(generics.CreateAPIView):
    serializer_class = ContactSerializer


class ContactList(generics.ListAPIView):
    serializer_class = ContactSerializer
    queryset = ContactForm.objects.all()


class ContactDelete(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = ContactSerializer
    queryset = ContactForm.objects.all()


class CalendarEventBatch(APIView):
    batch_size = 5
    serializer_class = CalendarEventSerializer
    generator = batch_generator(batch_size)

    def get(self, request):
        try:
            batch = next(iter(self.generator))
            batch = [CalendarEventSerializer(elem).data for elem in batch]

            return Response(batch)
        except StopIteration:
            return Response(status=500)


@api_view()
def BatchGeneratorUpdater(request):
    CalendarEventBatch.generator = batch_generator(CalendarEventBatch.batch_size)
    return Response({})


class CalendarEventHead(APIView):
    default_header_size = 1
    serializer_class = CalendarEventSerializer

    def get(self, request, header_size=default_header_size):
        calendar_header = CalendarEvent.objects.order_by('date_from')[:header_size].values()

        response = []
        for i in range(calendar_header.count()):
            serializer = CalendarEventSerializer(data=calendar_header[i])

            if serializer.is_valid():
                response.append(serializer.data)
            else:
                break

        return Response(response)
