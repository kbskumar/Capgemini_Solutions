package com.madhu.springAssignment;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

/**
 * Hello world!
 *
 */
public class App
{
    public static void main( String[] args )
    {
    	@SuppressWarnings("resource")
    	ApplicationContext context= new ClassPathXmlApplicationContext("spring1.xml");
    	Customer details=(Customer)context.getBean("details");
    	details.customerInfo();
    	
    }
    
}
