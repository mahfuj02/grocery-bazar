from django.db.models import Count
from django.shortcuts import get_object_or_404, render
from rest_framework.decorators import api_view
from rest_framework import status
from rest_framework.response import Response
from rest_framework.viewsets import ModelViewSet
from store.models import Category, OrderItem, Product


from store.serializers import CategorySerializer, ProductSerializer

# Create your views here.

class ProductViewSet(ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

    def get_serializer_context(self):
        return {'request':self.request}
    

    def destroy(self, request, *args, **kwargs):
        if OrderItem.objects.filter(product_id=kwargs['pk']).count() > 0:
            return Response({'error': 'Product cannot be deleted with order.'})
        return super().destroy(request, *args, **kwargs)


class CategoryViewSet(ModelViewSet):
    queryset = Category.objects.annotate(products_count=Count('products')).all()
    serializer_class = CategorySerializer

    def destroy(self, request, *args, **kwargs):
        if Product.objects.filter(category_id=kwargs['pk']).count() > 0:
            return Response({'error': 'category cannot be deleted with products.'})
        return super().destroy(request, *args, **kwargs)
