const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.

module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "Product",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },

      nameProduct: {
        type: DataTypes.STRING,
      },

      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },

      sellingPrice: {
        type: DataTypes.FLOAT,
      },

      average_rating: {
        type: DataTypes.FLOAT,
      },

      availability: {
        type:DataTypes.JSONB,
      },

      category: {
        type: DataTypes.STRING,
      },

      breadcrumbs: {
        type: DataTypes.STRING,
      },

        reviews_count: {
          type: DataTypes.FLOAT,
        },

        images: {
          type: DataTypes.ARRAY(DataTypes.STRING),
          //allowNull: false,
        },
        totalAvailability:{
          type: DataTypes.INTEGER,
        },
      },
    {
      timestamps: false,
    }
  );
};
