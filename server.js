const PORT = 8000;

const express = require('express');
const multer = require('multer');
const cors = require('cors');
const path = require('path');

var app = express();
app.use(cors());
app.use(express.static(path.join(__dirname, 'build')));

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

app.get("/show", function (req, res){
    res.sendFile(path.join(__dirname, '/public/uploads/active.html'));
})


app.get("/active_files/*", function (req, res){
    res.sendFile(path.join(__dirname, '/public/uploads/'+ req.url));
    console.log(req.url);
})

app.get('/', function (req, res){
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(process.env.PORT || 8080, ()=>{
    console.log("server is running");
});