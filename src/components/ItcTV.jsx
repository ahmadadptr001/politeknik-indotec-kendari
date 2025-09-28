export default function ItcTV() {
  return (
    <section className="relative w-full py-20 bg-gradient-to-br from-blue-700 via-gray-100 to-gray-100 text-white overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.toptal.com/designers/subtlepatterns/patterns/dot-grid.png')]"></div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <h2 className="text-5xl font-extrabold mb-4">
          ITC <span className="text-blue-500">TV</span>
        </h2>
        <p className="mb-10 text-lg opacity-90 max-w-2xl mx-auto">
          <span className="font-semibold text-gray-700">Politeknik Indotec Kendari</span>
        </p>

        <div className="flex justify-center">
          <div className="card w-full max-w-4xl bg-base-100 shadow-2xl transform hover:scale-[1.02] transition duration-500">
            <figure className="aspect-video">
              <iframe
              className="w-full h-full"
                src="https://www.youtube.com/embed/StvpNUv-mXI?si=GYPY_GFQTFbcHGl5"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
