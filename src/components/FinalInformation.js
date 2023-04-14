import './FinalInformation.css';
import { ReactComponent as RightArrow } from '../resources/rightarrow.svg';
import { ReactComponent as FacebookIcon } from '../resources/facebook-f.svg';
import { ReactComponent as InstaIcon } from '../resources/instagram.svg';
import { ReactComponent as LinkedInIcon } from '../resources/linkedin-in.svg';
import { ReactComponent as Ellipsis } from '../resources/ellipsis-solid.svg';



const FinalInformation = () => {
    return ( 
        <div style={{backgroundColor: "#216970"}}>
            <div id='separator-line'></div>
            <div className="final-information-component">

            <div id="info-section" className="municipio-links">
                <h4>MUNICIPIO</h4>
                <ul>
                    <li><a href="/">Mensagem do Presidente</a></li>
                    <li><a href="/">Câmara Municipal</a></li>
                    <li><a href="/">Assembleia Municipal</a></li>
                    <li><a href="/">Freguesias</a></li>
                </ul>
            </div>

            <div id="info-section" className="autarquia360-links">
                <h4>AUTARQUIA360</h4>
                <ul>
                    <li><a href="/">Onde estamos</a></li>
                    <li><a href="/">Conheça-nos melhor</a></li>
                    <li><a href="/">Visite-nos</a></li>
                </ul>
            </div>

            <div id="info-section" className="atividade-links">
                <h4>ATIVIDADE MUNICIPAL</h4>
                <ul>
                    <li><a href="/">Ação Social</a></li>
                    <li><a href="/">CPCJ</a></li>
                    <li><a href="/">Educação</a></li>
                    <li><a href="/">Ambiente</a></li>
                </ul>
            </div>

            <div id="info-section" className="subscribe-section">
                <h4>SUBSCREVA A NOSSA NEWSLETTER</h4>
                <br /><br />
                <div className="mail-input">
                    <input type="email" name='email' placeholder='E-mail' />
                    <button type='submit'><RightArrow width="11" fill='#FFFFFF' /></button>
                </div>
                <p>Consulte aqui a nossa <a href="/">Política de Privacidade</a>*</p>
                <p><input type="checkbox" />Li e concordo com os Termos e Condições</p>
                <br />
                <p id="share">PARTILHAR</p>
                <br />
                <div className="social-media-icons">
                    <div id='social-icons'><FacebookIcon id='icon' height="16" fill='#FFFFFF' /></div>
                    <div id='social-icons'><InstaIcon id='icon' height="16" fill="#FFFFFF" /></div>
                    <div id='social-icons'><LinkedInIcon id='icon' height="16" fill="#FFFFFF" /></div>
                    <div id='social-icons'><Ellipsis id='icon' height="16" fill="#FFFFFF" /></div>
                </div>

            </div>






        </div>
        <div id='separator-line'></div>
        </div>
     );
}
 
export default FinalInformation;