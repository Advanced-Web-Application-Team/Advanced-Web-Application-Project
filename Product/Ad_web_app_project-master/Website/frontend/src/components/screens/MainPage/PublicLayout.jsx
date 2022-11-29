import React from 'react';
import { useParams } from 'react-router-dom';

function PublicLayout() {

    let params = useParams();
    let idForLink = params.idForLink;


  return (
    <div> {idForLink} </div>
  )
}

export default PublicLayout