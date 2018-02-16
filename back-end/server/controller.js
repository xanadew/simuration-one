module.exports = {


  getShelf: (req, res, next) => {
    console.log("gettin dat shelf");
    const dbInstance = req.app.get('db');

    dbInstance.get_shelf({shelfid: req.params.id})
      .then((bin) => res.status(200).send(bin))

  },

  getBin: (req, res, next) => {
    console.log("gettin dat bin");
    const dbInstance = req.app.get('db');

    dbInstance.get_bin({binid: req.params.id})
      .then((bin) => res.status(200).send(bin))
      .catch(() => res.status(500).send())
  },

  updateBin: (req, res, next) => {
    console.log("updatin dat bin");
    const dbInstance = req.app.get('db');
  
    dbInstance.update_bin({binid: req.params.id})
      .then((bin) => res.status.status(200).send(bin))
      .catch(()=> res.status(500).send())
  },
  
  deleteBin: (req, res, next) => {
    console.log("deletin dat bin");
    const dbInstance = req.app.get('db');
  
    dbInstance.delete_bin({binid: req.params.id})
        .then((bin) => res.status(200).send())
       .catch(() => res.status(500).send())
  },

  createBin: (req, res, next) => {
    console.log("creatin dat bin", req.body);
    const dbInstance = req.app.get('db');

    dbInstance.create_bin(req.body)
      .then(() => res.status(200).send())
      .catch((err) => console.log(err))
  }
}
