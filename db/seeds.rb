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

s11 = Shoe.create(name: "Jordan Fight Club '91", brand: "Jordan", price: rand(100..250), size: rand(8..14), color: "Black")

s11.image.attach(io: File.open('app/assets/Jordan FightClub 91.webp'), filename: 'Jordan FightClub 91.webp')

s12 = Shoe.create(name: "Nike Air Force 1 07 LE", brand: "Nike", price: rand(100..250), size: rand(8..14), color: "White")

s12.image.attach(io: File.open('app/assets/Nike Air Force 1 07 LE.webp'), filename: 'Nike Air Force 1 07 LE.webp')

s13 = Shoe.create(name: "Jordan Air Jordan XXXVI Low", brand: "Jordan", price: rand(100..250), size: rand(8..14), color: "White")

s13.image.attach(io: File.open('app/assets/Jordan Air Jordan XXXVI Low.webp'), filename: 'Jordan Air Jordan XXXVI Low.webp')

s14 = Shoe.create(name: "Nike Air Force 1", brand: "Nike", price: rand(100..250), size: rand(8..14), color: "Red")

s14.image.attach(io: File.open('app/assets/Nike Air Force 1.webp'), filename: 'Nike Air Force 1.webp')

s15 = Shoe.create(name: "Reebok Shaq Attaq", brand: "Reebok", price: rand(100..250), size: rand(8..14), color: "White and Blue")

s15.image.attach(io: File.open('app/assets/Reebok Shaq Attaq.webp'), filename: 'Reebok Shaq Attaq.webp')

s16 = Shoe.create(name: "Jordan AJ 11 Low CMFT", brand: "Jordan", price: rand(100..250), size: rand(8..14), color: "Black and Red")

s16.image.attach(io: File.open('app/assets/Jordan AJ 11 Low CMFT.webp'), filename: 'Jordan AJ 11 Low CMFT.webp')

s17 = Shoe.create(name: "Adidas Top Ten", brand: "Adidas", price: rand(100..250), size: rand(8..14), color: "Green")

s17.image.attach(io: File.open('app/assets/Adidas Top Ten.webp'), filename: 'Adidas Top Ten.webp')

s18 = Shoe.create(name: "PUMA RS-X Rick & Morty", brand: "PUMA", price: rand(100..250), size: rand(8..14), color: "Yellow and Green")

s18.image.attach(io: File.open('app/assets/PUMA RS-X Rick and Morty.webp'), filename: 'PUMA RS-X Rick and Morty.webp')

s19 = Shoe.create(name: "Under Armour Curry 9 Street", brand: "Under Armour", price: rand(100..250), size: rand(8..14), color: "Red")

s19.image.attach(io: File.open('app/assets/Under Armour Curry 9.webp'), filename: 'Under Armour Curry 9.webp')

s20 = Shoe.create(name: "Under Armour Curry 1 Retro", brand: "Under Armour", price: rand(100..250), size: rand(8..14), color: "Black and Gold")

s20.image.attach(io: File.open('app/assets/Under Armour Curry 1 Retro.webp'), filename: 'Under Armour Curry 1 Retro.webp')

s21 = Shoe.create(name: "Jordan 6-17-23", brand: "Jordan", price: rand(100..250), size: rand(8..14), color: "Black and Red")

s21.image.attach(io: File.open('app/assets/Jordan 6-17-23.webp'), filename: 'Jordan 6-17-23.webp')

s22 = Shoe.create(name: "Nike LeBron XIX", brand: "Nike", price: rand(100..250), size: rand(8..14), color: "Black")

s22.image.attach(io: File.open('app/assets/Nike LeBron XIX.webp'), filename: 'Nike LeBron XIX.webp')

s23 = Shoe.create(name: "Nike KD 15", brand: "Nike", price: rand(100..250), size: rand(8..14), color: "Black")

s23.image.attach(io: File.open('app/assets/Nike KD 15.webp'), filename: 'Nike KD 15.webp')

s24 = Shoe.create(name: "Vans Sk8 Hi", brand: "Vans", price: rand(100..250), size: rand(8..14), color: "White")

s24.image.attach(io: File.open('app/assets/Vans Sk8 Hi.webp'), filename: 'Vans Sk8 Hi.webp')

