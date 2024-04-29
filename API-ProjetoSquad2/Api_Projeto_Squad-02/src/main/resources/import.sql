--INSERT INTO tb_coz_tb_coz_cozinha (coz_nome) VALUES ('tailandeza');
--INSERT INTO tb_coz_tb_coz_cozinha (coz_nome) VALUES ('indiana');

insert into tb_coz_cozinha (coz_codigo, coz_nome) values (1, 'Tailandesa');
insert into tb_coz_cozinha (coz_codigo, coz_nome) values (2, 'Indiana');

insert into tb_res_restaurante (res_nome, res_taxa_frete, coz_codigo) values ('Thai Gourmet', 10, 1);
insert into tb_res_restaurante (res_nome, res_taxa_frete, coz_codigo) values ('Thai Delivery', 9.50, 1);
insert into tb_res_restaurante (res_nome, res_taxa_frete, coz_codigo) values ('Tuk Tuk Comida Indiana', 15, 2);

INSERT into tb_pes_pessoa (pes_nome,pes_cpf_cnpj,pes_email,pes_telefone) VALUES('joao','08721051569','jd414@gmail.com','9999999');


INSERT into tb_fpg_forma_pagamento(fpg_descricao) VALUES('debito');
INSERT into tb_fpg_forma_pagamento(fpg_descricao) VALUES('credito');


INSERT into tb_per_permissao (per_nome,per_descricao) values('atoriza','permitido');
INSERT into tb_per_permissao (per_nome,per_descricao) values('altera','negado');