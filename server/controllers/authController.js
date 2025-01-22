const bcrypt = require('bcrypt');
const User = require("../models/userModel");


// Register New User
exports.signup = async (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(400).json({
            message: 'All fields are required!',
        });
    }

    try {
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({
            name,
            email,
            password: hashedPassword,
        });

        await newUser.save();

        res.status(201).json({
            message: 'User created successfully!',
            result: newUser,
        });
    } catch (error) {
        console.error('Error during signup:', error);
        res.status(500).json({
            message: 'Failed to create new account!',
            result: [],
        });
    }
};

// Login User
exports.login = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({
            message: 'Email and password are required!',
        });
    }

    try {
        const user = await User.findOne({ email });

        if (user && (await bcrypt.compare(password, user.password))) {
            res.status(200).json({
                message: 'Login success',
                user: {
                    id: user.id,
                    name: user.name,
                    email: user.email,
                }
            });
        } else {
            res.status(400).json({
                message: 'Invalid credentials',
            });
        }
    } catch (error) {
        res.status(500).json({
            message: 'Login failed!',
        });
    }
};
