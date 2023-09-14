import { Button } from "./components/ui/button"
import { Github } from "lucide-react"
import { Separator } from "./components/ui/separator"
import { Textarea } from "./components/ui/textarea"
import VideoInputForm from "./components/video-input-form"

function App() {

  return (
    <div className="min-h-screen flex flex-col">
      <div className="px-6 py-3 flex items-center justify-between border-b">
        <h1 className="text-xl font-bold">upload.ai</h1>

        <div className="flex items-center gap-3 ">
          <span className="text-sm text-muted-foreground">Developed by Wanderson C. 🫡</span>
          <Separator orientation="vertical" className="h-6" />
          <Button variant="outline"><Github className="w-4 h-4 mr-2" />Github</Button>
        </div>
      </div>

      <main className="flex-1 p-6 flex gap-6">
        <div className="flex flex-col flex-1 gap-4">
          <div className="grid grid-row-2 gap-4 flex-1">
            <Textarea className="resize-none p-4 leading-relaxed" placeholder="Include your AI Prompt..." />
            <Textarea className="resize-none p-4 leading-relaxed" placeholder="Result generated..." readOnly/>
          </div>

          <p className="text-sm text-muted-foreground">Remember: You can use the variable <code className="text-violet-400">{'{transcription}'}</code> in your prompt to add the content of the transcription for the video selected.</p>
        </div>
        <aside className="w-80 space-y-6">
          <VideoInputForm />
        </aside>
      </main>
    </div>
  )
}

export default App
