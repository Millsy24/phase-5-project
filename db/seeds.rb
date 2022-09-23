Shoe.destroy_all
Shoe.reset_pk_sequence



s1 = Shoe.create(name: "My Shoe", brand: "Jordan", price: 130, size: 10)
s1.image.attach(io: File.open('app/assets/shoe.webp'), filename: 'shoe.webp')
