using System.Threading.Tasks;
using System;
using System.Net;
using System.Collections;
using System.Collections.Generic;
using OMDb.API.Models;
using Microsoft.AspNetCore.Mvc;
using System.Reflection;
using System.Net.Http;

namespace OMDb.API.Helpers
{
    public static class HTTPHelper{   
                
        /* public static async Task<string> GetContentAsync(string respuesta, string defaultValueOnError){
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
        } */

        public static async Task<string> GetContentAsync(string targetURL, string defaultValueOnError) {
        string      returnValue;
        HttpClient  httpClient;

        returnValue = defaultValueOnError;
        httpClient  = new HttpClient();

        try {
            using (HttpResponseMessage response = await httpClient.GetAsync(targetURL)) {
                returnValue = await response.Content.ReadAsStringAsync();
            }
        } catch (Exception ex) {
            returnValue = defaultValueOnError;
        }

        return returnValue;
    }

    }    
}