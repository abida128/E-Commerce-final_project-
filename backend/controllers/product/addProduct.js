module.exports = (req, res, next) => {
  try {
    // const { name, price, detail, image, categories } = req.query.param;
    // if (!name || !price || !detail || !image || !categories) {
    //   return res.status(401).json({ message: "Data missing!" });
    // }
    if (req.file == undefined) {
      return res.status(400).json({ message: "Please uplaod file" });
    }

    const displayImg = req.file.filename;

    console.log(displayImg);
    res.status(200).json({ message: "add" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
