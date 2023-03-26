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

namespace Pizzas.API.Controllers {

    [ApiController]
    [Route("/api/[controller]")]
    public class OMDB : ControllerBase {
        
        [HttpGet] 
        [Route("search")]       
        public IActionResult GetPeliculaByName ([FromQuery] string nombrePelicula) {

            //string apiResponse = async HTTPHelper.GetContentAsync("http://www.omdbapi.com/?t="+nombrePelicula+ "apikey=8f11e689", "error");
            //return Ok(apiResponse);
            Task<string> apiResponse = HTTPHelper.ObtenerPeliculaPorTitulo(nombrePelicula, "error");
            return Ok("la pelicula es " + apiResponse);
            
        }

        [HttpGet]
        [Route("movie/{idPelicula}")]   
        public IActionResult GetPeliculaById ([FromRoute] string idPelicula) {
            Task<string> apiResponse = HTTPHelper.ObtenerPeliculaPorId(idPelicula, "error");
            return Ok("la pelicula es " + apiResponse);            
        }       

        
    }
}
