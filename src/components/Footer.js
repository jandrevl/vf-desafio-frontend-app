import './Footer.css';
import { ReactComponent as WorldKey } from '../resources/worldkey/Ellipse 1.svg'
import { ReactComponent as W3cicon } from '../resources/w3c-icon/Foreground.svg'


const Footer = () => {
    return ( 
        <div className="footer-component">

            <div className="footer-group">
                <span>@2020 Autarquia360</span>
                <div id="vertical-line"></div>
                <span>Todos os direitos reservados</span>
            </div>

            <div className="footer-group">
                <a href="/">Mapa do Site</a>
                <div id="vertical-line"></div>
                <a href="/">Política de Privacidade</a>
                <div id="vertical-line"></div>
                <a href="/">Ficha Técnica</a>
            </div>

            <div className="footer-group-logos">
                <a href="/"><img src="/img/livrodereclamacoes.png" alt="reclamacoes" height="30"/></a>
                <a href="/"><WorldKey className='world-key'/></a>
                <a href="/"><W3cicon /></a>
            </div>


            

        </div>
     );
}
 
export default Footer;