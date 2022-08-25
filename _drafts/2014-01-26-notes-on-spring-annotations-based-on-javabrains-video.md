---
layout: post
title: Notes on Spring Annotations based on JavaBrains video
categories: spring
---
Coding To Interfaces
--------------------
* source: http://www.youtube.com/watch?v=5IDIEMxdkC8
* don't want to be dependent on triangle class
* need to make it more extensable
* coding to interfaces
* create an interface called Shape
* new method called public void draw()

Introduction to Anotations and the Require Annotation
------------------------------------------------------
* in Circle class, the center point is required
* Circle.setCenter has to invoked.
* catch errors up front
* @Required on setCenter method
* BeanPostProcessor checks for these annotations
* bean class="org.springframework.beans.factory.annotation.RequiredAnnocationBeanPostProcessor"

The Autowired Annotation
------------------------
* source: http://www.youtube.com/watch?v=IVIhVJJGo68
* same as autowiring by type
* in Circle.setCenter using @Autowired
* don't need to specify property in spring.xml
* need to add Autowired in spring.xml
    - bean class="org.springframework.beans.factory.annotation.AutowiredAnnotationBeanPostProcessor"
* if there are multiple types in spring.xml available
    - how do you choose?
    - change the pointA bean to be called "center"
    - bean changing the name, so spring is able to get the right bean.
    - first looks for type, the find by name
* you can also use @Qualifier("")
    - in Circle.setCenter() add @Qualifier("") annotation
    - in spring.xml, add qualifier tag to pointA 
    - qualifier value="circleRelated"
    - need to add xml namespace
        + search for config.xml
        + copy beans namespace into spring.xml document
* add context: annotation-config
    - shortcut to define annoation tags.

Some JSR-250 Annotations
------------------------
* source: http://www.youtube.com/watch?v=apTEbKPW3ow
* JSR-250 java specification request
* spring supports some of them 
* @Resource
    - inject dependency into class
    - @Resource(name="pointC")
    - injection by name
    - if it does not include name, it will use the member variable (tries to use circle bean)
* @PostConstruct
* @PreDestroy
    - need to add destroy hooks
    - AbstractApplicationContext 

Component and Stereotype Annotations
------------------------------------
* don't need to add bean into spring.xml configuration file
* need to tell class it is a bean
* @Component 
    - add to class
    - if I make it a @Components, acts as a Singleton
    - not possitble to have different Point classes.
    - restrict multiple beans
* spring.xml needs to know it has beans in code, rather than in spring.xml
    - context:component scan base-pacakge=""
* Stereotypes
    - adds level of documentation, you know what the bean does in the whole enterprise application.
    - writing enterprise applications
    - data object / service layer 
    - particular bean as one of those rules
    - you can use @Service
    - @Service going to give Spring extra information about the bean
    - @Repository - data object
    - @Controller - a controller (MVC)

Using MessageSource to get Text from Context Files
--------------------------------------------------
* create properties file: mymessages.properties
* greeting=Hello!
* define bean in spring.xml
    - bean id="messageSource" class="org.springframework.context.support.ResourceBundleMessageSource"
    - bean needs configuration, property name="basesnames"
    - list
    - value mymessages
* context.getMessage("greeting", null, "Default Greeting", null);
    - property name
    - variables to be inserted into greeting
    - default greeting if property is not found
    - locale

Event Handling in Spring
------------------------
* 3 core things 
    - event publisher
    - event listener
    - event itself
- ApplicationEventListener,  ApplicationEventPublisher, ApplicationEvent
- needs to implement ApplicationListener provided by Spring
- register as a spring bean to register the listener
    - use @Component annotation to make it easier
- DrawEVent extend ApplicationEvent
    - override toString()
- publish drawEvent in draw
    - create memeber ApplicationEventPlubisherEvent
    - create a private member variable ApplicationEVentPublisher;
    - publisher.publishEvent(new DrawEvent())
    - how to get a handle to the publisher
        * need to implement interface ApuicationEventPublisherAware
    - same as ApplicationContext but need to code to interface

Introduction to AOP
------------------
* vs. Functional Programming Language
    - lots of interdepecies
* vs. Object Oriented Programming
    - write it as objects
    - members and procedures
* not all objects you want to accomplish can be done in objects
    - log messages in three different objects
    - not good decide for common procedure
    - take a method out, and make it another object
        * logger object
    - object A, B, C would reference logger object
    - have dependency to Logger
* when doing a design, which object is the most important
    - the Logger would probably highly rank but that is wrong.
    - not a good idea if it is not a business model.
    - just doing support
* too many relationships to the crosscutting objects
* code is still required in all methods
* cannot all be changed at once
* cross cutting concerns
    - infracstructe
    - security
    - transactions
    - logging
* Aspects
    - don't create new class for logging
    - create special class 
        * Logging Aspect
        * Transaction Aspect
* Aspect vs. Object
    - you don't reference aspects in code.
    - define Aspect Configuration
    - gets methods in aspect that gets called before another method is run.  Not configured in code.
* Wrapping Aspect around methods
    - run before and/or after code
* Steps in AOP
    - write aspects
    - confiure where the aspects apply

