using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Testing.Model
{
    public class AccountType
    {
        [Key]
        public int Id { get; set; }
        public string? Desccription { get; set; }
        public bool IsActive { get; set; }
    }
}