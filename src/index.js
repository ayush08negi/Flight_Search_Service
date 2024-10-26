const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const {PORT}  = require('./config/serverConfig');
const ApiRoutes = require('./routes/index');
const multer = require('multer');
const upload = multer();
const db = require('./models/index')
// const {City,Airport} = require('./models/index')

const setupAndStartServer = async()=>{
     
    // create the express object
    const app = express();
    
    app.use(express.json()); // For JSON data
    app.use(express.urlencoded({ extended: true })); // For form data
    app.use(cookieParser());

    app.use('/api', upload.none(), ApiRoutes);
    
    app.listen(PORT,async()=>{
      console.log(`server started at ${PORT}`);
      
      if(process.env.SYNC_DB){
        db.sequelize.sync({alter:true});
      }
    });
}

setupAndStartServer();  