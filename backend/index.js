const express = require('express');
const app = express();
const mysql = require('mysql2');
const multer = require('multer');
const cors = require('cors');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const path = require('path');
dotenv.config();

const PORT = 5000;

app.use(express.json());
app.use(cors({ origin: ['http://localhost:5173']  }));

// Mysql connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'sanjay007',
  database: 'houserental'
});


//? Register
app.post('/register', async (req, res) => {
  const { username, password, email, role } = req.body;
  console.log(role);
  try {
    const hashpassword = await bcrypt.hash(password, 10);

    connection.query(
      'INSERT INTO userinfo (username, password, email, role) VALUES (?, ?, ?, ?)',
      [username, hashpassword, email, role],
      (err, result) => {
        if (err) {
          console.log('Error inserting data into MySQL:', err);
          res.status(500).json({ error: 'Internal server error' });
        } else {
          console.log("Data sent to MySQL successfully:", result);
          res.json('Successfully registered');
        }
      }
    );
  } catch (error) {
    console.error('Error hashing password:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

//? Login 
app.post('/login', async (req, res) => {
  const { email, password, role } = req.body;
  try {
    // Query the database to retrieve user data
    connection.query(
      'SELECT * FROM userinfo WHERE email = ?',
      [email, role],
      async (err, result) => {
        if (err) {
          console.error('Error querying data from MySQL:', err);
          res.status(500).json({ error: 'Internal server error' });
        } else {
          if (result.length > 0) {
            // User found, compare hashed password
            const user = result[0];
            const passwordMatch = await bcrypt.compare(password, user.password);
            if (passwordMatch) {
              // Generate JWT token
              const token = jwt.sign({ id: user.id, email: user.email , username: user.username }, process.env.JWT_SECRET, {
                expiresIn: '1h'
              });
              res.json({ message: 'Login successful', token, email: user.email });
              console.log('Data retrieved from MySQL successfully:', user);
            } else {
              res.status(401).json({ error: 'Invalid username or password' });
            }
          } else {
            res.status(401).json({ error: 'Invalid username or password' });
          }
        }
      }
    );
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


// Multer config
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/uploads');
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname+"_"+Date.now()+path.extname(file.originalname));
  }
});

const uploads = multer({ storage: storage });


// House add endpoint
app.post('/house', uploads.single('photo'), async (req, res) => {
  const { housetype, location, price, bedrooms, description, ownername, rating } = req.body;
  const photo = req.file ? req.file.filename : null;


  try {
    // Check if all required fields are provided
    if (!housetype || !location || !price || !bedrooms || !description || !ownername || !rating || !photo) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    // Insert house details into the database
    connection.query(
      'INSERT INTO houses (housetype, location, price, bedrooms, description, ownername, rating, photo) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
      [housetype, location, price, bedrooms, description, ownername, rating, photo],

      (err, result) => {
        if (err) {
          console.error('Error inserting data into MySQL:', err);
          return res.status(500).json({ error: 'Internal server error' });
        } else {
          console.log('Data inserted into MySQL successfully:', result);
          return res.json({ message: 'House added successfully' });
        }
      }
    );
  } catch (error) {
    
  }
});

//? Additional data 
app.post('/details' ,async(req ,res)=>{
  const{startdate,enddate, numberofperson,age} = req.body;

  try{
    if(!startdate || !enddate ||  !numberofperson ||  !age) {
      return  res.status(400).json({message:"All Field are required"});
    }
      connection.query(
        'INSERT INTO details (startdate,enddate,numberofperson, age) VALUES(?,?,?,?) ', [startdate,enddate, numberofperson,age],
        (err , result) =>{
          if(err){
            console.error('Error inserting data into MySQL:', err);
            return res.status(500).json({ error: 'Internal server error' });
          } else{
            console.log('Data inserted into MySQL successfully:', result);
          return res.json({ message: 'details successfully' });
          }
        }
      )
    
  }
  catch(err){
    console.error('Error in details:', err);
    return res.status(500).json({ error: 'Internal server error' });
  }
})

app.post('/addeddetails', async(req,res) =>{
  const{email,phonenumber} = req.body;

  try{
    if(!email ||  !phonenumber) {
      return  res.status(400).json({message:"All Field are required"});
    }
      connection.query(
        'INSERT INTO adddetails (email,phonenumber) VALUES(?,?) ', [email,phonenumber],
        (err , result) =>{
          if(err){
            console.error('Error inserting data into MySQL:', err);
            return res.status(500).json({ error: 'Internal server error' });
          } else{
            console.log('Data inserted into MySQL successfully:', result);
          return res.json({ message: 'adddetails successfully' });
          }
        }
      )
    
  }
  catch(err){
    console.error('Error in details:', err);
    return res.status(500).json({ error: 'Internal server error' });
  }
})




//? to database
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL database:', err);
    return;
  }
  console.log('Connected to MySQL database!');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
