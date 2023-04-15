import React from 'react';
import Typography from "@mui/material/Typography";
import {Grid, TextField} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
import {Field} from "formik";

function SubmissionForm1(props) {
    return (
        <div>
            <Grid>
                <Grid>
                    <Typography variant={"h5"} paragraph>Information / Bilgilendirme</Typography>
                    <Typography variant={"body1"} paragraph>3 ve üzeri katılımlar için grup indirimi mevcuttur. Lütfen formu doldurunuz.
                        Ekibimiz proforma faturanızı katılımcı sayınıza göre özel bir indirimle sizinle
                        paylaşacaktır.</Typography>
                </Grid>
                <Grid>
                    <Typography variant={"body1"} paragraph>Group discounts are available. Please fill registration form.
                        Our team will send your proforma invoice with a special discount according to the number of
                        participants.
                    </Typography>
                </Grid>
                <br/>

                <Grid>
                    <Typography variant={"h5"} paragraph>Satınalma Yetkilisi / Buyer Responsible</Typography>
                </Grid>
                <Grid>
                    <Typography variant={"body1"} paragraph>Satınalma/kayıt işlemini yapan kişinin doldurması gereklidir.</Typography>
                </Grid>
                <br/>
                <Grid className="form-group">
                    <label htmlFor="inputName" className="text-secondary">Ad Soyad / Name Surname <span
                    >*</span></label>
                    <input type="text" className="form-control" id="inputName" name="name" required/>
                </Grid>
                <Grid className="form-group">
                    <label htmlFor="inputEmail" className="text-secondary">Eposta / Email <span
                    >*</span></label>
                    <input type="email" className="form-control" id="inputEmail" name="email" required/>
                </Grid>
                <Grid className="form-group">
                    <label htmlFor="inputPhone" className="text-secondary">Telefon Numarası / Phone Number</label>
                    <input type="text" className="form-control" id="inputPhone" name="phone"
                           placeholder="0 ile başlayın (örn. 05555555555)"/>
                </Grid>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={4}>
                        <Field label="Ad Soyad / Name Surname *" component={TextField} fullWidth />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Field label="E-posta / Email *" component={TextField} fullWidth />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Field label="Telefon Numarası / Phone Number *" component={TextField} fullWidth />
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}

export default SubmissionForm1;