import React, {useEffect} from 'react';
import './Section.css';

const Section = ({Icon, title, color, selected}) => {
    useEffect(() => console.log("rendering Section"));
    return (
        <div className={`section ${selected && 'section--selected'}`}
        style={
            {
                borderBottom: `3px solid ${color}`
            }
         }
        >
            <Icon />
            <h4>{title}</h4>

        </div>
    )
}

export default Section;