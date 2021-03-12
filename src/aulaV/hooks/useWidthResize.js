import { useState, useEffect } from 'react';

export const useWidthResize = () => {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(()=>{

        const handleResizeWidth = () => setWidth(window.innerWidth);

        window.addEventListener('resize', handleResizeWidth); 

        return(() =>{
            window.removeEventListener('resize', handleResizeWidth);
        });
    },[width]);

    return width;
};