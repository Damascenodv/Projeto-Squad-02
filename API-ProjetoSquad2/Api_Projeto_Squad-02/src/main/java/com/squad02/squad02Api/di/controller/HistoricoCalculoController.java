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

import com.squad02.squad02Api.di.dao.requicoes.HistoricoCalculoDAO;
import com.squad02.squad02Api.di.modelo.HistoricoCalculo;

@Controller
public class HistoricoCalculoController {
    HistoricoCalculoDAO hicalRepositorio = new HistoricoCalculoDAO();

    @Autowired
    public HistoricoCalculoController(HistoricoCalculoDAO hicalRepositorio) {
        this.hicalRepositorio = hicalRepositorio;

    }

    @GetMapping("/HistoricoCalculo")
    @ResponseBody
    public List<HistoricoCalculo> buscarTodos() {
        return hicalRepositorio.getAll();
    }

    @GetMapping("/HistoricoCalculoMedia")
    @ResponseBody
    public Double[] consultarTodos() {
        Double[] array = hicalRepositorio.mediaAnual();
        return array;
    }

    @GetMapping("/HistoricoCalculo/{id}")
    public ResponseEntity<HistoricoCalculo> buscarPorID(@PathVariable long id) {
        HistoricoCalculo historicoCalculo = hicalRepositorio.getAllbyPK(id);
        if (historicoCalculo != null) {
            return ResponseEntity.ok(historicoCalculo);
        }
        return ResponseEntity.notFound().build();
    }

    @PostMapping("/HistoricoCalculo")
    public ResponseEntity insertHistoricoCalculo(@RequestBody HistoricoCalculo historicoCalculo) {
        hicalRepositorio.insert(historicoCalculo);
        return ResponseEntity.status(HttpStatus.CREATED).body("Historico Calculo inserido com sucesso");
    }

    @PutMapping("/HistoricoCalculo/{id}")
    public ResponseEntity updateHistoricoCalculo(@PathVariable long id, @RequestBody HistoricoCalculo entity) {
        hicalRepositorio.update(id, entity);
        return ResponseEntity.status(HttpStatus.CREATED).body("Historico Calculo  alterado com sucesso");
    }

    @DeleteMapping("/HistoricoCalculo/{id}")
    public ResponseEntity deleteHistoricoCalculo(@PathVariable long id) {
        HistoricoCalculo historicoCalculo = hicalRepositorio.getAllbyPK(id);
        if (historicoCalculo != null) {
            hicalRepositorio.delete(historicoCalculo);
            return ResponseEntity.status(HttpStatus.CREATED).body("Historico Calculo  alterado com sucesso");
        }
        return ResponseEntity.status(HttpStatus.CREATED).body("erro ao deletar o Historico Calculo ");

    }

}
