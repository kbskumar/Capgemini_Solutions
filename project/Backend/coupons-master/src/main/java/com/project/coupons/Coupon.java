package com.project.coupons;


import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;


@Document(collection = "coupons")
public class Coupon {
    
    @Id
    private int id;
    
    private String code;
    
    private String type;
   
    private int v_p;
    
    private int extra_percentage;
    
    private int cartvalue;
    
    private String date;
    
    private String company;

    private String category;

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public String getCompany() {
        return company;
    }

    public void setCompany(String company) {
        this.company = company;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public int getV_p() {
        return v_p;
    }

    public void setV_p(int v_p) {
        this.v_p = v_p;
    }

    public int getExtra_percentage() {
        return extra_percentage;
    }

    public void setExtra_percentage(int extra_percentage) {
        this.extra_percentage = extra_percentage;
    }

    public int getCartvalue() {
        return cartvalue;
    }

    public void setCartvalue(int cartvalue) {
        this.cartvalue = cartvalue;
    }

    public String getDate() {
        return this.date;
    }

    public void setDate(String date){
        this.date = date;
    }

    public Coupon(int id, String code, String type, int v_p, int extra_percentage, int cartvalue, String date, String company, String category) {
        this.id = id;
        this.code = code;
        this.type = type;
        this.v_p = v_p;
        this.extra_percentage = extra_percentage;
        this.cartvalue = cartvalue;
        this.date = date;
        this.company = company;
        this.category = category;
    }

    public Coupon(){}
}
