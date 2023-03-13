using Microsoft.AspNetCore.Mvc;
using Test.API.Models;

namespace Test.API.Controllers;

[ApiController]
[Route("[controller]")]
public class TestController : ControllerBase
{
    
    private readonly ILogger<WeatherForecastController> _logger;

    /*public TestController()
    {
    } */

    [HttpGet]
    [Route("multiplicar/{num1}/{num2}")]
    public IActionResult GetMultiplicar([FromRoute] int num1, [FromRoute] int num2)
    {        
        IActionResult resultado;

        if(num1 >= 0 && num2>= 0){
            resultado = Ok(num1 * num2);
        }else{
            resultado = BadRequest();
        }
        return resultado;
    }

    [HttpGet]
    [Route("auto/{id}")]
    public Auto GetAuto([FromRoute] int id)
    {
        Auto auto = new Auto();
        auto.Id = id;
        auto.Marca = "Ford";
        auto.Modelo = "Fiesta";
        auto.Patente = "005 YHJ";

        return auto;

    }

    [HttpGet]
    [Route("hora")]
    public IActionResult GetHora()
    {
        return Ok(DateTime.Now); // para recibir la hora con el status code
    }

    [HttpGet]
    [Route("saludar")]
    public IActionResult GetSaludar([FromQuery] string nombre)
    {
        string texto;
        IActionResult resultado;
        if(nombre.Length > 2){
            texto = "hola " + nombre;
            resultado = Ok(texto);
        }else{
            resultado = BadRequest();
        }
        return resultado;
    }
    
}
