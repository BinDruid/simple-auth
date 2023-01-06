from django.contrib import admin
from django.urls import path, include


urlpatterns = [
    path("master/", admin.site.urls),
    path("__debug__/", include("debug_toolbar.urls")),
]

urlpatterns += [
    path("auth/", include("djoser.urls")),
    path("auth/", include("djoser.urls.authtoken")),
]
