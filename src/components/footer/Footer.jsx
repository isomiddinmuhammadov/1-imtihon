import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
import { VscChevronRight } from "react-icons/vsc";
import { FaYandex } from "react-icons/fa";
function Footer() {
  return (
    <div className='footer_orqa'>
      <footer >
        <div className='footer_iotemss'>
          <div>
            <p>Hujjatlar</p>
            <Link>Sotish uchun umumiy shartlar</Link>
            <Link>Ofertalar arxivi</Link>
            <Link>Nizom</Link>
            <Link>Guvohnoma</Link>
          </div>
          <div>
            <p>Servis</p>
            <Link>Muddatli to'lov islomda</Link>
            <Link>alif shopda soting!</Link>
            <Link>Qaytarish</Link>
          </div>
          <div>
            <p>Smartfonlar va telefonlar</p>
            <Link>Gadjetlar</Link>
            <Link>Smartfonlar uchun aksessuarlar</Link>
            <Link>Tegishli tovarlar</Link>
            <Link>Soat va aksessuarlar</Link>
          </div>
          <div>
            <p>Biznning ijtimoiy tartmoqlar</p>
            <div className='footer_Linksss'>
              <img src="https://alifshop.uz/_ipx/s_40x40/images/media/instagram.webp" alt="insta" />
              <img src="https://alifshop.uz/_ipx/s_40x40/images/media/facebook.svg" alt="dffdsdf" />
              <img src="https://alifshop.uz/_ipx/s_40x40/images/media/telegram.svg" alt="sdfds" />
              <img src="https://alifshop.uz/_ipx/s_40x40/images/media/ok.svg" alt="sdfds" />
              <img src="https://alifshop.uz/_ipx/s_40x40/images/media/tiktok.svg" alt="dfds" />
            </div>
            <p>Axborot Xizmati</p>
            <Link>@alifshop.uz <VscChevronRight /></Link>
            <Link>+998 555 12 12 12 <VscChevronRight /></Link>
          </div>
        </div>

        <div className='footer_boottom'>
          <p>2023 © alifshop.uz</p>
          <div>
            <div><FaYandex /></div>
            <p>460</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer