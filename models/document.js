'use strict';
module.exports = (sequelize, DataTypes) => {
  var Document = sequelize.define('Document', {
    subject: DataTypes.STRING,
    description: DataTypes.STRING,
    status: DataTypes.STRING,
    EmployeeId: DataTypes.INTEGER 
  });


  Document.associate = function (models) {
    
    models.Document.belongsTo(models.Employee, {
      onDelete: "CASCADE",
      foreignKey: {
        allowNull: false
      }
    });
    
    
    models.Document.belongsToMany(models.Category,{ 
      as: 'categories', 
      through: 'DocumentCategories',
      foreignKey: 'document_id'
    });
        
    models.Document.hasMany(models.Comment);
  };
  
  
  return Document;
};