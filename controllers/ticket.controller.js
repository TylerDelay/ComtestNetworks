const Sequelize = require("sequelize-v5");
const sequelize = require("../connection");
const Tickets = require("../models/ticket.model");
const { Op } = require("sequelize-v5");

//Sequelized create format
exports.createTicket = (req, res, next) => {
    const etr_cat = req.body.etr_cat;
    const title = req.body.title;
    const description = req.body.description;
    const ticketId = req.body.ticketId
   
  
    Tickets.create({
      etr_cat: etr_cat,
      title: title,
      description: description,
      
    })
        .then(result => {
            //console.log(result);
            console.log("Created Ticket");
            sequelize.query('update tickets set  etr_id = concat(ETR,id)');
        })
        .catch(err => {
            console.log(err);
        })
  }

  //Sequelized findAll
  // exports.findAllTickets = async (req, res, next) => {
  //   // try {
  //     const [allTickets] = await Tickets.findAll({include: ["subtaskticket"]});
  //     res.status(200).json(allTickets);
  //   // } catch(err) {
  //   //     console.log(err);
  //   // }
  //   // next(err);
  // }
  exports.findAllTickets = (req, res, next) => {
    Tickets.findAll({include: ["subtaskticket"]})
    .then(data => {
        res.send(data);
    }).catch(err => {
        console.log(err);
    });
  }
  // Sequelized Find a single Tutorial with a id
  exports.findOneTicket = (req, res) => {
    const id = req.params.id;

    Tickets.findByPk(id, {include: ["subtaskticket"]})
    .then(data => {
        if (data) {
            res.send(data);
        } else {
            res.status(404).send({
                message: 'Cannot find Ticket with id = ' + id
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: 'Error retrieving Ticket with id= ' + id
        });
    }); 
  };

//Sequilized Update Ticket identified by the id in the req
exports.updateTicket = (req, res) => {
    const id = req.params.id;
  
    Tickets.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Ticket was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Ticket with id=${id}. Maybe Ticket was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Ticket with id=" + id
        });
      });
  };

// Sequilized Delete a Ticket with the specified id in the request
exports.deleteTicket = (req, res) => {
    const id = req.params.id;
  
    Tickets.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Ticket was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Ticket with id= ${id}. Maybe Ticket was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Ticket with id=" + id
        });
      });
  };


