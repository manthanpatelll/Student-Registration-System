module.exports = (sequelize, DataTypes) => {
  const Course = sequelize.models.course;
  const Student = sequelize.models.student;

  const Registration = sequelize.define(
    "registration",
    {},
    { freezeTableName: true, timestamps: false }
  );
  Course.belongsToMany(Student, {
    through: Registration,
  });
  Student.belongsToMany(Course, {
    through: Registration,
  });

  return Registration;
};
