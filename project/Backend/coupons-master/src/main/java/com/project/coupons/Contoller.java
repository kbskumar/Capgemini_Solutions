package com.project.coupons;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


import java.util.List;
@RestController
@RequestMapping("/api")
public class Contoller {
    @Autowired
    private Services service;
    @CrossOrigin
    
    @RequestMapping(method= RequestMethod.POST,value = "/coupons")
    public void addCoupons(@RequestBody Coupon c){
        service.addCoupons(c);
    }
    
    @GetMapping("/getcoupons")
    public List<Coupon> getCoupons(){
        return service.getCoupons();
    }
    @GetMapping("/getcoupon/{id}")
    public Coupon getCouponById(@PathVariable(value = "id") int id){
        return service.getCoupon(id);
    }
    @DeleteMapping("/deletecoupon/{id}")
    public String deleteCoupon(@PathVariable int id){
        service.deleteCoupon(id);
        return "deleted successfully";
    }
    @PutMapping("/updatecoupon/{id}")
    public String updateCoupon(@PathVariable(value = "id") int id,@RequestBody Coupon coupon){
        service.updateCoupon(id,coupon);
        return "done";
    }
    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/getcouponsbycompany/{company}")
    public List<Coupon> getCouponsByCompany(@PathVariable(value = "company")String company){
        return service.findByCompany(company);
    }
    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/gettype/{query}")
    public String getType(@PathVariable(value = "query")String query){
        return service.getType(query);
    }
    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/getcouponsbycategory/{category}")
    public List<Coupon> getCouponsByCategory(@PathVariable(value = "category")String category){
        return service.findByCategory(category);
    }
}
