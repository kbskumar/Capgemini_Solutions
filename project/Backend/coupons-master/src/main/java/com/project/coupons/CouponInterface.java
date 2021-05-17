package com.project.coupons;

import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Collection;
import java.util.List;

public interface CouponInterface extends MongoRepository<Coupon,Integer> {
    List<Coupon> findByCompany(String company);
    List<Coupon> findByCategory(String category);
}
