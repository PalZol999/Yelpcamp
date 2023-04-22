const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_KEY,
    api_secret: process.env.CLOUDINARY_SECRET
});

const storage = new CloudinaryStorage({
    cloudinary,
    params: {
        folder: 'YelpCamp',
        allowedFormats: ['jpeg', 'png', 'jpg']
    }
});

module.exports = {
    cloudinary,
    storage
}


// Configuration 
cloudinary.config({
    cloud_name: "dprjltyhd",
    api_key: "626864678241498",
    api_secret: "-OAxtuoagxzq1iFPx2GrgKrYxPI"
});


// Upload

const res = cloudinary.uploader.upload('https://upload.wikimedia.org/wikipedia/commons/a/ae/Olympic_flag.jpg', { public_id: "olympic_flag" })

res.then((data) => {
    console.log(data);
    console.log(data.secure_url);
}).catch((err) => {
    console.log(err);
});


// Generate 
const url = cloudinary.url("olympic_flag", {
    width: 100,
    height: 150,
    Crop: 'fill'
});



// The output url
console.log(url);
// https://res.cloudinary.com/<cloud_name>/image/upload/h_150,w_100/olympic_flag