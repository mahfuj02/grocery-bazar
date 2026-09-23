from django.core.management.base import BaseCommand
from django.utils.text import slugify

from store.models import Category, Product


PRODUCTS = [
    ("Fresh Fruits", "Banana", "Fresh bananas", 120, "1 kg", "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=600&q=80"),
    ("Fresh Fruits", "Red Apple", "Crisp red apples", 280, "1 kg", "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=600&q=80"),
    ("Fresh Vegetables", "Tomato", "Ripe tomatoes", 160, "1 kg", "https://images.unsplash.com/photo-1546094096-0df4bcaaa337?w=600&q=80"),
    ("Fresh Vegetables", "Carrot", "Fresh carrots", 140, "1 kg", "https://images.unsplash.com/photo-1445282768818-728615cc910a?w=600&q=80"),
    ("Dairy", "Fresh Milk", "Full cream milk", 95, "1 litre", "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=600&q=80"),
    ("Dairy", "Farm Eggs", "Free-range eggs", 180, "12 pieces", "https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?w=600&q=80"),
    ("Pantry", "Basmati Rice", "Long grain basmati rice", 420, "5 kg", "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=600&q=80"),
    ("Pantry", "Red Lentils", "Premium red lentils", 220, "1 kg", "https://images.unsplash.com/photo-1515543904379-3d757afe72e4?w=600&q=80"),
    ("Beverages", "Orange Juice", "Refreshing orange juice", 190, "1 litre", "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=600&q=80"),
    ("Snacks", "Potato Chips", "Crispy salted potato chips", 90, "150 g", "https://images.unsplash.com/photo-1566478989037-eec170784d0b?w=600&q=80"),
]


class Command(BaseCommand):
    help = "Create the starter grocery catalog"

    def handle(self, *args, **options):
        for category_name, title, description, price, weight, image_url in PRODUCTS:
            category, _ = Category.objects.get_or_create(title=category_name)
            Product.objects.update_or_create(
                slug=slugify(title),
                defaults={
                    "title": title,
                    "description": description,
                    "unit_price": price,
                    "weight": weight,
                    "inventory": 100,
                    "category": category,
                    "image_url": image_url,
                },
            )
        self.stdout.write(self.style.SUCCESS(f"Seeded {len(PRODUCTS)} products."))
