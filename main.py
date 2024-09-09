import sklearn as sk
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.svm import SVC
from sklearn.metrics import accuracy_score, classification_report
import matplotlib.pyplot as plt
# Your code here

# Load the dataset
data = pd.read_csv('/path/to/dataset.csv')



