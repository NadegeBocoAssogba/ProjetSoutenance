import React from 'react';
import ProductsCards from './ProductsCards';
import { useState } from 'react';
import products from '../../data/products.json';


const Tendance = () => {
    const [visibleProducts, setVisibleProducts] = useState(8);
    const loadMoreProducts = () => {
        setVisibleProducts((prev) => prev + 4);
    }
    return (
        <section className="flex flex-col items-center justify-center py-10 bg-cyan-50 mt-10 px-6 md:px-12 lg:px-24">
            <h2 className='text-3xl font-bold text-[#5a3e36] mb-5'>Nos produits tendances</h2>
            <p className='text-lg text-slate-900 max-w-lg text-center mb-12'>Découvrez ici les choix les plus en vogue : rehaussez votre style et soyez toujours à la mode avec ces produits.</p>
            <ProductsCards products={products.slice(0, visibleProducts)} />
            <div>
                {
                    visibleProducts < products.length && (
                        <button
                            onClick={loadMoreProducts}
                            className="mt-4 bg-[#e85e95] text-white py-2 px-4 rounded hover:bg-rose transition duration-300"
                        >
                            Charger plus de produits
                        </button>
                    )
                }
            </div>
        </section>
    );
};

export default Tendance;