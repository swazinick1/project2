module.exports = function(sequelize, DataTypes) {
    const Users = sequelize.define("Users", {
        name: {
            type: DataTypes.STRING,
        },
        password: {
            type: DataTypes.STRING
        },
    },{timestamps:false});
    return Users;
}