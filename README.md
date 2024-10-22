# FoundInTranslation

##Project Description
FoundInTranslation is a decentralised system for real time language translations using open-sourced AI wearables, a perfect marriage between AI and blockchain technology, our elegant attempt to do language transcriptions on the fly. It has a pay as you go model where a user can refill their transcription credits, and allows the user to log in with their EVM-compatible wallet and choose from several target and destination languages. Great for tourist travels, learning new languages with international friends, or watching your favourite foreign films with loved ones.

##How it's Made
This project utilizes Dynamic for onchain signup mechanism which also utilises Phala's TEE. After a user logs in and authenticates with the preferred wallet, we ask the user to choose a language in which they prefer the translation. We have deployed a smart contract on Polygon for our ERC20 token, which will be utilised by our consumers. The user speaks into the AI wearable Omi and the transcription is sent to the phala AI agent which in turn does the translation depending on the user's translation language preference, which is further used to convert the translated text to audio in the UI running on next.js.

## Try it out
1. Clone the repo
2. cd plugin 
- pip install
- source venv/bin/activate
- python omi_plugin.py
- start your ngrok and connect it to the port your server is running
3. open another terminal 
- cd frontend
- yarn
- yarn dev
4. Interact with the app on `localhost:3000`
5. Connect your Omi to your phone, declare your ngrok URL in the app settings
6. Speak and see the translation in the UI.
