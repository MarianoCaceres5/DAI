import config from "../../dbconfig.js";
import sql from 'mssql';
import CopiaError from "../modules/log-helper.js";

export default class UnidadesService {    
    getAll = async () =>{
        let listaUnidades = null;
        console.log('GetUnidades')
        try{
            let pool = await sql.connect(config);
            let result = await pool.request() 
                .query(`SELECT * FROM Unidades`);
                listaUnidades = result.recordsets[0];
        } catch (e){
            //console.log(e);
            CopiaError(e.toString() + " AT UnidadesService/GetAll");
        }
        return listaUnidades;        
    }

    getById = async (id) =>{
        let returnUnidad = null;
        console.log('GetUnidadById')
        try{
            let pool = await sql.connect(config);
            let result = await pool.request() 
                .input('pId', sql.Int, id)
                .query(`SELECT * FROM Unidades WHERE Id = @pId`);
                returnUnidad = result.recordsets[0];
        } catch (e){
            //console.log(e);
            CopiaError(e.toString() + " AT UnidadesService/GetById");
        }
        return returnUnidad;        
    }
}

