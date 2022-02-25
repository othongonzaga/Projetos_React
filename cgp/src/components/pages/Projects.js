import Message from "../layout/Message"
import {useLocation} from 'react-router-dom'
import styles from './Projects.module.css'
import LinkButton from "../layout/LinkButton"
import ProjectCard from './project/ProjectCard'
import {useState, useEffect} from 'react-router-dom'

function Projects(){
    const [projects, setProjects] = useSate([])
    const location = useLocation()
    let message = ''

    if(location.state){
        message = location.state.message
    }

    useEffect(() =>{
        fetch('http://localhost:5000/projects', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then((resp) => resp.json())
            .then((data) =>{
                setProjects(data)
            })
            .catch((err) => console.log(err))
    }, [])
    
    return(
        <div className={styles.project_container}>
            <div className={styles.title_container}>
                <h1>Meus Projetos</h1>
                <LinkButton to="/newproject" text="Criar Projeto"/>
            </div>
            {message && <Message type="success" msg={message}/>}
            <Container customClass="start">
                {projects.length > 0 &&
                    projects.map((project) =>{
                    <ProjectCard 
                    id={project.id}
                    name={project.name}
                    budget={project.budget}
                    category={project.category.name}
                    key={project.id}
                    />
                })}
            </Container>
        </div>
    )
}

export default Projects