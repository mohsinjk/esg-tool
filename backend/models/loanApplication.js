const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const loanApplicationSchema = new Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
    },
    phoneNo: {
      type: String,
    },
    thing: {
      type: String,
    },
    employment: {
      type: String,
    },
    livingStyle: {
      type: String,
    },
    salary: {
      type: String,
    },
    otherIncome: {
      type: String,
    },
    housingCost: {
      type: String,
    },
    amount: {
      type: String,
    },
    period: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const LoanApplication = mongoose.model(
  "LoanApplication",
  loanApplicationSchema
);

module.exports = LoanApplication;
