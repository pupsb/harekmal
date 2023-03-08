import styled from "styled-components"
import Navbar from "../Components/Navbar"
import Announcement from "../Components/Announcement"
import Products from "../Components/Products"
import Newsletter from "../Components/Newsletter"
import Footer from "../Components/Footer"

const Container = styled.div``
const Title = styled.h1`
  margin: 20px;`
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  `
const Filter = styled.div`
  margin: 20px;`
const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;`

const select = styled.select`
  padding: 10px;
  margin-right: 20px;
  border: 1px solid teal;
  border-radius: 5px;
  outline: none;`
const option = styled.option`
  padding: 20px;
  border: 1px solid teal;
  border-radius: 5px;
  outline: none;
  background-color: white;
  color: black;
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
  &:hover {
    background-color: #f8f4f4;
    }`


const ProductList = () => {
  return (
    <Container>
      <Announcement />
      <Navbar />
      <Title>
        Dresses
      </Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <select>
            <option disabled selected>
              Color
            </option>
            <option>White</option>
            <option>Black</option>
            <option>Red</option>
            <option>Blue</option>
            <option>Yellow</option>
            <option>Green</option>
          </select>
          <select>
            <option disabled selected>
              Size
            </option>
            <option>XS</option>
            <option>S</option>
            <option>M</option>
            <option>L</option>
            <option>XL</option>
          </select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <select>
            <option disabled selected>
              Newest
            </option>
            <option>Price (asc)</option>
            <option>Price (desc)</option>
          </select>
        </Filter>
      </FilterContainer>
      <Products />
      <Newsletter />
      <Footer />
    </Container>
  )
}

export default ProductList