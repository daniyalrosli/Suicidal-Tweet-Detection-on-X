from flask import Flask, request, jsonify
from flask_cors import CORS
import pickle
import os
from sklearn.feature_extraction.text import TfidfVectorizer

app = Flask(__name__)
CORS(app)

# Load the trained model and vectorizer
current_dir = os.path.dirname(os.path.abspath(__file__))
model_path = os.path.join(current_dir, 'log_reg_model.pkl')
vectorizer_path = os.path.join(current_dir, 'vectorizer.pkl')

try:
    with open(model_path, 'rb') as model_file:
        model = pickle.load(model_file)
    with open(vectorizer_path, 'rb') as vec_file:
        vectorizer = pickle.load(vec_file)
except Exception as e:
    print(f"Error loading model/vectorizer: {e}")
    model = None
    vectorizer = None

@app.route('/api/health')
def health():
    return jsonify({'status': 'ok'})

@app.route('/api/predict', methods=['POST'])
def predict():
    if model is None or vectorizer is None:
        return jsonify({'error': 'Model not loaded'}), 500
    data = request.json.get('tweet', '')
    if not data:
        return jsonify({'error': 'No tweet provided'}), 400
    try:
        tweet_transformed = vectorizer.transform([data])
        prediction_proba = model.predict_proba(tweet_transformed)
        threshold = 0.4
        prediction_label = "Potentially Suicidal" if prediction_proba[0][1] > threshold else "Non-Suicidal"
        return jsonify({'prediction': prediction_label, 'probability': float(prediction_proba[0][1])})
    except Exception as e:
        return jsonify({'error': f'Prediction error: {str(e)}'}), 500

@app.route('/')
def home():
    return "CareTweet API is running!"

if __name__ == '__main__':
    import os
    port = int(os.environ.get("PORT", 8081))
    from waitress import serve
    serve(app, host='0.0.0.0', port=port)