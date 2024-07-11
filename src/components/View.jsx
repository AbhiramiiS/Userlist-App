import React, { useState } from 'react'
import NavBar from './Navbar'

const View = () => {
const[data,changeData]=useState    
    return (
        <div>
            <NavBar/>

            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">Name</th>
                                            <th scope="col">User name</th>
                                            <th scope="col">Email id</th>
                                            <th scope="col">Phone No</th>
                                            <th scope="col">Website</th>
                        
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">Chinchu</th>
                                            <td>Chinchu Anna Saji</td>
                                            <td>chinchu@gmail.com</td>
                                            <td>9856235418</td>
                                            <td>www.kdhffhfrhj</td>
                                            
                                        </tr>
                                        <tr>
                                            <th scope="row">Gopikrishna</th>
                                            <td>Gopikrishna Techy</td>
                                            <td>Gopikrishnatechy@gmail.com</td>
                                            <td>9876537438</td>
                                            <td>www.jdhjhehhrgj.com</td>
                                            
                                        </tr>
                                        <tr>
                                            <th scope="row">Adithya</th>
                                            <td>Adithya S</td>
                                            <td>adithya@gmail.com6</td>
                                            <td>9567832456</td>
                                            <td>www.hjgndbgw.com</td>
                                            
                                        </tr>
                                        <tr>
                                            <th scope="row">Ananthakrishnan</th>
                                            <td>Ananthakrishnan S</td>
                                            <td>ananthskrishnan@gmail.com</td>
                                            <td>9654328647</td>
                                            <td>www.jdbfdnmfj.com</td>
                                            
                                        </tr>
                                        <tr>
                                            <th scope="row">Devipriya</th>
                                            <td>Devipriya S</td>
                                            <td>devipriya@gmail.com</td>
                                            <td>7453620957</td>
                                            <td>www.hgjfhjr.com</td>
                                        
                                        </tr>
                                        <tr>
                                            <th scope="row">Sahad</th>
                                            <td>Sahad S</td>
                                            <td>sahad@gmail.com</td>
                                            <td>8365435754</td>
                                            <td>www.jbdhururi.com</td>
                                            
                                        </tr>
                                        <tr>
                                            <th scope="row">Parvathi</th>
                                            <td>Parvathi S</td>
                                            <td>parvathi@gmail.com</td>
                                            <td>9543627817</td>
                                            <td>www.jfhjtgj.com</td>
                                            
                                        </tr>
                                        <tr>
                                            <th scope="row">Gopika</th>
                                            <td>Gopika Nair</td>
                                            <td>gopika@gmail.com</td>
                                            <td>8754764348</td>
                                            <td>www.jrfrehugri.com</td>
                                            
                                        </tr>
                                        <tr>
                                            <th scope="row">Abhirami </th>
                                            <td>Abhirami S</td>
                                            <td>abhiramis@gmail.com</td>
                                            <td>7354278834</td>
                                            <td>www.gnhjhjs.com</td>
                                           
                                        </tr>
                                        <tr>
                                            <th scope="row">Anisha</th>
                                            <td>Anisha S</td>
                                            <td>anisha@gmail.com</td>
                                            <td>9753728654</td>
                                            <td>www.hhefjk.com</td>
                                           
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default View