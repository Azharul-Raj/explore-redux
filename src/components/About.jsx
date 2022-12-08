import React from 'react';
import { useData } from '../contexts/TodoProvider';

const About = () => {
    const data = useData();
    console.log(data);
    return (
        <div>
            
        </div>
    );
};

export default About;