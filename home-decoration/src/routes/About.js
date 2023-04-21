import React, { Component } from 'react'
import { Link } from 'react-scroll';


const scrollHandler = (elmRef) => {
    console.log(elmRef.current);
    window.scrollTo({
        top: elmRef.current.offsetToTop, behavior: "smooth"
    });
}