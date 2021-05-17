package com.vivek.security.repository;



import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.vivek.security.models.ERole;
import com.vivek.security.models.Role;

public interface RoleRepository extends MongoRepository<Role, String> {
  Optional<Role> findByName(ERole name);
}