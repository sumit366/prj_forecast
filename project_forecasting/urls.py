from django.conf.urls import include, url
from django.contrib import admin
from django.views import generic

urlpatterns = [
    # Examples:
    # url(r'^$', 'project_forecasting.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),

    url(r'^admin/', include(admin.site.urls)),
    url(r'^$', generic.TemplateView.as_view(template_name='dashboard.html')),
]
