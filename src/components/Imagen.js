import React from 'react';

const Imagen = (props) => {
    const { largeImageURL, likes, previewURL, tags, views,comments} = props.imagen;
    return(
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <div className="card">
                <img src={previewURL} alt={tags} className="card-img-top" />
                <div>
                    <p className="card-text">Me gustas {likes}  </p>
                    <p className="card-text">Vistas {views}</p>
                    <p className="card-text">Comentarios ({comments})</p>
                    <a href={largeImageURL} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-block">Ver Imagen completa</a>
                </div>
            </div>
        </div>
    )
}

export default Imagen;