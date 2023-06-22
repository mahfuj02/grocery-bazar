from django.db.models import Count
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.response import Response
from rest_framework.viewsets import ModelViewSet
from rest_framework.filters import SearchFilter, OrderingFilter
from store.models import Category, OrderItem, Product, Review


from store.serializers import CategorySerializer, ProductSerializer, ReviewSerializer

# Create your views here.

class ProductViewSet(ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    filter_backends = [DjangoFilterBackend, SearchFilter, OrderingFilter]
    filterset_fields = ['category_id']
    search_fields = [ 'title', 'description']
    ordering_fields = ['title', 'unit_price']
     



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


class ReviewViewSet(ModelViewSet):
    queryset = Review.objects.all()
    serializer_class = ReviewSerializer
