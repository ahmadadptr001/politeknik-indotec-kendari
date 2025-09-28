export default function Footer() {
  return (
    <footer className="footer footer-center p-10 bg-primary text-primary-content">
      <aside>
        <p>© 2025 Politeknik Nusantara | Jl. Pendidikan No.123 Kendari</p>
        <p>Email: info@polinus.ac.id | Telp: (0401) 123456</p>
      </aside>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <a className="link link-hover">Facebook</a>
          <a className="link link-hover">Instagram</a>
          <a className="link link-hover">LinkedIn</a>
        </div>
      </nav>
    </footer>
  );
}
