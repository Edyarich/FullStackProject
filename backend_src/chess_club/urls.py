from django.urls import path
from .views import *

urlpatterns = [
    path('contact_form/', ContactList.as_view()),
    path('contact_form/create/', ContactCreate.as_view()),
    path('contact_form/delete/<int:pk>/', ContactDelete.as_view()),

    path('calendar_events_batch/', CalendarEventBatch.as_view()),
    path('update_batch_generator/', BatchGeneratorUpdater),
    path('calendar_events_head/<int:header_size>/', CalendarEventHead.as_view()),
    path('calendar_events_head/', CalendarEventHead.as_view())
    # path('calendar_event', CalendarEventList.as_view()),
    # path('calendar_event/create/', CalendarEventCreate.as_view()),
    # path('calendar_event/delete/<int:pk>/', CalendarEventDelete.as_view()),
]

