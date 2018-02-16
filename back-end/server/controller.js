module.exports = {


  getShelf: (req, res, next) => {
    console.log("Getting shelf");
    const dbInstance = req.app.get('db');

    dbInstance.get_shelf({shelfid: req.params.id})
      .then((bin) => res.status(200).send(bin))

  },

  getBin: (req, res, next) => {
    console.log("Getting bin");
    const dbInstance = req.app.get('db');

    dbInstance.get_bin({binid: req.params.id})
      .then((bin) => res.status(200).send(bin))
      .catch(() => res.status(500).send())
  },

  // updateBin: (req, res, next) => {
  //   console.log("Updating bin");
  //   const dbInstance = req.app.get('db');
  //
  //   dbInstance.update_bin({binid: req.params.id})
  //     .then((bin) => res.status)
  // },
  //
  // deleteBin: (req, res, next) => {
  //   console.log("Deleting bin");
  //   const dbInstance = req.app.get('db');
  //
  //   dbInstance.
  // },

  createBin: (req, res, next) => {
    console.log("Creating bin", req.body);
    const dbInstance = req.app.get('db');

    dbInstance.create_bin(req.body)
      .then(() => res.status(200).send())
      .catch((err) => console.log(err))
  }
}
