/*
import { useNavigate } from'react-router-dom';
import ProjectForm from '../project/ProjectForm';
import styles from './NewProject.module.css';

function NewProject() {

    const navigate = useNavigate()

    function createPost(project) {
        project.cost = 0
        project.services = []

        fetch('http://localhost:5000/projects', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(project)
        })
        .then((resp) => resp.json())
        .then((data) => {
            navigate.push('/projects', { message: 'Projeto criado com sucesso!' })
        })
        .catch(err => console.log(err))
    }

    return (
        <div className={styles.newproject_container}>
            <h1>Criar Projeto</h1>
            <p>Crie um projeto para depois adicionar os serviços.</p>
            <ProjectForm handleSubmit={createPost} btnText="Criar Projeto"/>
        </div>
    )
}

export default NewProject
*/

import React, { useState } from 'react';
import ProjectForm from '../project/ProjectForm';
import styles from './NewProject.module.css';

function NewProject() {
  const [projectCreated, setProjectCreated] = useState(false);

  function createPost(project) {
    // Inicializar cost e services
    project.cost = 0;
    project.services = [];

    fetch('http://localhost:5000/projects', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(project),
    })
      .then((resp) => resp.json())
      .then((data) => {
        // Ativar o sinalizador para indicar que o projeto foi criado
        setProjectCreated(true);
      });
  }

  // Redirecionar manualmente se o projeto foi criado
  if (projectCreated) {
    window.location.href = '/projects';
  }

  return (
    <div className={styles.newproject_container}>
      <h1>Criar Projeto</h1>
      <p>Crie seu projeto para depois adicionar os serviços</p>
      <ProjectForm handleSubmit={createPost} btnText="Criar Projeto" />
    </div>
  );
}

export default NewProject;
