using System;
using System.Data.Common;
using System.Data;
using Pizzas.API.Models;
using System.Collections.Generic;
using System.Linq;
using System.Data.SqlClient;
using Dapper;
using System.Net;
using System.Dynamic;
using Microsoft.VisualBasic.CompilerServices;


namespace Pizzas.API.Helpers
{
    public static class BD{
        //private static string CONNECTION_STRING = @"Persist Security Info=False;UserID=Pizzass;password=VivaLaMuzza123;Initial Catalog=DAI-Pizzas;Data Source=.;";
        //DECIRLE A POLSHU QUE HAY PROBLEMAS CON LA CONEXION A BASE DE DATOS
        private static string server = Dns.GetHostName();
        private static string CONNECTION_STRING = @$"Server={server};DataBase=DAI-Pizzas;Trusted_Connection=True;";        


        public static List<Pizza> GetAll() {
            string sqlQuery;
            List<Pizza> returnList; 
            returnList = new List<Pizza>();
            using (SqlConnection db = new SqlConnection(CONNECTION_STRING)) {
                sqlQuery = "exec sp_GetAll";
                returnList = db.Query<Pizza>(sqlQuery).ToList();
            }
            return returnList;
        }

        public static Pizza GetById(int id) {
            string sqlQuery;
            Pizza returnEntity = null;

            sqlQuery = "exec sp_GetById @idPizza";            

            using (SqlConnection db = new SqlConnection(CONNECTION_STRING)) {
                returnEntity = db.QueryFirstOrDefault<Pizza>(sqlQuery, new { idPizza = id });
            }
            return returnEntity;
        }

        public static int Insert(Pizza pizza) {
            string sqlQuery;
            int intRowsAffected = 0;

            sqlQuery = "exec sp_Insert @Nombre = @nombre, @LibreGluten = @libreGluten, @Importe = @importe, @Descripcion = @descripcion";

            /* sqlQuery = "INSERT INTO Pizzas (";
            sqlQuery += " Nombre , LibreGluten , Importe , Descripcion";
            sqlQuery += ") VALUES (";
            sqlQuery += " @nombre , @libreGluten , @importe , @descripcion";
            sqlQuery += ")"; */

            using (SqlConnection db = new SqlConnection(CONNECTION_STRING)) {
                intRowsAffected = db.Execute(sqlQuery, new {nombre = pizza.Nombre, libreGluten = pizza.LibreGluten, importe = pizza.Importe, descripcion = pizza.Descripcion});
            }
            return intRowsAffected;
        }

        public static int UpdateById(Pizza pizza) {
            string sqlQuery;
            int intRowsAffected = 0;
            sqlQuery = "sp_UpdateById";
            /*
            sqlQuery = "UPDATE Pizzas SET ";
            sqlQuery += " Nombre = @nombre, ";
            sqlQuery += " LibreGluten = @libreGluten, ";
            sqlQuery += " Importe = @importe, ";
            sqlQuery += " Descripcion = @descripcion ";
            sqlQuery += "WHERE Id = @idPizza"; */

            using (var db = new SqlConnection(CONNECTION_STRING)) {
                intRowsAffected = db.Execute(sqlQuery, new {
                    Id  = pizza.Id,
                    Nombre = pizza.Nombre,
                    LibreGluten = pizza.LibreGluten,
                    Importe = pizza.Importe,
                    Descripcion = pizza.Descripcion
                },commandType: CommandType.StoredProcedure);
            }
            return intRowsAffected;
        }

        public static int DeleteById(int id) {
            string sqlQuery;
            int intRowsAffected = 0;

            sqlQuery = "exec sp_DeleteById @idPizza";
            using (SqlConnection db = new SqlConnection(CONNECTION_STRING)) {
                intRowsAffected = db.Execute(sqlQuery, new { idPizza = id });
            }
            return intRowsAffected;
        }
    }    
}