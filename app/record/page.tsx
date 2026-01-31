'use client'

import { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'

export default function RecordPage() {
  const router = useRouter()
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const mediaRecorderRef = useRef<MediaRecorder | null>(null)
  const chunksRef = useRef<Blob[]>([])

  const [stream, setStream] = useState<MediaStream | null>(null)
  const [recording, setRecording] = useState(false)
  const [recordedURL, setRecordedURL] = useState<string | null>(null)

  // Request camera + mic on load
  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then((mediaStream) => {
        setStream(mediaStream)
        if (videoRef.current) {
          videoRef.current.srcObject = mediaStream
        }
      })
      .catch(() => {
        alert('Camera & microphone permission is required.')
        router.push('/feed')
      })

    return () => {
      stream?.getTracks().forEach((track) => track.stop())
    }
  }, [])

  const startRecording = () => {
    if (!stream) return

    chunksRef.current = []
    const recorder = new MediaRecorder(stream)
    mediaRecorderRef.current = recorder

    recorder.ondataavailable = (e) => {
      if (e.data.size > 0) chunksRef.current.push(e.data)
    }

    recorder.onstop = () => {
      const blob = new Blob(chunksRef.current, { type: 'video/webm' })
      const url = URL.createObjectURL(blob)
      setRecordedURL(url)
    }

    recorder.start()
    setRecording(true)
  }

  const stopRecording = () => {
    mediaRecorderRef.current?.stop()
    setRecording(false)
  }

  return (
    <div
      style={{
        minHeight: '100vh',
        background: '#000',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* TOP BAR */}
      <div style={{ padding: 16 }}>
        <button
          onClick={() => router.push('/feed')}
          style={{
            background: 'none',
            border: 'none',
            color: '#fff',
            fontSize: 14,
            cursor: 'pointer',
          }}
        >
          ← Back to Feed
        </button>
      </div>

      {/* CAMERA / PREVIEW */}
      <div
        style={{
          flex: 1,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {recordedURL ? (
          <video
            src={recordedURL}
            controls
            style={{
              width: '90%',
              maxWidth: 720,
              borderRadius: 16,
            }}
          />
        ) : (
          <video
            ref={videoRef}
            autoPlay
            muted
            playsInline
            style={{
              width: '90%',
              maxWidth: 720,
              borderRadius: 16,
            }}
          />
        )}
      </div>

      {/* CONTROLS */}
      <div
        style={{
          padding: 24,
          display: 'flex',
          justifyContent: 'center',
          gap: 16,
        }}
      >
        {!recording && !recordedURL && (
          <button
            onClick={startRecording}
            style={controlBtn('#ff2d2d')}
          >
            🔴 Start Recording
          </button>
        )}

        {recording && (
          <button
            onClick={stopRecording}
            style={controlBtn('#fff', '#000')}
          >
            ⏹ Stop
          </button>
        )}

        {recordedURL && (
          <button
            onClick={() => alert('Upload flow comes next')}
            style={controlBtn('#000')}
          >
            Save Session
          </button>
        )}
      </div>
    </div>
  )
}

function controlBtn(bg: string, color = '#fff') {
  return {
    padding: '14px 24px',
    borderRadius: 999,
    border: 'none',
    background: bg,
    color,
    fontSize: 16,
    fontWeight: 800,
    cursor: 'pointer',
  }
}
