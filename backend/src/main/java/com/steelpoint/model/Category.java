package com.steelpoint.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import java.util.List;

@Entity
@Getter
@Setter
public class Category extends BaseEntity {
    private String name;
    @OneToMany(mappedBy = "category")
    private List<Product> products;
}