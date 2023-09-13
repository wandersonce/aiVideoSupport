import {fastify} from 'fastify';
import {fastifyCors} from '@fastify/cors'
import { getAllPromptsRoute } from './routes/get-all-prompts';
import { uploadVideoRoute } from './routes/upload-video';
import { generationAiCompletionRoute } from './routes/generate-ai-completion';

const app = fastify();

app.register(fastifyCors, {
  origin: '*',
})

app.register(getAllPromptsRoute);
app.register(uploadVideoRoute);
app.register(generationAiCompletionRoute);

app.listen({
  port:3333,
}).then(() => {
  console.log('Server Running...')
})