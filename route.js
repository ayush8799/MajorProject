const app = require("express");
const Router = app();
let cors = require('cors');

Router.use(cors());
Router.use(app.json({limit: '50mb'}));

Router.post('/',(req, res)=> {

    let path = req.body.imagePath;
    console.log("path : ",path);
    let filename = path.replace(/^.*\\/, "");
    console.log(filename);


    const { exec } = require("child_process");
    
    let file = "./input/" + filename;
    
    console.log(file);

    exec(`python3 temp.py ${file}`, (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
    });;
    res.status(200).send('done!');
})

Router.listen(5000, ()=>{
    console.log("listening on port 5000");
})

