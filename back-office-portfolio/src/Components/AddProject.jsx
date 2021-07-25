import React, { useState } from 'react'
import Axios from 'axios'
import { Image } from "cloudinary-react";
import AlertSuccess from './AlertSuccess'
import AlertDanger from './AlertDanger'
import AlertWarning from './AlertWarning'
import Progress from './Progress';
function AddProject({ history,baseURI }) {
    const [nom,setNom]= useState("")
    const [description,setDescription]= useState("")
    const [type, setType] = useState("")
    const [urlImage, setUrlImage] = useState("")
    const [isSuccess,setIsSucceess]=useState(false)
    const [isDanger,setIsDanger]=useState(false)
    const [isWarning, setIsWarning] = useState(false)
    const [message, setMessage] = useState("")
    const [isUploading,setIsUploading] = useState(false)
    let project = {}
    
 const uploadImage = async(image) => {
    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset", "upload-image-realisation")
    setIsUploading(true)
    const response =  await  Axios.post(
      "https://api.cloudinary.com/v1_1/eminence/image/upload",
      formData
    )
     
     setUrlImage(response.data.secure_url);
      setIsUploading(false)
 }
const createNewProject = async (object) => {
    const headers = { headers: { 'Content-Type': 'application/json' } }
     
    try {
     const response = await Axios.post("http://localhost:3000/realisations/add", object, headers)
        const status = response.status
        const message = response.data.message
        return ({message,status})
    } catch (error) {
        console.log("Erreur ajout : ",error.response.data);
    }
}
   const handleSubmit = async (e) =>{
       e.preventDefault()
        
     const  values =[nom.value,description.value,type.value,urlImage]
       if (values.some((value) => value.length === 0)) {
            setMessage("Please fill correctly fields")
            setIsWarning(true)
       } else {
           project = {
            nom : nom.value,
            description : description.value,
            categorie : +type.value,
            image :urlImage
           }
         const {message,status} = await createNewProject(project)
           if (status === 200) {
               setMessage(message)
               setIsSucceess(true)
               history.push('/')
            //    const delay = Math.floor(Math.random() * 10000)
            //     setTimeout(() =>{
                
            //     } ,delay)
               
           } else {
            setMessage(message)
            setIsDanger(true)
          }
          }
   }
    const handleChange = (e) => {
        e.preventDefault()
        uploadImage(e.target.files[0])
    }

    return (
        <section>
            <h1 className="m-3">New Project</h1>
            <div className="card mx-3">
               
                <form className="card-body"  onSubmit={(e) =>handleSubmit(e)}>
                    <div className="form-group">
                        {isSuccess ? <AlertSuccess message={message} setIsSucceess={setIsSucceess}/>:null}
                        {isDanger?<AlertDanger message={message} setIsDanger={setIsDanger} />:null}
                        {isWarning ? <AlertWarning message={message} setIsWarning={setIsWarning}/>:null}
                        <div className="mb-2" >
                            <label form="projectName" className="form-label" >Name</label>
                            <input type="text" className="form-control" name="projectName" id="projectName" placeholder="Project name..." 
                               ref={input => setNom(input)}  
                            />
                       </div>
                        <div className="mb-2" >
                            <label form="projectDescription" className="form-label" >Description</label>
                            <textarea className="form-control" name="projectDescription" id="projectDescription" placeholder="Project Description..."
                            ref={textarea => setDescription(textarea)} />
                        </div>
                        <div className="mb-2">
                             <label form="projectType" className="form-label" >Type</label>
                            <select nam="projectType" className="form-select" aria-label="Default select"
                              ref={select =>setType(select)}                               
                            >
                                <option disabled  value={""}>Select the type of project</option>
                                <option  value={"1"}>Website</option>
                                <option value={"2"}>Mobile</option>
                                <option value={"3"}>Graphic</option>
                             </select>
                        </div>
                        <div className="mb-2 ">
                            <label form="projectImage" className="form-label">Choose the project image</label>
                            <input className="form-control" type="file" id="projectImage" name="projectImage"
                                accept="image/*"
                            onChange={(e)=>handleChange(e)}/>
                        </div>
                       {!isUploading?
                        <div className="mb-2">
                             <Image
                            style={{ width: 200 }}
                            cloudName="eminence"
                            publicId={ urlImage !==""? urlImage:null}
                            />
                        </div>:
                            <Progress/>
                        }
                    </div>
                    {
                     urlImage !=="" && <button type="submit" className="btn btn-primary mt-2">Create</button>    
                     }   
                </form>
            </div>
        </section>
    )
}
export default AddProject
