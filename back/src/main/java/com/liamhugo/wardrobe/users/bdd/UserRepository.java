package com.liamhugo.wardrobe.users.bdd;

import org.springframework.context.annotation.Lazy;
import org.springframework.data.repository.CrudRepository;

@Lazy
public interface UserRepository extends CrudRepository<User, Long> { }