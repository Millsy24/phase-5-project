Shoe.destroy_all
Shoe.reset_pk_sequence

Review.destroy_all
Review.reset_pk_sequence



s1 = Shoe.create(name: "My Shoe", brand: "Jordan", price: 130, size: 10)
s1.image.attach(io: File.open('app/assets/shoe.webp'), filename: 'shoe.webp')

u1 = User.create(name: "Lukas", email: "lukas@gmail.com", password: "lukas", dob: "12/29/2000", phone: "999-999-9999")

r1 = Review.create(rating: 4, content: "This shoe fits great, but gave me blisters the first time I got them", user_id: User.ids.sample, shoe_id: Shoe.ids.sample)
