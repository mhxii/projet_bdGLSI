import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AuteurListe = () => {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/authors/')
      .then(response => {
        const authorsSet = new Set();
        response.data.forEach(publication => {
          publication.authors.forEach(author => {
            authorsSet.add(author);
          });
        });
        setAuthors(Array.from(authorsSet));
      })
      .catch(error => {
        console.error('Affichage impossible', error);
      });
  }, []);

  return (
    <div>
      <h1>Liste des Auteurs</h1>
      <ul>
        {authors.map((author, index) => (
          <li key={index}>{author}</li>
        ))}
      </ul>
    </div>
  );
};

export default AuteurListe;