Setting up AOP Dependencies
---------------------------
* create new project SpringAop
* add library -> user library
* add spring library
* create new user library
    - AspectJ
    - download AspectJ/lib
    - aspectjrt.jar/ aspectjweaver.jar
    - aopalliance.jar
    - cglib.jar
    - asm.jar

Writing our First Aspect
------------------------
* create new bean - AopMain
* add spring.xml configuration
    - "aspectj-autoproxy" -> search for files to copy to spring.xml
    - need to add aop namespace
* in AopMain, add applicationConext
    - ApplicationContext ctx = new ClassPathXmlApplicationContext("spring.xml")
* creating a ShapeService class
    - use interfaces
    - ctx.getBean("shapeService", ShapeService.class)
* create a new class "LoggingAspect" inside the "aspect" package.
* public void LoggingAdvice() with sysout
* Advice is AOP terminology
* @Aspect makes it an annotation
* need to annotate method, need to run when getName is called.  Need to use annotation
* get executed before the getName method.
* @Before("execution(public String getName())") 
* aop:aspectj-autoproxy
* add bean definition for out loggingAspect

Pointcuts and Wildcard Expressions
----------------------------------
* want to try to only to print out on Circle.getName()
    - @Before("execution(public String org.xyz.model.Circle.getName()")
    - just specify the class with the method name
* one advice to different points of the execution
    - use wildcards
    - apply to all getters
    - @Before("execution(public * get*()")
    - @Before("execution(public * get*(*)")j
        + apply to all getters with an arguments
        + ".." means 0 or more arguments
* multiple advice with one point
    - pointcut - point where you want to cut in
    - define a point separately
    - no need to put the expression all the time
    - @Pointcut
        - @Pointcut("execution(* get*()")
        - public void allGetters() {}
        - for each method @before("allGetters()")

A Few More Pointcut Expressions
------------------------------
* @Pointcut("execution(* * org.koushik.javabrains.model.Circle*(..))")
  public void allCircleMethods() {}
    - "execution" - Method Names
* @Pointcut("within(org.koushik.javabrains.model.Circle)")
  public void allCircleMethods() {}
    - more readable
* @Pointcut("within(org.koushik.javabrains.model..)")
    - ".." means all sub-packages included
    - "within" - ClassNames
* args
    - all pointcut that takes Circle as an argument
* combining pointcut expressions
    - can combine multiple pointcuts
    - @Before("allGetters() && allCircleMethods()")

JoinPoints and Advice Arguments
-------------------------------
* public void LoggingAdvice(JoinPoint joinPoint)
* JoinPoint has some information about the methods
* "JoinPoint" = all the places where you can apply advice
    - only methods
    - with AspectJ, you can actually pointcuts on member variable update
    - joinPoint.toString()
    - joinPoint.getTarget()
        * get a handle to the Circle object
        * gets the actual object
* @Before("args(String)c void stringArgumentMethods(String name")
    - use "name" as the argument in method advice

After Advice Types
------------------
* @After("args(name)")
    - @After going to be called even after exception is thrown
* @AfterReturning("args(name)")
    - crosspoint invoked only after successful invocation
    - if exception occurs, it does not go into crosspoint, advice not executed
* @AfterThrowing
    - another advice type
    - @AfterThrowing("args(name)")
      pubic void exceptionAdvice(String name) {}
* let's look at the return object
    - create a method that actually returns a string
    - @AfterReturning(pointcut="args(name)", returning="returnString")
    - public void stringArgumentMethods(String name, returning="returnString")
* @AFterThrowin(pointcut="args(name)", throwing="ex")
 pubic void exceptionAdvice(String name, Exception ex) {}

Around Advice Type
------------------
* when you want to use before and after
* more powerful than two separate advice
* @Around("allGetters()")
  public void myAroundAdvice(ProceedingJoinPoint proceedingJoinPoint) {
    Object returnValue = null;
    try {
    } catch(Throwable e) {
    } finally {
    }
    // add advice code here
    returnValue = proceedingJoinPoint.proceed(); // you can skip it entirely
    // add advice code here
    return returnValue;
  }
* need to have a ProceedingJoinPoint as an argument
* need to have a proceedginJoinPOint.proceed()
* you need to choose the least powerful options that fits your need.

Naming Conventions and Custom Advice
------------------------------------
* need to have conventions for advice issue
* @Pointcut("execution(* org.ko.serice.*.*(..)")
* for adding advice with no pattern
    - add logable interface - creating a new Annotation
    - @annntation(org.koushi.aspct.Loggable)
    - instead of application a point to the package name
    - @Loggable

AOP XML Configuration
---------------------
* configuration using annotation
* configuration can also be done in spring.xml
* aop:config will contain all the configration inside spring.xml
* aop:aspect
    - takes in id and ref  of the using the bean name
* aop:pointcut with expression
    - takes id takes the name of the method
* aop:around
    - takes in method paramter
    - use pointcut reference
* reason to add in spring
    - for use in legacy code, mostly done in xml configuration file instaed of annotation
* reason fo rannotations
    - simple
    - readability

Understanding AOP Proxies
-------------------------
* AOP uses proxies to cut through methods
* created simple Factory Service
* extends ShapeService with ShapeServiceProxy
* give a proxy class to main
    - that's all it cares about
    - proxy class just calls Super
* shows how aop can be done.
