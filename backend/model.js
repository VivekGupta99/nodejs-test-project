
module.exports = (sequelize, Sequelize) => {

    const companies = sequelize.define('companies', {

        companyName: {
            type: Sequelize.STRING,

        },
        pros: {
            type: Sequelize.STRING
        },
        cons: {
            type: Sequelize.STRING
        },
        rating: {
            type: Sequelize.INTEGER
        },
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        }
    })
    return companies;
}