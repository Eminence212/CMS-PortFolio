import React from 'react'
import { Image } from "cloudinary-react";
import img from './img/images.jpeg'
import { MdCreate, MdDeleteSweep } from 'react-icons/md'

function Project({project,deleteProject}) {

    return (
    
        <div className="col-sm-3 mt-3">
         <div className="card">
            <img width="150"  height="150" src={project.image} className="card-img-top" />
        <div className="card-body">
                    <h5 className="card-title">{project.nom}</h5>
            <p className="card-text">{project.description} </p>
        </div>

          <div className="card-body">
         <div className="row">
                
              <div className="col-sm-5">
                <button className="btn btn-primary btn-sm" data-toggle="modal" data-target="#id-modal-edit" >Edit<MdCreate/></button>
              </div>
              <div className="col-sm-6">
                 <button className="btn btn-danger btn-sm" data-toggle="modal" data-target="#id-modal" onClick={()=>deleteProject(project.id)} >Remove <MdDeleteSweep/></button>
              </div>
              
            </div>
          </div>
        </div>
        {/* modals */}
    </div>
     
    )
}

export default Project
