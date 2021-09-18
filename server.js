const express = require('express');
const multer = require('multer');
const cors = require('cors');
const path = require('path');

var app = express();
app.use(cors());

var storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, 'public/uploads');
    },
    filename: function (req, file, cb){
        cb(null,"active" + path.extname(file.originalname));
    }
})

var upload = multer({storage: storage}).single('file');

app.post('/upload', function (req, res){
    require('child_process').exec('cmd /c ' + __dirname +'/scripts/clearUploads.bat', ()=>{
        upload(req, res, function (err){
            if(err instanceof multer.MulterError){
                return res.status(500).json(err);
            }else if(err){
                return res.status(500).json(err);
            }
            require('child_process').exec('cmd /c ' + __dirname + '/scripts/runCreateHtm.bat',()=>{
                return res.status(200).send(req.file);
            });
        })
    });
})

app.get("", function (req, res){
    res.sendFile(path.join(__dirname, '/public/uploads/active.html'));
})


app.get("/active_files/*", function (req, res){
    res.sendFile(path.join(__dirname, '/public/uploads/'+ req.url));
    console.log(req.url);
})

app.get("/manage", function (req, res){
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
    console.log(req.url);
})

app.listen(8000, function(){
    console.log('App running at port 8000');
})