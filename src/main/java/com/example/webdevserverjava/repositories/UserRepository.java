package com.example.webdevserverjava.repositories;

import org.springframework.data.repository.CrudRepository;

import com.example.webdevserverjava.models.User;

public interface UserRepository extends CrudRepository<User, Integer> {

}
