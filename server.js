const express = require('express');
const multer = require('multer');
const cors = require('cors');
const path = require('path');

var app = express();
app.use(cors());

var storage_htm = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, 'public/uploads');
    },
    filename: function (req, file, cb){
        cb(null,file.originalname);
    }
})

var storage_af = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, 'public/uploads/active_files');
    },
    filename: function (req, file, cb){
        cb(null,file.originalname);
    }
})

var upload_htm = multer({storage: storage_htm}).single('file');
var upload_af = multer({storage: storage_af}).single('file');

app.post('/upload/htm', function (req, res){
    upload_htm(req, res, function (err){
        if(err instanceof multer.MulterError){
            return res.status(500).json(err);
        }else if(err){
            return res.status(500).json(err);
        }
        return res.status(200).send(req.file);
    })
})

app.post('/upload/af', function (req, res){
    upload_af(req, res, function (err){
        if(err instanceof multer.MulterError){
            return res.status(500).json(err);
        }else if(err){
            return res.status(500).json(err);
        }
        return res.status(200).send(req.file);
    })
})

app.get("/view", function (req, res){
    res.sendFile(path.join(__dirname, '/public/uploads/active.htm'));
})

app.listen(8000, function(){
    console.log('App running at port 8000');
})