// const config = {
//     user : 'Pizzas',
//     password:  'Pizzas',
//     server : "DESKTOP-N1MNC7R" + "\SQLEXPRESS",
//     database : 'DAI-Pizzas',
//     options : {
//         trustServerCertificate : true,
//         trustedConnection : true
//     }
// }

// export default config;

import 'dotenv/config'

const config = {
    user : process.env.DB_USER,
    password : process.env.DB_PASSWORD,
    server : process.env.DB_SERVER,
    database : process.env.DB_DATABASE,
    options : {
        trustServerCertificate : true,
        trustedConnection : true
    }
}
export default config;

//Server[@Name='DESKTOP-N1MNC7R\SQLEXPRESS']/Database[@Name='DAI-Pizzas']/Table[@Name='Pizzas' and @Schema='dbo']/Data

