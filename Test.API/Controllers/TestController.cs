using Microsoft.AspNetCore.Mvc;
using Test.API.Models;

namespace Test.API.Controllers;

[ApiController]
[Route("[controller]")]
public class Test : ControllerBase
{
    
    private readonly ILogger<WeatherForecastController> _logger;

    /*public TestController()
    {
    } */

    [HttpGet]
    [Route("multiplicar/{num1}/{num2}")]
    public int GetMultiplicar([FromRoute] int num1, [FromRoute] int num2)
    {
        int resultado = num1 * num2;
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
}
