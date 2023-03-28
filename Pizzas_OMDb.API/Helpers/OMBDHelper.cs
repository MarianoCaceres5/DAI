
using System.Linq;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text.Json;
using System.Threading.Tasks;
using OMDb.API.Models;

namespace OMDb.API.Helpers;

public class OMBDHelper {
    private static readonly string _baseURL = $"http://www.omdbapi.com/?apikey=7b62fa5d";
    static HttpClient _httpClient = null;
    public OMBDHelper(): this(new HttpClient()){ 
    }

    public OMBDHelper(HttpClient httpClient) { 
        _httpClient = httpClient;
    }

    public async Task<SearchByTermResponse> GetSearch(string term) {
        SearchByTermResponse returnValue;
        string endPoint = _baseURL + "&s=" + term;
        string apiResponse;

        using (var response = await _httpClient.GetAsync(endPoint)) {
            apiResponse = await response.Content.ReadAsStringAsync();
            returnValue = JsonSerializer.Deserialize<SearchByTermResponse>(apiResponse);
        }
        return returnValue;
    }

    public async Task<SearchByIdResponse> GetMovie(string imdbid) {
        SearchByIdResponse returnValue;
        string endPoint = _baseURL + "&i=" + imdbid;
        string apiResponse;

        using (var response = await _httpClient.GetAsync(endPoint)) {
            apiResponse = await response.Content.ReadAsStringAsync();
            //Console.WriteLine(apiResponse);
            returnValue = JsonSerializer.Deserialize<SearchByIdResponse>(apiResponse);
        }
        return returnValue;
    }

}