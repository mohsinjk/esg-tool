const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const esgApplicationSchema = new Schema(
  {
    AR_ID: {
      type: String,
    },
    AR_DESCRIPTION: {
      type: String,
    },
    AR_SEB_SUST_PROD_TP: {
      type: String,
    },
    SUST_AREA_TP: {
      type: String,
    },
    SUST_APPROVAL_AUTHORITY_NAME: {
      type: String,
    },
    SUST_APPROVAL_AUTHORITY_DATE: {
      type: String,
    },
    SEB_GBF_VERSION_TP: {
      type: String,
    },
    SEB_GBF_ASSET_CNTRY_CODE: {
      type: String,
    },
    SEB_GBF_FINANCING_TP: {
      type: String,
    },
    SEB_GBF_CATEGORY_TP: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const EsgApplication = mongoose.model(
  "EsgApplication",
  esgApplicationSchema
);

module.exports = EsgApplication;