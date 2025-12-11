package com.steelpoint.service.impl;

import com.steelpoint.dto.ProductDTO;
import com.steelpoint.model.Product;
import com.steelpoint.repository.ProductRepository;
import com.steelpoint.repository.ProductSpecifications;
import com.steelpoint.service.ProductService;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ProductServiceImpl implements ProductService {

    private final ProductRepository productRepository;

    public ProductServiceImpl(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    @Override
    public List<ProductDTO> getAllProducts() {
        return productRepository.findAll()
                .stream()
                .map(ProductDTO::new)
                .collect(Collectors.toList());
    }

    @Override
    public Product getProductById(Long id) {
        return productRepository.findById(id).orElse(null);
    }

    @Override
    public Product saveProduct(Product product) {
        return productRepository.save(product);
    }

    @Override
    public void deleteProduct(Long id) {
        productRepository.deleteById(id);
    }

    @Override
    public List<ProductDTO> getProducts(String category, String sortBy) {
        Specification<Product> spec = Specification.where(null);

        if (category != null && !category.isEmpty()) {
            spec = spec.and(ProductSpecifications.hasCategory(category));
        }

        Sort sort = getSort(sortBy, "asc"); // можно дефолтное направление

        return productRepository.findAll(spec, sort)
                .stream()
                .map(ProductDTO::new)
                .collect(Collectors.toList());
    }

    @Override
    public List<ProductDTO> getFilteredAndSortedProducts(String category, String sortBy, String direction) {
        Specification<Product> spec = Specification.where(null);

        if (category != null && !category.isEmpty()) {
            spec = spec.and(ProductSpecifications.hasCategory(category));
        }

        Sort sort = getSort(sortBy, direction);

        return productRepository.findAll(spec, sort)
                .stream()
                .map(ProductDTO::new)
                .collect(Collectors.toList());
    }

    private Sort getSort(String sortBy, String direction) {
        Sort.Direction dir = "desc".equalsIgnoreCase(direction) ? Sort.Direction.DESC : Sort.Direction.ASC;

        return switch (sortBy) {
            case "price" -> Sort.by(dir, "price");
            case "name" -> Sort.by(dir, "name");
            default -> Sort.unsorted();
        };
    }
}
