package com.example.demo;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

public interface EmpRepo extends MongoRepository<Emp,Integer> {

	public Emp findByIde(int ide);

	public void deleteByIde(int ide) ;

	@Query
	public default Emp findAndUpdate(int ide)
	{
		Emp e=findByIde(ide);
		int votes=e.getVotes();
		int newid=e.getIde();
		String namenew=e.getName();
		votes=votes+1;
		e.setIde(newid);
		e.setVotes(votes);
		e.setName(namenew);
		
		return e;
	};

	



}
