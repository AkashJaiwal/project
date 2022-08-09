from django.urls import path
from . import views
urlpatterns=[
    path("patient/details/",views.getPatientDetails,name='patient-details'),
    path("patient/details/add/",views.addPatientDetails,name='add-patient-details')
]