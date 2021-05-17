package com.vivek.security.payload.request;

import java.util.Set;
public class SignupRequest {
    private String id;
	private String Username;
	private String Password;
	private String Email;
	private Set<String> Roles;

	

	public SignupRequest(String id, String username, String password, String email, Set<String> roles) {
		super();
		this.id = id;
		Username = username;
		Password = password;
		Email = email;
		Roles = roles;
	}



	public String getId() {
		return id;
	}



	public void setId(String id) {
		this.id = id;
	}



	public String getUsername() {
		return Username;
	}



	public void setUsername(String username) {
		Username = username;
	}



	public String getPassword() {
		return Password;
	}



	public void setPassword(String password) {
		Password = password;
	}



	public String getEmail() {
		return Email;
	}



	public void setEmail(String email) {
		Email = email;
	}



	public Set<String> getRoles() {
		return Roles;
	}



	public void setRoles(Set<String> roles) {
		Roles = roles;
	}



	public SignupRequest() {
		super();
	}
	
}
