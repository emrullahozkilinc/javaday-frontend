import React from 'react';

function SubmissionForm4(props) {
    return (
        <div>
            <fieldset>

                <div className="overlay hidden"></div>

                <div className="row">
                    <div className="col">
                        <div className="form-group" >
                            <h3>Ödeme Tipi</h3>
                            <select className="form-control" name="paymentType">
                                <option value="" disabled selected>Ödeme Tipini Seçin...</option>
                                <option value="CREDIT_CART">Kredi Kartı</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-2"></div>
                    <div className="col">
                        <div className="form-group" >
                            <h3>Tahsil Edilecek Ücret:</h3>
                            <span id="calc-price"></span>
                        </div>
                    </div>
                </div>

                <div className="g-recaptcha" data-sitekey="6LcjVQwiAAAAALipCC22tuNJF-qAXD96llsTWyv8"></div>
                <br/>

                    <div className="row">
                        <div className="col">
                            <input type="button" className="btn btn-primary"

                                   value="  < Önceki Sayfa / Prev Page  "/>
                        </div>
                        <div className="col"></div>
                        <div className="col">
                            <input type="submit" className="btn btn-primary btn-open"

                                   value="  Gönder / Submit >  "/>
                        </div>
                    </div>
            </fieldset>
        </div>
    );
}

export default SubmissionForm4;