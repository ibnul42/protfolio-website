import React from 'react';
import Title from '../Components/Title';
import Categories from '../Components/Categories';
import MenuItems from '../Components/MenuItems';
import protfolios from '../Components/allProtfolios';
import { useState } from 'react';

const ProtfolioPage = () => {
    const [categories, setCategories] = useState(null);
    const [menuItems, setMenuItems] = useState(protfolios);
    return (
        <div className="ProtfolioPage">
            <div className="title">
                <Title title={'Protfolio'} span={'Protfolio'} />
            </div>
            <div className="protfolios-data">
                {/* <Categories /> */}
                <MenuItems menuItem={menuItems} />
            </div>
        </div>
    );
};

export default ProtfolioPage;