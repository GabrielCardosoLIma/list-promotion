import React from 'react';
import { useEffect,useState } from 'react';
import SearchCSS from './Search.module.css';
import axios from 'axios';
import PromotionCard from '../card/card';
import { Link } from 'react-router-dom';

const PromotionSearch = () => {

    const [promotions, setPromotions] = useState([]);
    const [search, setSearch] = useState('');

    useEffect( () => {
  axios.get("http://localhost:5000/promotions?_embed=comments")
    .then((response) => {
      // console.log(response.data);
      setPromotions(response.data);
     }
    );

}, [] );

    return ( 
        <>
        <header>
          <h1>Promo Show</h1>
          <Link to="/create">Nova Promoção</Link>
        </header>
        <input type="search" 
        className={SearchCSS.PromotionSearchInput}
        placeholder="Buscar"
        value={search}
        />
        {promotions.map((promotions) =>(
          <PromotionCard promotion={promotions} key={promotions.id}/>
        )
        )
      }
      </>
     );
}
 
export default PromotionSearch;