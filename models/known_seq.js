module.exports = function(sequelize, DataTypes) {
    const KnownSeq = sequelize.define('KnownSeq', {
        name: {
            type: DataTypes.STRING,

        validate: {
            notEmpty:true
        }
        },
        info: {
            type: DataTypes.STRING,

        
        },
        seq: {
            type: DataTypes.STRING,
        }

    });
    return KnownSeq;
}