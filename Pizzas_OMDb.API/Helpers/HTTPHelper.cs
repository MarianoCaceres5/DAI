using System.Net.Http;
using System.Net;
using System.Collections;
using System;
using System.Collections.Generic;
using Pizzas.API.Helpers;
using Pizzas.API.Models;
using Microsoft.AspNetCore.Mvc;
using System.Reflection;


namespace Pizzas.API.Helpers
{
    public static class HTTPHelper{
        
        public static async Task<string> GetContentAsync(string respuesta, string defaultValueOnError){
            string returnValue = defaultValueOnError;            
            HttpClient client = new HttpClient();
            try{
                using (HttpResponseMessage response = await httpClient.GetAsync(targetURL)){
                    returnValue = await response.Content.ReadAStringAsync();

                }
            } catch (Exception ex){
                returnValue = defaultValueOnError;
            }
            return returnValue;
        }

    }    
}