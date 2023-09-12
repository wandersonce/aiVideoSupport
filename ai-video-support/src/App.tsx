import { Button } from "./components/ui/button"
import { Github, FileVideo, Upload, Wand2 } from "lucide-react"
import { Separator } from "./components/ui/separator"
import { Textarea } from "./components/ui/textarea"
import { Label } from "./components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./components/ui/select"
import { Slider } from "./components/ui/slider"

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

            <div className="space-y-2">
              <Label htmlFor="transcriptionPrompt"> Transcription Prompt</Label>
              <Textarea id="transcriptionPrompt" className="h-20 leading-relaxed resize-none" placeholder="Include key words mentioned in the video separated by commas"/>
            </div>

            <Button type="submit" className="w-full">
              Upload the Video 
              <Upload className="w-4 h-4 ml-2"/>
            </Button>
          </form>

          <Separator />

          <form className="space-y-6">
          <div className="space-y-2">
              <Label>Model</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select a prompt..."/>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="title">
                    Youtube Title
                  </SelectItem>
                  <SelectItem value="description">
                    Youtube Description
                  </SelectItem>
                </SelectContent>
              </Select>
              <span className="text-muted-foreground block text-xs italic">You will be able to change this option soon.</span>
            </div>

            <div className="space-y-2">
              <Label>Model</Label>
              <Select disabled defaultValue="gpt3.5">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="gpt3.5">
                    GPT 3.5-turbo 16k
                  </SelectItem>
                </SelectContent>
              </Select>
              <span className="text-muted-foreground block text-xs italic">You will be able to change this option soon.</span>
            </div>

            <Separator />

            <div className="space-y-4">
              <Label>Temperature</Label>
              <Slider min={0} max={1} step={0.1}/>
              <span className="text-muted-foreground block text-xs italic leading-relaxed">Higher value may leave the result more creative/errors.</span>
            </div>

            <Separator />

            <Button type="submit" className="w-full">
              Execute
              <Wand2 className="w-4 h-4 ml-2" />
            </Button>
          </form>
        </aside>
      </main>
    </div>
  )
}

export default App
