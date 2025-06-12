# vulnerable.py

import os

# Hardcoded secret token - detectable bysd secret scanning
API_TOKEN = "ak_live_1234567890abcdef1234567890abcdef"

def execute_user_code(user_input):
    """
    Dangerous: executes arbitrary Python code from user input.
    This is a code injection vulnerability.
    """
    try:
        result = eval(user_input)  # Vulnerable to code injection
        return result
    except Exception as e:
        return f"Error: {e}"

def main():
    print("Enter a Python expression to evaluate:")
    user_input = input("> ")
    output = execute_user_code(user_input)
    print(f"Result: {output}")

if __name__ == "__main__":
    main()
