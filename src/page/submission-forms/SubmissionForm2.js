import React from 'react';

function SubmissionForm2(props) {
    return (
        <div>
            <fieldset >

                <div className="form-group" >
                    <h3>Fatura Bilgileri / Invoice Information</h3>
                </div>
                <div className="form-group" >
                    <p>Fatura bilgileri için firmanız ile kayıt işlemi öncesinde teyitleşmenizi önemle rica ederiz.</p>
                </div>
                <div className="form-group" >
                    <p>For invoice information, we kindly ask you to confirm with your company before the
                        registration.</p>
                </div>

                <div className="row" >
                    <div className="col">
                        <div className="inputGroup">
                            <input id="radio1" name="invoiceType" type="radio" value="company" //onclick eklenecek
                                   required/>
                            <label htmlFor="radio1">Şirket / Company</label>
                        </div>
                    </div>
                    <div className="col">
                        <div className="inputGroup">
                            <input id="radio2" name="invoiceType" type="radio" //onclick eklenecek
                                   value="individual"/>
                            <label htmlFor="radio2">Bireysel / Individual</label>
                        </div>
                    </div>
                </div>

                <div id="company-container">
                    <div className="form-group" >
                        <label htmlFor="inputCompanyName" className="text-secondary">Firma Ünvanı / Company Name</label>
                        <input type="text" className="form-control" id="inputCompanyName" name="companyName"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputInvoiceAddress" className="text-secondary">Fatura Adresi / Invoice
                            Address <span >*</span></label>
                        <textarea className="form-control" id="inputInvoiceAddress" name="invoiceAddress"></textarea>
                    </div>
                    <div className="form-group" >
                        <label htmlFor="inputCity" className="text-secondary">Şehir / City </label>
                        <input type="text" className="form-control" id="inputCity" name="city"/>
                    </div>
                    <div className="form-group" >
                        <p>Şahıs firmaları için Vergi Numarası kısmına TC kimlik numarası yazılması yeterlidir.</p>
                    </div>
                    <div className="form-group" >
                        <label htmlFor="inputTaxId" className="text-secondary">Vergi Numarası / Tax ID </label>
                        <input type="number" className="form-control" id="inputTaxId" name="taxId"/>
                    </div>
                    <div className="form-group" >
                        <label htmlFor="inputTaxOffice" className="text-secondary">Vergi Dairesi / Tax Office </label>
                        <input type="text" className="form-control" id="inputTaxOffice" name="taxOffice"/>
                    </div>
                    <div className="form-group" >
                        <p>Kdv Tevkifat Muafiyeti için firmanız ile teyitleşmeniz gereklidir. Firma beyanı esas
                            alınmaktadır. Yasal sorumluluk beyan veren firmaya aittir. Kodu 616: 5018 sayılı kanuna ekli
                            cetvellerdeki idare, kurum ve kuruluşlara yapılan diğer hizmetler.</p>
                    </div>
                    <div className="form-group">
                        <p>This exemption is only for Turkish Customers.</p>
                    </div>
                    <div>
                        <label htmlFor="inputKdv" className="text-secondary">Kdv Tevkifat Muafiyeti/Vat
                            Exemption:</label>
                        <select className="form-select" id="inputKdv" name="kdv">
                            <option disabled selected>Bir seçenek seçin</option>
                            <option value="false">Yok</option>
                            <option value="true">Var / Kodu: 616 - Muafiyet Oranı: 5/10</option>
                        </select>
                    </div>
                </div>
                <div id="individual-container" >
                    <div className="form-group">
                        <label htmlFor="inputInvoiceAddress2" className="text-secondary">Fatura Adresi / Invoice
                            Address <span >*</span></label>
                        <textarea className="form-control" id="inputInvoiceAddress2" name="invoiceAddress2"></textarea>
                    </div>
                    <div className="form-group" >
                        <label htmlFor="inputCity2" className="text-secondary">Şehir / City </label>
                        <input type="text" className="form-control" id="inputCity2" name="city2"/>
                    </div>
                    <div className="form-group" >
                        <label htmlFor="inputNationalId" className="text-secondary">TC Kimlik No / National Id </label>
                        <input type="number" className="form-control" id="inputNationalId" name="inputNationalId"/>
                    </div>
                </div>


                <div className="row">
                    <div className="col">
                        <input type="button" className="btn btn-primary"

                               value="  < Önceki Sayfa / Prev Page  "/>
                    </div>
                    <div className="col"></div>
                    <div className="col">
                        <input type="button" className="btn btn-primary"

                               value="  Sonraki Sayfa / Next Page >  "/>
                    </div>
                </div>
            </fieldset>
        </div>
    );
}

export default SubmissionForm2;