module.exports = (sequelize, DataTypes) => {
    const Item = sequelize.define('item',
        {
            name: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: { len: 3 }
            },
            description: {
                type: DataTypes.STRING,
                allowNull: false
            },
            picture: {
                type: DataTypes.STRING,
                allowNull: true
            }
        }
    );
    return Item;
};