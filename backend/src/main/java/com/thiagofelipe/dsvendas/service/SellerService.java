package com.thiagofelipe.dsvendas.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.thiagofelipe.dsvendas.entidades.Seller;
import com.thiagofelipe.dsvendas.repositories.SellerRepository;

@Service
public class SellerService {

	@Autowired
	private SellerRepository repository;
	
	public List<Seller> findAll(){
		return repository.findAll();
		}
	
}
