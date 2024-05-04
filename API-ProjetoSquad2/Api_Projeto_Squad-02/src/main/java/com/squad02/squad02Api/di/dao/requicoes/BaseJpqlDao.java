package com.squad02.squad02Api.di.dao.requicoes;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.stereotype.Component;

import com.squad02.squad02Api.di.config.DbConfiguration;

@Component
public class BaseJpqlDao {
    @PersistenceContext
    protected EntityManager manager;
    protected DbConfiguration dbConfiguration = new DbConfiguration();


}
