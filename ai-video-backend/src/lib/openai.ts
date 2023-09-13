import 'dotenv/config'
import {OpenAI} from 'openai'

export const openai = new OpenAI({
  apiKey: process.env.OPEN_AI_KEY, // Your API key here, or set OPENAI_APIKEY in your environment variables
})