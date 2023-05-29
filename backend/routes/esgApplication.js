const router = require("express").Router();
const { isValidObjectId } = require("mongoose");
const multer = require("multer");
let Contact = require("../models/contact");
const EsgApplication = require("../models/esgApplication");
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public");
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + "-" + Date.now());
  },
});

var upload = multer({ storage: storage });

router.post("/esgApplications", async (req, res, next) => {
  try {
    const {
      AR_ID,
      AR_DESCRIPTION,
      AR_SEB_SUST_PROD_TP,
      SUST_AREA_TP,
      SUST_APPROVAL_AUTHORITY_NAME,
      SUST_APPROVAL_AUTHORITY_DATE,
      SEB_GBF_VERSION_TP,
      SEB_GBF_ASSET_CNTRY_CODE,
      SEB_GBF_FINANCING_TP,
      SEB_GBF_CATEGORY_TP,
    } = req.body;

    const esgApplication = new EsgApplication();

    if (AR_ID) esgApplication.AR_ID = AR_ID;
    if (AR_DESCRIPTION) esgApplication.AR_DESCRIPTION = AR_DESCRIPTION;
    if (AR_SEB_SUST_PROD_TP) esgApplication.AR_SEB_SUST_PROD_TP = AR_SEB_SUST_PROD_TP;
    if (SUST_AREA_TP) esgApplication.SUST_AREA_TP = SUST_AREA_TP;
    if (SUST_APPROVAL_AUTHORITY_NAME) esgApplication.SUST_APPROVAL_AUTHORITY_NAME = SUST_APPROVAL_AUTHORITY_NAME;
    if (SUST_APPROVAL_AUTHORITY_DATE) esgApplication.SUST_APPROVAL_AUTHORITY_DATE = SUST_APPROVAL_AUTHORITY_DATE;
    if (SEB_GBF_VERSION_TP) esgApplication.SEB_GBF_VERSION_TP = SEB_GBF_VERSION_TP;
    if (SEB_GBF_ASSET_CNTRY_CODE) esgApplication.SEB_GBF_ASSET_CNTRY_CODE = SEB_GBF_ASSET_CNTRY_CODE;
    if (SEB_GBF_FINANCING_TP) esgApplication.SEB_GBF_FINANCING_TP = SEB_GBF_FINANCING_TP;
    if (SEB_GBF_CATEGORY_TP) esgApplication.SEB_GBF_CATEGORY_TP = SEB_GBF_CATEGORY_TP;

    return res.json({
      contact: await esgApplication.save(),
    });
  } catch (error) {
    console.log(error);
  }
});

router.delete("/esgApplications/:id", async (req, res, next) => {
  try {
    res.json({
      contact: await EsgApplication.deleteOne({ _id: req.params.id }),
    });
  } catch (error) {
    console.log(error);
  }
});

router.put("/esgApplications/:id", async (req, res, next) => {
  try {
    const esgApplication = await EsgApplication.findById(req.params.id);

    const {
      AR_ID,
      AR_DESCRIPTION,
      AR_SEB_SUST_PROD_TP,
      SUST_AREA_TP,
      SUST_APPROVAL_AUTHORITY_NAME,
      SUST_APPROVAL_AUTHORITY_DATE,
      SEB_GBF_VERSION_TP,
      SEB_GBF_ASSET_CNTRY_CODE,
      SEB_GBF_FINANCING_TP,
      SEB_GBF_CATEGORY_TP,
    } = req.body;

    if (AR_ID) esgApplication.AR_ID = AR_ID;
    if (AR_DESCRIPTION) esgApplication.AR_DESCRIPTION = AR_DESCRIPTION;
    if (AR_SEB_SUST_PROD_TP) esgApplication.AR_SEB_SUST_PROD_TP = AR_SEB_SUST_PROD_TP;
    if (SUST_AREA_TP) esgApplication.SUST_AREA_TP = SUST_AREA_TP;
    if (SUST_APPROVAL_AUTHORITY_NAME) esgApplication.SUST_APPROVAL_AUTHORITY_NAME = SUST_APPROVAL_AUTHORITY_NAME;
    if (SUST_APPROVAL_AUTHORITY_DATE) esgApplication.SUST_APPROVAL_AUTHORITY_DATE = SUST_APPROVAL_AUTHORITY_DATE;
    if (SEB_GBF_VERSION_TP) esgApplication.SEB_GBF_VERSION_TP = SEB_GBF_VERSION_TP;
    if (SEB_GBF_ASSET_CNTRY_CODE) esgApplication.SEB_GBF_ASSET_CNTRY_CODE = SEB_GBF_ASSET_CNTRY_CODE;
    if (SEB_GBF_FINANCING_TP) esgApplication.SEB_GBF_FINANCING_TP = SEB_GBF_FINANCING_TP;
    if (SEB_GBF_CATEGORY_TP) esgApplication.SEB_GBF_CATEGORY_TP = SEB_GBF_CATEGORY_TP;

    return res.json({
      contact: await esgApplication.save(),
    });
  } catch (error) { }
});
router.get("/esgApplications", async (req, res, next) => {
  try {
    const searchField = req.query.name;
    console.log("get", searchField);

    let mongoQuery = {};
    if (searchField) {
      mongoQuery.name = new RegExp(searchField, "i");
    }
    const results = await EsgApplication.find(mongoQuery);
    console.log("results", results);

    return res.json({
      esgApplications: results,
    });
  } catch (error) { }
});

router.get("/esgApplications/:id", async (req, res, next) => {
  try {
    console.log("my id ", req.params.id);
    return res.json({
      esgApplication: await EsgApplication.findById(req.params.id),
    });
  } catch (error) { }
});

router.post("/upload", upload.single("image"), async (req, res, next) => {
  console.log("ye start hua", req.body);
  return res.json({
    path: req.file.filename,
  });
});

module.exports = router;
