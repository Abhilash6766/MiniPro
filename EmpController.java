package com.example.demo;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;


@RestController
@CrossOrigin
public class EmpController {

	@Autowired
	EmpRepo repo;
	
	@RequestMapping("/")
	public String home()
	{
		return " this is home page";
	}
	
	
	@GetMapping("/show")
	@CrossOrigin
	public List<Emp> display()
	{
		return repo.findAll();
	}
	
	@GetMapping("/show/{ide}")
	@CrossOrigin
	public Emp show(@PathVariable("ide") int ide)
	{
		return repo.findByIde(ide);
	}
	
	@PostMapping("/posts")
	@CrossOrigin
	public Emp post(@RequestBody Emp employee)
	{
		return repo.save(employee);
	}
	
	@DeleteMapping("/delete/{ide}")
	@CrossOrigin
	public String dele(@PathVariable("ide") int ide)
	{
		//Optional<Emp> e=repo.findByIde(ide);
		//System.out.print(e);
		repo.deleteByIde(ide);
		
		return "deleted succesfuly";
		
	}
	@PutMapping("/upd/{ide}")
	public String update(@PathVariable("ide") int ide)
	{
		Emp demo=repo.findAndUpdate(ide);
		dele(ide);
		repo.save(demo);
		return "updated";
		
	}
	
}
