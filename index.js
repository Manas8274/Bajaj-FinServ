const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;


const corsOptions = {
    origin: 'http://localhost:5173', // Replace with your frontend URL
    optionsSuccessStatus: 200,
  };
  
  app.use(cors(corsOptions));
  

app.use(express.json());

// POST /bfhl endpoint
app.post('/bfhl', (req, res) => {
    const { data } = req.body;
    const user_id = "john_doe_17091999"; // replace with your format
    const email = "john@xyz.com"; // replace with actual email
    const roll_number = "ABCD123"; // replace with actual roll number

    const numbers = [];
    const alphabets = [];
    let highestLowercase = '';

    data.forEach(item => {
        if (!isNaN(item)) {
            numbers.push(item);
        } else if (typeof item === 'string' && item.length === 1) {
            alphabets.push(item);
            if (item >= 'a' && item <= 'z' && item > highestLowercase) {
                highestLowercase = item;
            }
        }
    });

    res.json({
        is_success: true,
        user_id: user_id,
        email: email,
        roll_number: roll_number,
        numbers: numbers,
        alphabets: alphabets,
        highest_lowercase_alphabet: highestLowercase ? [highestLowercase] : []
    });
});

// GET /bfhl endpoint
app.get('/bfhl', (req, res) => {
    res.status(200).json({ operation_code: 1 });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
