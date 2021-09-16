import React from 'react';

export const SearchBox = ({ placeholder, handleChange }) => (
    <div className="col-md-7 my-3 m-auto">

        <input type="search" 
                placeholder={ placeholder } 
                className="form-control border border-secondary"
                onChange={ handleChange } />

    </div>
)

