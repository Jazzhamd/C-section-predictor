from flask import Flask, request, jsonify
import joblib
import numpy as np
import tensorflow as tf
from tensorflow.keras.models import load_model
import random
from flask_cors import CORS  # Correct import for the package

# Initialize the Flask app
app = Flask(__name__)

# Initialize CORS for the Flask app
CORS(app)  # Initialize CORS here

# Load models
knn_model = joblib.load("KNN.pkl")
logreg_model = joblib.load("Logreg.pkl")
dt_model = joblib.load("dt.pkl")
nn_model = load_model("nn_model.keras")

# Load normal and C-section instances
normal_birth_instances = np.load("normal_birth_instances.npy")
c_section_instances = np.load("c_section_instances.npy")

# Prediction route
@app.route('/predict', methods=['POST'])
def predict():
    try:
        data = request.get_json()
        
        # Extract model type and class selection from request
        model_type = data.get('model_name')  # Updated to match your client-side key
        birth_class = data.get('birth_type')

        # Select a random instance based on the birth class
        if birth_class == 'normal':
            features = random.choice(normal_birth_instances)
        elif birth_class == 'c-section':
            features = random.choice(c_section_instances)
        else:
            return jsonify({"error": "Invalid birth class specified"}), 400
        
        # Ensure features are in the correct shape for model input
        features = features.reshape(1, -1)  # Reshape to (1, n_features)

        # Choose model based on input and make prediction
        if model_type == 'knn':
            prediction = knn_model.predict(features)
        elif model_type == 'logistic_regression':
            prediction = logreg_model.predict(features)
        elif model_type == 'decision_tree':
            prediction = dt_model.predict(features)
        elif model_type == 'neural_network':
            prediction = (nn_model.predict(features) > 0.5).astype("int32")
        else:
            return jsonify({"error": "Invalid model type specified"}), 400
        
        # Map the prediction to the corresponding birth type
        birth_type = "Normal" if prediction[0] == 1 else "C-section"
        
        return jsonify({
            "prediction": int(prediction[0]),
            "birth_type": birth_type,
            "features": features.flatten().tolist()  # Send back the selected features
        })

    except Exception as e:
        return jsonify({"error": str(e)}), 500  # Return error message

# Main block to run the Flask app
if __name__ == '__main__':
    app.run(debug=True)
