package com.thiagofelipe.dsvendas.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.thiagofelipe.dsvendas.entidades.Sale;


public interface SaleRepository extends JpaRepository<Sale, Long> {
	
}
