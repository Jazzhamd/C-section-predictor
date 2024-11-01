import React, { useEffect, useState } from 'react';
import modelsData from "../results.json";
import { Box, Typography } from '@mui/material';

const Model = React.forwardRef((props, ref) => {
    const [models, setModelsData] = useState([]);

    useEffect(() => {
        // Convert modelsData JSON to an array of objects and add descriptions
        const formattedModels = Object.entries(modelsData).map(([name, metrics]) => ({
            name,
            metrics: [
                `Accuracy: ${metrics.accuracy.toFixed(2)}%`,
                `Precision: ${metrics.precision.toFixed(2)}%`,
                `Recall: ${metrics.recall.toFixed(2)}%`,
                `F1 Score: ${metrics.f1_score.toFixed(2)}%`
            ],
            // Add descriptions for each model
            description: name === 'K Nearest Neighbours' 
                ? 'A simple and effective algorithm for classification problems.'
                : name === 'Decision Tree' 
                ? 'A model that makes decisions based on feature splits.'
                : name === 'Logistic Regression' 
                ? 'A statistical model used for binary classification.'
                : 'A model inspired by the human brain structure for complex tasks.'
        }));
        setModelsData(formattedModels);
    }, []);

    return (
        <div ref={ref} style={{ height: '100vh', paddingTop: '80px' }}>
            <h2 style={{ textAlign: "center" }}>Models</h2>
            <Box sx={{ padding: { xs: '10px', sm: '20px' }, width: '100vw', margin: '0 auto' }}>
                {/* Flex container for models */}
                <Box display="flex" flexDirection="column">
                    {models.map((model, index) => (
                        <Box
                            key={index}
                            display="flex"
                            flexDirection={{ xs: 'column', sm: 'row' }}
                            justifyContent="space-between"
                            sx={{
                                marginBottom: { xs: '10px', sm: '15px' },
                                padding: { xs: '5px', sm: '10px' },
                                border: '1px solid #ccc',
                                borderRadius: '4px'
                            }}
                        >
                            {/* Column for Model Name and Description */}
                            <Box sx={{ flex: 1 }}>
                                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>{model.name}</Typography>
                                <Typography variant="body2" sx={{ color: 'gray', fontStyle: 'italic' }}>{model.description}</Typography>
                            </Box>
                            {/* Column for Model Metrics */}
                            <Box sx={{ flex: 1, marginTop: { xs: '10px', sm: '0' } }}>
                                {model.metrics.map((metric, metricIndex) => (
                                    <Typography key={metricIndex} variant="body1">
                                        {metric}
                                    </Typography>
                                ))}
                            </Box>
                        </Box>
                    ))}
                </Box>
            </Box>
        </div>
    );
});

export default Model;
