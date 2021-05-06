package com.thiagofelipe.dsvendas.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.thiagofelipe.dsvendas.dto.SaleDTO;
import com.thiagofelipe.dsvendas.entidades.Sale;
import com.thiagofelipe.dsvendas.repositories.SaleRepository;
import com.thiagofelipe.dsvendas.repositories.SellerRepository;

@Service
public class SaleService {

	@Autowired
	private SaleRepository repository;
	
	@Autowired
	private SellerRepository repositorySeller;
	
	
	@Transactional(readOnly = true)
	public Page<SaleDTO> findAll(Pageable page){
		repositorySeller.findAll();
		Page<Sale> result = repository.findAll(page);
		return result.map(x -> new SaleDTO(x));
	}
	
	

}
