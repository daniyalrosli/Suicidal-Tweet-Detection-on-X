import socket
import subprocess
import sys
import time

def check_port(host, port):
    """Check if a port is open on the host."""
    s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    try:
        s.connect((host, port))
        s.shutdown(socket.SHUT_RDWR)
        return True
    except:
        return False
    finally:
        s.close()

def check_service():
    """Check if the Flask service is running on port 8082."""
    if check_port('localhost', 8082):
        print("SUCCESS: Port 8082 is open and service is running!")
        return True
    else:
        print("ERROR: Port 8082 is not open. Service might not be running.")
        return False

def list_running_processes():
    """List processes that might be listening on port 8082."""
    print("\nChecking processes that might be running on port 8082:")
    try:
        if sys.platform.startswith('darwin'):  # macOS
            output = subprocess.check_output(["lsof", "-i", "tcp:8082"], text=True)
            print(output)
        elif sys.platform.startswith('linux'):
            output = subprocess.check_output(["netstat", "-tuln"], text=True)
            print(output)
        elif sys.platform.startswith('win'):
            output = subprocess.check_output(["netstat", "-ano"], text=True)
            print(output)
    except subprocess.CalledProcessError:
        print("No process found running on port 8082")

if __name__ == "__main__":
    print("Checking if the Flask app is running on port 8082...")
    result = check_service()
    if not result:
        list_running_processes()
        print("\nPossible issues:")
        print("1. The Flask app is not running")
        print("2. The Flask app is using a different port")
        print("3. A firewall is blocking the connection")
        print("\nSuggestions:")
        print("1. Try running 'FLASK_DEBUG=1 python app.py' in a terminal")
        print("2. Check for any error messages when starting the app")
        print("3. Verify the app.py file specifies port 8082")
