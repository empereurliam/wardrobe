package com.liamhugo.wardrobe.users.bdd;

import com.liamhugo.wardrobe.clothes.bdd.Clothe;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface UserRepository extends CrudRepository<User, Long> {
    List<User> findAllByMailAndPassword(String mail, String password);
}