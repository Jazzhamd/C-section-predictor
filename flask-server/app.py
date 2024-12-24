import streamlit as st
import pandas as pd
import numpy as np
import pickle
import json
from keras.models import load_model

models = {
    "K-Nearest Neighbors": pickle.load(open("KNN.pkl", "rb")),
    "Decision Tree": pickle.load(open("dt.pkl", "rb")),
    "Random Forest": pickle.load(open("rf.pkl", "rb")),
    "Support Vector Machine": pickle.load(open("clf.pkl", "rb")),
    "Logistic Regression": pickle.load(open("Logreg.pkl", "rb")),
    "Neural Network": load_model("nn_model.keras")
}

label_encoders = pickle.load(open("label_encoders.pkl", "rb"))
scaler = pickle.load(open("standard_scaler.pkl", "rb"))

with open("../Client/src/results.json", "r") as f:
    metrics = json.load(f)

st.markdown("""
    <style>
        .centered-title {
            text-align: center;
        }
        .centered-header {
            text-align: center;
        }
        .model-metrics {
            margin-bottom: 20px;
        }
    </style>
""", unsafe_allow_html=True)

st.markdown('<h1 class="centered-title">C-Section Predictor</h1>', unsafe_allow_html=True)

st.markdown('<h2 class="centered-header">Model Metrics</h2>', unsafe_allow_html=True)

columns = st.columns(3)

col_idx = 0
for model_name, model_metrics in metrics.items():
    with columns[col_idx]:
        st.subheader(model_name)
        for metric_name, metric_value in model_metrics.items():
            st.write(f"{metric_name}: {metric_value}")
        st.markdown('<div class="model-metrics"></div>', unsafe_allow_html=True)

    col_idx += 1
    if col_idx == 3:
        col_idx = 0

st.header("Upload Features CSV")
uploaded_file = st.file_uploader("Choose a CSV file", type="csv")

if uploaded_file:
    data = pd.read_csv(uploaded_file)
    st.write("Uploaded Data:")
    st.write(data)

    for column, encoder in label_encoders.items():
        if column in data.columns:
            data[column] = encoder.transform(data[column])

    data_scaled = scaler.transform(data)
    st.write("Processed Data:")
    st.write(pd.DataFrame(data_scaled, columns=data.columns))

    st.header("Select a Model for Prediction")
    model_choice = st.selectbox("Choose a model", list(models.keys()))

    if st.button("Predict"):
        model = models[model_choice]

        if model_choice == "Neural Network":
            predictions = (model.predict(data_scaled) > 0.5).astype(int).flatten()
        else:
            predictions = model.predict(data_scaled)

        predictions = ["C-section" if pred == 1 else "Normal" for pred in predictions]

        st.write("Predictions:")
        st.write(pd.DataFrame({"Prediction": predictions}))
