export default function formulario() {
  return async (req, res) => {
    res.json([
      { id: 1, nombre: "Juan" },
      { id: 2, nombre: "Maria" },
    ]);
  };
}
