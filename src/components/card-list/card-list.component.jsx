import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Card } from '../card/card.component';

export const CardList = (props) => {
    
    return (
        
        <div className="row align-items-center">
            
            {props.monsters.map(monster => (
                <Card key={monster.id} monster={monster}/>
            ))}

        </div>
    );
}