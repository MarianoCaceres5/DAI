import config from "../../dbconfig.js";
import sql from 'mssql';
import CopiaError from "../modules/log-helper.js";
import { randomUUID } from "crypto";

export default class UsuariosService {    

    getAll = async () =>{
        let listaUsuarios = null;
        console.log('GetUsuarios')
        try{
            let pool = await sql.connect(config);
            let result = await pool.request() 
                .query(`SELECT * FROM Usuarios`);
                listaUsuarios = result.recordsets[0];
        } catch (e){
            //console.log(e);
            CopiaError(e.toString() + " AT UsuariosService/GetAll");
        }
        return listaUsuarios;        
    }

    getById = async (id) =>{
        let returnUsuario = null;
        console.log('GetUsuarioById')
        try{
            let pool = await sql.connect(config);
            let result = await pool.request() 
                .input('pId', sql.Int, id)
                .query(`SELECT * FROM Usuarios WHERE Id = @pId`);
                returnUsuario = result.recordsets[0];
        } catch (e){
            //console.log(e);
            CopiaError(e.toString() + " AT UsuariosService/GetById");
        }
        return returnUsuario;        
    }

    getByNamePassword = async (userName, password) =>{
        let returnUsuario = null;
        console.log('GetUsuarioByNamePassword')
        try{
            let pool = await sql.connect(config);
            let result = await pool.request() 
                .input('pUserName', sql.VarChar, userName)
                .input('pPassWord', sql.VarChar, password)
                .query(`SELECT * FROM Usuarios WHERE UserName = @pUserName AND Password = @pPassWord`);
                returnUsuario = result.recordsets[0];
        } catch (e){
            //console.log(e);
            CopiaError(e.toString() + " AT UsuariosService/GetUsuarioByNamePassword");
        }
        return returnUsuario;        
    }

    updateTokenById = async (id) => {
        let rowsAffected = 0;
        console.log('UpdateTokenUsuario')
        try{

            let token = randomUUID();

            let date = new Date();
            let tokenExpirationDate = date.setMinutes(date.getMinutes() + 20); //suma 20 min al tiempo actual;

            let pool = await sql.connect(config);
            let result = await pool.request()  
                .input('pId', sql.Int, id)  
                .input('pToken', sql.Int, token)    
                .input('pTokenExpirationDate', sql.DateTime, tokenExpirationDate)                
                .query('UPDATE Usuarios SET Token = @pToken, TokenExpirationDate = @pTokenExpirationDate WHERE Id = @pId ');
            rowsAffected = result.rowsAffected; // devuelve la cantidad de registros afectados (1 en caso de haberse actualizado correctamente la pizza)
        } catch (e){
            //console.log(e);
            CopiaError(e.toString() + " AT UsuariosService/UpdateToken");
        }
        return rowsAffected;
    }



    login = async (usuario) => {
        let usuarioActualizado = null;
        console.log('UpdateToken')
        try{

            let username = usuario.userName;
            let password = usuario.password;
            let usuarioSeleccionado = await this.getByNamePassword(username, password);     
            
            let rowsAffected = await this.updateTokenById(usuarioSeleccionado.id);
            usuarioActualizado = await this.getById(usuario.id);            
        } catch (e){
            //console.log(e);
            CopiaError(e.toString() + " AT UsuariosService/Login");
        }
        return usuarioActualizado;
    }
}

