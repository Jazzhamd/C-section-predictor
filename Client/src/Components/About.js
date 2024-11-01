import React from 'react';
import { Box, Typography } from '@mui/material';

const About = React.forwardRef((props, ref) => (
    <Box 
        ref={ref}
        sx={{
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            backgroundColor: '#ffe6e6', // Light pink background for a maternity feel
            padding:'0 10%',           // Padding for spacing from screen edges
            overflow: 'hidden'
        }}
    >
        {/* Image section */}
        <Box 
            component="img"
            src="/about-pic.png"
            alt="Maternity illustration" 
            sx={{
                width: '60%',             // Image takes 40% of the width
                height: '80%',           // Maintains aspect ratio
                mr: 4                     // Margin-right to separate from text
            }}
        />

        {/* Text section */}
        <Box 
            sx={{ 
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                width: '60%'              // Text takes 60% of the width
            }}
        >
            <Typography variant="h2" component="h2" color="black" sx={{ mb: 2 }}>
                About
            </Typography>
            <Typography variant="body1" color="black" sx={{ fontSize: '1.25rem', mb: 2 }}>
                This application predicts C-section and normal birth types using machine learning models.
            </Typography>
            
            {/* Text blocks in a row */}
            <Box 
                sx={{ 
                    display: 'flex', 
                    justifyContent: 'space-between'  // Space between each text block
                }}
            >
                <Typography variant="body1" color="black" sx={{ fontSize: '1.25rem', mx: 2 }}>
                    Trained models with large datasets
                </Typography>
                <Typography variant="body1" color="black" sx={{ fontSize: '1.25rem', mx: 2 }}>
                    Comprehensive attributes which help our predictions
                </Typography>
                <Typography variant="body1" color="black" sx={{ fontSize: '1.25rem', mx: 2 }}>
                    Real-time predictions on medical data
                </Typography>
            </Box>
        </Box>
    </Box>
));

export default About;
