import React from 'react';
import Project from './Project';

const Projectlist = () => {
  const myProject1 = {
    name: 'Budegt Tracker',
    description: 'A project to track the expenses and savings.',
    github: 'https://github.com/Shamithasivaa/Reactjs-Budget_Management-project',
    
  };
  const myProject2 = {
    name: 'Random Quote Generator',
    description: 'A project to generate random quote.',
    github: 'https://github.com/Shamithasivaa/Random-Quote-Generator-using-React',
    
  };

  return (
    <div>
      <ul>
      <li>
      <Project project={myProject1} /></li>
<li>
      <Project project={myProject2} />
      </li>
      </ul>
    </div>
  );
};

export default Projectlist;