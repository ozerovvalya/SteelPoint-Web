package com.steelpoint.repository;

import com.steelpoint.model.Product;
import org.springframework.data.jpa.domain.Specification;

public class ProductSpecifications {

    public static Specification<Product> hasCategory(String categoryName) {
        return (root, query, cb) ->
                categoryName == null ? null :
                        cb.equal(cb.lower(root.get("category").get("name")), categoryName.toLowerCase());
    }

    public static Specification<Product> nameContains(String keyword) {
        return (root, query, cb) ->
                keyword == null ? null : cb.like(cb.lower(root.get("name")), "%" + keyword.toLowerCase() + "%");
    }
}
