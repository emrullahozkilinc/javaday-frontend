import React from 'react';

function SubmissionForm3(props) {
    return (
        <div>
            <fieldset>
                <select id="groupCount" className="form-control" name="participants" >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                </select>
                <br/>
                    <div id="groupContainer">
                        <div className="form-group row group" id="group1">
                            <div className="form-group col">
                                <label htmlFor="firstname1">İsim:</label>
                                <input type="text" className="form-control" id="firstname1" name="firstname1"/>
                            </div>
                            <div className="form-group col">
                                <label htmlFor="lastname1">Soyisim:</label>
                                <input type="text" className="form-control" id="lastname1" name="lastname1"/>
                            </div>
                            <div className="form-group col">
                                <label htmlFor="email1">Email:</label>
                                <input type="email" className="form-control" id="email1" name="email1"/>
                            </div>
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

export default SubmissionForm3;