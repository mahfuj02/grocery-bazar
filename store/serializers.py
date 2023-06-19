from rest_framework import serializers


class ProductSerializer (serializers.Serializer):
    id = serializers.IntegerField()
    title = serializers.CharField(max_length=256)
    unit_price = serializers.IntegerField()

