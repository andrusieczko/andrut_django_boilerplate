from django.conf.urls.defaults import patterns, include, url
from django.contrib.staticfiles.urls import staticfiles_urlpatterns
from django.conf import settings
from django.conf.urls.static import static

from django.contrib import admin
admin.autodiscover()


urlpatterns = patterns('',
    url(r'^admin/', include(admin.site.urls)),
    url(r'^$', 'apps.frontend.views.app', name='app'),
    url(r'^example$', 'apps.frontend.views.example', name='example'),
    url(r'^createExample$', 'apps.frontend.views.createExample', name='createExample'),
    url(r'^vendor(?P<path>[\S.]+)$', 'apps.frontend.views.vendorFiles', name='staticPage')
)

urlpatterns += staticfiles_urlpatterns()
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
