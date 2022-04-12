package com.liamhugo.wardrobe.clothes.bdd;

import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface ClotheRepository extends CrudRepository<Clothe, Long> {
    List<Clothe> findAllByType(String type);
}