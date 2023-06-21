from django.db.models import Count
from django.shortcuts import get_object_or_404, render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from store.models import Category, Product

from store.serializers import CategorySerializer, ProductSerializer

# Create your views here.
@api_view()
def product_list(request):
    queryset = Product.objects.select_related('category').all()
    serializer = ProductSerializer(queryset, many = True, context={'request':request})
    return Response(serializer.data)


@api_view()
def product_detail(request, id):
    product = get_object_or_404(Product, pk=id)
    serializer = ProductSerializer(product)
    return Response(serializer.data)




@api_view()
def category_list(request):
    queryset = Category.objects.annotate(products_count=Count('products')).all()
    serializer = CategorySerializer(queryset, many = True)
    return Response(serializer.data)


@api_view()
def category_detail(request, pk):
    return Response('OK')