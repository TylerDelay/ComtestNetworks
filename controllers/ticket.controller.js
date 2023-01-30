const Sequelize = require("sequelize-v5");
const sequelize = require("../connection");
const Tickets = require("../models/ticket.model");
const { Op } = require("sequelize-v5");

//Sequelized create format
exports.createTicket = (req, res, next) => {
    const alias_etr_id = req.body.alias_etr_id;
    const etr_level = req.body.etr_level;
    const parent_etr = req.body.parent_etr;
    const title = req.body.title;
    const description = req.body.description;
    const etr_type = req.body.etr_type;
    const etr_subtype = req.body.etr_subtype;
    const eng_family = req.body.eng_family;
    const eng_family_model = req.body.eng_family_model;
    const reporter = req.body.reporter;
    const requestor_source = req.body.requestor_source;
    const requestor = req.body.requestor;
    const customer = req.body.customer;
    const assigned_to = req.body.assigned_to;
    const modified_by = req.body.modified_by;
    const priority = req.body.priority;
    const status = req.body.status;
    const sub_status = req.body.sub_status;
    const resolution = req.body.resolution;
    const rec_type = req.body.rec_type;
    const eco_record = req.body.eco_record;
    const child_etr_list = req.body.child_etr_list;
    const check_list = req.body.check_list;
    const comments = req.body.comments;
    const label = req.body.label;
    const etr_dependency = req.body.etr_dependency;
    const etr_duplicate = req.body.etr_duplicate;
    const etr_attachment = req.body.etr_attachment;
    // const ticketId = req.body.ticketId
   
  
    Tickets.create({
      alias_etr_id: alias_etr_id,
      etr_level: etr_level,
      parent_etr: parent_etr,
      title: title,
      description: description,
      etr_type: etr_type,
      etr_subtype: etr_subtype,
      eng_family: eng_family,
      eng_family_model: eng_family_model,
      reporter: reporter,
      requestor_source, requestor_source,
      requestor: requestor,
      customer: customer,
      assigned_to: assigned_to,
      modified_by: modified_by,
      priority: priority,
      status: status,
      sub_status: sub_status,
      resolution: resolution,
      rec_type: rec_type,
      eco_record: eco_record,
      child_etr_list: child_etr_list,
      check_list: check_list,
      comments: comments,
      label: label,
      etr_dependency: etr_dependency,
      etr_duplicate: etr_duplicate,
      etr_attachment: etr_attachment,
      //parent_id: req.ticket.id
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
    Tickets.findAll({include: ["children"]})
    .then(data => {
        res.json(data);
    }).catch(err => {
        console.log(err);
    });
  }
  // Sequelized Find a single Tutorial with a id
  exports.findOneTicket = (req, res) => {
    const id = req.params.id;
    const ticketEtr_id = req.params.etr_id

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


