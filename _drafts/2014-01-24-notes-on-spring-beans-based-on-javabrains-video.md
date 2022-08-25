---
layout: post
title: Notes on Spring Beans based on Javabrains Video
categories: spring 
---
Understanding Dependency Injection
----------------------------------
* Source: http://www.youtube.com/watch?v=GB8k2-Egfv0
* Dependency Injection 
    - most interesting feature of Spring Framework
    - decouple the conventional dependency relationship between two objects
* Use polymorphism to be more adaptable 
    - use the parent object (abstract class / parent interface)
    - application.class does not know the exact object
* Method parameter
    - create method that takes takes parent class and invoke abstract method
    - myDrawMethod(Shape shape), shape.draw()
    - removed the depency of the Circle or Triangle class
    - we still need to instantiate the Shape instance
* Class member variable
    - there is no initialiation
    - drawing class assumes that the instantiation by something else
    - different class does the shape initialization and calls DrawingClass.setShape()
        * different class is the one doing the injection of the shape
    - drawing class includes
        * setShape(Shape shape)
        * drawShape()

Setting Up
----------
* Source: http://www.youtube.com/watch?v=Z5gubdHLJIc
* this could obselete since I plan to use Spring Boot
* create new java project (SpringDemo)
* downloading spring library (download stable dist, which contains dist folders)
* properties -> java build path -> add library -> user library -> create new user library -> add jars -> add jars for dist folders
* also need apache commons logging library, need to add to new user library

Understanding Spring Factory Bean
---------------------------------
* Source: http://www.youtube.com/watch?v=xlWwMSu5I70
* A Spring Container
    - Tomcat / Servlet Container
    - Spring is a container of POJO
    - have as many objects
    - managed by spring (handles instantiation, life cycle, destruction)
* instead of creating new object, you would ask Spring container to pass the object (factory pattern)
* Factory Pattern
    - Object Factory - create new objects
    - Reads from a configuration file
    - creates new object based on configuration
    - and passes is to object A
    - Object A does not create the object itself.
* Spring Bean Factory
    - Bean Factory
    - Spring XML
    - Spring Bean
    - Spring Bean handed to Object
    
