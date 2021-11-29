const mongoose = require('mongoose')

const patientNewSchema = mongoose.Schema({

    profile_img_url: {
        type: String
    },

    khid: {
        type: String
    },

    cid: {
        type: String
    },

    name: {
        type: String
    },

    zone1: [
        {
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
            }
        }
    ],

    zone2: [
        {
            disease: {
                type: String
            },
        
            treatment: {
                type: String
            },
        
            outcome: {
                type: String
            },
        
            tumor_marker: {
                type: String
            }
        }
    ]

    
})

module.exports = mongoose.model('PatientNew', patientNewSchema)