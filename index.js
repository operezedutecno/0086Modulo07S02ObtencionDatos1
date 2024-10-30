const { Pool } = require("pg");

const conectorPool = new Pool({
    host: 'localhost',
    port: 5432,
    database: 'dvdrental',
    user: 'postgres',
    password: 'postgres'
});

// Ejemplo Asíncrono
// conectorPool.query("SELECT ciudad from city LIMIT 10", (err, result) => {
//     if(err) return console.log(err.message);
//     console.table(result.rows);
// })
// console.log("Posterior a la consulta");
// Fin Ejemplo Asíncrono



// Ejemplo Síncrono
// (async() => {
//     try {
//         const result = await conectorPool.query("SELECT * FROM city LIMIT 10");
//         console.table(result.rows);
//     } catch (error) {
//         console.log(error);
//     }
    
// })()



// Consulta concatenando strings (No recomendado).
// (async() => {
//     const nombre = "José";
//     const apellido = "Martínez";

//    const consulta = `INSERT INTO actor(first_name, last_name) VALUES('${nombre}','${apellido}')`;

//     const result = await conectorPool.query(consulta);
//     console.table(result.rows);
// })()



// Consultas Parametrizadas
// (async() => {
//     const result = conectorPool.query("INSERT INTO actor(first_name, last_name) VALUES($1, $2)", ["María","Roa"])
// })()


// Consultas con JSON como argumento
// (async() => {
//     const arguments = {
//         text:"INSERT INTO actor(first_name, last_name) VALUES($1, $2)",
//         values: ["Juan", "Medina"]
//     }

//     await conectorPool.query(arguments)
//     console.log("Registro exitoso");
// })()


// Modo Fila y Arreglo.

(async() => {
    const arguments = {
        text: "SELECT * FROM actor LIMIT $1",
        values: [10],
        rowMode: "array" // array - row
    }

    const result = await conectorPool.query(arguments);
    console.log(result.rows);
})()








