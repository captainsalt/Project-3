const mongoose = require("mongoose");
const User = require("../models/user")

mongoose.Promise = global.Promise;

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/Project3-Final",
  {
    useMongoClient: true
  }
);


//Set up userSeed
const userSeed = [
    {
        username: "Erin Schaefer",
        email: "eschafer@artfair.com",
        password: "eschaefer123",
        description: "Graffiti Artist. I also craft shoes.",
        market: [
            {
                pictureUrl: "https://rointheknow.com/wp-content/uploads/2017/11/Graffiti.jpg",
                description: "Graffiti art made in Jan 2016.",
                price: 50,
                item: "Unravel"
            },
            {
                pictureUrl: "https://i.pinimg.com/736x/6f/0f/2a/6f0f2ae623dc648e2f92533fe5b00570--spray-paint-canvas-spray-painting.jpg",
                description: "Graffiti art made in Jun 2017.",
                price: 40,
                item: "Pride"
            },
            {
                pictureUrl: "http://www.cholesburys.co.uk/images/products/sandals/handmade-sandals-105c.jpg",
                description: "Leather sandals handmade in Dec 2016.",
                price: 35,
                item: "Floral sandals, Leather"
            }
        ],
        pictureUrl: "https://farm5.static.flickr.com/4116/4819903224_ce9a6b02f8_b.jpg",
        patrons:3,
        category: "urban"
    },
    {
        username: "Melissa Brooks",
        email: "mbrooks@artfair.com",
        password:"mbrooks123",
        description: "Wine lover, cheese maker, and 24/7 graphic designer.",
        market: [
            {
                pictureUrl: "https://images.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.cleanri.com%2Fpostpic%2F2010%2F11%2Fdigital-graphics_1399795.jpg&f=1",
                description: "Graphic designed in Aug 2017",
                price: 15,
                item: "Wisp"
            },
            {
                pictureUrl: "https://s3.envato.com/files/204204968/img018.jpg",
                description: "Graphic protrait drawn in Sep 2016.",
                price: 35,
                item: "Vivian"
            },
            {
                pictureUrl: "http://cdn2.digitalartsonline.co.uk/cmsdata/slideshow/3513552/polybreno_1500.jpg",
                description: "Graphic protrait drawn in Apr 2017.",
                price: 35,
                item: "Trevor"
            }
        ],
        pictureUrl: "https://i.pinimg.com/736x/1e/a4/c7/1ea4c7cf2e551d83ba0da9570a8828d4.jpg",
        patrons: 6,
        category: 'd_grap'
    },
    {
        username: "David Wright",
        email: "dwright@artfair.com",
        password: "dwright123",
        description: "Comic book nerd. I love drawing comics from scratch.",
        market: [
            {
                pictureUrl: "https://images.duckduckgo.com/iu/?u=http%3A%2F%2Fstatic.boredpanda.com%2Fblog%2Fwp-content%2Fuploads%2F2016%2F12%2Ffunny-relationship-comics-dating-109-5852925ff0825__700.jpg&f=1",
                description: "Ongoing comic since May 2017",
                price: 10,
                item: "Cat on lap series"
            },
            {
                pictureUrl: "https://images.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.leadpaintcomics.com%2Fcomics%2F2010-08-29-basilisk.jpg&f=1",
                description: "Comic written in 2013. 15 volumes total.",
                price: 20,
                item: "Lead Paint series"
            },
            {
                pictureUrl: "https://images.duckduckgo.com/iu/?u=http%3A%2F%2Fth08.deviantart.net%2Ffs70%2FPRE%2Fi%2F2011%2F285%2F1%2Fe%2Fbatman_sketch_by_lgonzalez1-d4cmfba.jpg&f=1",
                description: "3' X 2' Poster size sketch done in Mar 2014.",
                price: 15,
                item: "Batman, Pencil"
            }
        ],
        pictureUrl: "https://i.pinimg.com/originals/8f/57/2d/8f572d3fced9780ce7003ac94bae6e14.jpg",
        patrons: 8,
        category: "comics"
    },
    {
        username: "Paolo Hernandez",
        email: "phernandez@artfair.com",
        password:"phernandez123",
        description: "I am a professional sculptor. I work with plaster and clay.",
        market: [
            {
                pictureUrl: "https://images.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2F736x%2F88%2F25%2F20%2F882520dcc212252fae1cfd7681753fd5--pottery-sculpture-clay-sculptures.jpg&f=1",
                description: "Clay. Made in Feb 2012",
                price: 500,
                item: "Ember"
            },
            {
                pictureUrl: "https://images.duckduckgo.com/iu/?u=https%3A%2F%2Fs-media-cache-ak0.pinimg.com%2F736x%2F24%2F3c%2F3d%2F243c3db4b993ec0e9387142d2e420a37--clay-sculptures-sculpture-art.jpg&f=1",
                description: "Clay. Made in Oct 2014.",
                price: 750,
                item: "Siren"
            },
            {
                pictureUrl: "https://images.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.fineartstore.com%2Fimages%2Fproduct%2Fmicro%2F8610_2_.jpg&f=1",
                description: "Plaster. Finished Nov 2017.",
                price: 1200,
                item: "Perspective"
            }
        ],
        pictureUrl: "https://www.thefamouspeople.com/profiles/images/oscar-isaac-1.jpg",
        patrons: 20,
        category: "sculp"
    },
    {
        username: "Janelle Robinson",
        email: "jrobinson@artfair.com",
        password:"jrobinson123",
        description: "Urban art. Coffee. Me.",
        market: [
            {
                pictureUrl: "https://images.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.marcofolio.net%2Fimages%2Fstories%2Fart%2Fphotoshop%2Fgraffiti%2F08_amsterdam_big.jpg&f=1",
                description: "Graffiti on wooden panel. Made in 2017.",
                price: 300,
                item: "Rebel"
            },
            {
                pictureUrl: "https://images.duckduckgo.com/iu/?u=http%3A%2F%2Fcolourspedia.files.wordpress.com%2F2013%2F02%2Fgraffiti-art-2.jpeg&f=1",
                description: "Graffiti on canvas. Made in 2016",
                price: 150,
                item: "Woke"
            },
            {
                pictureUrl: "https://images.duckduckgo.com/iu/?u=http%3A%2F%2F1.bp.blogspot.com%2F-D3_fMt8qyWo%2FUrgTfkD40FI%2FAAAAAAAAAeU%2F9a3o0uSOX6w%2Fs1600%2FHigh-Art-Of-Graffiti-Mentalism-By-Shaka-Nosbe-6.jpg&f=1",
                description: "Graffiti on canvas. Made in 2015",
                price: 500,
                item: "Tripped"
            }
        ],
        pictureUrl: "https://i.pinimg.com/736x/31/45/41/314541757718f29dd07f335030103c25--nude-lipstick-on-black-women-dark-complexion-makeup.jpg",
        patrons: 10,
        category: "urban"
    },
    {
        username: "Otilia Cortez",
        email: "ocortez@artfair.com",
        password: "ocortez123",
        description: "Cubism painter and part-time pastry chef.",
        market: [
            {
                pictureUrl: "https://images.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.K5kXKH5ZjPNCjXuuqonPnAD6D6%26pid%3D15.1&f=1",
                description: "Made on canvas in 2014.",
                price: 600,
                item: "Butler"
            },
            {
                pictureUrl: "https://images.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2F736x%2F8f%2Ff0%2Fb2%2F8ff0b299b7e70250a528c3f4dd1de280--cubism-art-artist-painting.jpg&f=1",
                description: "Made on canvas in 2016.",
                price: 500,
                item: "Native"
            },
            {
                pictureUrl: "https://images.duckduckgo.com/iu/?u=http%3A%2F%2F1.bp.blogspot.com%2F_sb9XgDsPnyo%2FS_x5aPkq-3I%2FAAAAAAAAAMk%2F5UwgltNZeso%2Fs1600%2Fcubistguitar.jpg&f=1",
                description: "Made on canvas in 2012.",
                price: 0,
                item: "Mariachi"
            }
        ],
        pictureUrl: "http://s6.favim.com/orig/65/adorable-beautiful-black-and-white-brunette-Favim.com-607920.jpg",
        patrons: 12,
        category: "paint"
    },
        {
            username: "Kelly Wu",
            email: "@artfair.com",
            password: "kellywu123",
            description: "Traditional chinese style watercolors. I love to paint!",
            market: [{
                    pictureUrl: "https://images.duckduckgo.com/iu/?u=https%3A%2F%2Fs-media-cache-ak0.pinimg.com%2Foriginals%2F2d%2F2e%2F32%2F2d2e3240015a0674f8d0143a57d1fb16.jpg&f=1",
                    description: "Cherry blossoms on canvas, finished 2014.",
                    price: 600,
                    item: "Blossom"
                },
                {
                    pictureUrl: "https://images.duckduckgo.com/iu/?u=https%3A%2F%2Fs-media-cache-ak0.pinimg.com%2Foriginals%2Fa7%2F56%2Fc9%2Fa756c9ae848fad87e3c5f7bc862d0260.jpg&f=1",
                    description: "Mountain views on canvas, finished 2015.",
                    price: 400,
                    item: "View"
                },
                {
                    pictureUrl: "https://images.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.artisoo.com%2Fimages%2Fchinesepainting3%2Fcnag221405.jpg&f=1",
                    description: "Scenery on canvas, finished 2017.",
                    price: 800,
                    item: "Village"
                }
            ],
            pictureUrl: "http://images.duckduckgo.com/iu/?u=http%3A%2F%2Fcdn.brosome.com%2Fwp-content%2Fuploads%2F2014%2F11%2FLynn-Hung_00004.jpg&f=1",
            patrons: 10,
            category: "paint"
        },
    {
        username: "Tom Davidson",
        email: "tdavidson@artfair.com",
        password: "tdavidson123",
        description: "Hardcore stained glass craftsman, casual freelancer writer.",
        market: [{
                pictureUrl: "https://images.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2F736x%2Feb%2Fdd%2Faf%2Febddaff89c5ab3bbc2d3c0f286f9af3a--stained-glass-ornaments-stained-glass-mobiles.jpg&f=1",
                description: "Small glass pendant. Crafted in 2014.",
                price: 100,
                item: "Sunset"
            },
            {
                pictureUrl: "https://images.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.artisticstainedglass.ca%2Fwp-content%2Fgallery%2Fstained-glass%2Fstained_glass1.jpg&f=1",
                description: "Wall decor. Crafted in 2015.",
                price: 1200,
                item: "Tulips"
            },
            {
                pictureUrl: "https://www.lampsbeautiful.com/media/M/lgM71886.jpg",
                description: "Stained glass design, built to order.",
                price: 3000,
                item: "Spiral Medallion"
            }
        ],
        pictureUrl: "https://images.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.mens-hairstyle.com%2Fwp-content%2Fuploads%2F2016%2F06%2FMens-Short-Older-Hairstyle-e1435393891334.jpg&f=1",
        patrons: 15,
        category: "glass"
    },
    {
        username: "Audrey Gallagher",
        email: "agallagher@artfair.com",
        password: "agallagher123",
        description: "Renaissance style paintings <3",
        market: [
            {
                pictureUrl: "https://images.duckduckgo.com/iu/?u=http%3A%2F%2F3.bp.blogspot.com%2F_Vea8yxkTrOA%2FRsoyS9gPLII%2FAAAAAAAAAWM%2Fh0wL_2oTkW8%2Fw1200-h630-p-k-no-nu%2FVenus%2526Cupid.jpg&f=1",
                description: "Done with acrylic paint. Completed 2015.",
                price: 500,
                item: "Bride"
            },
            {
                pictureUrl: "https://images.duckduckgo.com/iu/?u=http%3A%2F%2Fallrenaissance.wikispaces.com%2Ffile%2Fview%2Frenaissance_music_1_2.jpg%2F69207943%2Frenaissance_music_1_2.jpg&f=1",
                description: "Acrylic paint. Completed 2017.",
                price: 400,
                item: "The Bards"
            },
            {
                pictureUrl: "https://images.duckduckgo.com/iu/?u=http%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2F8%2F8f%2FMunari%252C_Cristoforo_-_Still-Life_with_Musical_Instruments_and_Fruit_-_Galleria_Palatina.jpg&f=1",
                description: "Done in acrylic. Used some computer mapping. Finished 2017",
                price: 250,
                item: "Fine Things"
            }
        ],
        pictureUrl: "https://images.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2F736x%2F10%2Fb3%2F6a%2F10b36a58d0a35dbccc9ce18c16d85a7e--redhead-girl-red-heads.jpg&f=1",
        patrons: 17,
        category: "paint"
    },
    {
        username: "George Swansen",
        email: "gswansen@artfair.com",
        password: "gswansen123",
        description: "Wood worker. Wooden sculptures.",
        market: [
            {
                pictureUrl: "https://images.duckduckgo.com/iu/?u=https%3A%2F%2Fs-media-cache-ak0.pinimg.com%2F736x%2F47%2Ff1%2F79%2F47f179e8a8cc2d8fca50fb3bbbd4822c.jpg&f=1",
                description: "Carved from Oak in 2013.",
                price: 3000,
                item: "Nocturnal"
            },
            {
                pictureUrl: "https://images.duckduckgo.com/iu/?u=http%3A%2F%2Fdesignwrld.com%2Fwp-content%2Fuploads%2F2016%2F06%2FImpressive-Wooden-Animal-Sculptures-By-Jurgen-Lingl-Rebetez-03.jpg&f=1",
                description: "Carved from Spruce in 2015.",
                price: 2700,
                item: "Mustang"
            },
            {
                pictureUrl: "https://images.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn6.bigcommerce.com%2Fs-61d9ne0ffi%2Fimages%2Fstencil%2F500x659%2Fproducts%2F12429%2F23568%2Fhowling-wolf-wooden-statue-4207-XL__99509.1458347427.1280__92824.1469653556.jpg%3Fc%3D2&f=1",
                description: "Carved from Pecan in 2017.",
                price: 1000,
                item: "Howl"
            }
        ],
        pictureUrl: "https://images.duckduckgo.com/iu/?u=https%3A%2F%2Fs-media-cache-ak0.pinimg.com%2F736x%2Fee%2F2d%2F06%2Fee2d068c1d6cb0cb9254ec31550042b3.jpg&f=1",
        patrons: 40,
        category: "sculp"
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