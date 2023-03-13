using System.Dynamic;
using Microsoft.VisualBasic.CompilerServices;
using System;
using System.Collections.Generic;

namespace Test.API.Models{
    public class Auto{
        
        public int Id{get; set;} = 0;
        public string Marca{get; set;} = "";
        public string Modelo{get; set;} = "";
        public string Patente{get; set;} = "";

    }
}