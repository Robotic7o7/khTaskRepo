const mongoose = require('mongoose')

const patientSchema = mongoose.Schema({

    profile_img_url: {
        type: String
    },

    khid: {
        type: String
    },

    cid: {
        type: String
    },

    first_name: {
        type: String
    },

    last_name: {
        type: String
    },

    dob: {
        type: String
    },

    blood_group: {
        type: String
    },

    contact_no: {
        type: String
    },

    location: {
        type: String
    },

    allergies: {
        type: String
    },

    stage: {
        type: String
    },

    dmg: {
        type: String
    },

    disease: [
        {
            data: {
                type: String
            }
        }
    ],

    treatment: [
        {
            data: {
                type: String
            }
        }
    ],

    outcome: [
        {
            data: {
                type: String
            }
        }
    ],

    tumour_marker: [
        {
            data: {
                type: String
            }
        }
    ]

})

module.exports = mongoose.model('Patient', patientSchema)