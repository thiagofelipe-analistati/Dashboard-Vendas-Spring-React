package com.thiagofelipe.dsvendas.repositories;

import org.springframework.data.jpa.repository.JpaRepository;


import com.thiagofelipe.dsvendas.entidades.Seller;


public interface SellerRepository extends JpaRepository<Seller, Long> {
	
}
