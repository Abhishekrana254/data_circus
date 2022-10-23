from django.urls import include
from django.urls import path
from survey import views

urlpatterns = [
    # url(r'^', include(router.urls)),
    path(r'create_survey', views.create_survey),
    path(r'search/', views.search),
#     path(r'^get_description_page/', views.get_description_page),
#     path(r'^save_call_request/', views.save_call_request),
#     path(r'^download_data/', views.download_data),
#     path(r'^get_customer_requests/', views.get_customer_requests),
#     path(r'^approve_download_rights/', views.approve_download_rights),
#     path(r'^upload_data/', views.upload_data)
]