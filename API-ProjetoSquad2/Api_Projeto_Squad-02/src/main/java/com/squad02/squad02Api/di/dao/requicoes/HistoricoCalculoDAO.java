package com.squad02.squad02Api.di.dao.requicoes;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.stereotype.Component;

import com.squad02.squad02Api.di.dao.interfaces.Repositorio;
import com.squad02.squad02Api.di.modelo.HistoricoCalculo;
import com.squad02.squad02Api.di.modelo.Parametros;

@Component
public class HistoricoCalculoDAO extends BaseJpqlDao implements Repositorio<HistoricoCalculo> {

    private static final String SELCT_TOTALIZADORES_TELA = "SELECT COALESCE(count(hic_codigo),0) as num_registros ,\r\n"+
            "COALESCE(sum(hic_valor_venda)/(SELECT(count(hic_codigo))),0) as media\r\n" + //
            "FROM tb_hic_historico_calculo hic";

    @Override
    public List<HistoricoCalculo> getAll() {
        PreparedStatement pStatement = null;
        ResultSet rs = null;
        try {
            Connection conn = dbConfiguration.getConnection();
            pStatement = conn.prepareStatement("select  * from tb_hic_historico_calculo");
            rs = pStatement.executeQuery();
            return resutsetTransfer(rs);

        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }

    public Double[] mediaAnual() {
        PreparedStatement pStatement = null;
        ResultSet rs = null;
        try {
            Connection conn = dbConfiguration.getConnection();
            pStatement = conn.prepareStatement(SELCT_TOTALIZADORES_TELA);

            rs = pStatement.executeQuery();
            Double[] valores = new Double[2];
            while (rs.next()) {
                valores[0] = rs.getDouble("num_registros");
                valores[1] = rs.getDouble("media");

            }
            return valores;

        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }

    private List<HistoricoCalculo> resutsetTransfer(ResultSet rs) {
        List<HistoricoCalculo> historicoCalculos = new ArrayList<>();
        try {
            while (rs.next()) {
                HistoricoCalculo historicoCalculo = new HistoricoCalculo();

                historicoCalculo.setCodigo(rs.getLong("hic_codigo"));
                historicoCalculo.setHorasAnlistaSenior(rs.getDouble("hic_horas_analisat_senior"));
                historicoCalculo.setHorasAnlistaJunior(rs.getDouble("hic_horas_analisat_junior"));
                historicoCalculo.setHorasEspecialista(rs.getDouble("hic_horas_especialista"));
                historicoCalculo.setCustoHH(rs.getDouble("hic_custo_hh"));
                historicoCalculo.setValorVenda(rs.getDouble("hic_valor_venda"));
                Parametros parametros = new ParametrosDAO().getAllbyPK(rs.getLong("par_codigo"), manager);

                historicoCalculo.setParametro(parametros);

                historicoCalculos.add(historicoCalculo);

            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return historicoCalculos;
    }

    @Override
    public HistoricoCalculo getAllbyPK(long codigo) {
        return manager.find(HistoricoCalculo.class, codigo);
    }

    @Override
    @Transactional
    public HistoricoCalculo insert(HistoricoCalculo obj) {
        return manager.merge(obj);
    }

    @Override
    @Transactional
    public HistoricoCalculo update(long codigo, HistoricoCalculo obj) {
        obj.setCodigo(codigo);
        return manager.merge(obj);
    }

    @Override
    @Transactional

    public void delete(HistoricoCalculo obj) {
        manager.remove(obj);
    }

}
