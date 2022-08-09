from unicodedata import category
from rest_framework.decorators import api_view
from rest_framework.response import Response
from . models import Patient
from . serializers import PatientSerializer

# Create your views here.
@api_view(["GET"])
def getPatientDetails(request):
    patients=Patient.objects.all()
    serializer=PatientSerializer(patients,many=True)
    return Response(serializer.data)

@api_view(["POST"])
def addPatientDetails(request):
    data=request.data
    patient=Patient(name=data['name'],prn=data['prn'],date=data['date'],bed_no=data['bed_no'],diagnosis=data['diagnosis'],category=data['category'],total_score=data['total_score'],total_category_score=data['total_category_score'])
    patient.save()
    print(data)
    return Response({'status':'none'})