﻿using System;
using Microsoft.AspNetCore.Mvc;
using Projeto_EduXSprint2.Domains;
using Projeto_EduXSprint2.Repositories;

namespace Projeto_EduXSprint2.Controllers {
    [Route("api/[controller]")]
    [ApiController]
    public class AlunoTurmaController : ControllerBase {
        private readonly AlunoTurmaRepository _alunoturmaRepository;

        public AlunoTurmaController() {
            _alunoturmaRepository = new AlunoTurmaRepository();
        }

        [HttpGet]
        public IActionResult Get() {
            try {
                var alunoturma = _alunoturmaRepository.Listar();


                if (alunoturma.Count == 0)
                    return NoContent();

                return Ok(new {
                    totalCount = alunoturma.Count,
                    data = alunoturma
                });
            }
            catch (Exception ex) {
                return BadRequest(ex.Message);
            }
        }
        [HttpGet("{id}")]
        public IActionResult Get(Guid id) {
            try {
                AlunoTurma alunoturma = _alunoturmaRepository.BuscarPorId(id);


                if (alunoturma == null)
                    return NotFound();


                return Ok(alunoturma);
            }
            catch (Exception ex) {
                return BadRequest(ex.Message);
            }
        }

        [HttpPost]
        public IActionResult Post([FromForm] AlunoTurma alunoturma) {
            try {

                _alunoturmaRepository.Adicionar(alunoturma);

                return Ok(alunoturma);
            }
            catch (Exception ex) {
                return BadRequest(ex.Message);
            }
        }

        [HttpPut("{id}")]
        public IActionResult Put(Guid id, AlunoTurma alunoturma) {
            try {
                _alunoturmaRepository.Editar(alunoturma);

                return Ok(alunoturma);
            }
            catch (Exception ex) {
                return BadRequest(ex.Message);
            }
        }
        [HttpDelete("{id}")]
        public IActionResult Delete(Guid id) {
            try {
                var alunoturma = _alunoturmaRepository.BuscarPorId(id);


                if (alunoturma == null)
                    return NotFound();

                _alunoturmaRepository.Remover(id);

                return Ok(id);
            }
            catch (Exception ex) {
                return BadRequest(ex.Message);
            }
        }
    }
}
