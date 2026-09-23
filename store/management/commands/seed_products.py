from django.core.management.base import BaseCommand
from django.utils.text import slugify

from store.models import Category, Product


CATEGORY_PRODUCTS = {
    "Fresh Fruits": ["Banana", "Red Apple", "Mango", "Orange", "Papaya", "Pineapple", "Watermelon", "Grapes", "Guava", "Lemon"],
    "Fresh Vegetables": ["Tomato", "Carrot", "Potato", "Onion", "Broccoli", "Cauliflower", "Cucumber", "Spinach", "Green Beans", "Bell Pepper"],
    "Dairy": ["Fresh Milk", "Farm Eggs", "Butter", "Cheddar Cheese", "Yogurt", "Cream", "Paneer", "Mozzarella", "Sour Cream", "Chocolate Milk"],
    "Meat and Fish": ["Chicken Breast", "Whole Chicken", "Beef Steak", "Ground Beef", "Mutton Curry Cut", "Salmon Fillet", "Tilapia Fish", "Prawns", "Chicken Wings", "Beef Kebabs"],
    "Pantry": ["Basmati Rice", "Red Lentils", "Brown Rice", "Chickpeas", "All Purpose Flour", "Whole Wheat Flour", "Sugar", "Salt", "Cooking Oil", "Tea Leaves"],
    "Beverages": ["Orange Juice", "Apple Juice", "Mineral Water", "Cola", "Lemon Soda", "Green Tea", "Coffee", "Mango Drink", "Coconut Water", "Iced Tea"],
    "Snacks": ["Potato Chips", "Tortilla Chips", "Popcorn", "Chocolate Bar", "Granola Bar", "Cookies", "Crackers", "Mixed Nuts", "Trail Mix", "Pretzels"],
    "Bakery": ["White Bread", "Whole Wheat Bread", "Croissant", "Burger Buns", "Dinner Rolls", "Chocolate Cake", "Donuts", "Muffins", "Pita Bread", "Garlic Bread"],
    "Frozen Foods": ["Frozen Peas", "Frozen Corn", "French Fries", "Chicken Nuggets", "Fish Fingers", "Frozen Pizza", "Mixed Vegetables", "Ice Cream", "Frozen Paratha", "Frozen Berries"],
    "Household": ["Dish Soap", "Laundry Detergent", "Paper Towels", "Toilet Paper", "Trash Bags", "Kitchen Sponges", "Glass Cleaner", "Floor Cleaner", "Aluminum Foil", "Food Storage Bags"],
}

IMAGE_URLS = {
    "Fresh Fruits": "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=600&q=80",
    "Fresh Vegetables": "https://images.unsplash.com/photo-1546094096-0df4bcaaa337?w=600&q=80",
    "Dairy": "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=600&q=80",
    "Meat and Fish": "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=600&q=80",
    "Pantry": "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=600&q=80",
    "Beverages": "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=600&q=80",
    "Snacks": "https://images.unsplash.com/photo-1566478989037-eec170784d0b?w=600&q=80",
    "Bakery": "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&q=80",
    "Frozen Foods": "https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?w=600&q=80",
    "Household": "https://images.unsplash.com/photo-1583947215259-38e31be8751f?w=600&q=80",
}

PRODUCTS = [
    (category, title, f"Quality {title.lower()} for your home.", 80 + index * 17, "1 item", IMAGE_URLS[category])
    for category, titles in CATEGORY_PRODUCTS.items()
    for index, title in enumerate(titles, start=1)
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
