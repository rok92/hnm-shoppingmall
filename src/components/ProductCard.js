import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProductCard = ({item}) => {
    const navigate = useNavigate();
    const goToDetail=()=>{
        navigate(`/product/${item.id}`);
    }
    return (
        <div className='item_card' onClick={goToDetail}>
            <img src={item?.img}/>
            <div>{item?.choice == true?"Conchoice":""}</div>
            <div>{item?.title}</div>
            <div>₩{item?.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</div>
            <div>{item?.new == true?"신상품":""}</div>
        </div>
    )
}

export default ProductCard