import { useId, useContext } from 'react'
import './Filters.css'
import { FiltersContext } from '../context/filters'

export function Filters() {
  const context = useContext(FiltersContext)

  //   const [minPrice, setMinPrice] = useState(0)
  const minPriceFilterId = useId()
  const categoryFilterId = useId()

  const handleMinPrice = (e) => {
    context.setFilter((prevState) => ({
      ...prevState,
      minPrice: e.target.value,
    }))
  }

  const handleCategory = (e) => {
    context.setFilter((prevState) => ({
      ...prevState,
      category: e.target.value,
    }))
  }
  return (
    <section className='filters'>
      <div>
        <label htmlFor={categoryFilterId}>Category</label>
        <select
          name={categoryFilterId}
          id={categoryFilterId}
          onChange={handleCategory}
        >
          <option value='all'>All</option>
          <option value='beauty'>Beauty</option>
          <option value='fragrances'>Fragrances</option>
          <option value='furniture'>Furniture</option>
          <option value='groceries'>Groceries</option>
          <option value='home-decoration'>Home Decoration</option>
          <option value='kitchen-accessories'>Kitchen Accessories</option>
          <option value='laptops'>Laptops</option>
          <option value='mens-shirts'>Men's Shirts</option>
          <option value='mens-shoes'>Men's Shoes</option>
          <option value='mens-watches'>Men's Watches</option>
          <option value='mobile-accessories'>Mobile Accessories</option>
          <option value='motorcycle'>Motorcycle</option>
          <option value='skin-care'>Skin Care</option>
          <option value='smartphones'>Smartphones</option>
          <option value='sports-accessories'>Sports Accessories</option>
          <option value='sunglasses'>Sunglasses</option>
          <option value='tablets'>Tablets</option>
          <option value='tops'>Tops</option>
          <option value='vehicle'>Vehicle</option>
          <option value='womens-bags'>Women's Bags</option>
          <option value='womens-dresses'>Women's Dresses</option>
          <option value='womens-jewellery'>Women's Jewellery</option>
          <option value='womens-shoes'>Women's Shoes</option>
          <option value='womens-watches'>Women's Watches</option>
        </select>
      </div>
      <div>
        <label htmlFor={minPriceFilterId}>Price from</label>
        <input
          type='range'
          name={minPriceFilterId}
          id={minPriceFilterId}
          min='0'
          max='1000'
          onChange={handleMinPrice}
          value={context.filter.minPrice}
        />
        ${context.filter.minPrice}
      </div>
      <div>
        <button>Filter</button>
      </div>
    </section>
  )
}
