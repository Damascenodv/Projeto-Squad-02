package com.squad02.squad02Api.di.modelo;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lombok.Data;

@Entity
@Data
@Table(name = "tb_hic_historico_calculo")
public class HistoricoCalculo {
    @Id
    @Column(name = "hic_codigo")
    private long codigo;

    @Column(name = "hic_horas_analisat_senior")
    private double horasAnlistaSenior;
    @Column(name = "hic_horas_analisat_junior")
    private double horasAnlistaJunior;
    @Column(name = "hic_horas_especialista")
    private double horasEspecialista;
    @Column(name = "hic_custo_hh")
    private double custoHH;
    @Column(name = "hic_valor_venda")
    private double valorVenda;

    @ManyToOne
    @JoinColumn(name = "par_codigo", nullable = false)
    private Parametros parametro;

}
