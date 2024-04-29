package com.squad02.squad02Api.di.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;

import com.squad02.squad02Api.di.dao.interfaces.Repositorio;
import com.squad02.squad02Api.di.dao.requicoes.ParametrosDAO;
import com.squad02.squad02Api.di.modelo.Parametros;

@Controller
public class ParametrosController {

    Repositorio<Parametros> paremRepositorio = new ParametrosDAO();

    @Autowired
    public ParametrosController(Repositorio<Parametros> paremRepositorio) {
        this.paremRepositorio = paremRepositorio;
    }

    @GetMapping("/Parametros")
    @ResponseBody
    public List<Parametros> buscarPorId() {
        return paremRepositorio.getAll();

    }

    @GetMapping("/Parametros/{id}")
    public ResponseEntity<Parametros> getMethodName(@PathVariable long id) {
        Parametros parametros = paremRepositorio.getAllbyPK(id);
        if (parametros != null) {
            return ResponseEntity.ok(parametros);
        }
        return ResponseEntity.notFound().build();
    }

    @PostMapping("/Parametros")
    public ResponseEntity postMethodName(@RequestBody Parametros parametros) {
        paremRepositorio.insert(parametros);
        return ResponseEntity.status(HttpStatus.CREATED).body("Parametros inserida com sucesso");
    }

    @PutMapping("/Parametros/{id}")
    public ResponseEntity putMethodName(@PathVariable long id, @RequestBody Parametros entity) {
        paremRepositorio.update(id, entity);
        return ResponseEntity.status(HttpStatus.CREATED).body("Parametros alterado com sucesso");
    }

    @DeleteMapping("/Parametros/{id}")
    public ResponseEntity deleEntity(@PathVariable long id) {
        Parametros parametros = paremRepositorio.getAllbyPK(id);
        if (parametros != null) {
            paremRepositorio.delete(parametros);
            return ResponseEntity.status(HttpStatus.CREATED).body("Parametros alterado com sucesso");
        }
        return ResponseEntity.status(HttpStatus.CREATED).body("erro ao deletar o forma de pagaemnto");

    }
}
