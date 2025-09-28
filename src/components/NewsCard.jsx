export default function NewsCard({ article }) {
  const date = new Date(article.date).toLocaleDateString("id-ID", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  return (
    <article className="min-h-[130px] group overflow-hidden relative">
      <img
        src={article.image}
        alt={article.title}
        className="w-full h-full object-cover flex-shrink-0"
        loading="lazy"
      />
      <div className="absolute group-hover:text-2xl gap-3 inset-0 p-4 flex justify-end flex-col hover:backdrop-blur-xs text-white hover:backdrop-brightness-50 duration-500">
        <p className="font-semibold">{article.title}</p>
        <span className="text-xs"><i className="fa fa-calendar"></i> {article.date}</span>
      </div>
     
    </article>
  );
}
