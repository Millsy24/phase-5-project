Shoe.destroy_all

Shoe.reset_pk_sequence

User.destroy_all

User.reset_pk_sequence

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

  

u1 = User.create(name: "Lukas", email: "lukas@gmail.com", password: "lukas", dob: "05/12/2000", phone: "999-999-9999")
u2 = User.create(name: "Mikayla", email: "mikayla@gmail.com", password: "mikayla", dob: "07/29/2000", phone: "999-999-9999")
u3 = User.create(name: "Atlas", email: "atlas@gmail.com", password: "atlas", dob: "12/29/2000", phone: "999-999-9999")
u4 = User.create(name: "Paris", email: "paris@gmail.com", password: "paris", dob: "12/29/2000", phone: "999-999-9999")
u5 = User.create(name: "J cole", email: "j.cole@gmail.com", password: "jcole", dob: "12/29/2000", phone: "999-999-9999")

  

r1 = Review.create(rating: 4, content: "This shoe fits great, but gave me blisters the first time I got them", user_id: User.ids.sample, shoe_id: Shoe.ids.sample)
r2 = Review.create(rating: 4, content: "This shoe fits great, but gave me blisters the first time I got them", user_id: User.ids.sample, shoe_id: Shoe.ids.sample)
r3 = Review.create(rating: 4, content: "This shoe fits great, but gave me blisters the first time I got them", user_id: User.ids.sample, shoe_id: Shoe.ids.sample)
r4 = Review.create(rating: 4, content: "This shoe fits great, but gave me blisters the first time I got them", user_id: User.ids.sample, shoe_id: Shoe.ids.sample)
r5 = Review.create(rating: 4, content: "This shoe fits great, but gave me blisters the first time I got them", user_id: User.ids.sample, shoe_id: Shoe.ids.sample)
r6 = Review.create(rating: 4, content: "This shoe fits great, but gave me blisters the first time I got them", user_id: User.ids.sample, shoe_id: Shoe.ids.sample)
r7 = Review.create(rating: 4, content: "This shoe fits great, but gave me blisters the first time I got them", user_id: User.ids.sample, shoe_id: Shoe.ids.sample)
r8 = Review.create(rating: 4, content: "This shoe fits great, but gave me blisters the first time I got them", user_id: User.ids.sample, shoe_id: Shoe.ids.sample)
r9 = Review.create(rating: 4, content: "This shoe fits great, but gave me blisters the first time I got them", user_id: User.ids.sample, shoe_id: Shoe.ids.sample)
r10 = Review.create(rating: 4, content: "This shoe fits great, but gave me blisters the first time I got them", user_id: User.ids.sample, shoe_id: Shoe.ids.sample)
r11 = Review.create(rating: 4, content: "This shoe fits great, but gave me blisters the first time I got them", user_id: User.ids.sample, shoe_id: Shoe.ids.sample)
r12 = Review.create(rating: 4, content: "This shoe fits great, but gave me blisters the first time I got them", user_id: User.ids.sample, shoe_id: Shoe.ids.sample)
r13 = Review.create(rating: 4, content: "This shoe fits great, but gave me blisters the first time I got them", user_id: User.ids.sample, shoe_id: Shoe.ids.sample)
r14 = Review.create(rating: 4, content: "This shoe fits great, but gave me blisters the first time I got them", user_id: User.ids.sample, shoe_id: Shoe.ids.sample)
r15 = Review.create(rating: 4, content: "This shoe fits great, but gave me blisters the first time I got them", user_id: User.ids.sample, shoe_id: Shoe.ids.sample)
r16 = Review.create(rating: 4, content: "This shoe fits great, but gave me blisters the first time I got them", user_id: User.ids.sample, shoe_id: Shoe.ids.sample)
r17 = Review.create(rating: 4, content: "This shoe fits great, but gave me blisters the first time I got them", user_id: User.ids.sample, shoe_id: Shoe.ids.sample)
r18 = Review.create(rating: 4, content: "This shoe fits great, but gave me blisters the first time I got them", user_id: User.ids.sample, shoe_id: Shoe.ids.sample)
r19 = Review.create(rating: 4, content: "This shoe fits great, but gave me blisters the first time I got them", user_id: User.ids.sample, shoe_id: Shoe.ids.sample)
r20 = Review.create(rating: 4, content: "This shoe fits great, but gave me blisters the first time I got them", user_id: User.ids.sample, shoe_id: Shoe.ids.sample)
r21 = Review.create(rating: 4, content: "This shoe fits great, but gave me blisters the first time I got them", user_id: User.ids.sample, shoe_id: Shoe.ids.sample)
r22 = Review.create(rating: 4, content: "This shoe fits great, but gave me blisters the first time I got them", user_id: User.ids.sample, shoe_id: Shoe.ids.sample)
r23 = Review.create(rating: 4, content: "This shoe fits great, but gave me blisters the first time I got them", user_id: User.ids.sample, shoe_id: Shoe.ids.sample)
r24 = Review.create(rating: 4, content: "This shoe fits great, but gave me blisters the first time I got them", user_id: User.ids.sample, shoe_id: Shoe.ids.sample)
r25 = Review.create(rating: 4, content: "This shoe fits great, but gave me blisters the first time I got them", user_id: User.ids.sample, shoe_id: Shoe.ids.sample)
r26 = Review.create(rating: 4, content: "This shoe fits great, but gave me blisters the first time I got them", user_id: User.ids.sample, shoe_id: Shoe.ids.sample)
r27 = Review.create(rating: 4, content: "This shoe fits great, but gave me blisters the first time I got them", user_id: User.ids.sample, shoe_id: Shoe.ids.sample)
r28 = Review.create(rating: 4, content: "This shoe fits great, but gave me blisters the first time I got them", user_id: User.ids.sample, shoe_id: Shoe.ids.sample)
r29 = Review.create(rating: 4, content: "This shoe fits great, but gave me blisters the first time I got them", user_id: User.ids.sample, shoe_id: Shoe.ids.sample)
r30 = Review.create(rating: 4, content: "This shoe fits great, but gave me blisters the first time I got them", user_id: User.ids.sample, shoe_id: Shoe.ids.sample)
r31 = Review.create(rating: 4, content: "This shoe fits great, but gave me blisters the first time I got them", user_id: User.ids.sample, shoe_id: Shoe.ids.sample)
r32 = Review.create(rating: 4, content: "This shoe fits great, but gave me blisters the first time I got them", user_id: User.ids.sample, shoe_id: Shoe.ids.sample)
r33 = Review.create(rating: 4, content: "This shoe fits great, but gave me blisters the first time I got them", user_id: User.ids.sample, shoe_id: Shoe.ids.sample)
r34 = Review.create(rating: 4, content: "This shoe fits great, but gave me blisters the first time I got them", user_id: User.ids.sample, shoe_id: Shoe.ids.sample)
r35 = Review.create(rating: 4, content: "This shoe fits great, but gave me blisters the first time I got them", user_id: User.ids.sample, shoe_id: Shoe.ids.sample)
r36 = Review.create(rating: 4, content: "This shoe fits great, but gave me blisters the first time I got them", user_id: User.ids.sample, shoe_id: Shoe.ids.sample)
r37 = Review.create(rating: 4, content: "This shoe fits great, but gave me blisters the first time I got them", user_id: User.ids.sample, shoe_id: Shoe.ids.sample)
r38 = Review.create(rating: 4, content: "This shoe fits great, but gave me blisters the first time I got them", user_id: User.ids.sample, shoe_id: Shoe.ids.sample)
r39 = Review.create(rating: 4, content: "This shoe fits great, but gave me blisters the first time I got them", user_id: User.ids.sample, shoe_id: Shoe.ids.sample)
