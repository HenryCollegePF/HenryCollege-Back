const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define("Membership", {
        id: { // viene de la pasarela de pagos
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        date: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        pricePaid: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        paymentId: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        expirationDate: {
            type: DataTypes.DATE,
            allowNull: false,      
        }
    })
}