import config from "../../dbconfig.js";
import sql from 'mssql';
import CopiaError from "../modules/log-helper.js";
import Pizza from "../models/pizza.js";

export default class PizzaService {
    getAll = async (top, orderField, sortOrder) =>{
        let listaPizzas = null;
        console.log('GetAll')
        try{
            let pool = await sql.connect(config);
            let result = await pool.request()

                .query('SELECT ' + (top == null ? '' : 'TOP ' + top) + ' * FROM Pizzas ' + (orderField == null ? '' : 'ORDER BY ' + orderField) + ' ' + (sortOrder == null ? '' : '' + sortOrder));
                
                //.query('exec sp_GetAll');
            listaPizzas = result.recordsets[0];
        } catch (e){
            //console.log(e);
            CopiaError(e.toString() + " AT PizzaService/GetAll");
            
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
                // .input('pId', sql.Int, id)
                // .query('SELECT * FROM Pizzas WHERE Id = @pId');
                .input('pId', sql.Int, id)
                .query('exec sp_GetById @pId');
            returnPizza = result.recordsets[0][0]; // devuelve el primer elemento del primer request del query
        } catch (e){
            //console.log(e);
            CopiaError(e.toString() + " AT PizzaService/GetById");
        }
        return returnPizza;
        // console.log(returnPizza)
    }

    insert = async (pizza) =>{
        let rowsAffected = 0;
        console.log('UpdatePizza')
        try{
            let pool = await sql.connect(config);
            let result = await pool.request()              
                // .input('Nombre', sql.VarChar, pizza.nombre)
                // .input('LibreGluten', sql.Bit, pizza.libreGluten)
                // .input('Importe', sql.Float, pizza.importe)
                // .input('Descripcion', sql.VarChar, pizza.descripcion)
                // .query('SET NOCOUNT ON INSERT INTO Pizzas(Nombre, LibreGluten, Importe, Descripcion) VALUES (@Nombre,@LibreGluten,@Importe,@Descripcion)');

                .input('nombre', sql.VarChar, pizza.nombre)
                .input('libreGluten', sql.Bit, pizza.libreGluten)
                .input('importe', sql.Float, pizza.importe)
                .input('descripcion', sql.VarChar, pizza.descripcion)
                .query('exec sp_Insert @Nombre = @nombre, @LibreGluten = @libreGluten, @Importe = @importe, @Descripcion = @descripcion');
            rowsAffected = result.rowsAffected; // devuelve la cantidad de registros afectados (1 en caso de haberse eliminado correctamente la pizza)
            console.log('Pizza creada')
        } catch (e){
            //console.log(e);
            CopiaError(e.toString() + " AT PizzaService/Insert");
        }
        return rowsAffected;
    }

    update = async (pizza) => {
        let rowsAffected = 0;
        console.log('UpdatePizza')
        try{
            let pool = await sql.connect(config);
            let result = await pool.request()            
                // .input('Id', sql.Int, pizza.id)    
                // .input('Nombre', sql.VarChar, pizza.nombre)
                // .input('LibreGluten', sql.Bit, pizza.libreGluten)
                // .input('Importe', sql.Float, pizza.importe)
                // .input('Descripcion', sql.VarChar, pizza.descripcion)
                // .query('UPDATE Pizzas SET Nombre = @Nombre, LibreGluten = @LibreGluten, Importe = @Importe, Descripcion = @Descripcion WHERE Id = @Id');

                .input('id', sql.Int, pizza.id)    
                .input('nombre', sql.VarChar, pizza.nombre)
                .input('libreGluten', sql.Bit, pizza.libreGluten)
                .input('importe', sql.Float, pizza.importe)
                .input('descripcion', sql.VarChar, pizza.descripcion)
                .query('exec sp_UpdateById @Id = @id, @Nombre = @nombre, @LibreGluten = @libreGluten, @Importe = @importe, @Descripcion = @descripcion');
            rowsAffected = result.rowsAffected; // devuelve la cantidad de registros afectados (1 en caso de haberse eliminado correctamente la pizza)
        } catch (e){
            //console.log(e);
            CopiaError(e.toString() + " AT PizzaService/Update");
        }
        return rowsAffected;
    }

    deleteById = async (id) => {
        let rowsAffected = 0;
        console.log('DeleteById')
        try{
            let pool = await sql.connect(config);
            let result = await pool.request()
                // .input('pId', sql.Int, id) // input (name, [type], value) - Agrega un parámetro de entrada al request.
                // .query('DELETE FROM Pizzas WHERE Id = @pId');
                .input('pId', sql.Int, id)
                .query('exec sp_DeleteById @pId');
            rowsAffected = result.rowsAffected; // devuelve la cantidad de registros afectados (1 en caso de haberse eliminado correctamente la pizza)
        } catch (e){
            //console.log(e);
            CopiaError(e.toString() + " AT PizzaService/DeleteById");
        }
        return rowsAffected;
    }
}

