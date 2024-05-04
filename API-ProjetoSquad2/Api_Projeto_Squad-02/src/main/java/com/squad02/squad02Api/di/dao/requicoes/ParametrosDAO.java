package com.squad02.squad02Api.di.dao.requicoes;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.EntityManager;
import javax.transaction.Transactional;

import org.springframework.stereotype.Component;

import com.squad02.squad02Api.di.dao.interfaces.Repositorio;
import com.squad02.squad02Api.di.modelo.Parametros;

@Component
public class ParametrosDAO extends BaseJpqlDao implements Repositorio<Parametros> {

    private final String CAMPOS = " par_codigo, par_analista_jr, par_analista_sr, par_especialista,  par_imposto, par_lucro , par_num_colaboradores, par_num_servidores_fisicos, par_num_sistemas_utilizados, par_num_filias, par_num_planos_estrategico ";

    @Override
    public List<Parametros> getAll() {
        PreparedStatement pStatement = null;
        ResultSet rs = null;
        try {
            Connection conn = dbConfiguration.getConnection();
            pStatement = conn.prepareStatement("select " + CAMPOS + " from tb_par_parametro");
            rs = pStatement.executeQuery();
            return resutsetTransfer(rs);

        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }

    public List<Parametros> resutsetTransfer(ResultSet rs) {
        List<Parametros> paremetrosList = new ArrayList<>();
        try {
            while (rs.next()) {
                Parametros paremetros = new Parametros();

                paremetros.setCodigo(rs.getLong("par_codigo"));
                paremetros.setAnalistaJR(rs.getDouble("par_analista_jr"));
                paremetros.setAnalistaSr(rs.getDouble("par_analista_sr"));
                paremetros.setEspecialista(rs.getDouble("par_especialista"));
                paremetros.setImposto(rs.getDouble("par_imposto"));
                paremetros.setLucro(rs.getDouble("par_lucro"));

                paremetros.setNumeroColaboradores(rs.getInt("par_num_colaboradores"));
                paremetros.setNumServioresFisicos(rs.getInt("par_num_servidores_fisicos"));
                paremetros.setNumeroSistemasUtilizados(rs.getInt("par_num_sistemas_utilizados"));
                paremetros.setNumeroFiliais(rs.getInt("par_num_filias"));
                paremetros.setPossuiPlanoEstrategioc(rs.getInt("par_num_planos_estrategico"));

                paremetrosList.add(paremetros);

            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return paremetrosList;

    }

    @Override
    public Parametros getAllbyPK(long codigo) {
        return manager.find(Parametros.class, codigo);
    }

    public Parametros getAllbyPK(long codigo, EntityManager manager) {
        return manager.find(Parametros.class, codigo);
    }

    @Override
    @Transactional
    public Parametros insert(Parametros obj) {
        return manager.merge(obj);
    }

    @Override
    @Transactional
    public Parametros update(long id, Parametros paremetros) {
        paremetros.setCodigo(id);
        return manager.merge(paremetros);
    }

    @Override
    @Transactional
    public void delete(Parametros obj) {
        manager.remove(obj);
    }

}
