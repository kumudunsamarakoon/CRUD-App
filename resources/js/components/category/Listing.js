import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import SuccessAlert from './SuccessAlert';
import ErrorAlert from './ErrorAlert';
import Pagination from "react-js-pagination";

export default class Listing extends Component 
{
    constructor()
    {
        super();
        this.state={
            categories:[],
            alert_message:'',
            activePage:1,
            itemsCountPerPage:1,
            totalItemsCount:1,
            pageRangeDisplayed:3
            
        }
        this.handlePageChange=this.handlePageChange.bind(this);
    }

    componentDidMount()
    {
        axios.get('http://127.0.0.1:8000/api/category')
        .then(response=>{
            this.setState({
                categories:response.data.data,
                itemsCountPerPage:response.data.per_page,
                totalItemsCount:response.data.total,
                activePage:response.data.current_page
            });
        });
    }

    handlePageChange(pageNumber) {
        console.log(`active page is ${pageNumber}`);
        //this.setState({activePage: pageNumber});
        axios.get('http://127.0.0.1:8000/api/category?page='+pageNumber)
        .then(response=>{
            this.setState({
                categories:response.data.data,
                itemsCountPerPage:response.data.per_page,
                totalItemsCount:response.data.total,
                activePage:response.data.current_page
            });
        });
    }

    onDelete(category_id)
    {
        axios.delete('http://127.0.0.1:8000/api/category/delete/'+category_id)
        .then(response=>{

            var  categories = this.state.categories;

            for(var i=0; i<categories.length; i++) {
                if(categories[i].id==category_id){
                    categories.splice(i,1);
                    this.setState({categories:categories});
                }
            }

            this.setState({alert_message:"success"})
        }).catch(error=>{
            this.setState({alert_message:"error"});
        })
    }
    render() 
    {
        return (
           <div>
                <div className="col-lg-12"> 
                    {this.state.alert_message=="success"?<SuccessAlert message={"Category deleted successfully."}/>:null}
                    {this.state.alert_message=="error"?<ErrorAlert message={"Error occured while deleting category."}/>:null}
                    <table className="table table-dark">
                        <thead>
                            <tr>
                            <th scope="col">#</th>
                            <th scope="col">Category Name</th>
                            <th scope="col">Status</th>
                            <th scope="col">Created At</th>
                            <th scope="col">Updated At</th>
                            <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.categories.map(category=>{
                                    return(
                                        <tr key = {category.id}>
                                        <th scope="row">1</th>
                                        <td>{category.name}</td>
                                        <td>{category.active==1?("Active"):("Inactive")}</td>
                                        <td>{category.created_at}</td>
                                        <td>{category.updated_at}</td> 
                                        <td>
                                            <Link to={`/category/edit/${category.id}`}>Edit</Link> &nbsp;
                                            <Link to="#" onClick={this.onDelete.bind(this,category.id)}>Delete</Link>
                                        </td>
                                        </tr>
                                    )
                                })
                            }
                            
                        </tbody>
                    </table>
                </div> 
                <div className="d-flex justify-content-center">
                    <Pagination
                        activePage={this.state.activePage}
                        itemsCountPerPage={this.state.itemsCountPerPage}
                        totalItemsCount={this.state.totalItemsCount}
                        pageRangeDisplayed={this.state.pageRangeDisplayed}
                        onChange={this.handlePageChange}
                        itemClass='page-item'
                        linkClass='page-link'
                    /> 
                </div>  
           </div>
        );
    }
}
