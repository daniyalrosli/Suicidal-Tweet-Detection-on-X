from flask import Flask, request, jsonify
from flask_cors import CORS
import pickle
from sklearn.feature_extraction.text import TfidfVectorizer

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Load the trained model and vectorizer
with open('log_reg_model.pkl', 'rb') as model_file:
    model = pickle.load(model_file)

with open('vectorizer.pkl', 'rb') as vec_file:
    vectorizer = pickle.load(vec_file)

@app.route('/')
def home():
    return "CareTweet API is running!"

@app.route('/predict', methods=['POST'])
def predict():
    data = request.json.get('tweet', '')
    if not data:
        return jsonify({'error': 'No tweet provided'}), 400

    # Transform the tweet using the trained vectorizer
    tweet_transformed = vectorizer.transform([data])

    # Get the prediction probability using the loaded model
    prediction_proba = model.predict_proba(tweet_transformed)

    # Set a custom threshold for classification
    threshold = 0.4
    prediction_label = "Potentially Suicidal" if prediction_proba[0][1] > threshold else "Non-Suicidal"

    # Return JSON response
    return jsonify({'prediction': prediction_label, 'probability': float(prediction_proba[0][1])})

if __name__ == '__main__':
    from waitress import serve
    serve(app, host='0.0.0.0', port=8081)