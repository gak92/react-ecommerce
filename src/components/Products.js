import React from 'react'
import FilterSection from './FilterSection';
import ProductList from './ProductList';
import Sort from './Sort';
import styled from 'styled-components';
import { useFilterContext } from '../context/filter_context';

const Products = () => {
  const { filter_products } = useFilterContext();
  
  return (
    <Wrapper>
      <div className='container grid grid-filter-column'>
        {/* Filter column */}
        <div>
          <FilterSection />
        </div>

        {/* Product view section */}
        <div className='product-view--sort'>
          <div className='sort-filter'>
            <Sort />
          </div>

          <div className='main-product'>
            <ProductList />
          </div>
        </div>
      </div>
    </Wrapper>
  )
};

const Wrapper = styled.section`
  .grid-filter-column {
    grid-template-columns: 0.2fr 1fr;
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid-filter-column {
      grid-template-columns: 1fr;
    }
  }
`;

export default Products