const Tickets = require("../models/ticket.model");

// Create and Save a new Tutorial
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }

  // Create a Tutorial
  const ticket = new Tickets({
    Parent_ECR_No: req.body.Parent_ECR_No,
    Eng_Family: req.body.Eng_Family,
    ECN_Pc_MRP: req.body.ECN_Pc_MRP,
    ECO_Approved: req.body.ECO_Approved,
    Internal_Design_ECR_Only: req.body.Internal_Design_ECR_Only,
    NPR_PP_or_DD: req.body.NPR_PP_or_DD,
    NPI: req.body.NPI,
    Task: req.body.Task,
    OPEN_PROTO_CLOSED_INACTIVE_DUPLICATE_PROTO: req.body.OPEN_PROTO_CLOSED_INACTIVE_DUPLICATE_PROTO,
    ID_CHILD: req.body.ID_CHILD,
    Brief_Name: req.body.Brief_Name,
    ETR_Type: req.body.ETR_Type,
    Part: req.body.Part,
    Link_to_change_request_form: req.body.Link_to_change_request_form,
    Source: req.body.Source,
    Owner: req.body.Owner,
    Date_Added: req.body.Date_Added,
    Target_Date: req.body.Target_Date,
    Status: req.body.Status,
    Design_Effort: req.body.Design_Effort,
    Estimated_Costs: req.body.Estimated_Costs,
    Priority: req.body.Priority,
    Approvals: req.body.Approvals,
    Completion_Date: req.body.Completion_Date,
    Notes_on_Completion_Results: req.body.Notes_on_Completion_Results,
    Status_Accepted_By_whom_and_Date: req.body.Status_Accepted_By_whom_and_Date,
    Executive_Reporting: req.body.Executive_Reporting,
    Customer: req.body.Customer,
    Actions: req.body.Actions
  });

  // Save Tutorial in the database
  Tickets.create(ticket, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Ticket.",
      });
    else res.send(data);
  });
  
};

// Retrieve all Tutorials from the database (with condition).
exports.findAll = (req, res) => {
    const Parent_ECR_No = req.query.Parent_ECR_No;
  
    Tickets.getAll(Parent_ECR_No, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tickets."
        });
      else res.send(data);
    });
  };

  // Find a single Tutorial with a id
  exports.findOne = (req, res) => {
    Tickets.findById(req.params.id, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Ticket with id ${req.params.id}.`
          });
        } else {
          res.status(500).send({
            message: "Error retrieving Ticket with id " + req.params.id
          });
        }
      } else res.send(data);
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
