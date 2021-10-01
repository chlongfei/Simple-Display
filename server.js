//parameters
const port = 8000;

//libraries
const express = require('express');
const multer = require('multer');
const cors = require('cors');
const path = require('path');

var app = express();
app.use(cors());
app.use(express.static(path.join(__dirname, 'build'))); //connects js server to build

/* multer - file access disk storage */
var storage = multer.diskStorage({
    destination: (req,file, cb)=>{
        cb(null, 'build/uploads');
    },
    filename: (req, file, cb)=>{
        cb(null, "active" + path.extname(file.originalname));
    }
})

var upload = multer({
    storage: storage
}).single('file');

/* express HTML server */
//on http POST - handle upload file
app.post('/upload', (req, res)=>{
    require('child_process').exec('cmd /c "' + __dirname + '/scripts/clearUploads.bat"',()=>{
        upload(req, res, (err)=>{
            if(err instanceof multer.MulterError){
                return res.status(500).json(err);
            }else if(err){
                return res.status(500).json(err);
            }else{
                require('child_process').exec('cmd /c "' + __dirname + '/scripts/runCreateHtm.bat"', ()=>{
                    return res.status(200).send(req.file);
                });
            }
        });
    });
});

//on http GET - show react app
app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
})
//on http GET - show excel htm
app.get('/show', (req, res)=>{
    res.sendFile(path.join(__dirname, '/build/uploads/active.html'));
})
//on http GET - send supporting files for htm
app.get('/active_files/*', (req, res)=>{
    res.sendFile(path.join(__dirname, '/build/uploads/' + req.url));
    console.log(req.url);
})

//on http GET no page - send 404
app.use((req, res, next)=>{
    res.status(404).sendFile(path.join(__dirname, 'build/404.html'))
})

//starts js http server
app.listen(port, ()=>{
    console.log("Server is running at " + port + "!");
})