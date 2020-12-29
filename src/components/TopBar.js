import React from 'react'
// import ReactDOM from 'react-dom'

export default function TopBar() {
  return (
    <div>
      <header
        className="container-fluid bg-dark d-md-flex text-white flex-row justify-content-between"
      >
        <div className="d-md-flex text-white flex-row justify-content-between">
          <h3 className="h-100">Toy Station</h3>
          <div className="my-auto px-3">
            <button className="btn-success btn-sm mx-3">Add Toy</button>
            <button className="btn-success btn-sm">Add Banner</button>
          </div>
        </div>
        <div className="my-auto">
          <button className="btn-sm btn-danger">Log Out</button>
        </div>
      </header>
      <ul className="nav justify-content-center">
        <li className="nav-item mx-2 btn">See Toys</li>
        <li className="nav-item mx-2 btn">See Banners</li>
      </ul>
    </div>
  );
}