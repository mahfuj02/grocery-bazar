from django.contrib import admin
from django.conf import settings
from django.db import models
from uuid import uuid4
from django.core.validators import MinValueValidator

# Create your models here.
class Category(models.Model):
    title = models.CharField(max_length=255)

    def __str__(self) -> str:
        return self.title

class Promotion(models.Model):
    desription = models.CharField(max_length=255)
    discount = models.IntegerField()

class Product(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    slug = models.SlugField(default='-')
    unit_price = models.IntegerField()
    weight = models.CharField(max_length=255, null=True)
    inventory = models.IntegerField()
    last_update = models.DateTimeField(auto_now=True)
    category = models.ForeignKey(Category, on_delete=models.PROTECT, related_name='products')
    promotions = models.ManyToManyField(Promotion, related_name='products', blank=True)

    
    def __str__(self) -> str:
        return self.title


class Customer(models.Model):
    phone = models.CharField(max_length=255, null=True)
    birth_date = models.DateField(null=True)
    user = models.OneToOneField(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)

    def __str__(self):
        return f'{self.user.first_name} {self.user.last_name}'
        
    @admin.display(ordering='user__first_name')
    def first_name(self):
        return self.user.first_name
    
    @admin.display(ordering='user__last_name')
    def last_name(self):
        return self.user.last_name

    
    class Meta:
        ordering =['user__first_name', 'user__last_name']


class Address(models.Model):
    floor = models.CharField(max_length=255)
    apartment = models.CharField(max_length=255)
    area = models.TextField()
    customer = models.ForeignKey(Customer, on_delete=models.CASCADE)

    def __str__(self) -> str:
        return self.floor


class Order(models.Model):
    PAYMENT_STATUS_PENDING = 'P'
    PAYMENT_STATUS_COMPLETE = 'C'
    PAYMENT_STATUS_FAILD = 'F'
    PAYMENT_STATUS_CHOICES = [
        (PAYMENT_STATUS_PENDING, 'Pending'),
        (PAYMENT_STATUS_FAILD, 'Faild'),
        (PAYMENT_STATUS_COMPLETE, 'Complete')
    ]
    placed_at = models.DateTimeField(auto_now_add=True)
    payment_status = models.CharField(
        max_length=1, choices=PAYMENT_STATUS_CHOICES, default=PAYMENT_STATUS_PENDING
    )
    customer = models.ForeignKey(Customer, on_delete=models.PROTECT)


class OrderItem(models.Model):
    order = models.ForeignKey(Order, on_delete=models.PROTECT)
    product = models.ForeignKey(Product, on_delete=models.PROTECT, related_name='orderitems')
    quantity = models.PositiveSmallIntegerField()
    unit_price = models.IntegerField()


class Cart(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid4)
    created_at = models.DateTimeField(auto_now_add=True)


class CartItem(models.Model):
    cart = models.ForeignKey(Cart, models.CASCADE, related_name='items')
    product = models.ForeignKey(Product, models.CASCADE)
    quantity = models.PositiveSmallIntegerField( validators=[MinValueValidator(1)] )

    class Meta:
        unique_together = [['cart', 'product']]


class Review(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE, related_name='reviews')
    name = models.CharField(max_length=255)
    description = models.TextField()
    date = models.DateField(auto_now_add=True)