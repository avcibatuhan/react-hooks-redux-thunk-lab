// write your CatList component here
import React from 'react'

export default function CatList({catPics}) {
    console.log(catPics)
  return (
    <div><ul>
        {catPics.map((cat) => (
        <li key={cat.id} ><img  src={cat.url} alt="cat"/></li>
    ))}
    </ul>
    </div>
  )
}
