import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export default function GiffExpertApp() {

    const [categories , setCategories] = useState(['One Punch']);

    return (
      <>
        <h2>GiffExpertApp</h2>
        <AddCategory setCategories={setCategories} ></AddCategory>
        <hr></hr>

        <ol>
            {
                categories.map( category => 
                    <GifGrid 
                    key={category}
                    category = {category}
                    ></GifGrid>
                )
            }
        </ol>
      </>
    )
  }