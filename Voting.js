import React, { Component } from "react";
import UserService from "../services/UserService";
import Logout from './Logout';
import Login from "./Login";

class Voting extends Component{
    constructor(props)
    {
        super(props)
        this.state={
            votes:[],
            voted:false
        }
        this.editVotes=this.editVotes.bind(this);
    }
    editVotes(ide){
        UserService.addVote(ide).then((res)=>
        {
            console.log("you have voted");
            this.setState({voted:true})
            this.LogoutNow()
            
        });
    }
    LogoutNow=()=>
    {
        if(this.state.voted)
    {
        return <Login/>
    }
    }
    componentDidMount(){
        UserService.getUsers().then((res)=>
        {
            this.setState({votes:res.data})
            
        })
    }
    

    render(){
        return(
            <div>
                <h2 className="text-center">Vote Here</h2>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Employee id</th>
                                <th>Employee name </th>
                                <th>Employee pass</th>
                                <th>Actions</th>
                                

                            </tr>
                        </thead>

                        <tbody>
                            {
                                this.state.votes.map(
                                    votes =>
                                    <tr key={votes.ide}>
                                        <td>{votes.ide}</td>
                                        <td>{votes.name}</td>
                                        <td>{votes.pass}</td>
                                        <td>
                                            <button onClick={()=>this.editVotes(votes.ide)} className="btn btn-info">Vote</button>
                                        </td>
                                    </tr>
                                    
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
        
    
}

export default Voting;
