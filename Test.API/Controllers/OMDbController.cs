using Microsoft.AspNetCore.Mvc;
using Test.API.Models;

namespace Test.API.Controllers;

[ApiController]
[Route("[controller]")]
public class OMDbController : ControllerBase
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
    
}
