import logo from "../assets/logo.png";
import logoTutwuri from "../assets/logo-tutwuri.png";

export default function DaftarLogo() {
    return (
        <div className="gap-15 sm:gap-25 flex items-center flex-nowrap justify-center my-10">
            <a href="">
                <img src={logoTutwuri} alt="logo Tut Wuri Handayani" className="rounded-circle w-25 object-cover" />
            </a>
            <a href="">
                <img src={logo} alt="logo kampus ITC" className="rounded-circle w-25 object-cover" />
            </a>
        </div>
    )
}