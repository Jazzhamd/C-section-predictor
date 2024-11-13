import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Box, Button } from '@mui/material';
import Logo from "../Landing Page Assets/Logo.webp";

const Navbar = ({ refs }) => {
    const [activeSection,setactiveSection] = useState(null)
    const handleScroll = (ref,section) => {
        ref.current.scrollIntoView({ behavior: 'smooth' });
        setactiveSection(section)
    };

    const handleScrollPosition=()=>{
        const sections = [
            { ref: refs.aboutRef, name: 'About' },
            { ref: refs.testimonialRef, name: 'Testimonial' },
            { ref: refs.modelRef, name: 'Models' },
            { ref: refs.predictRef, name: 'Predict' }
        ];
        let closestSection = null;
        let minDistance = window.innerHeight;

        sections.forEach((section)=>{
            const rect = section.ref.current.getBoundingClientRect();
            if(rect.top >=0 && rect.top < minDistance){
                minDistance = rect.top;
                closestSection = section.name;
            }
        });
        setactiveSection(closestSection);

    };
    useEffect(() => {
        window.addEventListener('scroll', handleScrollPosition);
        return () => window.removeEventListener('scroll', handleScrollPosition);
    }, []);
    const menuOptions = [
        { text: 'About', ref: refs.aboutRef },
        { text: 'Testimonial', ref: refs.testimonialRef },
        { text: 'Models', ref: refs.modelRef },
        { text: 'Predict', ref: refs.predictRef }
    ];
    return (
        <AppBar position="fixed" style={{ backgroundColor: '#301934' }}>
            <Toolbar sx={{ justifyContent: 'space-between' }}>
                <Box component="img" src={Logo} alt="Logo" sx={{ height: '40px', mr: 2 }} />
                <Typography variant="h6" sx={{ flexGrow: 1 }}>
                    C-section Predictor
                </Typography>
                
                <Box sx={{ display: { xs: 'none', sm: 'flex' } }}>
                    {menuOptions.map((option) => (
                         <Button
                         key={option.text}
                         onClick={() => handleScroll(option.ref, option.text)}
                         sx={{
                             borderBottom: activeSection === option.text ? '2px solid #ffe6e6' : 'none',
                             fontWeight: activeSection === option.text ? 'bold' : 'normal',
                             color: activeSection === option.text ? '#ffe6e6' : 'inherit'
                         }}
                     >
                         {option.text}
                     </Button>
                    ))}
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
