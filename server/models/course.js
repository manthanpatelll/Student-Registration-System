module.exports = (sequelize, DataTypes) => {
  const Course = sequelize.define(
    "course",
    {
      course_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: { msg: "Please enter value" },
        },
      },
      course_capacity: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      course_start_date: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      course_end_date: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      has_prerequisites: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
    },
    { freezeTableName: true, timestamps: false }
  );

  return Course;
};
