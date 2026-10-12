import { useEffect, useRef } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import lottie from 'lottie-web'
import coffee from './coffee.json'

function CoffeeAnimation() {
  const box = useRef(null)

  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: box.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: coffee,
    })
    return () => anim.destroy()
  }, [])

  return <div ref={box} style={{ width: 250, margin: '0 auto' }} />
}

function Home() {
  return (
    <div className="container text-center mt-5">
      <h1>Prachi's Corner Café</h1>
      <CoffeeAnimation />
      <p className="lead">Late night coding sessions run on coffee, so I made a little café for it.</p>
      <Link to="/menu" className="btn btn-dark mt-2">What's brewing?</Link>
    </div>
  )
}

function Menu() {
  return (
    <div className="container mt-5">
      <h1>Today's Menu</h1>
      <p className="text-muted">A few of my favorites.</p>
      <ul className="list-group">
        <li className="list-group-item">Oat milk latte · $5.25</li>
        <li className="list-group-item">Iced vanilla latte · $5.50</li>
        <li className="list-group-item">Masala chai · $4.75</li>
        <li className="list-group-item">Chocolate croissant · $4.25</li>
      </ul>
      <Link to="/" className="btn btn-outline-dark mt-4">Back home</Link>
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <nav className="navbar navbar-dark bg-dark px-3">
        <Link className="navbar-brand" to="/">☕ Corner Café</Link>
        <Link className="nav-link text-light" to="/menu">Menu</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>
    </BrowserRouter>
  )
}