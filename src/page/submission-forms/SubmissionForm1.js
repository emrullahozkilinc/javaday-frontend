import React from 'react';
import {Card} from "reactstrap";
import {CardActions, CardContent} from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

function SubmissionForm1(props) {
    return (
        <div>
            <fieldset>
                <div>
                    <div className="form-group" >
                        <h3>Information / Bilgilendirme</h3>
                        <p>3 ve üzeri katılımlar için grup indirimi mevcuttur. Lütfen formu doldurunuz.
                            Ekibimiz proforma faturanızı katılımcı sayınıza göre özel bir indirimle sizinle
                            paylaşacaktır.</p>
                    </div>
                    <div className="form-group" >
                        <p>Group discounts are available. Please fill registration form.
                            Our team will send your proforma invoice with a special discount according to the number of
                            participants.</p>
                    </div>
                    <div className="form-group" >
                        <h3>Satınalma Yetkilisi / Buyer Responsible</h3>
                    </div>
                    <div className="form-group" >
                        <p>Satınalma/kayıt işlemini yapan kişinin doldurması gereklidir.</p>
                    </div>
                    <div className="form-group" >
                        <label htmlFor="inputName" className="text-secondary">Ad Soyad / Name Surname <span
                            >*</span></label>
                        <input type="text" className="form-control" id="inputName" name="name" required/>
                    </div>
                    <div className="form-group" >
                        <label htmlFor="inputEmail" className="text-secondary">Eposta / Email <span
                            >*</span></label>
                        <input type="email" className="form-control" id="inputEmail" name="email" required/>
                    </div>
                    <div className="form-group" >
                        <label htmlFor="inputPhone" className="text-secondary">Telefon Numarası / Phone Number</label>
                        <input type="text" className="form-control" id="inputPhone" name="phone"
                               placeholder="0 ile başlayın (örn. 05555555555)"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <input type="button" className="btn btn-primary"

                               value="  Sonraki Sayfa / Next Page >  "/>
                    </div>
                </div>
            </fieldset>
        </div>
    );
}

export default SubmissionForm1;