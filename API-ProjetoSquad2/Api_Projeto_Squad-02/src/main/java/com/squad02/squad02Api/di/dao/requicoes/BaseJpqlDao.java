package com.squad02.squad02Api.di.dao.requicoes;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.stereotype.Component;

@Component
public class BaseJpqlDao {
    @PersistenceContext
    protected EntityManager manager;

}
