module.exports = mongoose => {
  var publicationSchema = mongoose.Schema(
    {
      authors: [String],
      title: String,
      pages: String,
      year: Number,
      type: String,
    },
    { timestamps: true }
  );

  const Publication = mongoose.model('Publication', publicationSchema);
  return Publication;
};
