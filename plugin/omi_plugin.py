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
    print("###########################")
    print("ORIGINAL USER MESSAGE TRANSCRIPTION")
    print(text)
    
    translation_request=requests.get("https://wapo-testnet.phala.network/ipfs/QmXDgi7jbmQjEVdqSuJhWxTpAx5fvgqLzbhPTWg2XGjePk?key=08dbe3c52440c8ab&chatQuery=Convert this text to spanish: "+str(text))
    translation_response=translation_request.json()
    translation=translation_response.get("message")
    print("###########################")
    print("TRANSLATION")
    print(translation)

    dict={"original_text":text,"translation":translation}
    # Serializing json
    json_object = json.dumps(dict, indent=4)
    
    # Writing to sample.json
    with open("sample.json", "w") as outfile:
        outfile.write(json_object)
    try:
        target_url = url+"/webhook?session_id="+session_id+"&uid="+uid+"&forwarded=true"
        res_data={
            "session_id": session_id,
            "segments": [
                {
                    "text": translation,
                    "speaker": speaker,
                    "speakerId": speaker_id,
                    "is_user": is_user,
                    "start": start,
                    "end": end
                }       ]
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



if __name__ == "__main__":
    app.run(debug=True)