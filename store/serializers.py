from rest_framework import serializers

from store.models import Category


class ProductSerializer (serializers.Serializer):
    id = serializers.IntegerField()
    title = serializers.CharField(max_length=256)
    unit_price = serializers.IntegerField()
    description = serializers.CharField()
    # categories = serializers.StringRelatedField(many=True)
    weight = serializers.CharField()