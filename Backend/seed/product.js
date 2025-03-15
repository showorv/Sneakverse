const products = [
    {
      "name": "Product 1",
      "description": "Description of product 1.",
      "price": 3010,
      "discountPrice": 2910,
      "countInStock": 99,
      "category": "A",
      "brand": "Adidas",
      "sizes": [
        "45",
        "44",
        "43",
        "42",
        "40",
        "39",
        "41"
      ],
      "colors": [
        "Blue",
        "Black"
      ],
      "collections": [
        "Stock"
      ],
      "images": [
        {
          "url": "https://picsum.photos/500/500?random=1",
          "altText": "Product 1 Image 1"
        },
        {
          "url": "https://picsum.photos/500/500?random=2",
          "altText": "Product 1 Image 2"
        }
      ],
      "isFeatured": false,
      "isPublished": true,
      "sku": "Product-1-SKU"
    },
    {
      "name": "Product 2",
      "description": "Description of product 2.",
      "price": 3020,
      "discountPrice": 2920,
      "countInStock": 98,
      "category": "A",
      "brand": "Reebok",
      "sizes": [
        "45",
        "44",
        "43",
        "42",
        "40",
        "39",
        "41"
      ],
      "colors": [
        "Black",
        "White"
      ],
      "collections": [
        "Stock"
      ],
      "images": [
        {
          "url": "https://picsum.photos/500/500?random=2",
          "altText": "Product 2 Image 1"
        },
        {
          "url": "https://picsum.photos/500/500?random=3",
          "altText": "Product 2 Image 2"
        }
      ],
      "isFeatured": true,
      "isPublished": true,
      "sku": "Product-2-SKU"
    },
    {
      "name": "Product 3",
      "description": "Description of product 3.",
      "price": 3030,
      "discountPrice": 2930,
      "countInStock": 97,
      "category": "A",
      "brand": "Puma",
      "sizes": [
        "45",
        "44",
        "43",
        "42",
        "40",
        "39",
        "41"
      ],
      "colors": [
        "White",
        "Green"
      ],
      "collections": [
        "Stock"
      ],
      "images": [
        {
          "url": "https://picsum.photos/500/500?random=3",
          "altText": "Product 3 Image 1"
        },
        {
          "url": "https://picsum.photos/500/500?random=4",
          "altText": "Product 3 Image 2"
        }
      ],
      "isFeatured": false,
      "isPublished": true,
      "sku": "Product-3-SKU"
    },
    {
      "name": "Product 4",
      "description": "Description of product 4.",
      "price": 3040,
      "discountPrice": 2940,
      "countInStock": 96,
      "category": "A",
      "brand": "Under Armour",
      "sizes": [
        "45",
        "44",
        "43",
        "42",
        "40",
        "39",
        "41"
      ],
      "colors": [
        "Green",
        "Yellow"
      ],
      "collections": [
        "Stock"
      ],
      "images": [
        {
          "url": "https://picsum.photos/500/500?random=4",
          "altText": "Product 4 Image 1"
        },
        {
          "url": "https://picsum.photos/500/500?random=5",
          "altText": "Product 4 Image 2"
        }
      ],
      "isFeatured": true,
      "isPublished": true,
      "sku": "Product-4-SKU"
    },
    {
      "name": "Product 5",
      "description": "Description of product 5.",
      "price": 3050,
      "discountPrice": 2950,
      "countInStock": 95,
      "category": "A",
      "brand": "New Balance",
      "sizes": [
        "45",
        "44",
        "43",
        "42",
        "40",
        "39",
        "41"
      ],
      "colors": [
        "Yellow",
        "Pink"
      ],
      "collections": [
        "Stock"
      ],
      "images": [
        {
          "url": "https://picsum.photos/500/500?random=5",
          "altText": "Product 5 Image 1"
        },
        {
          "url": "https://picsum.photos/500/500?random=6",
          "altText": "Product 5 Image 2"
        }
      ],
      "isFeatured": false,
      "isPublished": true,
      "sku": "Product-5-SKU"
    },
    {
      "name": "Product 6",
      "description": "Description of product 6.",
      "price": 3060,
      "discountPrice": 2960,
      "countInStock": 94,
      "category": "A",
      "brand": "Asics",
      "sizes": [
        "45",
        "44",
        "43",
        "42",
        "40",
        "39",
        "41"
      ],
      "colors": [
        "Pink",
        "Grey"
      ],
      "collections": [
        "Stock"
      ],
      "images": [
        {
          "url": "https://picsum.photos/500/500?random=6",
          "altText": "Product 6 Image 1"
        },
        {
          "url": "https://picsum.photos/500/500?random=7",
          "altText": "Product 6 Image 2"
        }
      ],
      "isFeatured": true,
      "isPublished": true,
      "sku": "Product-6-SKU"
    },
    {
      "name": "Product 7",
      "description": "Description of product 7.",
      "price": 3070,
      "discountPrice": 2970,
      "countInStock": 93,
      "category": "A",
      "brand": "Saucony",
      "sizes": [
        "45",
        "44",
        "43",
        "42",
        "40",
        "39",
        "41"
      ],
      "colors": [
        "Grey",
        "Orange"
      ],
      "collections": [
        "Stock"
      ],
      "images": [
        {
          "url": "https://picsum.photos/500/500?random=7",
          "altText": "Product 7 Image 1"
        },
        {
          "url": "https://picsum.photos/500/500?random=8",
          "altText": "Product 7 Image 2"
        }
      ],
      "isFeatured": false,
      "isPublished": true,
      "sku": "Product-7-SKU"
    },
    {
      "name": "Product 8",
      "description": "Description of product 8.",
      "price": 3080,
      "discountPrice": 2980,
      "countInStock": 92,
      "category": "A",
      "brand": "Fila",
      "sizes": [
        "45",
        "44",
        "43",
        "42",
        "40",
        "39",
        "41"
      ],
      "colors": [
        "Orange",
        "Purple"
      ],
      "collections": [
        "Stock"
      ],
      "images": [
        {
          "url": "https://picsum.photos/500/500?random=8",
          "altText": "Product 8 Image 1"
        },
        {
          "url": "https://picsum.photos/500/500?random=9",
          "altText": "Product 8 Image 2"
        }
      ],
      "isFeatured": true,
      "isPublished": true,
      "sku": "Product-8-SKU"
    },
    {
      "name": "Product 9",
      "description": "Description of product 9.",
      "price": 3090,
      "discountPrice": 2990,
      "countInStock": 91,
      "category": "A",
      "brand": "Skechers",
      "sizes": [
        "45",
        "44",
        "43",
        "42",
        "40",
        "39",
        "41"
      ],
      "colors": [
        "Purple",
        "Red"
      ],
      "collections": [
        "Stock"
      ],
      "images": [
        {
          "url": "https://picsum.photos/500/500?random=9",
          "altText": "Product 9 Image 1"
        },
        {
          "url": "https://picsum.photos/500/500?random=10",
          "altText": "Product 9 Image 2"
        }
      ],
      "isFeatured": false,
      "isPublished": true,
      "sku": "Product-9-SKU"
    },
    {
      "name": "Product 10",
      "description": "Description of product 10.",
      "price": 3100,
      "discountPrice": 3000,
      "countInStock": 90,
      "category": "A",
      "brand": "Nike",
      "sizes": [
        "45",
        "44",
        "43",
        "42",
        "40",
        "39",
        "41"
      ],
      "colors": [
        "Red",
        "Blue"
      ],
      "collections": [
        "Stock"
      ],
      "images": [
        {
          "url": "https://picsum.photos/500/500?random=10",
          "altText": "Product 10 Image 1"
        },
        {
          "url": "https://picsum.photos/500/500?random=11",
          "altText": "Product 10 Image 2"
        }
      ],
      "isFeatured": true,
      "isPublished": true,
      "sku": "Product-10-SKU"
    },
    {
      "name": "Product 11",
      "description": "Description of product 11.",
      "price": 3110,
      "discountPrice": 3010,
      "countInStock": 89,
      "category": "A",
      "brand": "Adidas",
      "sizes": [
        "45",
        "44",
        "43",
        "42",
        "40",
        "39",
        "41"
      ],
      "colors": [
        "Blue",
        "Black"
      ],
      "collections": [
        "Stock"
      ],
      "images": [
        {
          "url": "https://picsum.photos/500/500?random=11",
          "altText": "Product 11 Image 1"
        },
        {
          "url": "https://picsum.photos/500/500?random=12",
          "altText": "Product 11 Image 2"
        }
      ],
      "isFeatured": false,
      "isPublished": true,
      "sku": "Product-11-SKU"
    },
    {
      "name": "Product 12",
      "description": "Description of product 12.",
      "price": 3120,
      "discountPrice": 3020,
      "countInStock": 88,
      "category": "A",
      "brand": "Reebok",
      "sizes": [
        "45",
        "44",
        "43",
        "42",
        "40",
        "39",
        "41"
      ],
      "colors": [
        "Black",
        "White"
      ],
      "collections": [
        "Stock"
      ],
      "images": [
        {
          "url": "https://picsum.photos/500/500?random=12",
          "altText": "Product 12 Image 1"
        },
        {
          "url": "https://picsum.photos/500/500?random=13",
          "altText": "Product 12 Image 2"
        }
      ],
      "isFeatured": true,
      "isPublished": true,
      "sku": "Product-12-SKU"
    },
    {
      "name": "Product 13",
      "description": "Description of product 13.",
      "price": 3130,
      "discountPrice": 3030,
      "countInStock": 87,
      "category": "A",
      "brand": "Puma",
      "sizes": [
        "45",
        "44",
        "43",
        "42",
        "40",
        "39",
        "41"
      ],
      "colors": [
        "White",
        "Green"
      ],
      "collections": [
        "Stock"
      ],
      "images": [
        {
          "url": "https://picsum.photos/500/500?random=13",
          "altText": "Product 13 Image 1"
        },
        {
          "url": "https://picsum.photos/500/500?random=14",
          "altText": "Product 13 Image 2"
        }
      ],
      "isFeatured": false,
      "isPublished": true,
      "sku": "Product-13-SKU"
    },
    {
      "name": "Product 14",
      "description": "Description of product 14.",
      "price": 3140,
      "discountPrice": 3040,
      "countInStock": 86,
      "category": "A",
      "brand": "Under Armour",
      "sizes": [
        "45",
        "44",
        "43",
        "42",
        "40",
        "39",
        "41"
      ],
      "colors": [
        "Green",
        "Yellow"
      ],
      "collections": [
        "Stock"
      ],
      "images": [
        {
          "url": "https://picsum.photos/500/500?random=14",
          "altText": "Product 14 Image 1"
        },
        {
          "url": "https://picsum.photos/500/500?random=15",
          "altText": "Product 14 Image 2"
        }
      ],
      "isFeatured": true,
      "isPublished": true,
      "sku": "Product-14-SKU"
    },
    {
      "name": "Product 15",
      "description": "Description of product 15.",
      "price": 3150,
      "discountPrice": 3050,
      "countInStock": 85,
      "category": "A",
      "brand": "New Balance",
      "sizes": [
        "45",
        "44",
        "43",
        "42",
        "40",
        "39",
        "41"
      ],
      "colors": [
        "Yellow",
        "Pink"
      ],
      "collections": [
        "Stock"
      ],
      "images": [
        {
          "url": "https://picsum.photos/500/500?random=15",
          "altText": "Product 15 Image 1"
        },
        {
          "url": "https://picsum.photos/500/500?random=16",
          "altText": "Product 15 Image 2"
        }
      ],
      "isFeatured": false,
      "isPublished": true,
      "sku": "Product-15-SKU"
    },
    {
      "name": "Product 16",
      "description": "Description of product 16.",
      "price": 3160,
      "discountPrice": 3060,
      "countInStock": 84,
      "category": "A",
      "brand": "Asics",
      "sizes": [
        "45",
        "44",
        "43",
        "42",
        "40",
        "39",
        "41"
      ],
      "colors": [
        "Pink",
        "Grey"
      ],
      "collections": [
        "Stock"
      ],
      "images": [
        {
          "url": "https://picsum.photos/500/500?random=16",
          "altText": "Product 16 Image 1"
        },
        {
          "url": "https://picsum.photos/500/500?random=17",
          "altText": "Product 16 Image 2"
        }
      ],
      "isFeatured": true,
      "isPublished": true,
      "sku": "Product-16-SKU"
    },
    {
      "name": "Product 17",
      "description": "Description of product 17.",
      "price": 3170,
      "discountPrice": 3070,
      "countInStock": 83,
      "category": "A",
      "brand": "Saucony",
      "sizes": [
        "45",
        "44",
        "43",
        "42",
        "40",
        "39",
        "41"
      ],
      "colors": [
        "Grey",
        "Orange"
      ],
      "collections": [
        "Stock"
      ],
      "images": [
        {
          "url": "https://picsum.photos/500/500?random=17",
          "altText": "Product 17 Image 1"
        },
        {
          "url": "https://picsum.photos/500/500?random=18",
          "altText": "Product 17 Image 2"
        }
      ],
      "isFeatured": false,
      "isPublished": true,
      "sku": "Product-17-SKU"
    },
    {
      "name": "Product 18",
      "description": "Description of product 18.",
      "price": 3180,
      "discountPrice": 3080,
      "countInStock": 82,
      "category": "A",
      "brand": "Fila",
      "sizes": [
        "45",
        "44",
        "43",
        "42",
        "40",
        "39",
        "41"
      ],
      "colors": [
        "Orange",
        "Purple"
      ],
      "collections": [
        "pre-order"
      ],
      "images": [
        {
          "url": "https://picsum.photos/500/500?random=18",
          "altText": "Product 18 Image 1"
        },
        {
          "url": "https://picsum.photos/500/500?random=19",
          "altText": "Product 18 Image 2"
        }
      ],
      "isFeatured": true,
      "isPublished": true,
      "sku": "Product-18-SKU"
    },
    {
      "name": "Product 19",
      "description": "Description of product 19.",
      "price": 3190,
      "discountPrice": 3090,
      "countInStock": 81,
      "category": "A",
      "brand": "Skechers",
      "sizes": [
        "45",
        "44",
        "43",
        "42",
        "40",
        "39",
        "41"
      ],
      "colors": [
        "Purple",
        "Red"
      ],
      "collections": [
        "Stock"
      ],
      "images": [
        {
          "url": "https://picsum.photos/500/500?random=19",
          "altText": "Product 19 Image 1"
        },
        {
          "url": "https://picsum.photos/500/500?random=20",
          "altText": "Product 19 Image 2"
        }
      ],
      "isFeatured": false,
      "isPublished": true,
      "sku": "Product-19-SKU"
    },
    {
      "name": "Product 20",
      "description": "Description of product 20.",
      "price": 3200,
      "discountPrice": 3100,
      "countInStock": 80,
      "category": "A",
      "brand": "Nike",
      "sizes": [
        "45",
        "44",
        "43",
        "42",
        "40",
        "39",
        "41"
      ],
      "colors": [
        "Red",
        "Blue"
      ],
      "collections": [
        "pre-order"
      ],
      "images": [
        {
          "url": "https://picsum.photos/500/500?random=20",
          "altText": "Product 20 Image 1"
        },
        {
          "url": "https://picsum.photos/500/500?random=21",
          "altText": "Product 20 Image 2"
        }
      ],
      "isFeatured": true,
      "isPublished": true,
      "sku": "Product-20-SKU"
    },
    {
      "name": "Product 21",
      "description": "Description of product 21.",
      "price": 3210,
      "discountPrice": 3110,
      "countInStock": 79,
      "category": "A",
      "brand": "Adidas",
      "sizes": [
        "45",
        "44",
        "43",
        "42",
        "40",
        "39",
        "41"
      ],
      "colors": [
        "Blue",
        "Black"
      ],
      "collections": [
        "Stock"
      ],
      "images": [
        {
          "url": "https://picsum.photos/500/500?random=21",
          "altText": "Product 21 Image 1"
        },
        {
          "url": "https://picsum.photos/500/500?random=22",
          "altText": "Product 21 Image 2"
        }
      ],
      "isFeatured": false,
      "isPublished": true,
      "sku": "Product-21-SKU"
    },
    {
      "name": "Product 22",
      "description": "Description of product 22.",
      "price": 3220,
      "discountPrice": 3120,
      "countInStock": 78,
      "category": "A",
      "brand": "Reebok",
      "sizes": [
        "45",
        "44",
        "43",
        "42",
        "40",
        "39",
        "41"
      ],
      "colors": [
        "Black",
        "White"
      ],
      "collections": [
        "Stock"
      ],
      "images": [
        {
          "url": "https://picsum.photos/500/500?random=22",
          "altText": "Product 22 Image 1"
        },
        {
          "url": "https://picsum.photos/500/500?random=23",
          "altText": "Product 22 Image 2"
        }
      ],
      "isFeatured": true,
      "isPublished": true,
      "sku": "Product-22-SKU"
    },
    {
      "name": "Product 23",
      "description": "Description of product 23.",
      "price": 3230,
      "discountPrice": 3130,
      "countInStock": 77,
      "category": "A",
      "brand": "Puma",
      "sizes": [
        "45",
        "44",
        "43",
        "42",
        "40",
        "39",
        "41"
      ],
      "colors": [
        "White",
        "Green"
      ],
      "collections": [
        "Stock"
      ],
      "images": [
        {
          "url": "https://picsum.photos/500/500?random=23",
          "altText": "Product 23 Image 1"
        },
        {
          "url": "https://picsum.photos/500/500?random=24",
          "altText": "Product 23 Image 2"
        }
      ],
      "isFeatured": false,
      "isPublished": true,
      "sku": "Product-23-SKU"
    },
    {
      "name": "Product 24",
      "description": "Description of product 24.",
      "price": 3240,
      "discountPrice": 3140,
      "countInStock": 76,
      "category": "A",
      "brand": "Under Armour",
      "sizes": [
        "45",
        "44",
        "43",
        "42",
        "40",
        "39",
        "41"
      ],
      "colors": [
        "Green",
        "Yellow"
      ],
      "collections": [
        "Stock"
      ],
      "images": [
        {
          "url": "https://picsum.photos/500/500?random=24",
          "altText": "Product 24 Image 1"
        },
        {
          "url": "https://picsum.photos/500/500?random=25",
          "altText": "Product 24 Image 2"
        }
      ],
      "isFeatured": true,
      "isPublished": true,
      "sku": "Product-24-SKU"
    },
    {
      "name": "Product 25",
      "description": "Description of product 25.",
      "price": 3250,
      "discountPrice": 3150,
      "countInStock": 75,
      "category": "A",
      "brand": "New Balance",
      "sizes": [
        "45",
        "44",
        "43",
        "42",
        "40",
        "39",
        "41"
      ],
      "colors": [
        "Yellow",
        "Pink"
      ],
      "collections": [
        "Stock"
      ],
      "images": [
        {
          "url": "https://picsum.photos/500/500?random=25",
          "altText": "Product 25 Image 1"
        },
        {
          "url": "https://picsum.photos/500/500?random=26",
          "altText": "Product 25 Image 2"
        }
      ],
      "isFeatured": false,
      "isPublished": true,
      "sku": "Product-25-SKU"
    },
    {
      "name": "Product 26",
      "description": "Description of product 26.",
      "price": 3260,
      "discountPrice": 3160,
      "countInStock": 74,
      "category": "A",
      "brand": "Asics",
      "sizes": [
        "45",
        "44",
        "43",
        "42",
        "40",
        "39",
        "41"
      ],
      "colors": [
        "Pink",
        "Grey"
      ],
      "collections": [
        "Stock"
      ],
      "images": [
        {
          "url": "https://picsum.photos/500/500?random=26",
          "altText": "Product 26 Image 1"
        },
        {
          "url": "https://picsum.photos/500/500?random=27",
          "altText": "Product 26 Image 2"
        }
      ],
      "isFeatured": true,
      "isPublished": true,
      "sku": "Product-26-SKU"
    },
    {
      "name": "Product 27",
      "description": "Description of product 27.",
      "price": 3270,
      "discountPrice": 3170,
      "countInStock": 73,
      "category": "A",
      "brand": "Saucony",
      "sizes": [
        "45",
        "44",
        "43",
        "42",
        "40",
        "39",
        "41"
      ],
      "colors": [
        "Grey",
        "Orange"
      ],
      "collections": [
        "pre-order"
      ],
      "images": [
        {
          "url": "https://picsum.photos/500/500?random=27",
          "altText": "Product 27 Image 1"
        },
        {
          "url": "https://picsum.photos/500/500?random=28",
          "altText": "Product 27 Image 2"
        }
      ],
      "isFeatured": false,
      "isPublished": true,
      "sku": "Product-27-SKU"
    },
    {
      "name": "Product 28",
      "description": "Description of product 28.",
      "price": 3280,
      "discountPrice": 3180,
      "countInStock": 72,
      "category": "A",
      "brand": "Fila",
      "sizes": [
        "45",
        "44",
        "43",
        "42",
        "40",
        "39",
        "41"
      ],
      "colors": [
        "Orange",
        "Purple"
      ],
      "collections": [
        "Stock"
      ],
      "images": [
        {
          "url": "https://picsum.photos/500/500?random=28",
          "altText": "Product 28 Image 1"
        },
        {
          "url": "https://picsum.photos/500/500?random=29",
          "altText": "Product 28 Image 2"
        }
      ],
      "isFeatured": true,
      "isPublished": true,
      "sku": "Product-28-SKU"
    },
    {
      "name": "Product 29",
      "description": "Description of product 29.",
      "price": 3290,
      "discountPrice": 3190,
      "countInStock": 71,
      "category": "A",
      "brand": "Skechers",
      "sizes": [
        "45",
        "44",
        "43",
        "42",
        "40",
        "39",
        "41"
      ],
      "colors": [
        "Purple",
        "Red"
      ],
      "collections": [
        "Stock"
      ],
      "images": [
        {
          "url": "https://picsum.photos/500/500?random=29",
          "altText": "Product 29 Image 1"
        },
        {
          "url": "https://picsum.photos/500/500?random=30",
          "altText": "Product 29 Image 2"
        }
      ],
      "isFeatured": false,
      "isPublished": true,
      "sku": "Product-29-SKU"
    },
    {
      "name": "Product 30",
      "description": "Description of product 30.",
      "price": 3300,
      "discountPrice": 3200,
      "countInStock": 70,
      "category": "A",
      "brand": "Nike",
      "sizes": [
        "45",
        "44",
        "43",
        "42",
        "40",
        "39",
        "41"
      ],
      "colors": [
        "Red",
        "Blue"
      ],
      "collections": [
        "Stock"
      ],
      "images": [
        {
          "url": "https://picsum.photos/500/500?random=30",
          "altText": "Product 30 Image 1"
        },
        {
          "url": "https://picsum.photos/500/500?random=31",
          "altText": "Product 30 Image 2"
        }
      ],
      "isFeatured": true,
      "isPublished": true,
      "sku": "Product-30-SKU"
    },
    {
      "name": "Product 31",
      "description": "Description of product 31.",
      "price": 3310,
      "discountPrice": 3210,
      "countInStock": 69,
      "category": "A",
      "brand": "Adidas",
      "sizes": [
        "45",
        "44",
        "43",
        "42",
        "40",
        "39",
        "41"
      ],
      "colors": [
        "Blue",
        "Black"
      ],
      "collections": [
        "Stock"
      ],
      "images": [
        {
          "url": "https://picsum.photos/500/500?random=31",
          "altText": "Product 31 Image 1"
        },
        {
          "url": "https://picsum.photos/500/500?random=32",
          "altText": "Product 31 Image 2"
        }
      ],
      "isFeatured": false,
      "isPublished": true,
      "sku": "Product-31-SKU"
    },
    {
      "name": "Product 32",
      "description": "Description of product 32.",
      "price": 3320,
      "discountPrice": 3220,
      "countInStock": 68,
      "category": "A",
      "brand": "Reebok",
      "sizes": [
        "45",
        "44",
        "43",
        "42",
        "40",
        "39",
        "41"
      ],
      "colors": [
        "Black",
        "White"
      ],
      "collections": [
        "Stock"
      ],
      "images": [
        {
          "url": "https://picsum.photos/500/500?random=32",
          "altText": "Product 32 Image 1"
        },
        {
          "url": "https://picsum.photos/500/500?random=33",
          "altText": "Product 32 Image 2"
        }
      ],
      "isFeatured": true,
      "isPublished": true,
      "sku": "Product-32-SKU"
    },
    {
      "name": "Product 33",
      "description": "Description of product 33.",
      "price": 3330,
      "discountPrice": 3230,
      "countInStock": 67,
      "category": "A",
      "brand": "Puma",
      "sizes": [
        "45",
        "44",
        "43",
        "42",
        "40",
        "39",
        "41"
      ],
      "colors": [
        "White",
        "Green"
      ],
      "collections": [
        "Stock"
      ],
      "images": [
        {
          "url": "https://picsum.photos/500/500?random=33",
          "altText": "Product 33 Image 1"
        },
        {
          "url": "https://picsum.photos/500/500?random=34",
          "altText": "Product 33 Image 2"
        }
      ],
      "isFeatured": false,
      "isPublished": true,
      "sku": "Product-33-SKU"
    },
    {
      "name": "Product 34",
      "description": "Description of product 34.",
      "price": 3340,
      "discountPrice": 3240,
      "countInStock": 66,
      "category": "A",
      "brand": "Under Armour",
      "sizes": [
        "45",
        "44",
        "43",
        "42",
        "40",
        "39",
        "41"
      ],
      "colors": [
        "Green",
        "Yellow"
      ],
      "collections": [
        "Stock"
      ],
      "images": [
        {
          "url": "https://picsum.photos/500/500?random=34",
          "altText": "Product 34 Image 1"
        },
        {
          "url": "https://picsum.photos/500/500?random=35",
          "altText": "Product 34 Image 2"
        }
      ],
      "isFeatured": true,
      "isPublished": true,
      "sku": "Product-34-SKU"
    },
    {
      "name": "Product 35",
      "description": "Description of product 35.",
      "price": 3350,
      "discountPrice": 3250,
      "countInStock": 65,
      "category": "A",
      "brand": "New Balance",
      "sizes": [
        "45",
        "44",
        "43",
        "42",
        "40",
        "39",
        "41"
      ],
      "colors": [
        "Yellow",
        "Pink"
      ],
      "collections": [
        "Stock"
      ],
      "images": [
        {
          "url": "https://picsum.photos/500/500?random=35",
          "altText": "Product 35 Image 1"
        },
        {
          "url": "https://picsum.photos/500/500?random=36",
          "altText": "Product 35 Image 2"
        }
      ],
      "isFeatured": false,
      "isPublished": true,
      "sku": "Product-35-SKU"
    },
    {
      "name": "Product 36",
      "description": "Description of product 36.",
      "price": 3360,
      "discountPrice": 3260,
      "countInStock": 64,
      "category": "A",
      "brand": "Asics",
      "sizes": [
        "45",
        "44",
        "43",
        "42",
        "40",
        "39",
        "41"
      ],
      "colors": [
        "Pink",
        "Grey"
      ],
      "collections": [
        "Stock"
      ],
      "images": [
        {
          "url": "https://picsum.photos/500/500?random=36",
          "altText": "Product 36 Image 1"
        },
        {
          "url": "https://picsum.photos/500/500?random=37",
          "altText": "Product 36 Image 2"
        }
      ],
      "isFeatured": true,
      "isPublished": true,
      "sku": "Product-36-SKU"
    },
    {
      "name": "Product 37",
      "description": "Description of product 37.",
      "price": 3370,
      "discountPrice": 3270,
      "countInStock": 63,
      "category": "A",
      "brand": "Saucony",
      "sizes": [
        "45",
        "44",
        "43",
        "42",
        "40",
        "39",
        "41"
      ],
      "colors": [
        "Grey",
        "Orange"
      ],
      "collections": [
        "Stock"
      ],
      "images": [
        {
          "url": "https://picsum.photos/500/500?random=37",
          "altText": "Product 37 Image 1"
        },
        {
          "url": "https://picsum.photos/500/500?random=38",
          "altText": "Product 37 Image 2"
        }
      ],
      "isFeatured": false,
      "isPublished": true,
      "sku": "Product-37-SKU"
    },
    {
      "name": "Product 38",
      "description": "Description of product 38.",
      "price": 3380,
      "discountPrice": 3280,
      "countInStock": 62,
      "category": "A",
      "brand": "Fila",
      "sizes": [
        "45",
        "44",
        "43",
        "42",
        "40",
        "39",
        "41"
      ],
      "colors": [
        "Orange",
        "Purple"
      ],
      "collections": [
        "pre-order"
      ],
      "images": [
        {
          "url": "https://picsum.photos/500/500?random=38",
          "altText": "Product 38 Image 1"
        },
        {
          "url": "https://picsum.photos/500/500?random=39",
          "altText": "Product 38 Image 2"
        }
      ],
      "isFeatured": true,
      "isPublished": true,
      "sku": "Product-38-SKU"
    },
    {
      "name": "Product 39",
      "description": "Description of product 39.",
      "price": 3390,
      "discountPrice": 3290,
      "countInStock": 61,
      "category": "A",
      "brand": "Skechers",
      "sizes": [
        "45",
        "44",
        "43",
        "42",
        "40",
        "39",
        "41"
      ],
      "colors": [
        "Purple",
        "Red"
      ],
      "collections": [
        "Stock"
      ],
      "images": [
        {
          "url": "https://picsum.photos/500/500?random=39",
          "altText": "Product 39 Image 1"
        },
        {
          "url": "https://picsum.photos/500/500?random=40",
          "altText": "Product 39 Image 2"
        }
      ],
      "isFeatured": false,
      "isPublished": true,
      "sku": "Product-39-SKU"
    },
    {
      "name": "Product 40",
      "description": "Description of product 40.",
      "price": 3400,
      "discountPrice": 3300,
      "countInStock": 60,
      "category": "A",
      "brand": "Nike",
      "sizes": [
        "45",
        "44",
        "43",
        "42",
        "40",
        "39",
        "41"
      ],
      "colors": [
        "Red",
        "Blue"
      ],
      "collections": [
        "Stock"
      ],
      "images": [
        {
          "url": "https://picsum.photos/500/500?random=40",
          "altText": "Product 40 Image 1"
        },
        {
          "url": "https://picsum.photos/500/500?random=41",
          "altText": "Product 40 Image 2"
        }
      ],
      "isFeatured": true,
      "isPublished": true,
      "sku": "Product-40-SKU"
    },
    {
      "name": "Product 41",
      "description": "Description of product 41.",
      "price": 3410,
      "discountPrice": 3310,
      "countInStock": 59,
      "category": "A",
      "brand": "Adidas",
      "sizes": [
        "45",
        "44",
        "43",
        "42",
        "40",
        "39",
        "41"
      ],
      "colors": [
        "Blue",
        "Black"
      ],
      "collections": [
        "Stock"
      ],
      "images": [
        {
          "url": "https://picsum.photos/500/500?random=41",
          "altText": "Product 41 Image 1"
        },
        {
          "url": "https://picsum.photos/500/500?random=42",
          "altText": "Product 41 Image 2"
        }
      ],
      "isFeatured": false,
      "isPublished": true,
      "sku": "Product-41-SKU"
    },
    {
      "name": "Product 42",
      "description": "Description of product 42.",
      "price": 3420,
      "discountPrice": 3320,
      "countInStock": 58,
      "category": "A",
      "brand": "Reebok",
      "sizes": [
        "45",
        "44",
        "43",
        "42",
        "40",
        "39",
        "41"
      ],
      "colors": [
        "Black",
        "White"
      ],
      "collections": [
        "pre-order"
      ],
      "images": [
        {
          "url": "https://picsum.photos/500/500?random=42",
          "altText": "Product 42 Image 1"
        },
        {
          "url": "https://picsum.photos/500/500?random=43",
          "altText": "Product 42 Image 2"
        }
      ],
      "isFeatured": true,
      "isPublished": true,
      "sku": "Product-42-SKU"
    },
    {
      "name": "Product 43",
      "description": "Description of product 43.",
      "price": 3430,
      "discountPrice": 3330,
      "countInStock": 57,
      "category": "A",
      "brand": "Puma",
      "sizes": [
        "45",
        "44",
        "43",
        "42",
        "40",
        "39",
        "41"
      ],
      "colors": [
        "White",
        "Green"
      ],
      "collections": [
        "Stock"
      ],
      "images": [
        {
          "url": "https://picsum.photos/500/500?random=43",
          "altText": "Product 43 Image 1"
        },
        {
          "url": "https://picsum.photos/500/500?random=44",
          "altText": "Product 43 Image 2"
        }
      ],
      "isFeatured": false,
      "isPublished": true,
      "sku": "Product-43-SKU"
    },
    {
      "name": "Product 44",
      "description": "Description of product 44.",
      "price": 3440,
      "discountPrice": 3340,
      "countInStock": 56,
      "category": "A",
      "brand": "Under Armour",
      "sizes": [
        "45",
        "44",
        "43",
        "42",
        "40",
        "39",
        "41"
      ],
      "colors": [
        "Green",
        "Yellow"
      ],
      "collections": [
        "Stock"
      ],
      "images": [
        {
          "url": "https://picsum.photos/500/500?random=44",
          "altText": "Product 44 Image 1"
        },
        {
          "url": "https://picsum.photos/500/500?random=45",
          "altText": "Product 44 Image 2"
        }
      ],
      "isFeatured": true,
      "isPublished": true,
      "sku": "Product-44-SKU"
    },
    {
      "name": "Product 45",
      "description": "Description of product 45.",
      "price": 3450,
      "discountPrice": 3350,
      "countInStock": 55,
      "category": "A",
      "brand": "New Balance",
      "sizes": [
        "45",
        "44",
        "43",
        "42",
        "40",
        "39",
        "41"
      ],
      "colors": [
        "Yellow",
        "Pink"
      ],
      "collections": [
        "Stock"
      ],
      "images": [
        {
          "url": "https://picsum.photos/500/500?random=45",
          "altText": "Product 45 Image 1"
        },
        {
          "url": "https://picsum.photos/500/500?random=46",
          "altText": "Product 45 Image 2"
        }
      ],
      "isFeatured": false,
      "isPublished": true,
      "sku": "Product-45-SKU"
    },
    {
      "name": "Product 46",
      "description": "Description of product 46.",
      "price": 3460,
      "discountPrice": 3360,
      "countInStock": 54,
      "category": "A",
      "brand": "Asics",
      "sizes": [
        "45",
        "44",
        "43",
        "42",
        "40",
        "39",
        "41"
      ],
      "colors": [
        "Pink",
        "Grey"
      ],
      "collections": [
        "Stock"
      ],
      "images": [
        {
          "url": "https://picsum.photos/500/500?random=46",
          "altText": "Product 46 Image 1"
        },
        {
          "url": "https://picsum.photos/500/500?random=47",
          "altText": "Product 46 Image 2"
        }
      ],
      "isFeatured": true,
      "isPublished": true,
      "sku": "Product-46-SKU"
    },
    {
      "name": "Product 47",
      "description": "Description of product 47.",
      "price": 3470,
      "discountPrice": 3370,
      "countInStock": 53,
      "category": "A",
      "brand": "Saucony",
      "sizes": [
        "45",
        "44",
        "43",
        "42",
        "40",
        "39",
        "41"
      ],
      "colors": [
        "Grey",
        "Orange"
      ],
      "collections": [
        "Stock"
      ],
      "images": [
        {
          "url": "https://picsum.photos/500/500?random=47",
          "altText": "Product 47 Image 1"
        },
        {
          "url": "https://picsum.photos/500/500?random=48",
          "altText": "Product 47 Image 2"
        }
      ],
      "isFeatured": false,
      "isPublished": true,
      "sku": "Product-47-SKU"
    },
    {
      "name": "Product 48",
      "description": "Description of product 48.",
      "price": 3480,
      "discountPrice": 3380,
      "countInStock": 52,
      "category": "A",
      "brand": "Fila",
      "sizes": [
        "45",
        "44",
        "43",
        "42",
        "40",
        "39",
        "41"
      ],
      "colors": [
        "Orange",
        "Purple"
      ],
      "collections": [
        "Stock"
      ],
      "images": [
        {
          "url": "https://picsum.photos/500/500?random=48",
          "altText": "Product 48 Image 1"
        },
        {
          "url": "https://picsum.photos/500/500?random=49",
          "altText": "Product 48 Image 2"
        }
      ],
      "isFeatured": true,
      "isPublished": true,
      "sku": "Product-48-SKU"
    },
    {
      "name": "Product 49",
      "description": "Description of product 49.",
      "price": 3490,
      "discountPrice": 3390,
      "countInStock": 51,
      "category": "A",
      "brand": "Skechers",
      "sizes": [
        "45",
        "44",
        "43",
        "42",
        "40",
        "39",
        "41"
      ],
      "colors": [
        "Purple",
        "Red"
      ],
      "collections": [
        "pre-order"
      ],
      "images": [
        {
          "url": "https://picsum.photos/500/500?random=49",
          "altText": "Product 49 Image 1"
        },
        {
          "url": "https://picsum.photos/500/500?random=50",
          "altText": "Product 49 Image 2"
        }
      ],
      "isFeatured": false,
      "isPublished": true,
      "sku": "Product-49-SKU"
    },
    {
      "name": "Product 50",
      "description": "Description of product 50.",
      "price": 3500,
      "discountPrice": 3400,
      "countInStock": 50,
      "category": "A",
      "brand": "Nike",
      "sizes": [
        "45",
        "44",
        "43",
        "42",
        "40",
        "39",
        "41"
      ],
      "colors": [
        "Red",
        "Blue"
      ],
      "collections": [
        "Stock"
      ],
      "images": [
        {
          "url": "https://picsum.photos/500/500?random=50",
          "altText": "Product 50 Image 1"
        },
        {
          "url": "https://picsum.photos/500/500?random=51",
          "altText": "Product 50 Image 2"
        }
      ],
      "isFeatured": true,
      "isPublished": true,
      "sku": "Product-50-SKU",
      "rating":4
    },
    {
      "name": "Product 51",
      "description": "Description of product 51.",
      "price": 3510,
      "discountPrice": 3410,
      "countInStock": 49,
      "category": "A",
      "brand": "Adidas",
      "sizes": [
        "45",
        "44",
        "43",
        "42",
        "40",
        "39",
        "41"
      ],
      "colors": [
        "Blue",
        "Black"
      ],
      "collections": [
        "Stock"
      ],
      "images": [
        {
          "url": "https://picsum.photos/500/500?random=51",
          "altText": "Product 51 Image 1"
        },
        {
          "url": "https://picsum.photos/500/500?random=52",
          "altText": "Product 51 Image 2"
        }
      ],
      "isFeatured": false,
      "isPublished": true,
      "sku": "Product-51-SKU",
      "rating":3
    },
    {
      "name": "Product 52",
      "description": "Description of product 52.",
      "price": 3520,
      "discountPrice": 3420,
      "countInStock": 48,
      "category": "A",
      "brand": "Reebok",
      "sizes": [
        "45",
        "44",
        "43",
        "42",
        "40",
        "39",
        "41"
      ],
      "colors": [
        "Black",
        "White"
      ],
      "collections": [
        "Stock"
      ],
      "images": [
        {
          "url": "https://picsum.photos/500/500?random=52",
          "altText": "Product 52 Image 1"
        },
        {
          "url": "https://picsum.photos/500/500?random=53",
          "altText": "Product 52 Image 2"
        }
      ],
      "isFeatured": true,
      "isPublished": true,
      "sku": "Product-52-SKU"
    },
    {
      "name": "Product 53",
      "description": "Description of product 53.",
      "price": 3530,
      "discountPrice": 3430,
      "countInStock": 47,
      "category": "A",
      "brand": "Puma",
      "sizes": [
        "45",
        "44",
        "43",
        "42",
        "40",
        "39",
        "41"
      ],
      "colors": [
        "White",
        "Green"
      ],
      "collections": [
        "Stock"
      ],
      "images": [
        {
          "url": "https://picsum.photos/500/500?random=53",
          "altText": "Product 53 Image 1"
        },
        {
          "url": "https://picsum.photos/500/500?random=54",
          "altText": "Product 53 Image 2"
        }
      ],
      "isFeatured": false,
      "isPublished": true,
      "sku": "Product-53-SKU",
      "rating":2
    },
    {
      "name": "Product 54",
      "description": "Description of product 54.",
      "price": 3540,
      "discountPrice": 3440,
      "countInStock": 46,
      "category": "A",
      "brand": "Under Armour",
      "sizes": [
        "45",
        "44",
        "43",
        "42",
        "40",
        "39",
        "41"
      ],
      "colors": [
        "Green",
        "Yellow"
      ],
      "collections": [
        "Stock"
      ],
      "images": [
        {
          "url": "https://picsum.photos/500/500?random=54",
          "altText": "Product 54 Image 1"
        },
        {
          "url": "https://picsum.photos/500/500?random=55",
          "altText": "Product 54 Image 2"
        }
      ],
      "isFeatured": true,
      "isPublished": true,
      "sku": "Product-54-SKU"
    },
    {
      "name": "Product 55",
      "description": "Description of product 55.",
      "price": 3550,
      "discountPrice": 3450,
      "countInStock": 45,
      "category": "A",
      "brand": "New Balance",
      "sizes": [
        "45",
        "44",
        "43",
        "42",
        "40",
        "39",
        "41"
      ],
      "colors": [
        "Yellow",
        "Pink"
      ],
      "collections": [
        "Stock"
      ],
      "images": [
        {
          "url": "https://picsum.photos/500/500?random=55",
          "altText": "Product 55 Image 1"
        },
        {
          "url": "https://picsum.photos/500/500?random=56",
          "altText": "Product 55 Image 2"
        }
      ],
      "isFeatured": false,
      "isPublished": true,
      "sku": "Product-55-SKU",
      "rating":4
    },
    {
      "name": "Product 56",
      "description": "Description of product 56.",
      "price": 3560,
      "discountPrice": 3460,
      "countInStock": 44,
      "category": "A",
      "brand": "Asics",
      "sizes": [
        "45",
        "44",
        "43",
        "42",
        "40",
        "39",
        "41"
      ],
      "colors": [
        "Pink",
        "Grey"
      ],
      "collections": [
        "Stock"
      ],
      "images": [
        {
          "url": "https://picsum.photos/500/500?random=56",
          "altText": "Product 56 Image 1"
        },
        {
          "url": "https://picsum.photos/500/500?random=57",
          "altText": "Product 56 Image 2"
        }
      ],
      "isFeatured": true,
      "isPublished": true,
      "sku": "Product-56-SKU"
    },
    {
      "name": "Product 57",
      "description": "Description of product 57.",
      "price": 3570,
      "discountPrice": 3470,
      "countInStock": 43,
      "category": "A",
      "brand": "Saucony",
      "sizes": [
        "45",
        "44",
        "43",
        "42",
        "40",
        "39",
        "41"
      ],
      "colors": [
        "Grey",
        "Orange"
      ],
      "collections": [
        "Stock"
      ],
      "images": [
        {
          "url": "https://picsum.photos/500/500?random=57",
          "altText": "Product 57 Image 1"
        },
        {
          "url": "https://picsum.photos/500/500?random=58",
          "altText": "Product 57 Image 2"
        }
      ],
      "isFeatured": false,
      "isPublished": true,
      "sku": "Product-57-SKU"
    },
    {
      "name": "Product 58",
      "description": "Description of product 58.",
      "price": 3580,
      "discountPrice": 3480,
      "countInStock": 42,
      "category": "A",
      "brand": "Fila",
      "sizes": [
        "45",
        "44",
        "43",
        "42",
        "40",
        "39",
        "41"
      ],
      "colors": [
        "Orange",
        "Purple"
      ],
      "collections": [
        "Stock"
      ],
      "images": [
        {
          "url": "https://picsum.photos/500/500?random=58",
          "altText": "Product 58 Image 1"
        },
        {
          "url": "https://picsum.photos/500/500?random=59",
          "altText": "Product 58 Image 2"
        }
      ],
      "isFeatured": true,
      "isPublished": true,
      "sku": "Product-58-SKU"
    },
    {
      "name": "Product 59",
      "description": "Description of product 59.",
      "price": 3590,
      "discountPrice": 3490,
      "countInStock": 41,
      "category": "A",
      "brand": "Skechers",
      "sizes": [
        "45",
        "44",
        "43",
        "42",
        "40",
        "39",
        "41"
      ],
      "colors": [
        "Purple",
        "Red"
      ],
      "collections": [
        "Stock"
      ],
      "images": [
        {
          "url": "https://picsum.photos/500/500?random=59",
          "altText": "Product 59 Image 1"
        },
        {
          "url": "https://picsum.photos/500/500?random=60",
          "altText": "Product 59 Image 2"
        }
      ],
      "isFeatured": false,
      "isPublished": true,
      "sku": "Product-59-SKU"
    },
    {
      "name": "Product 60",
      "description": "Description of product 60.",
      "price": 3600,
      "discountPrice": 3500,
      "countInStock": 40,
      "category": "A",
      "brand": "Nike",
      "sizes": [
        "45",
        "44",
        "43",
        "42",
        "40",
        "39",
        "41"
      ],
      "colors": [
        "Red",
        "Blue"
      ],
      "collections": [
        "Stock"
      ],
      "images": [
        {
          "url": "https://picsum.photos/500/500?random=60",
          "altText": "Product 60 Image 1"
        },
        {
          "url": "https://picsum.photos/500/500?random=61",
          "altText": "Product 60 Image 2"
        }
      ],
      "isFeatured": true,
      "isPublished": true,
      "sku": "Product-60-SKU"
    },
    {
      "name": "Product 61",
      "description": "Description of product 61.",
      "price": 3610,
      "discountPrice": 3510,
      "countInStock": 39,
      "category": "A",
      "brand": "Adidas",
      "sizes": [
        "45",
        "44",
        "43",
        "42",
        "40",
        "39",
        "41"
      ],
      "colors": [
        "Blue",
        "Black"
      ],
      "collections": [
        "Stock"
      ],
      "images": [
        {
          "url": "https://picsum.photos/500/500?random=61",
          "altText": "Product 61 Image 1"
        },
        {
          "url": "https://picsum.photos/500/500?random=62",
          "altText": "Product 61 Image 2"
        }
      ],
      "isFeatured": false,
      "isPublished": true,
      "sku": "Product-61-SKU"
    },
    {
      "name": "Product 62",
      "description": "Description of product 62.",
      "price": 3620,
      "discountPrice": 3520,
      "countInStock": 38,
      "category": "A",
      "brand": "Reebok",
      "sizes": [
        "45",
        "44",
        "43",
        "42",
        "40",
        "39",
        "41"
      ],
      "colors": [
        "Black",
        "White"
      ],
      "collections": [
        "Stock"
      ],
      "images": [
        {
          "url": "https://picsum.photos/500/500?random=62",
          "altText": "Product 62 Image 1"
        },
        {
          "url": "https://picsum.photos/500/500?random=63",
          "altText": "Product 62 Image 2"
        }
      ],
      "isFeatured": true,
      "isPublished": true,
      "sku": "Product-62-SKU"
    },
    {
      "name": "Product 63",
      "description": "Description of product 63.",
      "price": 3630,
      "discountPrice": 3530,
      "countInStock": 37,
      "category": "A",
      "brand": "Puma",
      "sizes": [
        "45",
        "44",
        "43",
        "42",
        "40",
        "39",
        "41"
      ],
      "colors": [
        "White",
        "Green"
      ],
      "collections": [
        "Stock"
      ],
      "images": [
        {
          "url": "https://picsum.photos/500/500?random=63",
          "altText": "Product 63 Image 1"
        },
        {
          "url": "https://picsum.photos/500/500?random=64",
          "altText": "Product 63 Image 2"
        }
      ],
      "isFeatured": false,
      "isPublished": true,
      "sku": "Product-63-SKU"
    },
    {
      "name": "Product 64",
      "description": "Description of product 64.",
      "price": 3640,
      "discountPrice": 3540,
      "countInStock": 36,
      "category": "A",
      "brand": "Under Armour",
      "sizes": [
        "45",
        "44",
        "43",
        "42",
        "40",
        "39",
        "41"
      ],
      "colors": [
        "Green",
        "Yellow"
      ],
      "collections": [
        "Stock"
      ],
      "images": [
        {
          "url": "https://picsum.photos/500/500?random=64",
          "altText": "Product 64 Image 1"
        },
        {
          "url": "https://picsum.photos/500/500?random=65",
          "altText": "Product 64 Image 2"
        }
      ],
      "isFeatured": true,
      "isPublished": true,
      "sku": "Product-64-SKU"
    },
    {
      "name": "Product 65",
      "description": "Description of product 65.",
      "price": 3650,
      "discountPrice": 3550,
      "countInStock": 35,
      "category": "A",
      "brand": "New Balance",
      "sizes": [
        "45",
        "44",
        "43",
        "42",
        "40",
        "39",
        "41"
      ],
      "colors": [
        "Yellow",
        "Pink"
      ],
      "collections": [
        "pre-order"
      ],
      "images": [
        {
          "url": "https://picsum.photos/500/500?random=65",
          "altText": "Product 65 Image 1"
        },
        {
          "url": "https://picsum.photos/500/500?random=66",
          "altText": "Product 65 Image 2"
        }
      ],
      "isFeatured": false,
      "isPublished": true,
      "sku": "Product-65-SKU"
    },
    {
      "name": "Product 66",
      "description": "Description of product 66.",
      "price": 3660,
      "discountPrice": 3560,
      "countInStock": 34,
      "category": "A",
      "brand": "Asics",
      "sizes": [
        "45",
        "44",
        "43",
        "42",
        "40",
        "39",
        "41"
      ],
      "colors": [
        "Pink",
        "Grey"
      ],
      "collections": [
        "pre-order"
      ],
      "images": [
        {
          "url": "https://picsum.photos/500/500?random=66",
          "altText": "Product 66 Image 1"
        },
        {
          "url": "https://picsum.photos/500/500?random=67",
          "altText": "Product 66 Image 2"
        }
      ],
      "isFeatured": true,
      "isPublished": true,
      "sku": "Product-66-SKU"
    },
    {
      "name": "Product 67",
      "description": "Description of product 67.",
      "price": 3670,
      "discountPrice": 3570,
      "countInStock": 33,
      "category": "A",
      "brand": "Saucony",
      "sizes": [
        "45",
        "44",
        "43",
        "42",
        "40",
        "39",
        "41"
      ],
      "colors": [
        "Grey",
        "Orange"
      ],
      "collections": [
        "Stock"
      ],
      "images": [
        {
          "url": "https://picsum.photos/500/500?random=67",
          "altText": "Product 67 Image 1"
        },
        {
          "url": "https://picsum.photos/500/500?random=68",
          "altText": "Product 67 Image 2"
        }
      ],
      "isFeatured": false,
      "isPublished": true,
      "sku": "Product-67-SKU"
    },
    {
      "name": "Product 68",
      "description": "Description of product 68.",
      "price": 3680,
      "discountPrice": 3580,
      "countInStock": 32,
      "category": "A",
      "brand": "Fila",
      "sizes": [
        "45",
        "44",
        "43",
        "42",
        "40",
        "39",
        "41"
      ],
      "colors": [
        "Orange",
        "Purple"
      ],
      "collections": [
        "pre-order"
      ],
      "images": [
        {
          "url": "https://picsum.photos/500/500?random=68",
          "altText": "Product 68 Image 1"
        },
        {
          "url": "https://picsum.photos/500/500?random=69",
          "altText": "Product 68 Image 2"
        }
      ],
      "isFeatured": true,
      "isPublished": true,
      "sku": "Product-68-SKU"
    },
    {
      "name": "Product 69",
      "description": "Description of product 69.",
      "price": 3690,
      "discountPrice": 3590,
      "countInStock": 31,
      "category": "A",
      "brand": "Skechers",
      "sizes": [
        "45",
        "44",
        "43",
        "42",
        "40",
        "39",
        "41"
      ],
      "colors": [
        "Purple",
        "Red"
      ],
      "collections": [
        "Stock"
      ],
      "images": [
        {
          "url": "https://picsum.photos/500/500?random=69",
          "altText": "Product 69 Image 1"
        },
        {
          "url": "https://picsum.photos/500/500?random=70",
          "altText": "Product 69 Image 2"
        }
      ],
      "isFeatured": false,
      "isPublished": true,
      "sku": "Product-69-SKU"
    },
    {
      "name": "Product 70",
      "description": "Description of product 70.",
      "price": 3700,
      "discountPrice": 3600,
      "countInStock": 30,
      "category": "A",
      "brand": "Nike",
      "sizes": [
        "45",
        "44",
        "43",
        "42",
        "40",
        "39",
        "41"
      ],
      "colors": [
        "Red",
        "Blue"
      ],
      "collections": [
        "Stock"
      ],
      "images": [
        {
          "url": "https://picsum.photos/500/500?random=70",
          "altText": "Product 70 Image 1"
        },
        {
          "url": "https://picsum.photos/500/500?random=71",
          "altText": "Product 70 Image 2"
        }
      ],
      "isFeatured": true,
      "isPublished": true,
      "sku": "Product-70-SKU"
    },
    {
      "name": "Product 71",
      "description": "Description of product 71.",
      "price": 3710,
      "discountPrice": 3610,
      "countInStock": 29,
      "category": "A",
      "brand": "Adidas",
      "sizes": [
        "45",
        "44",
        "43",
        "42",
        "40",
        "39",
        "41"
      ],
      "colors": [
        "Blue",
        "Black"
      ],
      "collections": [
        "Stock"
      ],
      "images": [
        {
          "url": "https://picsum.photos/500/500?random=71",
          "altText": "Product 71 Image 1"
        },
        {
          "url": "https://picsum.photos/500/500?random=72",
          "altText": "Product 71 Image 2"
        }
      ],
      "isFeatured": false,
      "isPublished": true,
      "sku": "Product-71-SKU"
    },
    {
      "name": "Product 72",
      "description": "Description of product 72.",
      "price": 3720,
      "discountPrice": 3620,
      "countInStock": 28,
      "category": "A",
      "brand": "Reebok",
      "sizes": [
        "45",
        "44",
        "43",
        "42",
        "40",
        "39",
        "41"
      ],
      "colors": [
        "Black",
        "White"
      ],
      "collections": [
        "Stock"
      ],
      "images": [
        {
          "url": "https://picsum.photos/500/500?random=72",
          "altText": "Product 72 Image 1"
        },
        {
          "url": "https://picsum.photos/500/500?random=73",
          "altText": "Product 72 Image 2"
        }
      ],
      "isFeatured": true,
      "isPublished": true,
      "sku": "Product-72-SKU"
    },
    {
      "name": "Product 73",
      "description": "Description of product 73.",
      "price": 3730,
      "discountPrice": 3630,
      "countInStock": 27,
      "category": "A",
      "brand": "Puma",
      "sizes": [
        "45",
        "44",
        "43",
        "42",
        "40",
        "39",
        "41"
      ],
      "colors": [
        "White",
        "Green"
      ],
      "collections": [
        "Stock"
      ],
      "images": [
        {
          "url": "https://picsum.photos/500/500?random=73",
          "altText": "Product 73 Image 1"
        },
        {
          "url": "https://picsum.photos/500/500?random=74",
          "altText": "Product 73 Image 2"
        }
      ],
      "isFeatured": false,
      "isPublished": true,
      "sku": "Product-73-SKU"
    },
    {
      "name": "Product 74",
      "description": "Description of product 74.",
      "price": 3740,
      "discountPrice": 3640,
      "countInStock": 26,
      "category": "A",
      "brand": "Under Armour",
      "sizes": [
        "45",
        "44",
        "43",
        "42",
        "40",
        "39",
        "41"
      ],
      "colors": [
        "Green",
        "Yellow"
      ],
      "collections": [
        "Stock"
      ],
      "images": [
        {
          "url": "https://picsum.photos/500/500?random=74",
          "altText": "Product 74 Image 1"
        },
        {
          "url": "https://picsum.photos/500/500?random=75",
          "altText": "Product 74 Image 2"
        }
      ],
      "isFeatured": true,
      "isPublished": true,
      "sku": "Product-74-SKU"
    },
    {
      "name": "Product 75",
      "description": "Description of product 75.",
      "price": 3750,
      "discountPrice": 3650,
      "countInStock": 25,
      "category": "A",
      "brand": "New Balance",
      "sizes": [
        "45",
        "44",
        "43",
        "42",
        "40",
        "39",
        "41"
      ],
      "colors": [
        "Yellow",
        "Pink"
      ],
      "collections": [
        "Stock"
      ],
      "images": [
        {
          "url": "https://picsum.photos/500/500?random=75",
          "altText": "Product 75 Image 1"
        },
        {
          "url": "https://picsum.photos/500/500?random=76",
          "altText": "Product 75 Image 2"
        }
      ],
      "isFeatured": false,
      "isPublished": true,
      "sku": "Product-75-SKU"
    },
    {
      "name": "Product 76",
      "description": "Description of product 76.",
      "price": 3760,
      "discountPrice": 3660,
      "countInStock": 24,
      "category": "A",
      "brand": "Asics",
      "sizes": [
        "45",
        "44",
        "43",
        "42",
        "40",
        "39",
        "41"
      ],
      "colors": [
        "Pink",
        "Grey"
      ],
      "collections": [
        "Stock"
      ],
      "images": [
        {
          "url": "https://picsum.photos/500/500?random=76",
          "altText": "Product 76 Image 1"
        },
        {
          "url": "https://picsum.photos/500/500?random=77",
          "altText": "Product 76 Image 2"
        }
      ],
      "isFeatured": true,
      "isPublished": true,
      "sku": "Product-76-SKU"
    },
    {
      "name": "Product 77",
      "description": "Description of product 77.",
      "price": 3770,
      "discountPrice": 3670,
      "countInStock": 23,
      "category": "A",
      "brand": "Saucony",
      "sizes": [
        "45",
        "44",
        "43",
        "42",
        "40",
        "39",
        "41"
      ],
      "colors": [
        "Grey",
        "Orange"
      ],
      "collections": [
        "Stock"
      ],
      "images": [
        {
          "url": "https://picsum.photos/500/500?random=77",
          "altText": "Product 77 Image 1"
        },
        {
          "url": "https://picsum.photos/500/500?random=78",
          "altText": "Product 77 Image 2"
        }
      ],
      "isFeatured": false,
      "isPublished": true,
      "sku": "Product-77-SKU"
    },
    {
      "name": "Product 78",
      "description": "Description of product 78.",
      "price": 3780,
      "discountPrice": 3680,
      "countInStock": 22,
      "category": "A",
      "brand": "Fila",
      "sizes": [
        "45",
        "44",
        "43",
        "42",
        "40",
        "39",
        "41"
      ],
      "colors": [
        "Orange",
        "Purple"
      ],
      "collections": [
        "Stock"
      ],
      "images": [
        {
          "url": "https://picsum.photos/500/500?random=78",
          "altText": "Product 78 Image 1"
        },
        {
          "url": "https://picsum.photos/500/500?random=79",
          "altText": "Product 78 Image 2"
        }
      ],
      "isFeatured": true,
      "isPublished": true,
      "sku": "Product-78-SKU"
    },
    {
      "name": "Product 79",
      "description": "Description of product 79.",
      "price": 3790,
      "discountPrice": 3690,
      "countInStock": 21,
      "category": "A",
      "brand": "Skechers",
      "sizes": [
        "45",
        "44",
        "43",
        "42",
        "40",
        "39",
        "41"
      ],
      "colors": [
        "Purple",
        "Red"
      ],
      "collections": [
        "Stock"
      ],
      "images": [
        {
          "url": "https://picsum.photos/500/500?random=79",
          "altText": "Product 79 Image 1"
        },
        {
          "url": "https://picsum.photos/500/500?random=80",
          "altText": "Product 79 Image 2"
        }
      ],
      "isFeatured": false,
      "isPublished": true,
      "sku": "Product-79-SKU"
    },
    {
      "name": "Product 80",
      "description": "Description of product 80.",
      "price": 3800,
      "discountPrice": 3700,
      "countInStock": 20,
      "category": "A",
      "brand": "Nike",
      "sizes": [
        "45",
        "44",
        "43",
        "42",
        "40",
        "39",
        "41"
      ],
      "colors": [
        "Red",
        "Blue"
      ],
      "collections": [
        "Stock"
      ],
      "images": [
        {
          "url": "https://picsum.photos/500/500?random=80",
          "altText": "Product 80 Image 1"
        },
        {
          "url": "https://picsum.photos/500/500?random=81",
          "altText": "Product 80 Image 2"
        }
      ],
      "isFeatured": true,
      "isPublished": true,
      "sku": "Product-80-SKU"
    },
    {
      "name": "Product 81",
      "description": "Description of product 81.",
      "price": 3810,
      "discountPrice": 3710,
      "countInStock": 19,
      "category": "A",
      "brand": "Adidas",
      "sizes": [
        "45",
        "44",
        "43",
        "42",
        "40",
        "39",
        "41"
      ],
      "colors": [
        "Blue",
        "Black"
      ],
      "collections": [
        "Stock"
      ],
      "images": [
        {
          "url": "https://picsum.photos/500/500?random=81",
          "altText": "Product 81 Image 1"
        },
        {
          "url": "https://picsum.photos/500/500?random=82",
          "altText": "Product 81 Image 2"
        }
      ],
      "isFeatured": false,
      "isPublished": true,
      "sku": "Product-81-SKU"
    },
    {
      "name": "Product 82",
      "description": "Description of product 82.",
      "price": 3820,
      "discountPrice": 3720,
      "countInStock": 18,
      "category": "A",
      "brand": "Reebok",
      "sizes": [
        "45",
        "44",
        "43",
        "42",
        "40",
        "39",
        "41"
      ],
      "colors": [
        "Black",
        "White"
      ],
      "collections": [
        "Stock"
      ],
      "images": [
        {
          "url": "https://picsum.photos/500/500?random=82",
          "altText": "Product 82 Image 1"
        },
        {
          "url": "https://picsum.photos/500/500?random=83",
          "altText": "Product 82 Image 2"
        }
      ],
      "isFeatured": true,
      "isPublished": true,
      "sku": "Product-82-SKU"
    },
    {
      "name": "Product 83",
      "description": "Description of product 83.",
      "price": 3830,
      "discountPrice": 3730,
      "countInStock": 17,
      "category": "A",
      "brand": "Puma",
      "sizes": [
        "45",
        "44",
        "43",
        "42",
        "40",
        "39",
        "41"
      ],
      "colors": [
        "White",
        "Green"
      ],
      "collections": [
        "Stock"
      ],
      "images": [
        {
          "url": "https://picsum.photos/500/500?random=83",
          "altText": "Product 83 Image 1"
        },
        {
          "url": "https://picsum.photos/500/500?random=84",
          "altText": "Product 83 Image 2"
        }
      ],
      "isFeatured": false,
      "isPublished": true,
      "sku": "Product-83-SKU"
    },
    {
      "name": "Product 84",
      "description": "Description of product 84.",
      "price": 3840,
      "discountPrice": 3740,
      "countInStock": 16,
      "category": "A",
      "brand": "Under Armour",
      "sizes": [
        "45",
        "44",
        "43",
        "42",
        "40",
        "39",
        "41"
      ],
      "colors": [
        "Green",
        "Yellow"
      ],
      "collections": [
        "Stock"
      ],
      "images": [
        {
          "url": "https://picsum.photos/500/500?random=84",
          "altText": "Product 84 Image 1"
        },
        {
          "url": "https://picsum.photos/500/500?random=85",
          "altText": "Product 84 Image 2"
        }
      ],
      "isFeatured": true,
      "isPublished": true,
      "sku": "Product-84-SKU"
    },
    {
      "name": "Product 85",
      "description": "Description of product 85.",
      "price": 3850,
      "discountPrice": 3750,
      "countInStock": 15,
      "category": "A",
      "brand": "New Balance",
      "sizes": [
        "45",
        "44",
        "43",
        "42",
        "40",
        "39",
        "41"
      ],
      "colors": [
        "Yellow",
        "Pink"
      ],
      "collections": [
        "Stock"
      ],
      "images": [
        {
          "url": "https://picsum.photos/500/500?random=85",
          "altText": "Product 85 Image 1"
        },
        {
          "url": "https://picsum.photos/500/500?random=86",
          "altText": "Product 85 Image 2"
        }
      ],
      "isFeatured": false,
      "isPublished": true,
      "sku": "Product-85-SKU"
    },
    {
      "name": "Product 86",
      "description": "Description of product 86.",
      "price": 3860,
      "discountPrice": 3760,
      "countInStock": 14,
      "category": "A",
      "brand": "Asics",
      "sizes": [
        "45",
        "44",
        "43",
        "42",
        "40",
        "39",
        "41"
      ],
      "colors": [
        "Pink",
        "Grey"
      ],
      "collections": [
        "Stock"
      ],
      "images": [
        {
          "url": "https://picsum.photos/500/500?random=86",
          "altText": "Product 86 Image 1"
        },
        {
          "url": "https://picsum.photos/500/500?random=87",
          "altText": "Product 86 Image 2"
        }
      ],
      "isFeatured": true,
      "isPublished": true,
      "sku": "Product-86-SKU"
    },
    {
      "name": "Product 87",
      "description": "Description of product 87.",
      "price": 3870,
      "discountPrice": 3770,
      "countInStock": 13,
      "category": "A",
      "brand": "Saucony",
      "sizes": [
        "45",
        "44",
        "43",
        "42",
        "40",
        "39",
        "41"
      ],
      "colors": [
        "Grey",
        "Orange"
      ],
      "collections": [
        "Stock"
      ],
      "images": [
        {
          "url": "https://picsum.photos/500/500?random=87",
          "altText": "Product 87 Image 1"
        },
        {
          "url": "https://picsum.photos/500/500?random=88",
          "altText": "Product 87 Image 2"
        }
      ],
      "isFeatured": false,
      "isPublished": true,
      "sku": "Product-87-SKU"
    },
    {
      "name": "Product 88",
      "description": "Description of product 88.",
      "price": 3880,
      "discountPrice": 3780,
      "countInStock": 12,
      "category": "A",
      "brand": "Fila",
      "sizes": [
        "45",
        "44",
        "43",
        "42",
        "40",
        "39",
        "41"
      ],
      "colors": [
        "Orange",
        "Purple"
      ],
      "collections": [
        "Stock"
      ],
      "images": [
        {
          "url": "https://picsum.photos/500/500?random=88",
          "altText": "Product 88 Image 1"
        },
        {
          "url": "https://picsum.photos/500/500?random=89",
          "altText": "Product 88 Image 2"
        }
      ],
      "isFeatured": true,
      "isPublished": true,
      "sku": "Product-88-SKU"
    },
    {
      "name": "Product 89",
      "description": "Description of product 89.",
      "price": 3890,
      "discountPrice": 3790,
      "countInStock": 11,
      "category": "A",
      "brand": "Skechers",
      "sizes": [
        "45",
        "44",
        "43",
        "42",
        "40",
        "39",
        "41"
      ],
      "colors": [
        "Purple",
        "Red"
      ],
      "collections": [
        "Stock"
      ],
      "images": [
        {
          "url": "https://picsum.photos/500/500?random=89",
          "altText": "Product 89 Image 1"
        },
        {
          "url": "https://picsum.photos/500/500?random=90",
          "altText": "Product 89 Image 2"
        }
      ],
      "isFeatured": false,
      "isPublished": true,
      "sku": "Product-89-SKU"
    },
    {
      "name": "Product 90",
      "description": "Description of product 90.",
      "price": 3900,
      "discountPrice": 3800,
      "countInStock": 10,
      "category": "A",
      "brand": "Nike",
      "sizes": [
        "45",
        "44",
        "43",
        "42",
        "40",
        "39",
        "41"
      ],
      "colors": [
        "Red",
        "Blue"
      ],
      "collections": [
        "Stock"
      ],
      "images": [
        {
          "url": "https://picsum.photos/500/500?random=90",
          "altText": "Product 90 Image 1"
        },
        {
          "url": "https://picsum.photos/500/500?random=91",
          "altText": "Product 90 Image 2"
        }
      ],
      "isFeatured": true,
      "isPublished": true,
      "sku": "Product-90-SKU"
    },
    {
      "name": "Product 91",
      "description": "Description of product 91.",
      "price": 3910,
      "discountPrice": 3810,
      "countInStock": 9,
      "category": "A",
      "brand": "Adidas",
      "sizes": [
        "45",
        "44",
        "43",
        "42",
        "40",
        "39",
        "41"
      ],
      "colors": [
        "Blue",
        "Black"
      ],
      "collections": [
        "Stock"
      ],
      "images": [
        {
          "url": "https://picsum.photos/500/500?random=91",
          "altText": "Product 91 Image 1"
        },
        {
          "url": "https://picsum.photos/500/500?random=92",
          "altText": "Product 91 Image 2"
        }
      ],
      "isFeatured": false,
      "isPublished": true,
      "sku": "Product-91-SKU"
    },
    {
      "name": "Product 92",
      "description": "Description of product 92.",
      "price": 3920,
      "discountPrice": 3820,
      "countInStock": 8,
      "category": "A",
      "brand": "Reebok",
      "sizes": [
        "45",
        "44",
        "43",
        "42",
        "40",
        "39",
        "41"
      ],
      "colors": [
        "Black",
        "White"
      ],
      "collections": [
        "Stock"
      ],
      "images": [
        {
          "url": "https://picsum.photos/500/500?random=92",
          "altText": "Product 92 Image 1"
        },
        {
          "url": "https://picsum.photos/500/500?random=93",
          "altText": "Product 92 Image 2"
        }
      ],
      "isFeatured": true,
      "isPublished": true,
      "sku": "Product-92-SKU"
    },
    {
      "name": "Product 93",
      "description": "Description of product 93.",
      "price": 3930,
      "discountPrice": 3830,
      "countInStock": 7,
      "category": "A",
      "brand": "Puma",
      "sizes": [
        "45",
        "44",
        "43",
        "42",
        "40",
        "39",
        "41"
      ],
      "colors": [
        "White",
        "Green"
      ],
      "collections": [
        "Stock"
      ],
      "images": [
        {
          "url": "https://picsum.photos/500/500?random=93",
          "altText": "Product 93 Image 1"
        },
        {
          "url": "https://picsum.photos/500/500?random=94",
          "altText": "Product 93 Image 2"
        }
      ],
      "isFeatured": false,
      "isPublished": true,
      "sku": "Product-93-SKU"
    },
    {
      "name": "Product 94",
      "description": "Description of product 94.",
      "price": 3940,
      "discountPrice": 3840,
      "countInStock": 6,
      "category": "A",
      "brand": "Under Armour",
      "sizes": [
        "45",
        "44",
        "43",
        "42",
        "40",
        "39",
        "41"
      ],
      "colors": [
        "Green",
        "Yellow"
      ],
      "collections": [
        "Stock"
      ],
      "images": [
        {
          "url": "https://picsum.photos/500/500?random=94",
          "altText": "Product 94 Image 1"
        },
        {
          "url": "https://picsum.photos/500/500?random=95",
          "altText": "Product 94 Image 2"
        }
      ],
      "isFeatured": true,
      "isPublished": true,
      "sku": "Product-94-SKU"
    },
    {
      "name": "Product 95",
      "description": "Description of product 95.",
      "price": 3950,
      "discountPrice": 3850,
      "countInStock": 5,
      "category": "A",
      "brand": "New Balance",
      "sizes": [
        "45",
        "44",
        "43",
        "42",
        "40",
        "39",
        "41"
      ],
      "colors": [
        "Yellow",
        "Pink"
      ],
      "collections": [
        "Stock"
      ],
      "images": [
        {
          "url": "https://picsum.photos/500/500?random=95",
          "altText": "Product 95 Image 1"
        },
        {
          "url": "https://picsum.photos/500/500?random=96",
          "altText": "Product 95 Image 2"
        }
      ],
      "isFeatured": false,
      "isPublished": true,
      "sku": "Product-95-SKU"
    },
    {
      "name": "Product 96",
      "description": "Description of product 96.",
      "price": 3960,
      "discountPrice": 3860,
      "countInStock": 4,
      "category": "A",
      "brand": "Asics",
      "sizes": [
        "45",
        "44",
        "43",
        "42",
        "40",
        "39",
        "41"
      ],
      "colors": [
        "Pink",
        "Grey"
      ],
      "collections": [
        "Stock"
      ],
      "images": [
        {
          "url": "https://picsum.photos/500/500?random=96",
          "altText": "Product 96 Image 1"
        },
        {
          "url": "https://picsum.photos/500/500?random=97",
          "altText": "Product 96 Image 2"
        }
      ],
      "isFeatured": true,
      "isPublished": true,
      "sku": "Product-96-SKU"
    },
    {
      "name": "Product 97",
      "description": "Description of product 97.",
      "price": 3970,
      "discountPrice": 3870,
      "countInStock": 3,
      "category": "A",
      "brand": "Saucony",
      "sizes": [
        "45",
        "44",
        "43",
        "42",
        "40",
        "39",
        "41"
      ],
      "colors": [
        "Grey",
        "Orange"
      ],
      "collections": [
        "Stock"
      ],
      "images": [
        {
          "url": "https://picsum.photos/500/500?random=97",
          "altText": "Product 97 Image 1"
        },
        {
          "url": "https://picsum.photos/500/500?random=98",
          "altText": "Product 97 Image 2"
        }
      ],
      "isFeatured": false,
      "isPublished": true,
      "sku": "Product-97-SKU"
    },
    {
      "name": "Product 98",
      "description": "Description of product 98.",
      "price": 3980,
      "discountPrice": 3880,
      "countInStock": 2,
      "category": "A",
      "brand": "Fila",
      "sizes": [
        "45",
        "44",
        "43",
        "42",
        "40",
        "39",
        "41"
      ],
      "colors": [
        "Orange",
        "Purple"
      ],
      "collections": [
        "Stock"
      ],
      "images": [
        {
          "url": "https://picsum.photos/500/500?random=98",
          "altText": "Product 98 Image 1"
        },
        {
          "url": "https://picsum.photos/500/500?random=99",
          "altText": "Product 98 Image 2"
        }
      ],
      "isFeatured": true,
      "isPublished": true,
      "sku": "Product-98-SKU"
    },
    {
      "name": "Product 99",
      "description": "Description of product 99.",
      "price": 3990,
      "discountPrice": 3890,
      "countInStock": 1,
      "category": "A",
      "brand": "Skechers",
      "sizes": [
        "45",
        "44",
        "43",
        "42",
        "40",
        "39",
        "41"
      ],
      "colors": [
        "Purple",
        "Red"
      ],
      "collections": [
        "Stock"
      ],
      "images": [
        {
          "url": "https://picsum.photos/500/500?random=99",
          "altText": "Product 99 Image 1"
        },
        {
          "url": "https://picsum.photos/500/500?random=100",
          "altText": "Product 99 Image 2"
        }
      ],
      "isFeatured": false,
      "isPublished": true,
      "sku": "Product-99-SKU"
    },
    {
      "name": "Product 100",
      "description": "Description of product 100.",
      "price": 4000,
      "discountPrice": 3900,
      "countInStock": 0,
      "category": "A",
      "brand": "Nike",
      "sizes": [
        "45",
        "44",
        "43",
        "42",
        "40",
        "39",
        "41"
      ],
      "colors": [
        "Red",
        "Blue"
      ],
      "collections": [
        "Stock"
      ],
      "images": [
        {
          "url": "https://picsum.photos/500/500?random=100",
          "altText": "Product 100 Image 1"
        },
        {
          "url": "https://picsum.photos/500/500?random=101",
          "altText": "Product 100 Image 2"
        }
      ],
      "isFeatured": true,
      "isPublished": true,
      "sku": "Product-100-SKU"
    }
  ]
  export default products;