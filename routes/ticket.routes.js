module.exports = app => {
    const tickets = require("../controllers/ticket.controller");
    const subTaskTicket = require("../controllers/subTaskTicket.controller")
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/tickets", tickets.createTicket);
    router.post("/addSubTicket", subTaskTicket.createTicket);
  
    // Retrieve all Tickets
    router.get("/allTickets", tickets.findAllTickets);
  
    // Retrieve a single Ticket with id
    router.get("/ticket/:id", tickets.findOneTicket);
  
    // Update a Ticket with id
    router.put("/updateTicket/:id", tickets.updateTicket);
  
    // Delete a Ticket with id
    router.delete("/deleteTicket/:id", tickets.deleteTicket);
  
      // // Delete all Tickets
      // router.delete("/", tickets.deleteAll);
  
    app.use("/api/tickets", router);
  };
  