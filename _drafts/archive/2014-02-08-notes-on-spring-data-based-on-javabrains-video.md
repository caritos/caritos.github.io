---
layout: post
title: Spring Data
categories: spring
---

Introduction to Spring Data and Setting Up
------------------------------------------
* source: http://www.youtube.com/watch?v=eR_JFtqyNL4
* installing apache derby
* add path to apache derby install
* ./startNetworkServer
* derby comes with a client
    - ./ij
    - > connect 'jdbc:derby://localhost:1527/db;create=true';
    - all sql commands ends with semicolon

Using JDBC without Spring
-------------------------
* pain to write code in jdbc, write boilerplate code
* make sure drivers are available to access the database
    - add external jars
    - lib/derby.jar & lib/derbyclient.jar
* Create Circle Model class
* Create DAO class 
    - JdbcDaoImpl
    - responsible for talking to an id
* need to have a connection object
    - String driver
    - Class.forName(driver).newInstance()
    - use java.sql


Adding Spring and DataSource Configuration
------------------------------------------
- make JdbcImpl a bean (add @Component annotation to class)
- first step is connecting to the database
    * not going to change in different class
    * DriverManagerDatasource
        + done in spring.xml
* bean id="daaSource" class="DriverManagerDataSource"
    - property driverClassName
    - property url
    - property username/password
    - @Autoired DataSource dataSource
    - conn = dataSource.getConnection();
* connection pooling
    - change class instead of using spring DriverManagerDataSource to org.apache.commons.dbcpBaseDataSource
    - add property initilize 2
    - add property maxActive 5
    - DBCP Commons Pool

Using JdbcTemplate
------------------
* class provided by string
    - preExecution
    - postExecution
* private JdbcTemplate jdbcTemplate
* jdbcTemplate.setDataSource(getDataSource());
* jdbcTemplate.queryForInt(sql);

Using JdbcTemplate
------------------
* class provided by string
    - preExecution
    - postExecution
* private JdbcTemplate jdbcTemplate
* jdbcTemplate.setDataSource(getDataSource());
* jdbcTemplate.queryForInt(sql);
* create a bean definition for jdbcTemplate in spring.xml
* alternatively, setDataSource
    - this.jdbcTempalte = new JdbcTemplate(dataSource)
    - @Autowired in setDataSource method
        - insure the setter is being initialized.

Returning Other Datatypes from
------------------------------
* jdbcTemplate.queryForObject(sql, String.class);
* jdbcTemplate.queryForObject(sql, new Object[] {circleId}, rowMapper

Implementing RowMapper
----------------------
* need to write an inner class
* private static final class CircleMapper implements RowMapper<Circle>
* mapRow(ResultSet resultSet, int rowNum) 
  Circle cicle = new Circle()
  circle.setId(resultSet.getInt("ID")
  circle.setName(resultSet.getString("NAME")
  return circle
* jdbcTemplate.querForObject(sql, new Object[] {circleId}, new CircleMapper())

Performing Write Operations
---------------------------
* insertCircle(Circle circle)
* "INSERT INTO CIRCLE(ID, NAME) VALUES (?,?)"
* jdbcTemplate.update(sql, Object[])
* jdbcTemplate.execute(sql)

Named Parameer JDBC Template
----------------------------
* limitation of sql queries "?"
* name parameters, placeholdes for arguments
* disadvantage of order, need to update order of queryForObject method
* not possible with jdbcTemplate (placeholder)
* NamedParameterJdbcTemplate uses named parameters
* Name parameters instead of question marks
* String sql = "INSERT INTO CIRCLE (ID, NAME) VALUES (:id, :name)";
* private NamedParameterJdbcTemplate nameParameterJdbcTemplate;
* initialize for datasource
* SqlParameterSource namedParameters = new MapSqlParameterSource("id", circle.getId()).addValue("name", circle.getName());
* namedParameterJDBCTemplate.update(sql, namedParameters);
* SimpleJDBCTemplate - uses both "?" and NamedParameters

DAO Support Classes
-------------------
* having one super class that includes datasource
* 3 different DAO support for different Jdbc Template
* using Simple JdbcTemplate as an example
* SimpleJdbcDaoImpl extends SimpleJdbcDaoSupport
* getSimpleJdbcTemplate()
     - how does it know where the datasource is?
     - this.getJdbcTemplate().queryForInt(sql)
* can access the member variables
* use spring.xml
* bean id="simpleDdbcDaoImpl" class="xyz.SimpleJdbcDaoImp"
  proprty name="dataSource" ref="dataSource"

Using Hibernate with Spring
---------------------------
* add hibernate libraries
* create new class HibernateDaoImpl
* add method getCircleCount
    - need session from session factory
    - declare member variable SessionFactory sessionFactory (from org.hibernate)
    - generate getters and setters
    - create bean for session factory so it is a singleton
        * bean id="sessionFactory" class="AnnontationSessionFacoryBean"
    - instead of hibernate.cfg, with spring you don't need it
        * you can change the code in spring.xml hence you don't need hibernate.cfg
        * property name="dataSource" ref="dataSource"/>
        * property name="packagesToScan" value="org.k.j.model""/> for packages to scan
        * property name="hibernateProperties"
            props
                prop key="dialect" -> org.hibernate.dialect.DerbyDialect
* @Entity for circle clas
* @Id for id
* @Autowired for sessionFacotry to initilizae it properly
* String hql = "select count(*) from Circle";"
* Query query = getSessionFactory().openSession().createQuery(hql);
* return query.uniqueResult();
* @Repository for HibernateDaoImpl <- makes it a springbean
* 
