export default function NavbarAtas() {
  const sosmed = [
    {
      href: "#",
      label: "Facebook",
      icon: "fa fa-facebook",
      color: "hover:bg-blue-600",
    },
    {
      href: "#",
      label: "Instagram",
      icon: "fa fa-instagram",
      color: "hover:bg-gradient-to-tr hover:from-pink-500 hover:to-yellow-400",
    },
    {
      href: "#",
      label: "YouTube",
      icon: "fa fa-youtube",
      color: "hover:bg-red-600",
    },
  ];

  return (
    <div className="relative flex items-center justify-end bg-primary p-3 px-5 overflow-hidden">

      <div className="absolute left-0 top-0 h-full w-16 bg-yellow-400 -skew-x-12 origin-top-left"></div>

      <ul className="flex items-center gap-3 text-white relative z-10">
        {sosmed.map((s) => (
          <li key={s.label}>
            <a
              href={s.href}
              aria-label={s.label}
              className={`flex items-center justify-center w-6 h-6 rounded-full bg-white/10 
              backdrop-blur-sm shadow-md transition-all duration-300 
              hover:scale-110 hover:text-white ${s.color}`}
            >
              <i className={s.icon}></i>
            </a>
          </li>
        ))}

        <li>
          <button
            aria-label="Search"
            className="flex items-center justify-center w-6 h-6 rounded-full bg-white/10 
            backdrop-blur-sm shadow-md transition-all duration-300 
            hover:scale-110 hover:bg-yellow-400 hover:text-black"
          >
            <i className="fa fa-search"></i>
          </button>
        </li>
      </ul>
    </div>
  );
}
