var express = require("express");
var router = express.Router();


//import models
const Patient = require("../models/patient");
const verifyToken = require("../middleware/verify-token");

//get patients
router.get("/", async function (req, res) {
    try {
        const patients = await Patient.find();
        res.status(200).json(patients);
    } catch (err) {
        res.status(500).json({ error: err });
    }
});

//get patient by id
router.get("/:id", async function (req, res) {
    try {
        const patient = await Patient.findById(req.params.id);
        res.status(200).json(patient);
    } catch (err) {
        res.status(500).json({ error: err });
    }
});


//get patient by khid
router.get("/khid/:khid", async function (req, res) {
    try {
        const patient = await Patient.findOne({khid: req.params.khid});
        res.status(200).json(patient);
    } catch (err) {
        res.status(500).json({ error: err });
    }
});



//new patient
router.post("/new", async function (req, res) {

        const patient = new Patient({
            profile_img_url : req.body.profile_img_url ,
            khid: req.body.khid,
            cid: req.body.cid,
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            dob: req.body.dob,
            blood_group: req.body.blood_group,
            contact_no: req.body.contact_no,
            location: req.body.location,
            allergies: req.body.allergies,
            stage: req.body.stage,
            dmg: req.body.dmg,
            disease: req.body.disease,
            treatment: req.body.treatment,
            outcome: req.body.outcome,
            tumour_marker: req.body.tumour_marker,
        });

        try {
            const savedPatient = await patient.save();
            res
                .status(200)
                .json({ message: "success", additional_info: "patient saved" });
        }
        catch (err) {
            res.status(500).json({ error: err });
        }
});



//delete a patient
router.delete("/:id/delete", async function (req, res) {
    try {
        const removedPatient = await Patient.remove({ _id: req.params.id });
        res
            .status(200)
            .json({ message: "success", additional_info: "patient deleted" });
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;