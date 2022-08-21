const cors = require("cors");

const client = require("./connection.js");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());
app.use(
  cors({
    origin: "*",
  })
);

app.use(
  express.urlencoded({
    extended: false,
  })
);

/////`Select * from customers`;
app.get("/api/users", (req, res) => {
  client.query(`SELECT * FROM customers;`, (err, result) => {
    if (!err) {
      res.send(result.rows);
      console.log(res);
    }
  });
  client.end;
});

///////// Create customer
app.post("/api/users/create", (req, res) => {
  // const { id } = req.params;
  let user = req.body;

  let insertQuery = `INSERT INTO customers (customer_id, name, email, town, country)
                      VALUES(${user.customer_id}, '${user.name}', '${user.email}', '${user.town}', '${user.country}')                    
  `;
  client.query(insertQuery, (err, result) => {
    if (!err) {
      res.send("Insertion was successful");
    } else {
      console.log(err.message);
    }
  });
  client.end;
});

// ////////// Delete 1 user
app.delete("/api/users/delete/:id", (req, res) => {
  const { id } = req.params;

  let updateQuery = `DELETE FROM customers WHERE customer_id = ${id}`;

  client.query(updateQuery, (err, result) => {
    if (!err) {
      res.send("Deleting was successful");
    } else {
      console.log(err.message);
    }
  });
  client.end;
});

// //////////// Update user
app.put("/api/users/update/:id", (req, res) => {
  let user = req.body;
  console.log(user);
  // let { id } = req.params;

  let updateQuery = `UPDATE customers
                     SET  customer_id = ${user.customer_id},
                     name = '${user.name}',
                     email = '${user.email}',
                     town = '${user.town}',
                     country = '${user.country}'
                     WHERE customer_id = ${user.customer_id}`;

  client.query(updateQuery, (err, result) => {
    if (!err) {
      res.send("Update was successful");
    } else {
      console.log(err.message);
    }
  });
  client.end;
});

app.listen(3300, () => {
  console.log("Sever is now listening at port 3300");
});
client.connect();
