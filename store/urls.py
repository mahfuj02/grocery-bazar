from django.contrib import admin
from django.urls import include, path

from store import views

urlpatterns = [
    path('products/', views.product_list ),
    path('product/<id>/', views.product_detail ),
    path('categories/', views.category_list, name='category'),
    path('category/<pk>/', views.category_detail, name='category-detail'),
]

