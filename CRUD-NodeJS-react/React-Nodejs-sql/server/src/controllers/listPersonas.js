import pool from "./database.js";

// function list() {
//   return async (req, res) => {
//     try {
//       const [result] = await pool.query("SELECT * FROM personas");
//       console.log(result);
//     } catch (err) {
//       res.status(500).json({ message: err.message });
//     }
//   };
// }

const userQueries = {
  listUsers: async (req, res) => {
    try {
      const [result] = await pool.query("SELECT * FROM personas");
      res.json(result);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },
  addUsers: async (req, res) => {
    const { name, lastName, age } = req.body;
    try {
      await pool.query(
        "INSERT INTO personas (name, last_name, age) VALUES (?,?,?)",
        [name, lastName, age]
      );
      res.status(200).send("Usuario agregado correctamente");
    } catch (err) {
      console.error("Error al insertar:", err);
      res.status(500).send("Error al insertar datos");
    }
  },
  deleteUser: async (req, res) => {
    const { id } = req.params;
    await pool.query("DELETE FROM personas WHERE id = ?", [id]);
    try {
      res.status(200).send("El usuario ha sido eliminado con exito");
    } catch (err) {
      res.status(404).send("Usuario no encontrado...", err);
    }
  },
  updateUser: async (req, res) => {
    console.log("Buenas");
    const { id } = req.params;
    const { name, lastName, age } = req.body;
    console.log("Buenas", req);
    const [user] = await pool.query("SELECT * FROM personas WHERE id = ?", [
      id,
    ]);
    if (user.length === 0)
      return res.status(404).res.send("Usuario no encontrado");

    const current = user[0];
    try {
      await pool.query(
        "UPDATE personas SET name = ?, last_name = ?, age = ? WHERE id = ?",
        [
          name ?? current.name,
          lastName ?? current.lastName,
          age ?? current.age,
          id,
        ]
      );
      res.status(200).send("Usuario editado con exito");
    } catch (err) {
      console.log(err);
      res.status(404).send("Error al actualizar la información", err);
    }
  },
  getUserByID: async (req, res) => {
    const { id } = req.params;
    try {
      const [result] = await pool.query("SELECT * FROM personas WHERE id = ?", [
        id,
      ]);

      res.json(result[0]);

      // res.status(200).send("Usuario mostrado con exito");
    } catch (error) {
      res.status(404).send("Usuario no encontrado");
    }
  },
};

export default userQueries;

function sumar(a, b) {
  return a + b;
}

sumar(2, 3);
