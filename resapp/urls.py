from django.urls import path
from .views import guidesView, homeView, activityFormView, detailView, deleteView, aboutView, questionAskedView, aboutUsView

urlpatterns = [
    path('home/', homeView, name='home' ),
    path('', aboutView, name='about' ),
    path('about_us', aboutUsView, name='about_us' ),
    path('guides', guidesView, name='guides' ),
    path('ask/', questionAskedView, name = "question"),
    path('save/', activityFormView, name='activity_form' ),
    path('file/<int:pk>', detailView, name='file_details' ),
    path('delete/file/<int:pk>', deleteView, name="delete_file")
]