package com.squad02.squad02Api.di.config;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component
public class DbConfiguration {



    private static String usernameS;

    private static String passwordS;

    private static String urlS;

    @Value("${spring.datasource.url}")
    public void setUrl(String url) {
        DbConfiguration.urlS = url;
    }

    @Value("${spring.datasource.username}")
    public void setUsername(String username) {
        DbConfiguration.usernameS = username;
    }

    @Value("${spring.datasource.password}")
    public void setPassword(String password) {
        DbConfiguration.passwordS = password;
    }

    public DataSource dataSource;

    public static Connection getConnection() {
        String url = urlS;
        String user = usernameS; 
        String password = passwordS; 

        Connection conn;
        try {
            conn = DriverManager.getConnection(url, user, password);

            return conn;
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return null;
    }

}