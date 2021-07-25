import React,{useState,useEffect} from 'react'
import Project from './Project'
import Axios from 'axios'
import Fetching from './Fetching';
function ProjectList() {
    const [projectsList, setProjectsList] = useState([]);
    const [isFetching,setIsFetching]= useState(true)
    const getProjectList = async () => {      
        try {
        const response = await Axios.get("http://localhost:3000/realisations")
        
            setProjectsList(response.data)
             setIsFetching(false)
        } catch (error) {
            console.log("Erreur select : ",error.response.data);
        }
    }
    const deleteProject = async(idProject) => {
      try {
        const response = await Axios.delete(`http://localhost:3000/realisations/delete/${idProject}`)
        
            getProjectList ()
            history.push('/')
        } catch (error) {
            console.log("Erreur Delete : ",error.response.data);
        }
}
    useEffect(() => {
       getProjectList()
    },[]);

    if (!isFetching) {
        if (projectsList.length === 0) {
            return (
                <div>
                    <h1 className="m-3">Projects list</h1>
                    <ul className="list-group m-3">
                        <li className="list-group-item">No project to be displayed</li>
                    </ul>
                </div>
            )
        } else {
            return (
       
                <div className="projectList container">
                    <h1 className="m-3">Projects list</h1>
                 
                 
                        <div className="row contain-project">
                        {
                        
                            projectsList.map(project => <Project project={project} key={project.id} deleteProject={deleteProject} />)
                        }
                    
                    </div>
                   
                    
                </div>
            )
        }
    } else {
        return (
            <Fetching/>
        )
    }
}

export default ProjectList
