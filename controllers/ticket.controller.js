const Sequelize = require("sequelize-v5");
const sequelize = require("../connection");
const Tickets = require("../models/ticket.model");

//Sequelized create format
exports.createTicket = (req, res, next) => {
    const ETR_CAT = req.body.ETR_CAT;
    const Title = req.body.Title;
    const Description = req.body.Description;
   
  
    Tickets.create({
      ETR_CAT: ETR_CAT,
      Title: Title,
      Description: Description,
      
    })
        .then(result => {
            //console.log(result);
            console.log("Created Ticket");
            sequelize.query('update tickets set  ETR_ID = concat(ETR,id)');
        })
        .catch(err => {
            console.log(err);
        })
  }

  //Sequelized findAll
  exports.findAllTickets = (req, res, next) => {
    Tickets.findAll()
    .then(data => {
        res.send(data);
    }).catch(err => {
        console.log(err);
    });
  }
  // Sequelized Find a single Tutorial with a id
  exports.findOneTicket = (req, res) => {
    const id = req.params.id;

    Tickets.findByPk(id)
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


