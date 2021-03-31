package com.rabbitmq.assignment.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString

public class Order {
	private String orderId;
    private String name;
    private int qty;
    private double price;
    
    public Order() {
		
	}
	public Order(String orderId, String name, int qty, double price) {
		super();
		this.orderId = orderId;
		this.name = name;
		this.qty = qty;
		this.price = price;
	}
	public void setOrderId(String string) {
		// TODO Auto-generated method stub
		
	}
	

}
