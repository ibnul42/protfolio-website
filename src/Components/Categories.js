import React from 'react';
import { NavLink } from 'react-router-dom';

const Categories = ({filter, categories}) => {
    return (
        <div className="catergory-buttons">
            {
                categories.map((cat,i) =>{
                    return <button className="btn-protfolio" onClick={() => filter(cat)} key={i}>{cat}</button>
                })
            }
        </div>
    );
};

export default Categories;