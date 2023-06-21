from django.contrib import admin
from django.urls import include, path

from store import views

urlpatterns = [
    path('products/', views.product_list ),
    path('product/<id>/', views.product_detail ),
    # path('category/<id>/', views.category_detail, name='category-detail'),
]
