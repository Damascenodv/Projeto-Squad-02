package com.squad02.squad02Api.di.modelo;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;

@Entity
@Data
@Table(name = "tb_par_parametro")
public class Parametros {
    @Id
    @Column(name = "par_codigo")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long codigo;
    @Column(name = "par_num_servidores_fisicos", nullable = true)
    private int numServioresFisicos;
    @Column(name = "par_num_colaboradores", nullable = true)
    private int numeroColaboradores;
    @Column(name = "par_num_sistemas_utilizados", nullable = true)
    private int numeroSistemasUtilizados;
    @Column(name = "par_num_filias", nullable = true)
    private int numeroFiliais;
    @Column(name = "par_num_planos_estrategico", nullable = true)
    private int possuiPlanoEstrategioc;

    @Column(name = "par_imposto", nullable = true)
    private double imposto;
    @Column(name = "par_lucro", nullable = true)
    private double lucro;
    @Column(name = "par_analista_jr", nullable = true)
    private double analistaJR;
    @Column(name = "par_analista_sr", nullable = true)
    private double analistaSr;
    @Column(name = "par_especialista", nullable = true)
    private double especialista;

}
