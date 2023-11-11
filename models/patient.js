const { DataTypes, Model } = require("sequelize");
let dbConnect = require("../dbConnect");

const User = require('./user');

const sequelizeInstance = dbConnect.Sequelize;
class Patient extends Model { }



Patient.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false, 
        autoIncrement: true, 
        primaryKey: true
    },
    emsId: {
        type: DataTypes.INTEGER, 
        references: {
            model: User,
            key: 'id'
        }
    },
    firstName: {
        type: DataTypes.STRING, 
        allowNull: false, 
        required: true
    },
    lastName: {
        type: DataTypes.STRING, 
        allowNull: false, 
        required: true
    },
    address: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    city: {
        type: DataTypes.STRING,
        allowNull: true
    },
    state: {
        type: DataTypes.STRING,
        allowNull: true
    },
    zipcode: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    phone: {
        type: DataTypes.INTEGER, 
        allowNull: true, 
    }},
    {
        sequelize: sequelizeInstance, 
        modelName: 'patients', 
        timestamps: true, 
        freezeTableName: true
    }
)

Patient.belongsTo(User);

module.exports = Patient;