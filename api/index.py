from flask import Flask, request, jsonify
from flask_cors import CORS
import pickle
import os
from sklearn.feature_extraction.text import TfidfVectorizer

app = Flask(__name__)

# Enable CORS for all routes (you can configure this further as needed)
CORS(app)

# Get the current directory
current_dir = os.path.dirname(os.path.abspath(__file__))

try:
    # Load the trained model and vectorizer using absolute paths
    model_path = os.path.join(current_dir, '..', 'log_reg_model.pkl')
    vectorizer_path = os.path.join(current_dir, '..', 'vectorizer.pkl')
    
    with open(model_path, 'rb') as model_file:
        model = pickle.load(model_file)

    with open(vectorizer_path, 'rb') as vec_file:
        vectorizer = pickle.load(vec_file)
except Exception as e:
    print(f"Error loading model files: {str(e)}")
    model = None
    vectorizer = None

@app.route('/')
def home():
    return 'Home Page'

@app.route('/predict', methods=['POST'])
def predict():
    if model is None or vectorizer is None:
        return jsonify({'error': 'Model not properly loaded'}), 500
        
    data = request.json.get('tweet', '')
    if data:
        try:
            # Transform the tweet using the same vectorizer used during model training
            tweet_transformed = vectorizer.transform([data])

            # Get the prediction probability using the loaded model
            prediction_proba = model.predict_proba(tweet_transformed)

            # Set a custom threshold for prediction
            threshold = 0.4
            
            # Check the probability for the positive class (index 1)
            if prediction_proba[0][1] > threshold:
                result = "Potentially Suicidal"
            else:
                result = "Non-Suicidal"

            return jsonify({
                'prediction': result,
                'probability': float(prediction_proba[0][1])  # Convert numpy float to Python float
            })
        except Exception as e:
            return jsonify({'error': f'Prediction error: {str(e)}'}), 500
    else:
        return jsonify({'error': 'No tweet provided'}), 400

if __name__ == '__main__':
    app.run(debug=True)