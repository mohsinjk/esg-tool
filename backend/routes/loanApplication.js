const router = require("express").Router();
const { isValidObjectId } = require("mongoose");
const multer = require("multer");
let Contact = require("../models/contact");
const LoanApplication = require("../models/loanApplication");
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public");
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + "-" + Date.now());
  },
});

var upload = multer({ storage: storage });

router.post("/loanApplications", async (req, res, next) => {
  try {
    const {
      name,
      email,
      phoneNo,
      thing,
      employment,
      livingStyle,
      salary,
      otherIncome,
      housingCost,
      amount,
      period,
    } = req.body;

    const loanApplication = new LoanApplication();

    if (name) loanApplication.name = name;
    if (email) loanApplication.email = email;
    if (phoneNo) loanApplication.phoneNo = phoneNo;
    if (thing) loanApplication.thing = thing;
    if (employment) loanApplication.employment = employment;
    if (period) loanApplication.period = period;
    if (livingStyle) loanApplication.livingStyle = livingStyle;
    if (salary) loanApplication.salary = salary;
    if (otherIncome) loanApplication.otherIncome = otherIncome;
    if (housingCost) loanApplication.housingCost = housingCost;
    if (amount) loanApplication.amount = amount;
    if (period) loanApplication.period = period;

    return res.json({
      contact: await loanApplication.save(),
    });
  } catch (error) {
    console.log(error);
  }
});

router.delete("/loanApplications/:id", async (req, res, next) => {
  try {
    res.json({
      contact: await Contact.deleteOne({ _id: req.params.id }),
    });
  } catch (error) {
    console.log(error);
  }
});

router.put("/loanApplications/:id", async (req, res, next) => {
  try {
    const contact = await Contact.findById(req.params.id);

    const {
      name,
      email,
      phoneNo,
      thing,
      employment,
      livingStyle,
      salary,
      otherIncome,
      housingCost,
      amount,
      period,
    } = req.body;

    if (name) loanApplication.name = name;
    if (email) loanApplication.email = email;
    if (phoneNo) loanApplication.phoneNo = phoneNo;
    if (thing) loanApplication.thing = thing;
    if (employment) loanApplication.employment = employment;
    if (period) loanApplication.period = period;
    if (livingStyle) loanApplication.livingStyle = livingStyle;
    if (salary) loanApplication.salary = salary;
    if (otherIncome) loanApplication.otherIncome = otherIncome;
    if (housingCost) loanApplication.housingCost = housingCost;
    if (amount) loanApplication.amount = amount;
    if (period) loanApplication.period = period;

    return res.json({
      contact: await contact.save(),
    });
  } catch (error) {}
});
router.get("/loanApplications", async (req, res, next) => {
  try {
    const searchField = req.query.name;
    console.log(searchField);

    let mongoQuery = {};
    if (searchField) {
      mongoQuery.name = new RegExp(searchField, "i");
    }
    const results = await LoanApplication.find(mongoQuery);

    return res.json({
      contacts: results,
    });
  } catch (error) {}
});

router.get("/loanApplications/:id", async (req, res, next) => {
  try {
    console.log(req.params.id);
    return res.json({
      contact: await Contact.findById(req.params.id),
    });
  } catch (error) {}
});

router.post("/upload", upload.single("image"), async (req, res, next) => {
  console.log("ye start hua", req.body);
  return res.json({
    path: req.file.filename,
  });
});

module.exports = router;
