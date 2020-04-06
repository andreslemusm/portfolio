// REACT DEPENDENCIES
import React from 'react';
import PropTypes from 'prop-types';

// COMPONENT DEPENDENCIES
import Project from './Project';

// STYLES DEPENDENCIES: This is where you can make new animations
import './styles/Projects.scss';

// POSIBLE IMPOROVEMENTS: MAP OVER THE PROJECTSDATA (IF I HAVE TO MANY PROJECTS)

export default function Projects(props) {
  return (
    <div className="portfolio">
      <div className="row">
        <Project animation=" slide-left" project={props.projectsData[0]} />
        <Project animation=" slide-right" project={props.projectsData[1]} />
      </div>
    </div>
  );
}

Projects.propTypes = {
  projectsData: PropTypes.arrayOf(PropTypes.object),
};

// function chunkArray(myArray, chunk_size){
//   let results = [];

//   while (myArray.length) {
//       results.push(myArray.splice(0, chunk_size));
//   }

//   return results;
// }
