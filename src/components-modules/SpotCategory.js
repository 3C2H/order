import React from 'react'
import { Link } from '@reach/router'
// css
import './SpotCategory.css'

const SpotCategory = ({ to, items = [], src = [] }) =>
  <div className="s-block-spotcategory">
    {items.map((item, index) =>
      <div key={index} className="thumbnailcategory">
        <Link to={to[index]}>
          <img className="img-thumbnail" src={src[index]} alt={`item-img${[index]}`} />
        </Link>
        <div className="detail-thumbnail">
          <span>{item}</span>
        </div>
      </div>
    )}
  </div>

export default SpotCategory
