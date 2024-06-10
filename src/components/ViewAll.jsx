import React, { useState } from 'react'
import Navbar from './Navbar'

const ViewAll = () => {

    const [data, changeData] = useState(
        [
            {
            "Title": "Pride and prejudice",
            "Author": "JK Rowling ",
            "Description": "Interesting",
            "Price": "750"
            }
        ]

    )
    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <table class="table" border="2">
                            <thead>
                                <tr>
                                    <th scope="col">Title</th>
                                    <th scope="col">Author</th>
                                    <th scope="col">Description</th>
                                    <th scope="col">Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data.map(
                                        (value,index)=>{
                                            return <tr>
                                            <th scope="row">{value.Title}</th>
                                            <td>{value.Author}</td>
                                            <td>{value.Description}</td>
                                            <td>{value.Price}</td>
                                        </tr>

                                        }
                                    )
                                }
                                
                                

                                
                                
                            </tbody>
                        </table>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default ViewAll