import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import SearchForm from '../../Components/SearchForm/SearchForm'
import "./Header.css"

const Header = () => {
  return (
    <div className='holder'>

      <header className='header'>
        <Navbar />
        <div className='header-content flex flex-c text-center text-white'>
          <h1 className='header-title text-capitalize'>Find your book</h1>
          <p className='header-text fs-18 fw-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum sequi iusto doloribus repellat culpa id, hic consequatur temporibus fugit dolorum odit ipsum ratione, a eligendi, suscipit asperiores alias! Voluptatum, perspiciatis.</p>
          <SearchForm />
        </div>
      </header>
    </div>
  )
}

export default Header
