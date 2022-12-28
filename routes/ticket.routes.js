module.exports = app => {
    const tickets = require("../controllers/ticket.controller");
    const subTaskTicket = require("../controllers/subTaskTicket.controller")
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", tickets.createTicket);
    router.post("/addSubTicket", subTaskTicket.createTicket);
  
    // Retrieve all Tickets
    router.get("/", tickets.findAllTickets);
    router.get("/subAll", subTaskTicket.findAllTickets);
  
    // Retrieve a single Ticket with id
    router.get("/:id", tickets.findOneTicket);
  
    // Update a Ticket with id
    router.put("/:id", tickets.updateTicket);
  
    // Delete a Ticket with id
    router.delete("/:id", tickets.deleteTicket);
  
      // // Delete all Tickets
      // router.delete("/", tickets.deleteAll);
  
    app.use("/api/tickets", router);
  };
  