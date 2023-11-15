import { NextResponse } from "next/server";

export async function POST(req) {


    const body = await req.json();
    //send email to admin with contact form data

    const nodemailer = require('nodemailer')
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: process.env.SMTP_EMAIL,
            pass: process.env.SMTP_PASSWORD,
        }
    })

    const mailOptions = {
        from: body.email,
        to: process.env.SMTP_EMAIL,
        subject: body.subject,
        html: `
            <h1>${body.subject}</h1>
            <p>${body.email}</p>
            <p>Thank you for contacting us!</p>
            <p>New message submitted:</p>
            <p>${body.message}</p>
        `,
    };
    

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    })

    return NextResponse.json({ message: 'Email sent successfully' })

}