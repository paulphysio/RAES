from django.http import HttpResponse, HttpResponseRedirect
from django.shortcuts import render
from .models import message
from django.contrib.auth.models import User
from django.contrib.auth.decorators import login_required
# Create your views here.

@login_required
def chatView(request, pk):
    msgs = message.objects.all()
    receivers = User.objects.get(id=pk)
    if request.method == 'POST':
        sender = request.user
        receiver = User.objects.get(id=pk)
        msg = request.POST['messg']
        if 'msg_files' in request.FILES:
            msg_picture = request.FILES['msg_files']
            message(sender = sender, receiver=receiver, msg=msg, msg_picture=msg_picture).save()
        else:
            message(sender = sender, receiver=receiver, msg=msg).save()
              
    context = {
        "msgs":msgs,
        "receivers":receivers
    }
    return render(request, "chat.html", context)

@login_required
def chatList(request):
    users = User.objects.all()
    list = []
    for user in users:
        for mesg in message.objects.filter(receiver = request.user, sender=user):
            list.append(mesg)
    context = {
        "users":users,
        "list":list,
        
    }
    return render(request, "friends.html", context)