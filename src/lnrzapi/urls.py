from django.conf.urls import url, include
from django.contrib import admin
from django.views.generic import TemplateView

from rest_framework_swagger.views import get_swagger_view
from rest_framework_jwt.views import refresh_jwt_token, obtain_jwt_token

schema_view = get_swagger_view(title='Pastebin API')



urlpatterns = [
    url(r'^api/$', schema_view),
    url(r'^admin/', admin.site.urls),
    url(r'^api/auth/', include('accounts.api.urls', namespace='api-auth')),
    url(r'^api/user/', include('accounts.api.user.urls', namespace='api-user')),
    url(r'^api/status/', include('status.api.urls', namespace='api-status')),
    url(r'^api/postings/', include('postings.api.urls', namespace='api-postings')),
]

urlpatterns += [
    url(r'^(?P<path>.*)', TemplateView.as_view(template_name='ng.html'), name='home'),
]
