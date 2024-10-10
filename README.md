Suicidal Tweet Detection on X (formerly Twitter)

This project aims to build a machine-learning model to detect suicidal ideation and related distress in tweets posted on X (previously known as Twitter). With the increasing use of social media platforms for expressing emotions, detecting suicidal content has become crucial in identifying individuals at risk and providing timely intervention. This repository contains the code and resources for implementing a Natural Language Processing (NLP)-based classification model to analyze tweet texts and categorize them as either “Suicidal” or “Non-Suicidal.”

Project Overview

- Objective: Develop a system to automatically classify tweets containing suicidal ideation using various machine learning and deep learning techniques.
- Dataset: Tweets collected and labeled as “Suicidal” and “Non-Suicidal” based on their content. This dataset is preprocessed to remove noise and irrelevant information.
- Techniques Used: NLP for text preprocessing, TF-IDF for feature extraction, and algorithms like Support Vector Machines (SVM), Random Forest, and Deep Learning models like LSTMs and BERT for classification.
- Evaluation Metrics: Accuracy, Precision, Recall, and F1-score to assess model performance.

Current Problem

The current implementation of the model shows an unusually high accuracy of 1.0 (100%), which indicates potential overfitting or a class imbalance issue in the dataset. This problem suggests that the model is either memorizing the training data or that the dataset needs more balanced examples of “Suicidal” and “Non-Suicidal” tweets. Further investigation is needed to address these issues and improve the model's generalization capability.

Key Features

1. Data Preprocessing: Text cleaning, tokenization, and normalization to prepare the tweets for feature extraction.
2. Feature Extraction: Use of TF-IDF and Word Embeddings for capturing semantic information.
3. Modeling: Implementing various machine learning and deep learning models for binary classification.
4. Visualization: Graphical representation of the results using confusion matrices and ROC curves.
5. Deployment: This can be integrated into a web application or REST API to monitor real-time tweets.

Prerequisites

- Python 3.x
- Pandas, NumPy, Scikit-Learn, TensorFlow/PyTorch
- NLTK, SpaCy, or other NLP libraries
- Matplotlib/Seaborn for visualization
