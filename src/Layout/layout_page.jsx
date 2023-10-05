
import React from 'react';
import NavBar from '../components/navbar/navbar';


export default function LayoutPage({ children }) {
    return (
        <>
            <NavBar />
            {children}
        </>
    )
}