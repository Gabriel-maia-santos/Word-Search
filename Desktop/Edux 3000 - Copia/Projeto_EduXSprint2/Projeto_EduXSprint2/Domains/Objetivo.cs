﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Projeto_EduXSprint2.Domains
{
    public partial class Objetivo
    {
        [Key]
        public Guid Id { get; set; }
        public Objetivo()
        {
            ObjetivoAluno = new HashSet<ObjetivoAluno>();
            Id = Guid.NewGuid();
        }

        public Guid IdObjetivo { get; set; }
        public string Descricao { get; set; }
        public Guid IdCategoria { get; set; }

        public virtual Categoria IdCategoriaNavigation { get; set; }
        public virtual ICollection<ObjetivoAluno> ObjetivoAluno { get; set; }
    }
}
