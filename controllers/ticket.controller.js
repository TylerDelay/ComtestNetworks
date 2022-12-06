const Tickets = require("../models/ticket.model");

//Sequelized create format
exports.create = (req, res, next) => {
    const title = req.body.title;
    const price = req.body.price;
    const imageUrl = req.body.imageUrl;
    const description = req.body.description;
    Tickets.create({
      title: title,
      price: price,
      imageUrl: imageUrl,
      description: description
    })
        .then(result => {
            //console.log(result);
            console.log("Created Ticket");
        })
        .catch(err => {
            console.log(err);
        })
  }

  //Sequelized findAll
  exports.findAll = (req, res, next) => {
    Tickets.findAll()
    .then(data => {
        res.send(data);
    }).catch(err => {
        console.log(err);
    });
  }
  // Sequelized Find a single Tutorial with a id
  exports.findOne = (req, res) => {
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

// find all published Tutorials
// exports.findAllPublished = (req, res) => {
//     Tickets.findById(req.params.id, (err, data) => {
//         if (err) {
//           if (err.kind === "not_found") {
//             res.status(404).send({
//               message: `Not found Ticket with id ${req.params.id}.`
//             });
//           } else {
//             res.status(500).send({
//               message: "Error retrieving Ticket with id " + req.params.id
//             });
//           }
//         } else res.send(data);
//       });
// };


//Sequilized Update Ticket identified by the id in the req
exports.update = (req, res) => {
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

// Delete a Ticket with the specified id in the request
exports.delete = (req, res) => {
    Tickets.remove(req.params.id, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Ticket with id ${req.params.id}.`
          });
        } else {
          res.status(500).send({
            message: "Could not delete Ticket with id " + req.params.id
          });
        }
      } else res.send({ message: `Ticket was deleted successfully!` });
    });
  };


exports.getAllTickets = async (req, res,next) => {
  //call fetch method asyn from modal
  try {
   const [allTickets] = await Tickets.fetchAll();
   res.status(200).json(allTickets);
  } catch (err){
    if(!err.statusCode) {
        err.statusCode =500;
    }
    next(err);
  }
};
