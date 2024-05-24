import React from 'react';
import { useEffect } from 'react';

const useTitle = title => {
   useEffect(()=>{
    document.title = `Naina Toys | ${title} `
   },[title])
};

export default useTitle;