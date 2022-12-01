module.exports = (db) => {
  const difficultySchema = new db.Schema(
    {
      idUser: { type: db.Schema.Types.ObjectId, ref: 'Users' },
      level: { type: String, required: true }, // [enum_Difficulty]
    },
    {
      timestamps: true,
    },
  );
  return db.model('Difficulties', difficultySchema);
};