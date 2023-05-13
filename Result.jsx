import React, { Component } from "react";
import UserService from "../services/UserService";

class Results extends Component{
    constructor(props)
    {
        super(props)
        this.state={
            votes:[]
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
                <h2 className="text-center">Results</h2>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Employee id</th>
                                <th>Employee name </th>
                                <th>Employee pass</th>
                                <th>Employee votes</th>
                                

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
                                        <td>{votes.votes}</td>
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

export default Results;
