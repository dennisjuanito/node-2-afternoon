require("dotenv").config();

module.exports = {
  create: (req, res, next) => {
    let dbInstance = req.app.get("db");
    let {name, description, price, imageurl } = req.body;
    dbInstance
      .create_product([name, description, price, imageurl])
      .then(response => {
        res.sendStatus(200);
      })
      .catch(err => {
        res.status(500).send({ error: "You have an error!" });
        console.log(err);
      });
  },
  getOne: (req, res, next) => {
    let dbInstance = req.app.get("db");
    dbInstance
      .read_product(req.params.id)
      .then(response => {
          
        res.status(200).send(response);
      })
      .catch(err => {
        res.status(500).send({ error: "You have an error!" });
        console.log(err);
      });
  },
  getAll: (req, res, next) => {
    let dbInstance = req.app.get("db");
    dbInstance
      .read_products()
      .then(response => {
        res.status(200).send(response);
      })
      .catch(err => {
        res.status(500).send({ error: "You have an error" });
        console.log(err);
      });
  },
  update: (req, res, next) => {
    let dbInstance = req.app.get("db");
    dbInstance
      .update_product([req.query.desc, req.params.id])
      .then(response => {
        res.sendStatus(200);
      })
      .catch(err => {
        res.status(500).send({ error: "you have an error!" });
        console.log(err);
      });
  },
  delete: (req, res, next) => {
    let dbInstance = req.app.get("db");
    dbInstance
      .delete_product(req.params.id)
      .then(response => {
        res.sendStatus(200);
      })
      .catch(err => {
        res.status(500).send({ err: "You have an error!" });
        console.log(err);
      });
  }
};
