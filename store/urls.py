from django.contrib import admin
from django.urls import include, path
from rest_framework.routers import DefaultRouter

from store import views

router = DefaultRouter()

router.register('products', views.ProductViewSet , basename='products')
router.register('categories', views.CategoryViewSet)

urlpatterns = [
    path('', include(router.urls) ),
]

