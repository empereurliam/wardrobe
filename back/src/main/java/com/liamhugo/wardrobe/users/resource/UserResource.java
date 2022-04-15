package com.liamhugo.wardrobe.users.resource;


import com.liamhugo.wardrobe.clothes.bdd.Clothe;
import com.liamhugo.wardrobe.clothes.bdd.ClotheRepository;
import com.liamhugo.wardrobe.users.bdd.User;
import com.liamhugo.wardrobe.users.bdd.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;

import javax.transaction.Transactional;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Path("users")
public class UserResource {
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private ClotheRepository clotheRepository;

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public List<User> listUser() {
        List<User> users = new ArrayList<>();
        userRepository.findAll().forEach(users::add);
        return users;
    }

    @POST
    @Path("signup")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public Long createUser(User u) {
        var success = userRepository.save(u);
        if(success != null) {
            return success.getId();
        }
        return null;
    }

    @POST
    @Path("signin")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public Long userPresent(UserInput user) {
        List<User> users = new ArrayList<>();
        userRepository.findAllByMailAndPassword(user.getMail(), user.getPassword()).forEach(users::add);
        if(!users.isEmpty()) {
            System.out.println(users.toString());
            return users.get(0).getId();
        }
        return null;
    }

    @DELETE
    @Path("{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public Response deleteUser(@PathParam("id") Long id) {
        if (userRepository.findById(id).isPresent()) {
            try {
                userRepository.deleteById(id);
            } catch (Exception e) {
                return Response.serverError().build();
            }
        }
        return Response.noContent().build();
    }

    @POST
    @Path("{idUser}/clothes")
    @Produces(MediaType.APPLICATION_JSON)
    public Response addClotheToUser(@PathParam("idUser") Long idUser, ClotheInput clothes) {
        Optional<User> uOpt = userRepository.findById(idUser);
        Optional<Clothe> cOpt = clotheRepository.findById(clothes.getIdClothe());

        if (!uOpt.isPresent() || !cOpt.isPresent()) {
            return Response.status(Response.Status.NOT_FOUND).build();
        }

        User u = uOpt.get();
        Clothe c = cOpt.get();
        u.getClothes().add(c);
        userRepository.save(u);
        return Response.ok(u).build();
    }

    @GET
    @Path("{idUser}/clothes/{type}")
    @Produces(MediaType.APPLICATION_JSON)
    public List<Clothe> getUserClothes(@PathParam("idUser") Long idUser, @PathParam("type") String type) {
        List<Clothe> clothes_wanted = new ArrayList<>();
        Optional<User> uOpt = userRepository.findById(idUser);

        if (!uOpt.isPresent()) {
            return null;
        }

        User u = uOpt.get();
        var clothes = u.getClothes();
        clothes.forEach(clothe -> {
            if(clothe.getType().equals(type)) {
                clothes_wanted.add(clothe);
            }
        });
        return clothes_wanted;
    }
}
