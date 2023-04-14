import './OfficialDocs.css';
import { ReactComponent as LinkArrow } from '../resources/rightarrow.svg';
import { ReactComponent as FileLines } from '../resources/file-lines-solid.svg';
import { ReactComponent as FileContract } from '../resources/file-contract-solid.svg';
import { ReactComponent as FileMoney } from '../resources/file-invoice-dollar-solid.svg';
import { ReactComponent as FileTable } from '../resources/table-list-solid.svg';





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
                    <div className="doc-icon">
                        <FileLines fill='#1f5e64' height='112' />
                    </div>
                    <div className="doctype-and-link">
                        <p>ATAS</p>
                        <LinkArrow className="link-arrow" fill='#FFFFFF' height="13" />
                    </div>
                </div>

                <div id='card' className="editais-card">
                    <div className="doc-icon">
                        <FileContract fill='#5e9a87' height='112' />
                    </div>
                    <div className="doctype-and-link">
                        <p>EDITAIS</p>
                        <LinkArrow className="link-arrow" fill='#FFFFFF' height="13" />
                    </div>
                </div>

                <div id='card' className="formularios-card">
                    <div className="doc-icon">
                        <FileMoney fill='#1d7a81' height='112' />
                    </div>
                    <div className="doctype-and-link">
                        <p>FORMULÁRIOS</p>
                        <LinkArrow className="link-arrow" fill='#FFFFFF' height="13" />
                    </div>
                </div>

                <div id='card' className="documentos-card">
                    <div className="doc-icon">
                        <FileTable fill='#569a76' height='112' />
                    </div>
                    <div className="doctype-and-link">
                        <p>DOCUMENTOS</p>
                        <LinkArrow className="link-arrow" fill='#FFFFFF' height="13" />
                    </div>
                </div>

                <div id='card' className="inscricoes-card">
                    <div className="doc-icon">
                        <FileLines fill='#efa21b' height='112' />
                    </div>
                    <div className="doctype-and-link">
                        <p>INSCRIÇÕES</p>
                        <LinkArrow className="link-arrow" fill='#FFFFFF' height="13" />
                    </div>
                </div>

            </div>


        </div>
    );
}

export default OfficialDocs;