s25 = Shoe.create(name: "Nike Air Flight Lite Mid", brand: "Nike", price: rand(100..250), size: rand(8..14), color: "Teal")

s25.image.attach(io: File.open('app/assets/Nike Air Flight Lite Mid.webp'), filename: 'Nike Air Flight Lite Mid.webp')

s26 = Shoe.create(name: "PUMA SUEDE Batman", brand: "PUMA", price: rand(100..250), size: rand(8..14), color: "Black and Red")

s26.image.attach(io: File.open('app/assets/PUMA SUEDE Batman.webp'), filename: 'PUMA SUEDE Batman.webp')

s27 = Shoe.create(name: "New Balance 550", brand: "New Balance", price: rand(100..250), size: rand(8..14), color: "White")

s27.image.attach(io: File.open('app/assets/New Balance 550.webp'), filename: 'New Balance 550.webp')

s29 = Shoe.create(name: "New Balance Two Wxy", brand: "New Balance", price: rand(100..250), size: rand(8..14), color: "Blue and Pink")

s29.image.attach(io: File.open('app/assets/New Balance Two Wxy.webp'), filename: 'New Balance Two Wxy.webp')

s30 = Shoe.create(name: "Reebok Pump Omni Zone II", brand: "Reebok", price: rand(100..250), size: rand(8..14), color: "Red and Gold")

s30.image.attach(io: File.open('app/assets/Reebok Pump Omni Zone II.webp'), filename: 'Reebok Pump Omni Zone II.webp')





  

u1 = User.create(name: "Lukas", email: "lukas@gmail.com", password: "password", dob: "05/12/2000", phone: "9999999999")
u2 = User.create(name: "Mikayla", email: "mikayla@gmail.com", password: "mikayla", dob: "07/29/2000", phone: "9999999999")
u3 = User.create(name: "Atlas", email: "atlas@gmail.com", password: "atlas2017", dob: "12/29/2000", phone: "9999999999")
u4 = User.create(name: "Paris", email: "paris@gmail.com", password: "paris2017", dob: "12/29/2000", phone: "9999999999")
u5 = User.create(name: "Victor", email: "victor@gmail.com", password: "victor2017", dob: "12/29/2000", phone: "9999999999")

  

