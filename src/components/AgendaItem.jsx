export default function AgendaItem({ event }) {
  const date = new Date(event.date);
  const day = date.toLocaleDateString("id-ID", { day: "2-digit" });
  const month = date.toLocaleDateString("id-ID", { month: "short" });
  const time = date.toLocaleTimeString("id-ID", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <a
      href={event.url || "#"}
      className="flex items-center gap-4 p-4 rounded-lg border border-base-200 hover:bg-base-200/60 transition-colors"
    >
      <div className="flex flex-col items-center justify-center w-14 h-14 rounded-md bg-base-200">
        <span className="text-lg font-bold">{day}</span>
        <span className="text-[11px] uppercase text-muted-foreground">
          {month}
        </span>
      </div>
      <div className="min-w-0 flex-1">
        <h4 className="text-sm font-medium line-clamp-1">{event.title}</h4>
        <p className="text-xs text-muted-foreground line-clamp-1">
          {time} • {event.location}
        </p>
      </div>
      
    </a>
  );
}
