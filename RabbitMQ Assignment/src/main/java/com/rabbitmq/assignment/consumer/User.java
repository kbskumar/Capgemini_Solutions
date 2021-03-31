package com.rabbitmq.assignment.consumer;

import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.stereotype.Component;

import com.rabbitmq.assignment.config.MessagingConfig;
import com.rabbitmq.assignment.dto.OrderStatus;

@Component
public class User {
	@RabbitListener(queues = MessagingConfig.QUEUE)
    public void consumeMessageFromQueue(OrderStatus orderStatus) {
        System.out.println("Message recieved from queue : " + orderStatus);
    }

}
