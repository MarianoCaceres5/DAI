import config from "../../dbconfig.js";
import sql from 'mssql';
import CopiaError from "../modules/log-helper.js";

export default class IngredientesService {    
    getAll = async () =>{
        let listaIngredientes = null;
        console.log('GetIngredientes')
        try{
            let pool = await sql.connect(config);
            let result = await pool.request() 
                .query(`SELECT * FROM Ingredientes`);
                listaIngredientes = result.recordsets[0];
        } catch (e){
            //console.log(e);
            CopiaError(e.toString() + " AT IngredientesService/GetAll");
        }
        return listaIngredientes;        
    }

    getById = async (id) =>{
        let returnIngrediente = null;
        console.log('GetIngredienteById')
        try{
            let pool = await sql.connect(config);
            let result = await pool.request() 
                .input('pId', sql.Int, id)
                .query(`SELECT * FROM Ingredientes WHERE Id = @pId`);
                returnIngrediente = result.recordsets[0];
        } catch (e){
            //console.log(e);
            CopiaError(e.toString() + " AT IngredientesService/GetById");
        }
        return returnIngrediente;        
    }


    insert = async (ingrediente) =>{
        let rowsAffected = 0;
        console.log('InsertIngrediente')
        try{
            let pool = await sql.connect(config);
            let result = await pool.request() 
                .input('nombre', sql.VarChar, ingrediente.nombre)
                .query(`INSERT INTO Ingredientes (Nombre) VALUES(@nombre)`);
                rowsAffected = result.rowsAffected;
        } catch (e){
            //console.log(e);
            CopiaError(e.toString() + " AT IngredientesService/Insert");
        }
        return rowsAffected;        
    }

    update = async (ingrediente) => {
        let rowsAffected = 0;
        console.log('UpdateIngrediente')
        try{
            let pool = await sql.connect(config);
            let result = await pool.request()            
                .input('id', sql.Int, ingrediente.id)    
                .input('nombre', sql.VarChar, ingrediente.nombre)
                .query(`UPDATE Ingredientes SET Nombre = @nombre
                WHERE Id = @id`);
            rowsAffected = result.rowsAffected; // devuelve la cantidad de registros afectados (1 en caso de haberse actualizado correctamente la pizza)
        } catch (e){
            //console.log(e);
            CopiaError(e.toString() + " AT IngredientesService/Update");
        }
        return rowsAffected;
    }

    deleteById = async (id) => {
        let rowsAffected = 0;
        console.log('DeleteIngredienteById')
        try{
            let pool = await sql.connect(config);
            let result = await pool.request()
                // .input('pId', sql.Int, id) // input (name, [type], value) - Agrega un parámetro de entrada al request.
                // .query('DELETE FROM Pizzas WHERE Id = @pId');
                .input('id', sql.Int, id)
                .query('DELETE FROM Ingredientes WHERE Id = @id');
            rowsAffected = result.rowsAffected; // devuelve la cantidad de registros afectados (1 en caso de haberse eliminado correctamente la pizza)
        } catch (e){
            //console.log(e);
            CopiaError(e.toString() + " AT IngredientesService/DeleteById");
        }
        return rowsAffected;
    }

    // update = async () =>{
    //     let listaIngredientes = null;
    //     console.log('GetIngredientes')
    //     try{
    //         let pool = await sql.connect(config);
    //         let result = await pool.request() 
    //             .query(`SELECT * FROM Ingredientes`);
    //             listaIngredientes = result.recordsets[0];
    //     } catch (e){
    //         //console.log(e);
    //         CopiaError(e.toString() + " AT IngredientesService/GetAll");
    //     }
    //     return listaIngredientes;        
    // }

    // delete = async () =>{
    //     let listaIngredientes = null;
    //     console.log('GetIngredientes')
    //     try{
    //         let pool = await sql.connect(config);
    //         let result = await pool.request() 
    //             .query(`SELECT * FROM Ingredientes`);
    //             listaIngredientes = result.recordsets[0];
    //     } catch (e){
    //         //console.log(e);
    //         CopiaError(e.toString() + " AT IngredientesService/GetAll");
    //     }
    //     return listaIngredientes;        
    // }
}

