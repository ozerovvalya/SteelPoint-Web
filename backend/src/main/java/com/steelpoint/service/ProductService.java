package com.steelpoint.service;

import com.steelpoint.dto.ProductDTO;
import com.steelpoint.model.Product;

import java.util.List;

public interface ProductService {
    List<ProductDTO> getAllProducts();
    Product getProductById(Long id);
    Product saveProduct(Product product);
    void deleteProduct(Long id);

    List<ProductDTO> getProducts(String category, String sortBy);

    List<ProductDTO> getFilteredAndSortedProducts(String category, String sortBy, String direction);
}
