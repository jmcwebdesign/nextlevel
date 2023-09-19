const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const PORT = process.env.PORT || 3001;

// Nodemailer Transport
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'clientsEmail@gmail.com',
        pass: 'clientsPassword'
    }
});

app.post('/api/send-email', (req, res) => {
    const { fullName, email, phoneNumber, serviceCategory, companyName, industry, message } = req.body;

    const mailOptions = {
        from: email,
        to: 'clientsEmail@gmail.com',
        subject: `New Contact Form Submission from ${fullName}`,
        text: `
            Name: ${fullName}
            Email: ${email}
            Phone: ${phoneNumber}
            Service Category: ${serviceCategory}
            Company: ${companyName}
            Industry: ${industry}
            Message: ${message}
        `
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.status(500).send('Error sending email');
        } else {
            console.log('Email sent: ' + info.response);
            res.status(200).send('Email sent');
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
