import config from "../../dbconfig.js";
import sql from 'mssql';
import CopiaError from "../modules/log-helper.js";
import UnidadesService from "./unidades-service.js";

export default class IngredientesXPizzaService {    
    getByIdPizza = async (id, traerUnidades) =>{
        let returnEntity = null;
        console.log('GetIngredientesByIdPizza')
        try{
            let pool = await sql.connect(config);
            let result = await pool.request()                             
                .input('pId', sql.Int, id)
                .query(`SELECT Ingredientes.Nombre as Ingrediente, IngredientesXPizzas.Cantidad, Unidades.Nombre as Unidad, Unidades.Id as IdUnidad from IngredientesXPizzas 
                inner join Ingredientes on Ingredientes.Id = IngredientesXPizzas.IdIngrediente
                inner join Unidades on Unidades.Id = IngredientesXPizzas.IdUnidad
                where IngredientesXPizzas.IdPizza = @pId`);
                
                returnEntity = result.recordsets[0];

                if(traerUnidades){                    
                    let svcUnidades = new UnidadesService();
                    for(let i = 0; i < returnEntity.length; i++){
                        returnEntity[i].Unidad = await svcUnidades.getById(returnEntity[i].IdUnidad);         
                        returnEntity[i].IdUnidad = undefined               
                    }                        
                }

                for(let i = 0; i < returnEntity.length; i++){  
                    returnEntity[i].IdUnidad = undefined;       
                }  

        } catch (e){
            //console.log(e);
            CopiaError(e.toString() + " AT IngredientesXPizza/GetByIdPizza");
        }
        return returnEntity;        
    }

    getAll = async () =>{
        let returnEntity = null;
        console.log('GetAllIngredientesPorPizza')
        try{
            let pool = await sql.connect(config);
            let result = await pool.request()
                .query(`SELECT Pizzas.Nombre as Pizza, Ingredientes.Nombre as Ingrediente, IngredientesXPizzas.Cantidad, Unidades.Nombre as Unidad from IngredientesXPizzas 
                inner join Ingredientes on Ingredientes.Id = IngredientesXPizzas.IdIngrediente
                inner join Unidades on Unidades.Id = IngredientesXPizzas.IdUnidad
                inner join Pizzas on Pizzas.Id = IngredientesXPizzas.IdPizza`);
                returnEntity = result.recordsets[0];
        } catch (e){
            //console.log(e);
            CopiaError(e.toString() + " AT IngredientesXPizza/GetAll");
        }
        return returnEntity;        
    }

    // PREGUNTAR COMO SERIA UN INSERT
}

