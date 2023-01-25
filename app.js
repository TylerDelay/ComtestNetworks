const express = require("express");
const cors = require("cors");
const app = express();
const sequelize = require("./connection");
const Tickets = require("./models/ticket.model");
const SubTaskTicket = require('./models/subTaskTicket.model');
// const Activity = require('./models/activity.model');
// const Attachment = require('./models/attachment.model');
const Checklist = require('./models/checklist.model');
// const Comment = require('./models/comment.model');
var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors());

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Tylers application." });
});

app.use((req, res, next) => {
  Tickets.findByPk(2)
  .then(ticket => {
    req.ticket=ticket;
    next();
  })
});

require("./routes/ticket.routes")(app);
// Tickets.hasMany(Checklist, { foreignKey: "ticketEtr_id"});
// Checklist.belongsTo(Tickets, { foreignKey: 'ticketEtr_id'});
Tickets.hasMany(SubTaskTicket, {
  as: 'subtaskticket'
});
SubTaskTicket.belongsTo(Tickets);
//Tickets.hasMany(SubTaskTicket);

//will create tables from our modals, but also define relations in our DB 
// sync() command for dev, add { force: true } so i can remake tables from scratch right away
sequelize.sync().then(result => {
    console.log(result);
    // set port, listen for requests
  const PORT = process.env.PORT || 8080;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
  });
  })
  .catch(err => {
    console.log(err);
  });
  