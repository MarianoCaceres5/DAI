using System.Threading.Tasks;
using System;
using System.Net;
using System.Collections;
using System.Collections.Generic;
using Pizzas.API.Helpers;
using Pizzas.API.Models;
using OMDb.API.Models;
using Microsoft.AspNetCore.Mvc;
using System.Reflection;
using System.Net.Http;

namespace Pizzas.API.Helpers
{
    public static class HTTPHelper{   
                 
        public static async Task<string> GetContentAsync(string respuesta, string defaultValueOnError){
            string returnValue;  
            //string targetUrl = "https://www.omdbapi.com/?apikey=8f11e689&t=" + respuesta;
            HttpClient client = new HttpClient();     
            try{
                using (HttpResponseMessage response = await client.GetAsync(respuesta)){
                    returnValue = await response.Content.ReadAsStringAsync();
                    Console.WriteLine(returnValue);
                }
            } catch (Exception ex){
                returnValue = defaultValueOnError;
            }
            return returnValue;
        }

    }    
}