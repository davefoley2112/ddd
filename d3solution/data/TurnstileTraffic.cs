//------------------------------------------------------------------------------
// <auto-generated>
//    This code was generated from a template.
//
//    Manual changes to this file may cause unexpected behavior in your application.
//    Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace data
{
    using System;
    using System.Collections.Generic;
    
    public partial class TurnstileTraffic
    {
        public int Id { get; set; }
        public string Count { get; set; }
        public string Time { get; set; }
        public int StationId { get; set; }
    
        public virtual Station Station { get; set; }
    }
}