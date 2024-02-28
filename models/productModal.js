const mongoose = require('mongoose')


const InfoSchema = new mongoose.Schema({
    NAME: {
        type: String,
        required: [true, "Please enter product name"],
    },
    ALTERNATE_NAME:{
        type: String,
    },
    INVOICE: {
        type: String,
        default: "NA"
    },

    LOT_ID: {
        type: String,
        default: "NA"
    },

    LOT_SIZE: {
        type: String,
        default: "NA"
    },
    DRUM_NO: {
        type: String,
        default: "NA"
    },
    CAS_NO: {
        type: String,
        default: "NA"
    },
    FEMA_NO: {
        type: String,
        default: "NA"
    },
    HS_CODE: {
        type: String,
        default: "NA"
    },
    P_O_NO: {
        type: String,
        default: "NA"
    },
    P_O_Date: {
        type: String,
        default: "NA"
    },
    // =====================
    REFRACTIVE_INDEX_20c: {
        type: String,
        default: "NA"
    },SPECIFIC_GRAVITY_20c: {
        type: String,
        default: "NA"
    },OPTICAL_ROTATION: {
        type: String,
        default: "NA"
    },ACID_VALUE: {
        type: String,
        default: "NA"
    },SOLUBILITY: {
        type: String,
        default: "NA"
    },CONGELING: {
        type: String,
        default: "NA"
    },PACKING: {
        type: String,
        default: "NA"
    },APPEARANCE: {
        type: String,
        default: "NA"
    },FLASH_POINT: {
        type: String,
        default: "NA"
    },MANUFACTURING_DATE: {
        type: String,
        default: "NA"
    },EXPIRY_DATE: {
        type: String,
        default: Date.now
    },ODOUR: {
        type: String,
        default: "NA"
    },PURITY: {
        type: String,
        default: "NA"
    },
    Date: {
        type: Date,
        default: Date.now
    }
})


module.exports = mongoose.model("products", InfoSchema);
