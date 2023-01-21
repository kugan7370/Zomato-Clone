// array of 10 food details details

const foodDetails = [
    {
        "name": "Burger",
        "price": 10,
        "description": "A hamburger is a sandwich consisting of one or more cooked patties of ground meat, usually beef, placed inside a sliced bread roll or bun. The patty may be pan fried, barbecued, or flame broiled. Hamburgers are often served with cheese, lettuce, tomato, onion, pickles, bacon, or chiles. A hamburger topped with cheese is called a cheeseburger. Hamburgers are often served with french fries, potato chips, or onion rings. A hamburger with no bread is called a burger.",
        "image": "https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YnVyZ2VyfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
        "isPopular": true,
        "isVeg": false,
        "isAvailable": true,
        "category": "Fast Food",
        "rating": 4.5,
        "reviews": 1000,
        "deliveryTime": 30,
    },
    {
        "name": "Pizza",
        "price": 20,
        "description": "Pizza is a savory dish of Italian origin consisting of a usually round, flattened base of leavened wheat-based dough topped with tomatoes, cheese, and often various other ingredients (anchovies, olives, meat, etc.) baked at a high temperature, traditionally in a wood-fired oven. A small pizza is sometimes called a pizzetta. A person who makes pizza is known as a pizzaiolo. The term pizza was first recorded in the 10th century in a Latin manuscript from the Southern Italian town of Gaeta in Lazio, on the border with Campania. Modern pizza was invented in Naples, and the dish and its variants have since become popular in many countries.",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeoDlsif-r2OdCDzoAk-I2a7s5o1QsnS3ZzhFZoAQqMA&s",
        "isPopular": true,
        "isVeg": false,
        "isAvailable": true,
        "category": "Fast Food",
        "rating": 4.5,
        "reviews": 1000,
        "deliveryTime": 20,
    },
    {
        "name": "Pasta",
        "price": 15,
        "description": "Pasta is a staple food of traditional Italian cuisine, with the first reference dating to 1154 in Sicily. It is also commonly used to refer to the variety of pasta dishes. Pasta is typically made from an unleavened dough of a durum wheat flour mixed with water or eggs, and formed into sheets or various shapes, then cooked by boiling or baking. Pasta is a popular food in Italy and has become popular in many countries. It is also commonly consumed in the form of pasta salad.",
        "image": "https://thumbs.dreamstime.com/b/penne-pasta-plate-tomato-sauce-30685904.jpg",
        "isPopular": true,
        "isVeg": false,
        "isAvailable": true,
        "category": "desert",
        "rating": 4.0,
        "reviews": 1000,
        "deliveryTime": 25,
    },
    {
        "name": "Sandwich",
        "price": 10,
        "description": "A sandwich is a food typically consisting of vegetables, sliced cheese or meat, placed on or between slices of bread, or more generally any dish wherein bread serves as a container or wrapper for another food type. The sandwich began as a portable finger food in the Western world, though over time it has evolved into a dish that is eaten with a knife and fork. The bread is sometimes buttered and/or toasted. The sandwich is a common form of lunch food, taken to picnics, and for school and work lunches. It is also a common fast food, sold in restaurants and snack bars, and in supermarkets and convenience stores. The sandwich has also become a common form of dinner food, served hot or cold.",
        "image": "https://media.istockphoto.com/id/1300342890/photo/blt-sandwich-and-fries.jpg?b=1&s=170667a&w=0&k=20&c=kE7ymKcOT7PSWuy2ZRr7xI6Iww06oiwrxQiqms7VDZo=",
        "isPopular": true,
        "isVeg": false,
        "isAvailable": true,
        "category": "breakfast",
        "rating": 3.5,
        "reviews": 3000,
        "deliveryTime": 15,
    },
    {
        "name": "Biryani",
        "price": 30,
        "description": "Biryani is a mixed rice dish with its origins among the Muslims of the Indian subcontinent. It is made with Indian spices, rice, and meat, and sometimes, in addition, eggs and/or vegetables such as potatoes in certain regional varieties. Biryani is usually cooked in a pot by the dum method in which the rice is layered with meat and spices and then cooked over low heat. The dish is popular throughout the Indian subcontinent and among the diaspora from the region. It is also popular in the Middle East, Central Asia, parts of East Africa, Southeast Asia, and the Caribbean.",
        "image": "https://www.thedeliciouscrescent.com/wp-content/uploads/2019/04/Chicken-Biryani-Square.jpg",
        "isPopular": true,
        "isVeg": false,
        "isAvailable": true,
        "category": "desert",
        "rating": 4.5,
        "reviews": 5000,
        "deliveryTime": 40,
    },
    {

        "name": "Dosa",
        "price": 20,
        "description": "Dosa is a type of pancake from the Indian subcontinent, made from a fermented batter. It is somewhat similar to a crepe in appearance. Its main ingredients are rice and black gram. Dosa is a common breakfast dish in Southern India, especially among Tamils. It is a significant part of the cuisine of South India and is served in restaurants throughout the world. Dosa is also popular in Sri Lanka, Nepal, Malaysia, Singapore, and Indonesia. It is also popular in the United States, where it is often served in Indian restaurants.",
        "image": "https://www.tastingtable.com/img/gallery/classic-masala-dosa/l-intro-1643138004.jpg",
        "isPopular": true,
        "isVeg": false,
        "isAvailable": true,
        "category": "breakfast",
        "rating": 4.2,
        "reviews": 2000,
        "deliveryTime": 20,
    },
    {
        "name": "Idli",
        "price": 15,
        "description": "Idli is a type of savoury rice cake, originating from the Indian subcontinent, popular as breakfast foods in Southern India. It is made by steaming a batter consisting of fermented black lentils (de-husked) and rice. It is similar to the dosa, in appearance and ingredients, but the fermentation process is different. Idli is a popular breakfast food in South India, especially in Tamil Nadu, Karnataka, Andhra Pradesh, Telangana, and Kerala. It is also popular in Sri Lanka, Nepal, Malaysia, Singapore, and Indonesia. It is also popular in the United States, where it is often served in Indian restaurants.",
        "image": "https://www.thespruceeats.com/thmb/sRv7c51X14pJ6AbZZ1WfsLvOHkc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/idli-56a510b63df78cf772862c34.jpg",
        "isPopular": true,
        "isVeg": false,
        "isAvailable": true,
        "category": "breakfast",
        "rating": 4.0,
        "reviews": 1000,
        "deliveryTime": 20,
    },
    {
        "name": "roti",
        "price": 10,
        "description": "Roti is a type of unleavened flatbread made from whole-wheat flour. It is a staple food in many regions of the Indian subcontinent, and is also popular in other parts of Asia and the Caribbean. It is made by rolling dough into a thin, round flatbread. It is usually eaten with a curry or other spicy dish. Roti is a staple food in many regions of the Indian subcontinent, and is also popular in other parts of Asia and the Caribbean. It is made by rolling dough into a thin, round flatbread. It is usually eaten with a curry or other spicy dish.",
        "image": "https://media.istockphoto.com/id/1298650125/photo/homemade-roti-chapati-flatbread.jpg?s=612x612&w=0&k=20&c=C7BH_JgNd4u9L-kYWfPUYVIEIecw5A2deVktAPlTL-g=",
        "isPopular": true,
        "isVeg": false,
        "isAvailable": true,
        "category": "breakfast",
        "rating": 4.0,
        "reviews": 1000,
        "deliveryTime": 20,
    },
    {
        "name": "kottu",
        "price": 500,
        "description": "Kottu is a Sri Lankan dish made from chopped or shredded roti, vegetables, and meat, which is then stir-fried. It is a popular street food in Sri Lanka, and is also popular in Malaysia, Singapore, and Indonesia. It is also popular in the United States, where it is often served in Indian restaurants.",
        "image": "https://www.spicemountain.co.uk/wp-content/uploads/2019/10/Chicken-Kottu.jpg",
        "isPopular": true,
        "isVeg": false,
        "isAvailable": true,
        "category": "desert",
        "rating": 4.0,
        "reviews": 1000,
        "deliveryTime": 25,
    },

    {

        "name": "fied rice",
        "price": 500,
        "description": "Fried rice is a dish of cooked rice that has been stir-fried in a wok or a frying pan and is usually mixed with other ingredients such as eggs, vegetables, seafood, or meat. It is often eaten by itself or as an accompaniment to another dish. Fried rice is a dish of cooked rice that has been stir-fried in a wok or a frying pan and is usually mixed with other ingredients such as eggs, vegetables, seafood, or meat. It is often eaten by itself or as an accompaniment to another dish.",
        "image": 'https://fullofplants.com/wp-content/uploads/2020/05/sweet-and-sour-spicy-thai-fried-rice-easy-vegan-meal-with-vegetables-thumb-500x500.jpg',
        "isPopular": true,
        "isVeg": false,
        "isAvailable": true,
        "category": "desert",
        "rating": 4.5,
        "reviews": 3000,
        "deliveryTime": 10,


    }

















]











