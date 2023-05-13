package com.example.demo;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection="emp")
public class Emp {
		
		private int ide;
		private String name;
		private String pass;
		private int votes;

	public String getName() {
			return name;
		}

		public void setName(String name) {
			this.name = name;
		}
		

	public int getVotes() {
			return votes;
		}

		public void setVotes(int votes) {
			this.votes = votes;
		}

	public String getPass() {
			return pass;
		}

		public void setPass(String pass) {
			this.pass = pass;
		}

	public int getIde() {
		return ide;
	}

	public void setIde(int ide) {
		this.ide = ide;
	}

	@Override
	public String toString() {
		return "Emp [id=" + ide + ", name=" + name + "pass="+pass+"votes="+votes+"]";
	}

	
	
}
