package com.squad02.squad02Api.di.dao.interfaces;

import java.util.List;

public interface Repositorio<T> {
    public List<T> getAll();

    public T getAllbyPK(long codigo);

    public T insert(T obj);

    public T update(long codigo, T obj);

    public void delete(T obj);

}
