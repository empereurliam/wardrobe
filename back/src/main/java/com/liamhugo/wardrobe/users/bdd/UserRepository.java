package com.liamhugo.wardrobe.users.bdd;

import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<User, Long> { }