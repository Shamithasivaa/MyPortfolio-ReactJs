import React from 'react';

const Project = ({ project }) => {
  return (
    <div className='project'>
      <h1>{project.name}</h1>
      <p>{project.description}</p>
      <a href={project.github}>GitHub Link</a>
      
    </div>
  );
};

export default Project;