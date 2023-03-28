using System;

namespace OMDb.API.Models;
public class SearchByTermResponse {
    public List<ImdbEntity>      Search          { get; set; }
    public string           totalResults    { get;  set; }
    public string           Response        { get;  set; }
    public SearchByTermResponse() {
        Search          = new List<ImdbEntity> ();
        totalResults    = "0";
        Response        = "False";
    }
}