interface Props {
  videoSrc: string
}

export default function SqueezeVideo({ videoSrc }: Props) {
  const isMp4 = videoSrc.endsWith('.mp4') || videoSrc.startsWith('/')

  if (isMp4) {
    return (
      <section className="bg-black">
        <div className="max-w-3xl mx-auto">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full"
            aria-label="ULTRASTAT anti-static gun demonstration"
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>
      </section>
    )
  }

  return (
    <section className="bg-black py-8">
      <div className="max-w-3xl mx-auto px-4">
        <div className="aspect-video rounded-lg overflow-hidden">
          <iframe
            src={videoSrc}
            className="w-full h-full"
            allow="autoplay; fullscreen"
            title="ULTRASTAT demonstration"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  )
}
