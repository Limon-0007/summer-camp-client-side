import React, { useEffect, useState } from 'react';

const PopularInstructors = () => {
    const [instructors, setInstructors] = useState([])
    useEffect(() => {
        fetch("http://localhost:5000/instructors")
        .then(res => res.json())
        .then(data => setInstructors(data))
    }, [])
    return (
        <div>
            {/* <h2>Total Instructors: {instructors.length}</h2> */}
        </div>
    );
};

export default PopularInstructors;