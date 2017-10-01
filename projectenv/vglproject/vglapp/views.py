from django.shortcuts import render

def run(request):
	if request.method == 'GET' and request.is_ajax():
		# your code here
		
		return HttpResponse(json.dumps({'number': str(result)}), content_type="application/json")
	else:
		return HttpResponse('Request not GET or not AJAX')