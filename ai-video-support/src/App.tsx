import { Button } from "./components/ui/button"
import { Github, FileVideo, Upload } from "lucide-react"
import { Separator } from "./components/ui/separator"
import { Textarea } from "./components/ui/textarea"
import { Label } from "./components/ui/label"

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
          <form className="space-y-6">
            <label htmlFor="video" className="border flex rounded-md aspect-video cursor-pointer border-dashed text-sm flex-col gap-2 items-center justify-center text-muted-foreground hover:bg-primary/5"> 
              <FileVideo className="w-4 h-4"/>
              Pick a Video
            </label>
            <input type="file" id="video" accept="video/mp4" className="sr-only"/>

            <Separator />

            <div className="space-y-1">
              <Label htmlFor="transcriptionPrompt"> Transcription Prompt</Label>
              <Textarea id="transcriptionPrompt" className="min-h-20 leading-relaxed" placeholder="Include key words mentioned in the video separated by commas"/>
            </div>

            <Button type="submit" className="w-full">
              Upload the Video 
              <Upload className="w-4 h-4 ml-2"/>
            </Button>
          </form>
        </aside>
      </main>
    </div>
  )
}

export default App
