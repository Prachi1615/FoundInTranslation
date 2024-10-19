from flask import Flask, request, jsonify
import requests
import logging
from flask_cors import CORS
import json
import os 

app = Flask(__name__)
CORS(app)
app.logger.setLevel(logging.INFO)  

url=os.environ.get('url')

@app.route("/webhook", methods=["POST"])
def getData():
    print("webhook")
    payload = request.json

    if request.args.get("forwarded") == "true":
        print("Received a forwarded request, not processing further.")
        return 'Forwarded request received!', 200
    

    session_id=payload.get("session_id")
    text=payload.get("segments")[0].get("text")
    args=request.args
    uid=args.get("uid")
    speaker=payload.get("segments")[0].get("speaker")
    speaker_id=payload.get("segments")[0].get("speaker_id")
    start=payload.get("segments")[0].get("start")
    end=payload.get("segments")[0].get("end")
    is_user=payload.get("segments")[0].get("is_user")

    print("Session id",session_id)
    print("args",uid)
    print("text",text)
    try:
        target_url = url+"/webhook"+"?session_id="+session_id+"&uid="+uid+"&forwarded=true"
        target_url += "&forwarded=true"
        res_data={
            "session_id": session_id,
            "segments": [
                        {
            "text": "Yeah. Yeah. Yeah. Yeah. I I found that before.",
                    "speaker": speaker,
                    "speaker_id": speaker_id,
                    "is_user": is_user,
                    "start": start,
                    "end": end
                            }
                        ]
                    }
        res_json=json.dumps(res_data)
        response = requests.post(target_url, data=res_json,headers={'Content-Type': 'application/json'})
        print("response",response.content)
        print(response)
        
        if response.status_code == 200:
            print('Data successfully sent to the target API')
        else:
            print(f'Failed to send data. Status code: {response.status_code}, Response: {json.dumps(response)}')
        
        
        return 'Webhook received and forwarded!', 200
    
    except Exception as e:
        print(f'An error occurred: {e}')
        return 'Error forwarding the webhook data', 500


@app.route("/webhook", methods=["POST"])
def test():
    return "test"


if __name__ == "__main__":
    app.run(debug=True)
