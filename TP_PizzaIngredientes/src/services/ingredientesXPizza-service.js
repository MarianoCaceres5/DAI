import config from "../../dbconfig.js";
import sql from 'mssql';
import CopiaError from "../modules/log-helper.js";

export default class IngredientesXPizzaService {    
    getByIdPizza = async (id) =>{
        let returnEntity = null;
        console.log('GetIngredientesByIdPizza')
        try{
            let pool = await sql.connect(config);
            let result = await pool.request()                             
                .input('pId', sql.Int, id)
                .query(`SELECT Ingredientes.Nombre as Ingrediente, IngredientesXPizzas.Cantidad, Unidades.Nombre as Unidad from IngredientesXPizzas 
                inner join Ingredientes on Ingredientes.Id = IngredientesXPizzas.IdIngrediente
                inner join Unidades on Unidades.Id = IngredientesXPizzas.IdUnidad
                where IngredientesXPizzas.IdPizza = @pId`);
                returnEntity = result.recordsets[0];
        } catch (e){
            //console.log(e);
            CopiaError(e.toString() + " AT PizzaService/GetById");
        }
        return returnEntity;        
    }
}

