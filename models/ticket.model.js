const Sequelize = require('sequelize-v5');
const sequelize = require('../connection');

const Tickets = sequelize.define('tickets', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  title: Sequelize.STRING,
  price: {
    type: Sequelize.DOUBLE,
    allowNull: false
  },
  imageUrl: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

module.exports = Tickets;

// const { strictEqual } = require("assert");
// const sql = require("../connection.js");

// const Tickets = function (tickets) {
//   this.Parent_ECR_No = tickets.Parent_ECR_No;
//   this.Eng_Family = tickets.Eng_Family;
//   this.ECN_Pc_MRP = tickets.ECN_Pc_MRP;
//   this.ECO_Approved = tickets.ECO_Approved;
//   this.Internal_Design_ECR_Only = tickets.Internal_Design_ECR_Only;
//   this.NPR_PP_or_DD = tickets.NPR_PP_or_DD;
//   this.NPI = tickets.NPI;
//   this.Task = tickets.Task;
//   this.OPEN_PROTO_CLOSED_INACTIVE_DUPLICATE_PROTO = tickets.OPEN_PROTO_CLOSED_INACTIVE_DUPLICATE_PROTO;
//   this.ID_CHILD = tickets.ID_CHILD;
//   this.Brief_Name = tickets.Brief_Name;
//   this.ETR_Type = tickets.ETR_Type;
//   this.Part = tickets.Part;
//   this.Link_to_change_request_form = tickets.Link_to_change_request_form;
//   this.Source = tickets.Source;
//   this.Owner = tickets.Owner;
//   this.Date_Added = tickets.Date_Added;
//   this.Target_Date = tickets.Target_Date;
//   this.Status = tickets.Status;
//   this.Design_Effort = tickets.Design_Effort;
//   this.Estimated_Costs = tickets.Estimated_Costs;
//   this.Priority = tickets.Priority;
//   this.Approvals = tickets.Approvals;
//   this.Completion_Date = tickets.Completion_Date;
//   this.Notes_on_Completion_Results = tickets.Notes_on_Completion_Results;
//   this.Status_Accepted_By_whom_and_Date = tickets.Status_Accepted_By_whom_and_Date;
//   this.Executive_Reporting = tickets.Executive_Reporting;
//   this.Customer = tickets.Customer;
//   this.Actions = tickets.Actions;
// };

// //Create new ticket
// Tickets.create = (newTicket, result) => {
//   sql.query("INSERT INTO tickets SET ?", newTicket, (err, res) => {
//     if (err) {
//       console.log("Error creating a new ticket: ", err);
//       result(err, null);
//       return;
//     }
//     console.log("created Ticket: ", { id: res.insertId, ...newTicket });
//     result(null, { id: res.insertId, ...newTicket });
//   });
// };

// Tickets.findById = (id, result) => {
//     sql.query(`SELECT * FROM tickets WHERE id = ${id}`, (err, res) => {
//       if (err) {
//         console.log("error: ", err);
//         result(err, null);
//         return;
//       }
  
//       if (res.length) {
//         console.log("found ticket: ", res[0]);
//         result(null, res[0]);
//         return;
//       }
  
//       // not found Tutorial with the id
//       result({ kind: "not_found" }, null);
//     });
//   };
  
// //Retrieve All Tickets
// Tickets.getAll = (Parent_ECR_No, result) => {
//     let query = "SELECT * FROM tickets";
  
//     if (Parent_ECR_No) {
//       query += ` WHERE Parent_ECR_No LIKE '%${Parent_ECR_No}%'`;
//     }
  
//     sql.query(query, (err, res) => {
//       if (err) {
//         console.log("error: ", err);
//         result(null, err);
//         return;
//       }
  
//       console.log("tickets: ", res);
//       result(null, res);
//     });
//   };

//   Tickets.updateById = (id, ticket, result) => {
//     sql.query(
//       "UPDATE tickets SET Parent_ECR_No = ?, Owner = ? WHERE id = ?",
//       [ticket.Parent_ECR_No, ticket.Owner, id],
//       (err, res) => {
//         if (err) {
//           console.log("error: ", err);
//           result(null, err);
//           return;
//         }
  
//         if (res.affectedRows == 0) {
//           // not found Ticket with the id
//           result({ kind: "not_found" }, null);
//           return;
//         }
  
//         console.log("updated ticket: ", { id: id, ...ticket });
//         result(null, { id: id, ...ticket });
//       }
//     );
//   };
  
//   Tickets.remove = (id, result) => {
//     sql.query("DELETE FROM tickets WHERE id = ?", id, (err, res) => {
//       if (err) {
//         console.log("error: ", err);
//         result(null, err);
//         return;
//       }
  
//       if (res.affectedRows == 0) {
//         // not found Tutorial with the id
//         result({ kind: "not_found" }, null);
//         return;
//       }
  
//       console.log("deleted ticket with id: ", id);
//       result(null, res);
//     });
//   };
  
//   Tickets.removeAll = result => {
//     sql.query("DELETE FROM tickets", (err, res) => {
//       if (err) {
//         console.log("error: ", err);
//         result(null, err);
//         return;
//       }
  
//       console.log(`deleted ${res.affectedRows} tickets`);
//       result(null, res);
//     });
//   };
  
// module.exports = Tickets;
