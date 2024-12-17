const { execute } = require('../wrapper/wrapper');

module.exports.signup = async (req, res) => {
  try {
    console.log('Received request body:', req.body); 
    
    const { name, email, password, phone } = req.body;
    console.log("Destructured data:", { name, email, password, phone });


    const [existingUser] = await execute('SELECT * FROM userdata WHERE email = ?', [email]);
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists!' });
    }

    const result = await execute('INSERT INTO userdata (name, email, password, phone) VALUES (?, ?, ?, ?)', [
      name,
      email,
      password,
      phone
    ]);

    res.status(201).json({ message: 'User created successfully!', userId: result.insertId });
  } catch (err) {
    console.log("Error in signup:", err);
    res.status(500).json({ message: 'Server error!' });
  }
};

module.exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: "Email and password are required!" });
    }

    const [user] = await execute('SELECT * FROM userdata WHERE email = ?', [email]);
    if (!user) return res.status(404).json({ message: 'User not found!' });

    if (password !== user.password) {
      return res.status(401).json({ message: 'Invalid credentials!' });
    }

    res.status(200).json({ message: 'Login successful!', userId: user.id, name: user.name });
  } catch (err) {
    console.error("Error in login:", err);
    res.status(500).json({ message: 'Server error!' });
  }
};
