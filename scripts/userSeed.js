const User = require("../models/user")


//Set up userSeed
const userSeed = [
    {
        name: "Erin Schaefer",
        email: "eschafer@artfair.com",
        patrons: 7,
        alttext: "Erin Schaefer",
        autobio: "Graffiti Artist. I also craft shoes.",
        date: new Date(Date.now()),
        market: [
            // {
            //     pictureUrl: "https://rointheknow.com/wp-content/uploads/2017/11/Graffiti.jpg",
            //     description: "Graffiti art made in Jan 2016.",
            //     price: 50,
            //     item: "Unravel"
            // },
            // {
            //     pictureUrl: "https://i.pinimg.com/736x/6f/0f/2a/6f0f2ae623dc648e2f92533fe5b00570--spray-paint-canvas-spray-painting.jpg",
            //     description: "Graffiti art made in Jun 2017.",
            //     price: 40,
            //     item: "Pride"
            // },
            // {
            //     pictureUrl: "http://www.cholesburys.co.uk/images/products/sandals/handmade-sandals-105c.jpg",
            //     description: "Leather sandals handmade in Dec 2016.",
            //     price: 35,
            //     item: "Pride"
            // }
        ],
        pictureUrl: "https://farm5.static.flickr.com/4116/4819903224_ce9a6b02f8_b.jpg"
    },
    {
        name: "Melissa Brooks",
        email: "mbrooks@artfair.com",
        patrons: 10,
        alttext: "Melissa Brooks",
        autobio: "Wine lover, cheese maker, and 24/7 graphic designer.",
        date: new Date(Date.now()),
        market: [
            // {
            //     pictureUrl: "https://images.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.cleanri.com%2Fpostpic%2F2010%2F11%2Fdigital-graphics_1399795.jpg&f=1",
            //     description: "Graphic designed in Aug 2017",
            //     price: 15,
            //     item: "Wisp"
            // },
            // {
            //     pictureUrl: "https://s3.envato.com/files/204204968/img018.jpg",
            //     description: "Graphic protrait drawn in Sep 2016.",
            //     price: 35,
            //     item: "Vivian"
            // },
            // {
            //     pictureUrl: "http://cdn2.digitalartsonline.co.uk/cmsdata/slideshow/3513552/polybreno_1500.jpg",
            //     description: "Graphic protrait drawn in Apr 2017.",
            //     price: 35,
            //     item: "Trevor"
            // }
        ],
        pictureUrl: "https://i.pinimg.com/736x/1e/a4/c7/1ea4c7cf2e551d83ba0da9570a8828d4.jpg"
    },
    {
        name: "David Wright",
        email: "dwright@artfair.com",
        patrons: 12,
        alttext: "David Wright",
        autobio: "Comic book nerd. I love drawing comics from scratch.",
        date: new Date(Date.now()),
        market: [
            // {
            //     pictureUrl: "https://images.duckduckgo.com/iu/?u=http%3A%2F%2Fstatic.boredpanda.com%2Fblog%2Fwp-content%2Fuploads%2F2016%2F12%2Ffunny-relationship-comics-dating-109-5852925ff0825__700.jpg&f=1",
            //     description: "Ongoing comic since May 2017",
            //     price: 10,
            //     item: "Cat on lap series"
            // },
            // {
            //     pictureUrl: "https://images.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.leadpaintcomics.com%2Fcomics%2F2010-08-29-basilisk.jpg&f=1",
            //     description: "Comic written in 2013. 15 volumes total.",
            //     price: 20,
            //     item: "Lead Paint series"
            // },
            // {
            //     pictureUrl: "https://images.duckduckgo.com/iu/?u=http%3A%2F%2Fth08.deviantart.net%2Ffs70%2FPRE%2Fi%2F2011%2F285%2F1%2Fe%2Fbatman_sketch_by_lgonzalez1-d4cmfba.jpg&f=1",
            //     description: "3' X 2' Poster size sketch done in Mar 2014.",
            //     price: 15,
            //     item: "Batman, Pencil"
            // }
        ],
        pictureUrl: "https://i.pinimg.com/originals/8f/57/2d/8f572d3fced9780ce7003ac94bae6e14.jpg"
    }
];

User
    .remove({})
    .then(() => User.collection.insertMany(userSeed))
    .then(data => {
        console.log(data.insertedIds.length + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });