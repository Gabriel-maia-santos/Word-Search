﻿using System;
using System.Collections.Generic;

namespace Projeto_EduXSprint2.Domains
{
    public partial class Turma
    {

        public Turma()
        {
            AlunoTurma = new HashSet<AlunoTurma>();
            ProfessorTurma = new HashSet<ProfessorTurma>();
<<<<<<< HEAD
            IdTurma = Guid.NewGuid();
=======
>>>>>>> 3c07407f424fc1cb164ca7023d52b74aabe965ab
        }

        public Guid IdTurma { get; set; }
        public string Descricao { get; set; }
        public Guid IdCurso { get; set; }

        public virtual Curso IdCursoNavigation { get; set; }
        public virtual ICollection<AlunoTurma> AlunoTurma { get; set; }
        public virtual ICollection<ProfessorTurma> ProfessorTurma { get; set; }
    }
}
