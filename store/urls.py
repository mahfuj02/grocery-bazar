from django.contrib import admin
from django.urls import include, path
from rest_framework_nested import routers

from store import views

router = routers.DefaultRouter()

router.register('products', views.ProductViewSet , basename='products')
router.register('categories', views.CategoryViewSet)
router.register('carts', views.CartViewSet)

carts_router = routers.NestedDefaultRouter(router, 'carts', lookup='cart')
carts_router.register('items', views.CartItemViewSet, basename='cart-item-detail')

# urlpatterns = router.urls + carts_router.urls

urlpatterns = [
    path('', include(router.urls) ),
    path('', include(carts_router.urls) ),
]

