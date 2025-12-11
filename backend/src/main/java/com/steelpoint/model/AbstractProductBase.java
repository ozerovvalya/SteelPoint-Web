package com.steelpoint.model;

import jakarta.persistence.MappedSuperclass;
import jakarta.validation.constraints.NotBlank;
import lombok.Getter;
import lombok.Setter;

@MappedSuperclass
@Getter
@Setter
public abstract class AbstractProductBase extends BaseEntity {

    @NotBlank
    protected String name;

    protected String image;
    protected String description;

    // Constructors can be inherited, or added here if needed
}
