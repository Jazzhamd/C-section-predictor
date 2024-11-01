import React, { useState } from 'react';
import axios from 'axios';

const Predict = React.forwardRef((props, ref) => {
    const [birthType, setBirthType] = useState('');
    const [model, setModel] = useState('');
    const [predictionResult, setPredictionResult] = useState(null);
    const [error, setError] = useState(null);

    // Handle prediction on form submission
    const handlePredict = async (event) => {
        event.preventDefault();  // Prevent default form submission behavior
        console.log('Form submitted with:', { birthType, model });

        if (!birthType || !model) {
            alert('Please select both birth type and model.');
            return;
        }

        try {
            const response = await axios.post('http://localhost:5000/predict', {
                birth_type: birthType,
                model_name: model
            });
            console.log('Response from server:', response.data);
            setPredictionResult(response.data);
            setError(null);  // Reset error state
        } catch (error) {
            console.error("Prediction error:", error);
            if (error.response) {
                console.error("Error response data:", error.response.data);
                setError(error.response.data.error || "There was an error getting the prediction.");
            } else {
                setError("There was an error getting the prediction.");
            }
        }
    };

    return (
        <div ref={ref} style={{ height: '100vh', paddingTop: '80px' }}>
            <h2>Predict</h2>
            <form onSubmit={handlePredict}>  {/* Use form for handling submission */}
                <div>
                    <label>
                        Select Birth Type:
                        <select value={birthType} onChange={(e) => {
                            console.log('Birth type selected:', e.target.value);
                            setBirthType(e.target.value);
                        }}>
                            <option value="">--Choose--</option>
                            <option value="normal">Normal Birth</option>
                            <option value="c-section">C-Section</option>
                        </select>
                    </label>
                </div>

                <div>
                    <label>
                        Select Model:
                        <select value={model} onChange={(e) => {
                            console.log('Model selected:', e.target.value);
                            setModel(e.target.value);
                        }}>
                            <option value="">--Choose--</option>
                            <option value="knn">K-Nearest Neighbors</option>
                            <option value="logistic_regression">Logistic Regression</option>
                            <option value="decision_tree">Decision Tree</option>
                            <option value="neural_network">Neural Network</option>
                        </select>
                    </label>
                </div>

                <button type="submit">Predict</button>  {/* Use type="submit" */}
            </form>

            {error && <div style={{ color: 'red' }}>{error}</div>}

            {predictionResult && (
                <div>
                    <h3>Prediction Result:</h3>
                    <p>Prediction: {predictionResult.prediction}</p>
                    <p>Birth Type: {predictionResult.birth_type}</p>
                    <p>Selected Features: {JSON.stringify(predictionResult.features)}</p>
                </div>
            )}
        </div>
    );
});

export default Predict;
