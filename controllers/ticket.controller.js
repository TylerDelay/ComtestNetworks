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
// Retrieve all Tutorials from the database (with condition).
// exports.findAll = (req, res) => {
//     const title = req.query.title;
  
//     Tickets.getAll(title, (err, data) => {
//       if (err)
//         res.status(500).send({
//           message:
//             err.message || "Some error occurred while retrieving tickets."
//         });
//       else res.send(data);
//     });
//   };

  // Find a single Tutorial with a id
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

// Update a Tutorial identified by the id in the request
exports.update = (req, res) => {
    // Validate Request
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }
  
    console.log(req.body);
  
    Tickets.updateById(
      req.params.id,
      new Tickets(req.body),
      (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found Ticket with id ${req.params.id}.`
            });
          } else {
            res.status(500).send({
              message: "Error updating Ticket with id " + req.params.id
            });
          }
        } else res.send(data);
      }
    );
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
