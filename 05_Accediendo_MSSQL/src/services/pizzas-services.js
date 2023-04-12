import config from "../../dbconfig.js";
import sql from 'mssql';

export default class PizzaService {
    getAll = async () =>{
        let listaPizzas = null;
        console.log('GetAll')
        try{
            let pool = await sql.connect(config);
            let result = await pool.request()
                .query('SELECT * FROM Pizzas');
            listaPizzas = result.recordsets[0];
        } catch (e){
            console.log(e);
        }
        //console.log(listaPizzas);
        return listaPizzas;
        
    }

    getById = async (id) =>{
        let returnPizza = null;
        console.log('GetById')
        try{
            let pool = await sql.connect(config);
            let result = await pool.request()
                .input('pId', sql.Int, id)
                .query('SELECT * FROM Pizzas WHERE Id = @pId');
            returnPizza = result.recordsets[0][0]; // devuelve el primer elemento del primer request del query
        } catch (e){
            console.log(e);
        }
        return returnPizza;
        // console.log(returnPizza)
    }

    insert = async (pizza) =>{

    }

    update = async (pizza) => {

    }

    deleteById = async (id) => {
        let rowsAffected = 0;
        console.log('DeleteById')
        try{
            let pool = await sql.connect(config);
            let result = await pool.request()
                .input('pId', sql.Int, id) // input (name, [type], value) - Agrega un parámetro de entrada al request.
                .query('DELETE FROM Pizzas WHERE Id = @pId');
            rowsAffected = result.rowsAffected; // devuelve la cantidad de registros afectados (1 en caso de haberse eliminado correctamente la pizza)
        } catch (e){
            console.log(e);
        }
        return rowsAffected;
    }
}

