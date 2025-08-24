from flask import Flask, request, jsonify
from flask_cors import CORS
import pickle
import os
import warnings
from sklearn.feature_extraction.text import TfidfVectorizer

# Filter sklearn version warnings
warnings.filterwarnings("ignore", category=UserWarning, module="sklearn")

app = Flask(__name__)
CORS(app)

# Load the trained model and vectorizer
current_dir = os.path.dirname(os.path.abspath(__file__))
model_path = os.path.join(current_dir, 'log_reg_model.pkl')
vectorizer_path = os.path.join(current_dir, 'vectorizer.pkl')

model = None
vectorizer = None

try:
    print(f"Loading model from {model_path}")
    with open(model_path, 'rb') as model_file:
        model = pickle.load(model_file)
    print(f"Loading vectorizer from {vectorizer_path}")
    with open(vectorizer_path, 'rb') as vec_file:
        vectorizer = pickle.load(vec_file)
    print("Model and vectorizer loaded successfully")
except FileNotFoundError as e:
    print(f"Error: File not found - {e}")
except Exception as e:
    print(f"Error loading model/vectorizer: {e}")

@app.route('/api/health')
def health():
    return jsonify({'status': 'ok'})

@app.route('/api/predict', methods=['POST'])
def predict():
    if model is None or vectorizer is None:
        return jsonify({'error': 'Model not loaded properly'}), 500
        
    # Check if request has JSON content
    if not request.is_json:
        return jsonify({'error': 'Invalid request format, JSON expected'}), 400
        
    # Get tweet from either 'tweet' key or request body
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
        print(f"Prediction error: {str(e)}")
        return jsonify({'error': f'Prediction error: {str(e)}'}), 500

@app.route('/')
def home():
    return "CareTweet API is running!"

if __name__ == '__main__':
    import os
    # Using FLASK_DEBUG instead of FLASK_ENV as per deprecation warning
    if os.environ.get('FLASK_DEBUG') == '1':
        # Run in debug mode for development
        app.run(debug=True, host='0.0.0.0', port=8082)
    else:
        # Use waitress for production
        from waitress import serve
        print("Starting production server with waitress...")
        serve(app, host='0.0.0.0', port=8082)