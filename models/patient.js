module.exports = function(sequelize, DataTypes) {
    const PatientData = sequelize.define('PatientData', {
        name: {
            type: DataTypes.STRING,
        validate: {
            notEmpty:true
        }
    },
    birthdate: {
        type: DataTypes.STRING,

        validate: {
            notEmpty: true
        }
    },
    info: {
        type: DataTypes.STRING,
    },
    seq:{
        type: DataTypes.STRING,
    }

    });
    return PatientData;
}