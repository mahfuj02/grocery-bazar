from django.db import models

# Create your models here.


class Category(models.Model):
    title = models.CharField(max_length=255)

class Promotion(models.Model):
    desription = models.CharField(max_length=255)
    discount = models.IntegerField()

class Product(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    slug = models.SlugField(default='-')
    unit_price = models.IntegerField()
    inventory = models.IntegerField()
    last_update = models.DateTimeField(auto_now=True)
    categories = models.ManyToManyField(Category, related_name='products')
    promotions = models.ManyToManyField(Promotion, related_name='products')

    
    def __str__(self) -> str:
        return self.title


class Customer(models.Model):
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    email = models.EmailField(unique=True)
    phone = models.CharField(max_length=255, null=True)
    birth_date = models.DateField(null=True)

    def __str__(self) -> str:
        return self.first_name


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
    product = models.ForeignKey(Product, on_delete=models.PROTECT)
    quantity = models.PositiveSmallIntegerField()
    unit_price = models.IntegerField()


class Cart(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)


class CartItem(models.Model):
    cart = models.ForeignKey(Cart, models.CASCADE)
    product = models.ForeignKey(Product, models.CASCADE)
    quantity = models.PositiveSmallIntegerField()
