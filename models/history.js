const { DataTypes, Model } = require("sequelize");
let dbConnect = require("../dbConnect");

//const History = require('./history');
const Patient = require("./patient");

const sequelizeInstance = dbConnect.Sequelize;
class History extends Model { }

History.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false, 
        autoIncrement: true, 
        primaryKey: true
    },
    patientId: {
        type: DataTypes.INTEGER, 
        references: {
            model: Patient,
            key: 'id'
        }
    },
    callNotes: {
        type: DataTypes.STRING, 
        allowNull: false, 
        required: true
    },
    transport: {
        type: DataTypes.STRING, 
        allowNull: false, 
        required: true
    },
    date: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    time: {
        type: DataTypes.STRING,
        allowNull: true
    }},
    {
        sequelize: sequelizeInstance, 
        modelName: 'histories', 
        timestamps: true, 
        freezeTableName: true
    }
)

History.belongsTo(Patient);

module.exports = History;