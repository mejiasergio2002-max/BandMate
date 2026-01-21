'use client';

type VideoPlayerProps = {
  streamUrl: string;
  className?: string;
  autoPlay?: boolean;
  controls?: boolean;
  muted?: boolean;
};

export default function VideoPlayer({ 
  streamUrl, 
  className,
  autoPlay = true,
  controls = true,
  muted = false
}: VideoPlayerProps) {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', padding: 16 }}>
      <video
        src={streamUrl}
        controls={controls}
        autoPlay={autoPlay}
        muted={muted}
        playsInline
        className={className}
        style={{
          width: '100%',
          maxWidth: 1200,
          height: 'auto',
          maxHeight: 500,
          borderRadius: 12,
          backgroundColor: '#000',
          objectFit: 'cover',
        }}
      />
    </div>
  );
}
