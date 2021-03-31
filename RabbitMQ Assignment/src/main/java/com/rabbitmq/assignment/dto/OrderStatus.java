package com.rabbitmq.assignment.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString

public class OrderStatus {
	private Order order;
    private String status;//progress,completed
    private String message;
    public OrderStatus() {
		
	}
	public OrderStatus(Order order, String status, String message) {
		super();
		this.order = order;
		this.status = status;
		this.message = message;
	}
    

}
