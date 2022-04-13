package com.liamhugo.wardrobe.users.resource;

public class UserInput {
    String mail;
    String password;

    public UserInput() {
        super();
    }

    public String getMail() {
        return mail;
    }

    public void setMail(String mail) {
        this.mail = mail;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
