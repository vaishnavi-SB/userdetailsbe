let mongoose = require("mongoose"),
  express = require("express"),
  router = express.Router();
let nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
  // service: "gmail",
  // auth: {
  //   user: "vaishu605@gmail.com",
  //   // pass: "neyatqprhuztedhj",
  //   pass: "Vaishu123*",
  // },

  // transporter using ethereal
  host: "smtp.ethereal.email",
  port: 587,
  auth: {
    user: "alycia91@ethereal.email",
    pass: "U9A4XmwsnMH4unJupX",
  },
});

// user model
let userSchema = require("../models/Users");

// Create user

router.post("/user-form", (req, res) => {
  console.log("req from fe", req.body);
  userSchema
    .create(req.body)
    .then((result) => {
      res.send(result);
      console.log("result after submitting", result);

      if (result) {
        var mailOptions = {
          from: "vaishnavi",
          to: result.email,
          // to: "vaishu605@gmail.com",
          subject: "User details recorded",
          text: `Hi harshita your details have been successfully added.`,
        };

        transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
            console.log(error);
          } else {
            console.log("Email sent" + info.response);
          }
        });
      }
    })
    .catch((err) => {
      console.log("error", err);
      res.send(err);
    });
});

// Read user

router.get("/", (req, res) => {
  // userSchema.find((error, data) => {
  //   if (error) {
  //     return next(error);
  //   }

  // });
  userSchema
    .find()
    .then((result) => {
      res.send(result);
      console.log("result", result);
    })
    .catch((err) => {
      console.log("error", err);
    });
});

module.exports = router;