Writing Code Using the Bean Factory
-----------------------------------
* Source: http://www.youtube.com/watch?v=7c6ZTF6cF88&list=PL719420CCED1DB833
* Isntanstiote the Bean Factory
    - BeanFactory factory = new XmlBeanFactory(new FileSystemResource("spring.xml")
    - using XML configuration file
* Spring XML File
    - sample xml -> ApplictionContext.xml from Spring Distribution recently downloaded
    - add Doctype 
    - uses "beans" tag, need to provide id and class location
* factory.getBean("triangle") -> using the id in XML configuration file
* blueprint of the object, there are advantages once we get complicated objects, defined in spring xml, 
    - can be instantiated everywhere

ApplicationContext and Property Initialization
----------------------------------------------
* ApplicationContect 
    - BeanFactory big brother
    - Event Notification / AOP
    - ApplicationContext context = new ClassPathXmlApplicationContext("spring.xml"); 
    - instead of factory use context
- move spring.xml into the class (inside src folder)
- modify bean object in spring.xml
- inside the bean tag, you can include a property tag
    - property name="type" value="equilateral"
    - setting injection

Using Constructor Injection
---------------------------
* creating new constructor with type as parameter
* use the constructor-arg
    - does not have a name attribute, just pass the parameters in order
* provide clue to spring by using the "type" parameter
* <constructor-arg type="java.langString" value="20">
* you can also use the index
    - constructor-arg index="0" value="20"

Injecting Objects
-----------------
* triangle object will have three points example being used
* new class with private member variables x,y
* bean id="zeroPoint" class="org.xyz.Point"
* bean id="onePoint" class="org.xyz.Point"
* bean id="twoPoint" class="org.xyz.Point"
* add properties for each bean that is of class "Point"
* property name="pointA" ref="zeroPoint"

Inner Beans, Aliases and idref
-----------------------------
* source: http://www.youtube.com/watch?v=TW51XsixMqA
* you can remove duplicate beans that are used once.
* inner bean
* if being reference by a lot of beans, then externalize, other make it an inner bean
* property name="point B"
    bean id="point2" class="Point">
      property name="x" value="-20"
      property name="y" value="0"
* aliases
* way we can put different names in the same bean
* alias name="triangle" alias="triangle-alias"
* can also give it in the bean definition
* bean id="triangle" name="triangle-name"
* not good practice, prevent xm validation
* idref
* restrict it to referencing bean 
* property name="pointA"
    idref="zeroPoint"

Initializaing Collections
-------------------------
* List / Set / Map supported by Spring
* property name="points"
  list
    ref bean="zeroPoint"
    ref bean="point2"
    ref bean="point3"

Bean Autowiring
---------------
* Source: http://www.youtube.com/watch?v=suiEGbKf21g
* spring feature to assist reduce configuration file
* if the member variables and the bean property ids are the same, you can ask spring to autowire by name
* bean... autowire="byName"
* autowire="byType"
* if there are more then one bean of same type, "byType" does not work
* autowire by constructor
* instead of setting injection, do it in the constructor
* must have a one type for each type.
* not a very big fan of it, hard to debug
* better to do explicit wiring

Understanding Bean Scope
------------------------
* Spring Bean Factory
* ApplicationContext refers to Spring XML
* Applicationcontext creates spring beans during init has already iniatilize
* creation of bean happens during ApplicationContext during init by default
* Basic Bean Scopes
* Singleton - Only once per Spring container - default
* Prototype - New bean created with every request or reference
* Web-aware Context Bean Scopes
    - Request - New bean per servlet request
    - Session - New bean per session
    - Global Session - New bean per global HTTP session (portlet context)
* bean scope="singleton"
* bean scope="prototype"

Using ApplicationContextAware
-----------------------------
* need to implement interface
* implements ApplicationContextAware
* setApplicationContext overridden method
* private ApplicationContext context
* implements BeanNameAware
* setBeanName overridden name
* private String beanName
* Spring is automatically going to set the overriden methods

Bean Definition Inheritance
---------------------------
* Source: http://www.youtube.com/watch?v=LxRiFFEXs5I
* parent bean or can be abstract (templating bean)
* bean id="parentTriangle" 
* bean id="triangle1" parent="parentTriangle"
* using list in property "points"
* list merge="true"
* bean abstract="true"  (cannot be created)

Life Cycle Callbacks
--------------------
* Source: http://www.youtube.com/watch?v=8LCpo4sfdQU
* callback methods for life cycle of the bean
    - created
    - destroyed
* to close the ApplicationContext 
    - needed for desktop application
    - in web applications, this is automatic
* context.registerShutdownHook();
* In triangle Bean, implement InitializingBean
    - afterPropertiesSet() needs to be implemented
* In triangle Bean, implement DisposableBean
    - destroy() needs to be implemented
* if you don't want to bind pojo to Spring
* public void myInit()
* in spring xml, in trianble bean definitiion
    - init-method="myInit()
* public void cleanUp()
* in spring xml, in triangle bean definition
    - destroy-method="cleanUp"
* configure it globally for all beans
    - inside beans tag
    - default-init-method="myInit"
    - default-destroy-method="cleanUp"
* if both options for life cycle callbacks are called
    - both get called
    - initializationbean is called // the implemented interfaces gets called first

Writing a BeanPostProcessor
---------------------------
* source: http://www.youtube.com/watch?v=-ycOZTpMkow
* classes that tells spring that spring needs to do
* runs for every beans for every initialization
* beanpostprocessor is more adaptable.
    - don't need to add methods for each bean classes.
* DisplayNameBeanPostProcessor implement BeanPostProcessor
* postProcessAberInitialization, postProcessBeforeInitaliaction
* takes two parameters, Object and String
* Object is the bean object itself
* String is the name of the bean is passed
* needs to return the object back, expects the object back
* bean class="org.xyz.DisplayNameBeanProcessor"/>
    - no need to add id attribute

Writing a BeanFacorPostProcessor
--------------------------------
* source: http://www.youtube.com/watch?v=szNWTBlewQI
* wanted to insert code when the BeanFactory itself is being initialized.
* create class MyBeanFactoryPP implementes BeanFactoryPostProcessor
* postProcessBeanFactory()
* the first argument is the BeanFactory
* declare the bean in spring.xml
* one example is BeanFactoryPostProcess
    - specify property file
* pointsconfig.properties
* pointA.pointX = 0
* pointA.pointY = 0
* in spring.xml, we add a placeholder
    -value="${pointA.pointX}"
* bean class="org.springframework.beans.fatory.config.PropertyPlaceHOlderConfigurator"
    property name="locations" value="pointsconfig.properties"/>
