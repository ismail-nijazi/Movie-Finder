from .serializers import UserSerializer
from django.contrib.auth.models import User
from rest_framework.response import Response
from rest_framework import views, status, permissions, authentication
from rest_framework.authtoken.models import Token

from .serializers import UserSerializer


# class CreateUserView(CreateAPIView):
# 	model = User
# 	permission_classes = [
#         permissions.AllowAny # Or anon users can't register
#     ]
# 	serializer_class = UserSerializer
	

class CreateUserView(views.APIView):
	permission_classes = [
		permissions.AllowAny
	]
	def post(self, request):
		serializer = UserSerializer(data=request.data)
		if serializer.is_valid():
			serializer.save()
			data = {
				'username': serializer.data['username'],
				'token':None
			}
			user = User.objects.filter(username=data['username']).first()
			data['token'] = Token.objects.filter(user=user).first().key
			return Response(data, status=status.HTTP_201_CREATED)
		return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class LogoutView(views.APIView):
	permission_classes = [
		permissions.IsAuthenticated
	]
	def get(self, request):
		Token.objects.filter(user=request.user).delete()
		Token.objects.create(user=request.user);
		return Response({'status':status.HTTP_200_OK})

