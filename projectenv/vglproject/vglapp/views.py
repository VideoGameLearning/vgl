from django.shortcuts import render
from map import Map
from character import Character
from level import Level

# Create your views here.
def run(request):
	m1 = Map(5,5)
	l1 = Level(m1,[0,0],[1,1],'You beat the level',[])
	c1 = Character(l1)

	if request.method == 'POST' and request.is_ajax():
		
		playerResponse = request # array of string

		for i in range(len(playerResponse) )
			newstr = playerResponse[i].replace("()", "")
			if hasattr(c1, newstr):
				getattr(c1,newstr)()

		return HttpResponse(json.dumps(m1.layout), content_type="application/json")
	else:
		return HttpResponse('Request not GET or not AJAX')

