import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Box, Button } from '@mui/material';
import Logo from "../Landing Page Assets/Logo.webp";

const Navbar = ({ refs }) => {
    const [openMenu, setOpenMenu] = useState(false);

    const handleScroll = (ref) => {
        ref.current.scrollIntoView({ behavior: 'smooth' });
    };

    const menuOptions = [
        { text: 'Home', ref: refs.homeRef },
        { text: 'About', ref: refs.aboutRef },
        { text: 'Testimonial', ref: refs.testimonialRef },
        { text: 'Models', ref: refs.modelRef },
        { text: 'Predict', ref: refs.predictRef}
    ];

    return (
        <AppBar position="fixed" style={{ backgroundColor: 'black' }}>
            <Toolbar sx={{ justifyContent: 'space-between' }}>
                <Box component="img" src={Logo} alt="Logo" sx={{ height: '40px', mr: 2 }} />
                <Typography variant="h6" sx={{ flexGrow: 1 }}>
                    C-section Predictor
                </Typography>
                {/* Desktop Buttons */}
                <Box sx={{ display: { xs: 'none', sm: 'flex' } }}>
                    {menuOptions.map((option) => (
                        <Button color="inherit" key={option.text} onClick={() => handleScroll(option.ref)}>
                            {option.text}
                        </Button>
                    ))}
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
