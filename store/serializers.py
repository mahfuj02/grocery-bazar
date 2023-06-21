from rest_framework import serializers

from store.models import Category, Product


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['id', 'title']

class ProductSerializer (serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'
    # id = serializers.IntegerField()
    # title = serializers.CharField(max_length=256)
    # unit_price = serializers.IntegerField()
    # description = serializers.CharField()
    category = serializers.HyperlinkedRelatedField( queryset = Category.objects.all(), view_name='category-detail')
    # weight = serializers.CharField()