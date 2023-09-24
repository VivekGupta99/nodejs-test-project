const path = require('path');
const db = require(path.join(__dirname + '/db.config'));
const Company = db.companies;

function addCompany(req, res) {
    // if (!req.body) {
    //     return res.status(400).send({
    //         message: "Bad Data"
    //     })
    // }

    const obj = {
        companyName: req.body.companyName,
        pros: req.body.pros,
        cons: req.body.cons,
        rating: req.body.rating
    }

    Company.create(obj)
        .then((data) => {
            res.status(200).send(data)
        }).catch(err => {
            res.status(500).send(err);
        })
}

async function ratingData(req, res) {
    if (!req.body) {
        return res.status(400).send({
            message: "Nothing to search"
        })
    }

    try {
        const CN = req.body.companyName;
        const company = await Company.findAll({ where: { companyName: CN } });

        if (company) {
            res.status(200).send(company);
        } else {
            res.status(404).send("Company not found");
        }
    } catch (err) {
        console.log(err)
        res.status(500).send(err);
    }

}



async function gettingData(req, res) {
    try {
        const data = await Company.findAll();
        if (data) {
            res.status(200).send(data);
        } else {
            res.status(404).send("Company not found");
        }
    } catch (err) {
        // console.log(err)
        res.status(501).send(err);
    }



    // Company.findAll().then(data => {
    //     res.status(200).send(data);
    // }).catch(err => {
    //     res.status(501).send(err);
    // })
}

async function showOnScreen(req, res) {
    try {
        const data = await Company.findAll({ where: { companyName: req.body.companyName } });
        if (data) {
            console.log("data:", data)
            res.status(200).send(data);
        } else {
            res.status(404).send("Company not found");
        }
    } catch (err) {
        console.log(err)
        res.status(501).send(err);
    }
}

module.exports = { addCompany, gettingData, ratingData, showOnScreen }