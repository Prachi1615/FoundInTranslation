from flask import Flask, request,abort

app = Flask(__name__)

@app.route("/webhook", methods=["POST"])
def webhook():
    print("webhook")
    if request.method == "POST":
    
        print('Received webhook:', request.json)  # Log the received data()
        return 'Webhook received!'+ request.json
    else:
        abort(400)
    

if __name__ == "__main__":
    app.run()
