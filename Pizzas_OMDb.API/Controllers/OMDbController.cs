using System.Net.Http.Headers;
using System.Threading.Tasks;
using System.Net.Http;
using System.Net;
using System.Collections;
using System;
using System.Collections.Generic;
using Pizzas.API.Helpers;
using Pizzas.API.Models;
using Microsoft.AspNetCore.Mvc;
using System.Reflection;
using System.Text.Json;
using OMDb.API.Models;

namespace Pizzas.API.Controllers {

    [ApiController]
    [Route("/api/[controller]")]
    public class OMDB : ControllerBase {
        
        [HttpGet] 
        [Route("search")]       
        public async Task<IActionResult> GetPeliculaByName ([FromQuery] string nombrePelicula) {

            //string apiResponse = async HTTPHelper.GetContentAsync("http://www.omdbapi.com/?t="+nombrePelicula+ "apikey=8f11e689", "error");
            //return Ok(apiResponse);
            string apiResponse;
            apiResponse = await HTTPHelper.GetContentAsync("https://www.omdbapi.com/?apikey=8f11e689&t="+ nombrePelicula, "error");
            ImdbEntity pelicula = JsonSerializer.Deserialize<ImdbEntity>(apiResponse);
            string returnValue = "El director de '" + pelicula.Title + "' es " + pelicula.Director + ", y los actores principales son: " + pelicula.Actors;
            return Ok(returnValue);
            
        }

        [HttpGet]
        [Route("movie/{idPelicula}")]   
        public async Task<IActionResult> GetPeliculaById ([FromRoute] string idPelicula) {
            string apiResponse = await HTTPHelper.GetContentAsync("https://www.omdbapi.com/?apikey=8f11e689&i="+ idPelicula, "error");            
            ImdbEntity pelicula = JsonSerializer.Deserialize<ImdbEntity>(apiResponse);
            string returnValue = "El director de '" + pelicula.Title + "' es " + pelicula.Director + ", y los actores principales son: " + pelicula.Actors;
            return Ok(returnValue);           
        }       
        
    }
}
