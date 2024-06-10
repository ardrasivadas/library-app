import React, { useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const AddBook = () => {

    const [data,setData]=useState(
{
        "Title":"",
        "Author":"",
        "Description":"",
        "Price":""
}
    )

    const inputHandler=(event)=>{
        setData({...data,[event.target.name]: [event.target.value]
        })
    }

    const readValue=()=>{
        console.log(data)

      axios.post("",data).then(
        (Response)=>{
            console.log(Response)
            if(Response.data.status=="success"){
                alert("success")
            }
            else{
                alert("error")
            }
        }
      ).catch() 
    }

    
    return (
        <div>
            <Navbar/>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row">
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">TITLE</label>
                                <input type="text" className="form-control" name='Title' value={data.Title} onChange={inputHandler} />
                            </div>
                           
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">AUTHOR</label>
                                <input type="text" className="form-control" name='Author' value={data.Author} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">DESCRIPTION</label>
                                <textarea name="Description" id="" className="form-control" value={data.Description} onChange={inputHandler}></textarea>

                            </div>
                        
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">PRICE</label>
                                <input type="text" className="form-control" name='Price' value={data.Price} onChange={inputHandler}/>
                            </div>
                            
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <button className="btn btn-success" onClick={readValue}>SUBMIT</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddBook