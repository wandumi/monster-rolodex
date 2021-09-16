import React from 'react';

export const Card = (props) => (
    <div className="col-md-3 mb-3">
        <div className="card bg-info ">
            <img alt="monster" 
                 src={`https://robohash.org/${props.monster.id}?set=set2&size=100x100`} 
                 className="card-img-top" 
                />
            <div className="card-body">
                <h5 className="card-title">{ props.monster.username }</h5>
                <p className="card text-sm">{ props.monster.email }</p>
            </div>
        </div>
    </div>
)