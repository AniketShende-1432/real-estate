const router = require("express").Router();
const multer = require('multer');
const path = require('path');
const Sell = require("../models/sell");
const User = require("../models/user");

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); // Folder to store files
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname)); // Unique file names
    }
});

const upload = multer({ storage: storage });


router.post("/sellproperty", upload.array('images', 5), async (req, res) => {
    try {
        const { price,type,propertyType,city,locality,society,bhk,furnishedType,carpetArea,carpetAreaUnit,superArea,
            superAreaUnit,possessionStatus,developer,societyArea,societyAreaUnit,amenities,id } = req.body;
            const images = req.files.map(file => `/uploads/${file.filename}`);
            const features = JSON.parse(JSON.stringify(req.body.features));

        const existingUser = await User.findById(id);
        if(existingUser){
            const sell = new Sell({ price,type,propertyType,city,locality,society,bhk,furnishedType,carpetArea,carpetAreaUnit,superArea,
                superAreaUnit,possessionStatus,features,developer,societyArea,societyAreaUnit,amenities,images,user:id });
            
            await sell.save().then(()=>res.status(200).json({ message: 'Property posted successfully'}));
            
            await User.findByIdAndUpdate(id, { $push: { sell: sell } });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error posting property' });
    };

});



module.exports = router;