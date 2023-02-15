const Sequelize = require("sequelize-v5");
const sequelize = require("../connection");
const Comment = require("../models/comment.model");

//Sequelized create format
exports.createComment = (req, res, next) => {
    const user = req.body.user;
    const tag = req.body.tag;
    const comment = req.body.comment;
    //const etr_id = req.ticket.etr_id;
    //const ticketId = req.ticket.id;
   // const etr = req.body.etr;
  //  const ticketId = req.body.ticketId;
  
   Comment.create({
    user: user,
    tag: tag,
    comment: comment,
    etr_id: req.ticket.etr_id,
    // ticketId: ticketId
    //ticketId: req.ticket.id
      //ticketEtr_id: ticketEtr_id 
      //etr: etr
    })
        .then(result => {
            console.log(result);
            console.log("Created Comment");
            sequelize.query('update comments set etr_id = concat(etr,id)');
        })
        .catch(err => {
            console.log(err);
        })
  }

  //Sequelized findAll
  exports.findAllComments = (req, res, next) => {
    Comment.findAll()
    .then(data => {
        res.send(data);
    }).catch(err => {
        console.log(err);
    });
  }
  // Sequelized Find a single Tutorial with a id
  exports.findCommentTicketId = (req, res) => {
    const ticketId =req.params.ticketId ;
   
    Comment.findAll({where: { ticketId: ticketId }})
    .then(data => {
        if (data) {
            res.send(data);
            console.log(data);
        } else {
            res.status(404).send({
                message: 'Cannot find Comment with TicketId = ' + ticketId
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: 'Error retrieving Comment with id= ' + ticketId
        });
    }); 
  };

//Sequilized Update Ticket identified by the id in the req
exports.updateComment = (req, res) => {
    const id = req.params.id;
  
    Comment.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Comment was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Comment with id=${id}. Maybe Comment was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Comment with id=" + id
        });
      });
  };

// Sequilized Delete a Ticket with the specified id in the request
exports.deleteComment = (req, res) => {
    const id = req.params.id;
  
    Comment.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Comment was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Comment with id= ${id}. Maybe Comment was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Comment with id=" + id
        });
      });
  };


