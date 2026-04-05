export default function Banner() {
  return (
    <div className="relative px-4 mt-18">
      <video
        src="https://floka.casethemes.net/wp-content/uploads/2025/06/home-1-video.mp4"
        className="w-full min-h-screen rounded-2xl "
        autoPlay
        muted
        loop
      />
      <div className="absolute bottom-8 px-8 flex justify-between">
        <div className="space-y-2 text-right">
          <h1 className="text-[220px] text-white">Floka</h1>
          <h3 className="text-gray-400/60">Studio</h3>
        </div>
      </div>
    </div>
  );
}
