const express = require("express");
const app = express();
const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/events');
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const expressValidator = require("express-validator");
const flash = require("connect-flash");
const session = require("express-session");


app.set("view engine", "ejs");
app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

var eventSchema = new mongoose.Schema({
  date: String,
  month: String,
  name: String,
});

var Event = mongoose.model("Event", eventSchema);

// ALERT FUNCTIONALITY -------------------------------------------------
// Express Session Middleware
app.use(session({
  secret: 'keyboard cat',
  resave: true,
  saveUninitialized: true
}));

// Express Messages Middleware
app.use(require('connect-flash')());
app.use(function (req, res, next) {
  res.locals.messages = require('express-messages')(req, res);
  next();
});

// Express Validator Middleware
app.use(expressValidator({
  errorFormatter: function(param, msg, value) {
      var namespace = param.split('.')
      , root    = namespace.shift()
      , formParam = root;

    while(namespace.length) {
      formParam += '[' + namespace.shift() + ']';
    }
    return {
      param : formParam,
      msg   : msg,
      value : value
    };
  }
}));



// ROUTES ------------------------------------------------------------------------------------------------------------
app.get("/", function(req, res) {
    res.render("home");
})

app.get("/schedule", function(req, res) {
  // get all events from db
    Event.find({}, function(err, events) {
      if (err) {
      console.log(err);
      }
    else {
      res.render("schedule", {events: events});
    }
  });
});

app.get("/resources", function(req, res) {
      res.render("resources");
    })


app.get("/media", function(req, res) {
    res.render("media");
})

app.get("/contact", function(req, res) {
    res.render("contact");
})

app.post('/send', function(req, res) {
    const output = `
    <p>You have a new prayer request</p>
    <h3>Contact Details</h3>
    <ul>  
      <li>Name: ${req.body.name}</li>
    </ul>
    <h3>Message</h3>
    <p>${req.body.request}</p>
  `;
  
   // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
    host: 'imap.gmail.com',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
        user: 'zouderkerken@gmail.com', // generated ethereal user
        pass: 'Riley1993'  // generated ethereal password
    },
    tls:{
      rejectUnauthorized:false
    }
    });
    
      // setup email data with unicode symbols
    let mailOptions = {
      from: '"JHM LEADERS" <zouderkerken@gmail.com>', // sender address
      to: ['zouderkerken@gmail.com', 'kody.stavert@evfreefullerton.com', 'becca.stavert@evfreefullerton.com', 'kate.walsh@evfreefullerton.com'], // list of receivers
      subject: 'New Prayer Request', // Subject line
      text: '', // plain text body
      html: output // html body
    };
    
    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
          return console.log(error);
      }
      console.log('Message sent: %s', info.messageId);   
      console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    
      req.flash('success', 'Prayer Request Submitted!')
      res.redirect('contact');
      
    });
});


// tells the server that C9 hosts to start
app.listen(process.env.PORT, process.env.IP, function() {
    console.log("server has started");
});