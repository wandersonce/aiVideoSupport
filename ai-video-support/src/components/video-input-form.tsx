import { FileVideo, Upload, Wand2 } from 'lucide-react'
import { ChangeEvent, FormEvent, useMemo, useRef, useState } from 'react'
import { Separator } from './ui/separator'
import { Label } from './ui/label'
import { Textarea } from './ui/textarea'
import { Button } from './ui/button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select'
import { Slider } from './ui/slider'

function VideoInputForm() {
  const [videoFile, setVideoFile] = useState<File | null>(null);
  const promptInputRef = useRef<HTMLTextAreaElement>(null)

  function handleFileSelected(event:ChangeEvent<HTMLInputElement>){
    const {files} = event.currentTarget;

    if(!files){
      return;
    }

    const selectedFile = files[0];

    setVideoFile(selectedFile)
  }

  function handleUploadVideo(event : FormEvent<HTMLFormElement>){
    event.preventDefault();

  }

  const previewURL = useMemo(() => {
    if(!videoFile){
      return null;
    }

    return URL.createObjectURL(videoFile);

  },[videoFile])

  return (
    <>
    <form className="space-y-6">
            <label htmlFor="video" className="relative border flex rounded-md aspect-video cursor-pointer border-dashed text-sm flex-col gap-2 items-center justify-center text-muted-foreground hover:bg-primary/5"> 
              {previewURL ? (
                <video src={previewURL} controls={false} className="pointer-events-none absolute inset-0 aspect-video" />
              ) : (
                <>
                  <FileVideo className="w-4 h-4"/>
                  Pick a Video
                </>
              )}
            </label>
            <input type="file" id="video" accept="video/mp4" className="sr-only" onChange={handleFileSelected}/>

            <Separator />

            <div className="space-y-2">
              <Label htmlFor="transcriptionPrompt"> Transcription Prompt</Label>
              <Textarea ref={promptInputRef} id="transcriptionPrompt" className="h-20 leading-relaxed resize-none" placeholder="Include key words mentioned in the video separated by commas"/>
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
          </>
  )
}

export default VideoInputForm