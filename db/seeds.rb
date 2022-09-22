s1 = Shoe.create(name: "My Shoe", brand: "Jordan", price: 130, size: 10)
Shoe.first.image.attach(io: File.open('app/assets/shoe.webp'), filename: 'shoe.webp')
