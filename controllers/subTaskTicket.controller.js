const Sequelize = require("sequelize-v5");
const sequelize = require("../connection");
const subTaskTicket = require("../models/subTaskTicket.model");

//Sequelized create format
exports.createTicket = (req, res, next) => {
    const Title = req.body.Title;
    const Description = req.body.Description;
    const Status = req.body.Status;
   // const ETR = req.body.ETR;
   
  
   subTaskTicket.create({
      Title: Title,
      Status: Status,
      Description: Description,
      //ETR: ETR
    })
        .then(result => {
            //console.log(result);
            console.log("Created Ticket");
            sequelize.query('update subtasktickets set subTaskId = concat(ETR,id)');
        })
        .catch(err => {
            console.log(err);
        })
  }

  //Sequelized findAll
  exports.findAllTickets = (req, res, next) => {
    subTaskTicket.findAll({include: ["subtaskticket"]})
    .then(data => {
        res.send(data);
    }).catch(err => {
        console.log(err);
    });
  }
  // Sequelized Find a single Tutorial with a id
  exports.findOneTicket = (req, res) => {
    const id = req.params.id;

    subTaskTicket.findByPk(id)
    .then(data => {
        if (data) {
            res.send(data);
        } else {
            res.status(404).send({
                message: 'Cannot find Child Ticket with id = ' + id
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: 'Error retrieving child Ticket with id= ' + id
        });
    }); 
  };

//Sequilized Update Ticket identified by the id in the req
exports.updateTicket = (req, res) => {
    const id = req.params.id;
  
    subTaskTicket.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Child Ticket was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Child Ticket with id=${id}. Maybe Child Ticket was not found or req.body is empty!`
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
  
    subTaskTicket.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Child Ticket was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Child Ticket with id= ${id}. Maybe Child Ticket was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Ticket with id=" + id
        });
      });
  };


