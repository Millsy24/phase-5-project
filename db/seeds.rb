Shoe.destroy_all

Shoe.reset_pk_sequence

  

Review.destroy_all

Review.reset_pk_sequence

  
  
  

s1 = Shoe.create(name: "Jordan AJ 1 Mid", brand: "Jordan", price: rand(100..250), size: rand(8..14), color: "Black and Red")

s1.image.attach(io: File.open('app/assets/Jordan AJ 1 Mid.webp'), filename: 'Jordan AJ 1 Mid.webp')

  

s2 = Shoe.create(name: "Jordan 6 Rings", brand: "Jordan", price: rand(100..250), size: rand(8..14), color: "Black and White")

s2.image.attach(io: File.open('app/assets/Jordan 6 Rings.webp'), filename: 'Jordan 6 Rings.webp')

  

s3 = Shoe.create(name: "Adidas Ultraboose 1.0", brand: "Adidas", price: rand(100..250), size: rand(8..14), color: "Purple")

s3.image.attach(io: File.open('app/assets/adidas ultraboost.webp'), filename: 'adidas ultraboost.webp')

  

s4 = Shoe.create(name: "Adidas SuperStar", brand: "Adidas", price: rand(100..250), size: rand(8..14), color: "White")

s4.image.attach(io: File.open('app/assets/superstar adidas.webp'), filename: 'superstar adidas.webp')

  

s5 = Shoe.create(name: "Nike Blazer Mid 77", brand: "Nike", price: rand(100..250), size: rand(8..14), color: "Orange")

s5.image.attach(io: File.open('app/assets/Nike Blazer Mid 77.webp'), filename: 'Nike Blazer Mid 77.webp')

  

s6 = Shoe.create(name: "Nike PG 6", brand: "Nike", price: rand(100..250), size: rand(8..14), color: "White")

s6.image.attach(io: File.open('app/assets/Nike PG 6.webp'), filename: 'Nike PG 6.webp')

  

s7 = Shoe.create(name: "PUMA Suede Classic", brand: "PUMA", price: rand(100..250), size: rand(8..14), color: "Yellow")

s7.image.attach(io: File.open('app/assets/PUMA Suede Classic.webp'), filename: 'PUMA Suede Classic.webp')

  

s8 = Shoe.create(name: "PUMA G-Tag Suede", brand: "PUMA", price: rand(100..250), size: rand(8..14), color: "Red and Yellow")

s8.image.attach(io: File.open('app/assets/PUMA G-Tag Suede.webp'), filename: 'PUMA G-Tag Suede.webp')

  

s9 = Shoe.create(name: "New Balance 990v5", brand: "New Balance", price: rand(100..250), size: rand(8..14), color: "Black")

s9.image.attach(io: File.open('app/assets/New Balance 990v5.webp'), filename: 'New Balance 990v5.webp')

  

s10 = Shoe.create(name: "New Balance 327", brand: "New Balance", price: rand(100..250), size: rand(8..14), color: "Blue")

s10.image.attach(io: File.open('app/assets/New Balance 327.webp'), filename: 'New Balance 327.webp')

  

u1 = User.create(name: "Lukas", email: "lukas@gmail.com", password: "lukas", dob: "12/29/2000", phone: "999-999-9999")

  

r1 = Review.create(rating: 4, content: "This shoe fits great, but gave me blisters the first time I got them", user_id: User.ids.sample, shoe_id: Shoe.ids.sample)