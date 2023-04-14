import './OfficialDocs.css';
import { ReactComponent as LinkArrow } from '../resources/rightarrow.svg';
import { ReactComponent as FileLines } from '../resources/file-lines-regular.svg';


const OfficialDocs = () => {


    return (
        <div className='official-docs-component'>

            <div className="official-docs-header">
                <p className='component-title-font'>DOCUMENTOS INSTITUCIONAIS</p>
            </div>
            <div className="component-title-underline"></div>
            <br />

            <div className="document-links-collection">

                <div id='card' className="atas-card">
                    <FileLines fill='#1f5e64' height='112'/>
                    <div className="doctype-and-link">
                        <p>ATAS</p>
                        <LinkArrow fill='#FFFFFF' height="13"/>
                    </div>
                </div>

                <div id='card' className="editais-card">

                </div>

                <div id='card' className="formularios-card">

                </div>

                <div id='card' className="documentos-card">

                </div>

                <div id='card' className="inscricoes-card">

                </div>

            </div>


        </div>
    );
}

export default OfficialDocs;