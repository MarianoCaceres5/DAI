using System.Net.Http.Headers;
using System.Threading.Tasks;
using System.Net.Http;
using System.Net;
using System.Collections;
using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using System.Reflection;
using System.Text.Json;
using OMDb.API.Models;
using OMDb.API.Helpers;

namespace Pizzas.API.Controllers {

    [ApiController]
    [Route("/api/[controller]")]
    public class OMDB : ControllerBase {

        /*
        
        [HttpGet] 
        [Route("search")]       
        public async Task<IActionResult> GetPeliculaByName ([FromQuery] string nombrePelicula = "") {

            //string apiResponse = async HTTPHelper.GetContentAsync("http://www.omdbapi.com/?t="+nombrePelicula+ "apikey=8f11e689", "error");
            //return Ok(apiResponse);   
            string apiResponse = await HTTPHelper.GetContentAsync("https://www.omdbapi.com/?apikey=8f11e689&t="+ nombrePelicula, "error");
            ImdbEntity pelicula = JsonSerializer.Deserialize<ImdbEntity>(apiResponse);
            string returnValue = "El director de '" + pelicula.Title + "' es " + pelicula.Director + ", y los actores principales son: " + pelicula.Actors;
            return Ok(returnValue);
            
        }

        [HttpGet]
        [Route("movie/{idPelicula}")]   
        public async Task<IActionResult> GetPeliculaById ([FromRoute] string idPelicula) {
            string apiResponse = await HTTPHelper.GetContentAsync("https://www.omdbapi.com/?apikey=8f11e689&i="+ idPelicula, "error");            
            ImdbEntity pelicula = JsonSerializer.Deserialize<ImdbEntity>(apiResponse);
            string returnValue = "La pelicula es '" + pelicula.Title + "', de " + pelicula.Director;
            return Ok(returnValue);           
        }    */

        [HttpGet]
        [Route("searchinhelper")]
        public async Task<IActionResult> GetSearchInHelper([FromQuery] string term = "") {
            IActionResult           returnValue;
            SearchByTermResponse    returnObject;
            OMBDHelper              helper;

            if (!String.IsNullOrEmpty(term)){
                helper = new OMBDHelper();  
                returnObject = await helper.GetSearch(term);

                returnValue  = Ok(returnObject);
            } else {
                // Bad Request! 
                returnValue = BadRequest();
            }
            
            return returnValue;
        } 

        [HttpGet]
        [Route("movieInHelper/{imdbid}")]
        public async Task<IActionResult> GetMovieInHelper([FromRoute] string imdbid = "") {
            IActionResult           returnValue;
            SearchByIdResponse      returnObject;
            OMBDHelper              helper;

            if (!String.IsNullOrEmpty(imdbid)){
                helper = new OMBDHelper();
                returnObject = await helper.GetMovie(imdbid);

                returnValue  = Ok(returnObject);
            } else {
                // Bad Request! 
                returnValue = BadRequest();
            }
            
            return returnValue;
        }
        
    }
}