r1 = Review.create(rating: 2, content: "I ordered these online for my daughter, when we received them the color was not like the picture. These are really bright, like a orange neon. We had never seen these in person but didn’t expect them to be this color. They are definitely brighter in person than this stock photo.", user_id: User.ids.sample, shoe_id: s1.id)
r2 = Review.create(rating: 4, content: "Very bright crimson! Overall a cute n comfortable shoe :)", user_id: User.ids.sample, shoe_id: s1.id)
r3 = Review.create(rating: 5, content: "i love these shoes they are amazing , stylish and h can pretty much wear anything with them! i got size 6.5", user_id: User.ids.sample, shoe_id: s1.id)
r4 = Review.create(rating: 5, content: "These are my first pair of women Nike dunks and they are true to size I’m so Happy that I was able to purchase these because every where I go they are sold out so a Big Shout Out too Footlocker for having them in stock… Thank You!!!!", user_id: User.ids.sample, shoe_id: s1.id)
r5 = Review.create(rating: 4, content: "I bought this item about a 1 week ago and I gotta say there quite nice looking but they creased in just a day and the material is quite soft. the pair I have must have had a machine error cause the bottom of the shoes paint and coloring was a little off but I don’t care it’s just the botttom. But overall I love the shoes and I do like the look and the comfort of the shoe and it was at a reasonable price. picture of the paint error at the bottom of shoe and overall shoe look picture below", user_id: User.ids.sample, shoe_id: s2.id)
r6 = Review.create(rating: 3, content: "I bought this yesterday at foot locker. I paid full price, was excited on my way home. But then I realized this was a used shoes. There were minimal dirt on one shoe and few scractches.", user_id: User.ids.sample, shoe_id: s2.id)
r7 = Review.create(rating: 4, content: "I just got my pair of these shoes and I only bought it because of the beautiful colors (mainly the tar heel blue) but the light blue color looks so much darker in person the picture makes it look like really light blue but in person it's a darker shade", user_id: User.ids.sample, shoe_id: s2.id)
r8 = Review.create(rating: 1, content: "Inside the shoe there is a crease that sits at the top of your foot and makes an indention cutting off circulation. I’ve compared to previous adidas shows I purchased in the past and never had this issue. I’d love to return them if possible", user_id: User.ids.sample, shoe_id: s3.id)
r9 = Review.create(rating: 1, content: "Bought these shoes a few weeks ago and only wore them 3 times. The inside tongue of the shoe has a seam that digs into the top of your foot causing you foot to hurt. I can't return them so 190.00 down the drain. The worse shoe I ever bought.", user_id: User.ids.sample, shoe_id: s3.id)
r10 = Review.create(rating: 5, content: "On par with the rest of Ultraboost, can’t go wrong", user_id: User.ids.sample, shoe_id: s3.id)
r11 = Review.create(rating: 1, content: "When I received my order the box of the shoes was broken! Looks like old!yeah it was very old. And the shoes was not good at all there's some faded and strached. I'll give this product 0 out of 10!", user_id: User.ids.sample, shoe_id: s4.id)
r11 = Review.create(rating: 5, content: "You can never go wrong in the adidas originals superstar white/white", user_id: User.ids.sample, shoe_id: s4.id)
r12 = Review.create(rating: 3, content: "I've worn the Superstar brand shoe since the early 70's when they first came to market. I've always liked the classic look and feel. Hence, I was more than dismayed when they changed the look from the arched sole to the current flat sole. BRING BACK THE ARCHED SOLE - my last pair is about worn out and I refuse to buy the flat sole!", user_id: User.ids.sample, shoe_id: s4.id)
r13 = Review.create(rating: 5, content: "They fit true to size and are so versatile – they go with almost every outfit. Not super high on the comfort scale as they're not made to be running shoes, but totally bearable for casual walking throughout the day. If you've seen review videos online, yes they are a little difficult to put on at first but I relaced them and they were much easier to put on. They get easier to put on over time. Highly recommend if you're looking for a good staple shoe to have in your closet that you can pair with a wide range of outfits. Shipping took six days but I live in Hawaii so it's probably faster elsewhere!", user_id: User.ids.sample, shoe_id: s5.id)
r14 = Review.create(rating: 5, content: "I love em and I bought from Klarna that’s blessing on top of blessing.", user_id: User.ids.sample, shoe_id: s5.id)
r15 = Review.create(rating: 4, content: "I wear a 8.5 and couldn’t put this 8.5 on my foot. Had to return for a larger pair.", user_id: User.ids.sample, shoe_id: s5.id)
r16 = Review.create(rating: 5, content: "I have these shoes. They are light and flexible with lots of cushion.", user_id: User.ids.sample, shoe_id: s6.id)
r17 = Review.create(rating: 5, content: "Great Shoes!", user_id: User.ids.sample, shoe_id: s6.id)
r18 = Review.create(rating: 3, content: "These are not the best shoes that money could buy, but they work.", user_id: User.ids.sample, shoe_id: s6.id)
r19 = Review.create(rating: 5, content: "Nice quality product. I'm ver satisfied. Very stylish and artistic.", user_id: User.ids.sample, shoe_id: s7.id)
r20 = Review.create(rating: 2, content: "Actual color is lighter than the image", user_id: User.ids.sample, shoe_id: s7.id)
r21 = Review.create(rating: 2, content: "Haven't worn Pumas in years, but was pretty excited to buy a new pair. But these are too narrow, the heel slipped, and they're fairly clunky. The minute I put them on I knew they were going straight back in the box, sadly. I wear an 8.5, doesn't seem like going up or down a half size will help. Just FYI.", user_id: User.ids.sample, shoe_id: s7.id)
r22 = Review.create(rating: 1, content: "After ONE wear the yellow Sole started peeling and leaving yellow latex paint on the carpet by the end the sole was white and the peeling begin to extend up the side of the sole.", user_id: User.ids.sample, shoe_id: s8.id)
r23 = Review.create(rating: 5, content: "These colors are so cool, and they fit great!", user_id: User.ids.sample, shoe_id: s8.id)
r24 = Review.create(rating: 5, content: "Gonna buy these again when they get worn out!", user_id: User.ids.sample, shoe_id: s8.id)
r25 = Review.create(rating: 5, content: "This sneaker is made with the highest quality matierials money can buy, nothing on this sneaker feels cheap you get what you pay for here, it is my new go to sneaker and I will highly recommend this sneaker to anyone for lifestyle day to day as well as running do not sleep on new balance !!!!!!!!", user_id: User.ids.sample, shoe_id: s9.id)
r26 = Review.create(rating: 5, content: "Man I jus get flyer and flyer wit every pair I buy! No bull", user_id: User.ids.sample, shoe_id: s9.id)
r27 = Review.create(rating: 3, content: "I bought these 2 weeks ago and i don’t like them like that cause it came with marks on it and stuff", user_id: User.ids.sample, shoe_id: s9.id)
r28 = Review.create(rating: 1, content: "These shoes were returned and soon as they arrived. I wasn't a fan of New Balance but bought these because I liked the neutral colors. That was my mistake. The materials used to make these shoes are very cheap. The shoes arrived all bent out of shape and putting my foot in them didn't help at all. New Balance doesn't have to worry about me ever again.", user_id: User.ids.sample, shoe_id: s10.id)
r29 = Review.create(rating: 4, content: "The 327 is my favorite NB but they do run big. I usually get a 7 in kids, I got a 6 1/2 this time and I still have a little room.", user_id: User.ids.sample, shoe_id: s10.id)
r30 = Review.create(rating: 2, content: "I bought these new balances to use for work, they are uncomfortable and not meant to be worn or walked in for long periods of time.", user_id: User.ids.sample, shoe_id: s10.id)
r31 = Review.create(rating: 5, content: "Soft, can match with red, peach and pink. Great for summers.", user_id: User.ids.sample, shoe_id: s11.id)
r32 = Review.create(rating: 3, content: "Don’t really care for the color now that I have them it was attractive when I was shopping but now I barely wear these", user_id: User.ids.sample, shoe_id: s11.id)
r33 = Review.create(rating: 3, content: "This shoe looks lovely, fits well and is comfortable but I think it is badly designed. I have caught the holes twice so far and (not Nike’s fault, or was it?!) and once fell flat on my face. I caught them again at the gym…They are also very slippy in the wet. I’m not saying don’t buy them but please be aware and a little bit careful.", user_id: User.ids.sample, shoe_id: s11.id)
r34 = Review.create(rating: 5, content: "I love this shoe, it's very iconic and very popular amongst the younger generation. the sizing of the shoe is perfect I didn't need to size up. stylish comfy and bold. just make sure u get a shoe protectant spray, and spray them before u wear them cuz u don't want them to get dirty on ur first try. other then that its amazing.", user_id: User.ids.sample, shoe_id: s12.id)
r35 = Review.create(rating: 4, content: "I got these for a lil gift for my man after he got good news at work", user_id: User.ids.sample, shoe_id: s12.id)
r36 = Review.create(rating: 4, content: "whats the difference between this shoe and the normal ones?", user_id: User.ids.sample, shoe_id: s13.id)
r37 = Review.create(rating: rand(1..5), content: "This shoe fits great, but gave me blisters the first time I got them", user_id: User.ids.sample, shoe_id: s13.id)
r38 = Review.create(rating: rand(1..5), content: "This shoe fits great, but gave me blisters the first time I got them", user_id: User.ids.sample, shoe_id: s14.id)
r39 = Review.create(rating: rand(1..5), content: "This shoe fits great, but gave me blisters the first time I got them", user_id: User.ids.sample, shoe_id: s14.id)
r40 = Review.create(rating: rand(1..5), content: "This shoe fits great, but gave me blisters the first time I got them", user_id: User.ids.sample, shoe_id: s15.id)
r41 = Review.create(rating: rand(1..5), content: "This shoe fits great, but gave me blisters the first time I got them", user_id: User.ids.sample, shoe_id: s15.id)
r42 = Review.create(rating: rand(1..5), content: "This shoe fits great, but gave me blisters the first time I got them", user_id: User.ids.sample, shoe_id: s16.id)
r43 = Review.create(rating: rand(1..5), content: "This shoe fits great, but gave me blisters the first time I got them", user_id: User.ids.sample, shoe_id: s16.id)
r44 = Review.create(rating: rand(1..5), content: "This shoe fits great, but gave me blisters the first time I got them", user_id: User.ids.sample, shoe_id: s17.id)
r45 = Review.create(rating: rand(1..5), content: "This shoe fits great, but gave me blisters the first time I got them", user_id: User.ids.sample, shoe_id: s17.id)
r46 = Review.create(rating: rand(1..5), content: "This shoe fits great, but gave me blisters the first time I got them", user_id: User.ids.sample, shoe_id: s18.id)
r47 = Review.create(rating: rand(1..5), content: "This shoe fits great, but gave me blisters the first time I got them", user_id: User.ids.sample, shoe_id: s18.id)
r48 = Review.create(rating: rand(1..5), content: "This shoe fits great, but gave me blisters the first time I got them", user_id: User.ids.sample, shoe_id: s19.id)
r49 = Review.create(rating: rand(1..5), content: "This shoe fits great, but gave me blisters the first time I got them", user_id: User.ids.sample, shoe_id: s19.id)
r50 = Review.create(rating: rand(1..5), content: "This shoe fits great, but gave me blisters the first time I got them", user_id: User.ids.sample, shoe_id: s20.id)
r51 = Review.create(rating: rand(1..5), content: "This shoe fits great, but gave me blisters the first time I got them", user_id: User.ids.sample, shoe_id: s20.id)
r52 = Review.create(rating: rand(1..5), content: "This shoe fits great, but gave me blisters the first time I got them", user_id: User.ids.sample, shoe_id: s21.id)
r53 = Review.create(rating: rand(1..5), content: "This shoe fits great, but gave me blisters the first time I got them", user_id: User.ids.sample, shoe_id: s21.id)
r54 = Review.create(rating: rand(1..5), content: "This shoe fits great, but gave me blisters the first time I got them", user_id: User.ids.sample, shoe_id: s22.id)
r55 = Review.create(rating: rand(1..5), content: "This shoe fits great, but gave me blisters the first time I got them", user_id: User.ids.sample, shoe_id: s22.id)
r56 = Review.create(rating: rand(1..5), content: "This shoe fits great, but gave me blisters the first time I got them", user_id: User.ids.sample, shoe_id: s23.id)
r57 = Review.create(rating: rand(1..5), content: "This shoe fits great, but gave me blisters the first time I got them", user_id: User.ids.sample, shoe_id: s23.id)
r58 = Review.create(rating: rand(1..5), content: "This shoe fits great, but gave me blisters the first time I got them", user_id: User.ids.sample, shoe_id: s24.id)
r59 = Review.create(rating: rand(1..5), content: "This shoe fits great, but gave me blisters the first time I got them", user_id: User.ids.sample, shoe_id: s24.id)
r60 = Review.create(rating: rand(1..5), content: "This shoe fits great, but gave me blisters the first time I got them", user_id: User.ids.sample, shoe_id: s25.id)
r61 = Review.create(rating: rand(1..5), content: "This shoe fits great, but gave me blisters the first time I got them", user_id: User.ids.sample, shoe_id: s25.id)
r62 = Review.create(rating: rand(1..5), content: "This shoe fits great, but gave me blisters the first time I got them", user_id: User.ids.sample, shoe_id: s26.id)
r63 = Review.create(rating: rand(1..5), content: "This shoe fits great, but gave me blisters the first time I got them", user_id: User.ids.sample, shoe_id: s26.id)
r64 = Review.create(rating: rand(1..5), content: "This shoe fits great, but gave me blisters the first time I got them", user_id: User.ids.sample, shoe_id: s27.id)
r65 = Review.create(rating: rand(1..5), content: "This shoe fits great, but gave me blisters the first time I got them", user_id: User.ids.sample, shoe_id: s27.id)

r68 = Review.create(rating: rand(1..5), content: "This shoe fits great, but gave me blisters the first time I got them", user_id: User.ids.sample, shoe_id: s29.id)
r69 = Review.create(rating: rand(1..5), content: "This shoe fits great, but gave me blisters the first time I got them", user_id: User.ids.sample, shoe_id: s29.id)
r70 = Review.create(rating: rand(1..5), content: "This shoe fits great, but gave me blisters the first time I got them", user_id: User.ids.sample, shoe_id: s30.id)
r71 = Review.create(rating: rand(1..5), content: "This shoe fits great, but gave me blisters the first time I got them", user_id: User.ids.sample, shoe_id: s30.id)