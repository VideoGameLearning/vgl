from django.http import HttpResponse, JsonResponse
from django.shortcuts import render
from vglapp.maps import Map
from vglapp.character import Character
from vglapp.level import Level
import json

# Create your views here.
def run(request):
	m1 = Map(5,5)
	l1 = Level(m1,[0,0],[1,1])
	c1 = Character(l1)

	if request.method == 'POST' and request.is_ajax():
		
		playerResponse = json.loads(request.body.decode('utf-8'))
		playerResponse = playerResponse['commands']
		print(playerResponse)

		for i in range(len(playerResponse)):
			newstr = playerResponse[i].replace("()", "")
			if hasattr(c1, newstr):
				getattr(c1,newstr)()

		return HttpResponse(json.dumps(m1.layout), content_type="application/json")
	else:
		return HttpResponse('Request not GET or not AJAX')

