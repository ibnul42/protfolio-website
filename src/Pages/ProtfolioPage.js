import React from 'react';
import Title from '../Components/Title';
import Categories from '../Components/Categories';
import MenuItems from '../Components/MenuItems';
import protfolios from '../Components/allProtfolios';
import { useState } from 'react';

const allCategories =['All', ...new Set(protfolios.map(item => item.category))];
console.log(allCategories)

const ProtfolioPage = () => {
    const [categories, setCategories] = useState(allCategories);
    const [menuItems, setMenuItems] = useState(protfolios);

    const filter = (category) => {
        if(category === 'All'){
            setMenuItems(protfolios);
            return;
        }
        const filterData = protfolios.filter((item) =>{
            return item.category === category;
        })
        setMenuItems(filterData);
    }
    return (
        <div className="ProtfolioPage">
            <div className="title">
                <Title title={'Protfolio'} span={'Protfolio'} />
            </div>
            <div className="protfolios-data">
                <Categories filter={filter} categories={categories}/>
                <MenuItems menuItem={menuItems} />
            </div>
        </div>
    );
};

export default ProtfolioPage;