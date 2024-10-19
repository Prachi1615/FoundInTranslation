from openai import OpenAI
import os
client = OpenAI(
    base_url='https://api.red-pill.ai/v1',
    api_key=os.environ.get('OPENAI_API_KEY')
)