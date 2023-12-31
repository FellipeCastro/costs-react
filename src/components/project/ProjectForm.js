import { useState, useEffect } from 'react';

import Input from '../form/Input'
import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton'
import styles from './ProjectForm.module.css'
import { Navigate } from 'react-router-dom';

function ProjectForm({handleSubmit, btnText, projectData}) {

    const [project, setProject] = useState(projectData || {})
    const [categories, setCategories] = useState([])
    
    useEffect(() => {
      fetch('http://localhost:5000/categories', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((resp) => resp.json())
        .then((data) => {
          setCategories(data)
        })
    }, [])

    const submit = (e) => {
      e.preventDefault()
      handleSubmit(project)
    }

    function handleChange(e) {
      setProject({...project, [e.target.name]: e.target.value})
    }

    /*
    function handleCategory(e) {
      setProject({...project, category: {
        id: e.target.value,
        name: e.target.option[e.target.selectedIndex].text
      },
    })
    }
    */

    function handleCategory(e) {
      const selectedIndex = e.target.selectedIndex;
      
      if (selectedIndex >= 0 && e.target.options) {
        setProject({
          ...project,
          category: {
            id: e.target.value,
            name: e.target.options[selectedIndex].text,
          },
        });
      }
    }
    
    


    return (
        <form onSubmit={submit} className={styles.form} autoComplete='off'>
            <Input 
                type="text" 
                text="Nome do Projeto"
                name="name"
                placeholder="Insira o nome do projeto"
                handleOnChange={handleChange}
                value={project.name}
            />

            <Input 
                type="number" 
                text="Orçamento do Projeto"
                name="budget"
                placeholder="Insira o orçamento total"
                handleOnChange={handleChange}
                value={project.budget}
            />
            
            <Select
                name="category_id"
                text="Selecione a categoria"
                options={categories}
                handleOnChange={handleCategory}
                value={project.category ? project.category.id : ''}
            />

            <SubmitButton 
                text={btnText}
            />

        </form>
    )
}

export default ProjectForm