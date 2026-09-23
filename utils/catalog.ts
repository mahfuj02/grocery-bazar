import { Product } from "./Product";

const starterProducts: Product[] = [
  {
    _id: 1,
    product_name: "Banana",
    categories: ["Fresh Fruits"],
    image_url: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=600&q=80",
    price: 120,
    slug: "banana",
    weight: ["1 kg"],
  },
  {
    _id: 2,
    product_name: "Red Apple",
    categories: ["Fresh Fruits"],
    image_url: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=600&q=80",
    price: 280,
    slug: "red-apple",
    weight: ["1 kg"],
  },
  {
    _id: 3,
    product_name: "Tomato",
    categories: ["Fresh Vegetables"],
    image_url: "https://images.unsplash.com/photo-1546094096-0df4bcaaa337?w=600&q=80",
    price: 160,
    slug: "tomato",
    weight: ["1 kg"],
  },
  {
    _id: 4,
    product_name: "Carrot",
    categories: ["Fresh Vegetables"],
    image_url: "https://images.unsplash.com/photo-1445282768818-728615cc910a?w=600&q=80",
    price: 140,
    slug: "carrot",
    weight: ["1 kg"],
  },
  {
    _id: 5,
    product_name: "Fresh Milk",
    categories: ["Dairy"],
    image_url: "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=600&q=80",
    price: 95,
    slug: "fresh-milk",
    weight: ["1 litre"],
  },
  {
    _id: 6,
    product_name: "Farm Eggs",
    categories: ["Dairy"],
    image_url: "https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?w=600&q=80",
    price: 180,
    slug: "farm-eggs",
    weight: ["12 pieces"],
  },
  {
    _id: 7,
    product_name: "Basmati Rice",
    categories: ["Pantry"],
    image_url: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=600&q=80",
    price: 420,
    slug: "basmati-rice",
    weight: ["5 kg"],
  },
  {
    _id: 8,
    product_name: "Red Lentils",
    categories: ["Pantry"],
    image_url: "https://images.unsplash.com/photo-1515543904379-3d757afe72e4?w=600&q=80",
    price: 220,
    slug: "red-lentils",
    weight: ["1 kg"],
  },
  {
    _id: 9,
    product_name: "Orange Juice",
    categories: ["Beverages"],
    image_url: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=600&q=80",
    price: 190,
    slug: "orange-juice",
    weight: ["1 litre"],
  },
  {
    _id: 10,
    product_name: "Potato Chips",
    categories: ["Snacks"],
    image_url: "https://images.unsplash.com/photo-1566478989037-eec170784d0b?w=600&q=80",
    price: 90,
    slug: "potato-chips",
    weight: ["150 g"],
  },
];

const categoryProducts: Record<string, string[]> = {
  "Fresh Fruits": ["Banana", "Red Apple", "Mango", "Orange", "Papaya", "Pineapple", "Watermelon", "Grapes", "Guava", "Lemon"],
  "Fresh Vegetables": ["Tomato", "Carrot", "Potato", "Onion", "Broccoli", "Cauliflower", "Cucumber", "Spinach", "Green Beans", "Bell Pepper"],
  Dairy: ["Fresh Milk", "Farm Eggs", "Butter", "Cheddar Cheese", "Yogurt", "Cream", "Paneer", "Mozzarella", "Sour Cream", "Chocolate Milk"],
  "Meat and Fish": ["Chicken Breast", "Whole Chicken", "Beef Steak", "Ground Beef", "Mutton Curry Cut", "Salmon Fillet", "Tilapia Fish", "Prawns", "Chicken Wings", "Beef Kebabs"],
  Pantry: ["Basmati Rice", "Red Lentils", "Brown Rice", "Chickpeas", "All Purpose Flour", "Whole Wheat Flour", "Sugar", "Salt", "Cooking Oil", "Tea Leaves"],
  Beverages: ["Orange Juice", "Apple Juice", "Mineral Water", "Cola", "Lemon Soda", "Green Tea", "Coffee", "Mango Drink", "Coconut Water", "Iced Tea"],
  Snacks: ["Potato Chips", "Tortilla Chips", "Popcorn", "Chocolate Bar", "Granola Bar", "Cookies", "Crackers", "Mixed Nuts", "Trail Mix", "Pretzels"],
  Bakery: ["White Bread", "Whole Wheat Bread", "Croissant", "Burger Buns", "Dinner Rolls", "Chocolate Cake", "Donuts", "Muffins", "Pita Bread", "Garlic Bread"],
  "Frozen Foods": ["Frozen Peas", "Frozen Corn", "French Fries", "Chicken Nuggets", "Fish Fingers", "Frozen Pizza", "Mixed Vegetables", "Ice Cream", "Frozen Paratha", "Frozen Berries"],
  Household: ["Dish Soap", "Laundry Detergent", "Paper Towels", "Toilet Paper", "Trash Bags", "Kitchen Sponges", "Glass Cleaner", "Floor Cleaner", "Aluminum Foil", "Food Storage Bags"],
};

const categoryImages: Record<string, string> = {
  "Fresh Fruits": "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=600&q=80",
  "Fresh Vegetables": "https://images.unsplash.com/photo-1546094096-0df4bcaaa337?w=600&q=80",
  Dairy: "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=600&q=80",
  "Meat and Fish": "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=600&q=80",
  Pantry: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=600&q=80",
  Beverages: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=600&q=80",
  Snacks: "https://images.unsplash.com/photo-1566478989037-eec170784d0b?w=600&q=80",
  Bakery: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&q=80",
  "Frozen Foods": "https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?w=600&q=80",
  Household: "https://images.unsplash.com/photo-1583947215259-38e31be8751f?w=600&q=80",
};

const additionalProducts = Object.entries(categoryProducts).flatMap(([category, names]) =>
  names
    .filter((name) => !starterProducts.some((product) => product.product_name === name))
    .map((name, index) => ({
      _id: 0,
      product_name: name,
      categories: [category],
      image_url: `https://loremflickr.com/600/600/${encodeURIComponent(name)},food?lock=${starterProducts.length + index + 1}`,
      price: 80 + index * 17,
      slug: name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, ""),
      weight: ["1 item"],
      description: `Quality ${name.toLowerCase()} for your home.`,
      category,
      inventory: 100,
    }))
);

export const fallbackProducts: Product[] = [...starterProducts, ...additionalProducts].map((product, index) => ({
  ...product,
  _id: index + 1,
  description: product.description || `Quality ${product.product_name.toLowerCase()} for your home.`,
  category: product.category || product.categories[0],
  inventory: product.inventory ?? 100,
}));
