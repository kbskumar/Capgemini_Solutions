package com.project.coupons;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.webmvc.ResourceNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class Services {
    @Autowired
    private CouponInterface c;
    public void addCoupons(Coupon coupon) {
        c.save(coupon);
    }
    public List<Coupon> getCoupons(){
        return c.findAll();
    }
    public List<Coupon> findByCompany(String company){
        return c.findByCompany(company);
    }
    public List<Coupon> findByCategory(String category){
        return c.findByCategory(category);
    }
    public Coupon getCoupon(int id){
        return c.findById(id).orElseThrow(()->new ResourceNotFoundException("The record with "+id+"is not found"));
    }
    public String getType(String query){
        if(!findByCompany(query).isEmpty()){
            return "company";
        }
        else if(!findByCategory(query).isEmpty()){
            return "category";
        }
        else{
            return "nothing";
        }
    }
    public void deleteCoupon(int id){
        c.delete(getCoupon(id));
    }
    public void updateCoupon(int id,Coupon coupon){
        Coupon c = getCoupon(id);
        c.setCode(coupon.getCode());
        c.setCartvalue(coupon.getCartvalue());
        c.setDate(coupon.getDate());
        c.setV_p(coupon.getV_p());
        c.setType(coupon.getType());
        c.setExtra_percentage(coupon.getExtra_percentage());
    }
}
