import React, { useState, useEffect } from "react";


function WeatherCard(props) {

    function displayDetails() {
        console.log("Displaying details");

        // calling it
        props.setDetails({
            ...props.extraDetails,
            [props.extraDetails.sunrise_h]: props.extraDetails.sunrise_h,
            [props.extraDetails.sunrise_m]: props.extraDetails.sunrise_m,
            [props.extraDetails.sunrise_s]: props.extraDetails.sunrise_s,
            [props.extraDetails.sunset_h]: props.extraDetails.sunset_h,
            [props.extraDetails.sunset_m]: props.extraDetails.sunset_m,
            [props.extraDetails.sunset_s]: props.extraDetails.sunset_s,
            [props.extraDetails.f_morn]: props.extraDetails.f_morn,
            [props.extraDetails.f_day]: props.extraDetails.f_day,
            [props.extraDetails.f_eve]: props.extraDetails.f_eve,
            [props.extraDetails.f_night]: props.extraDetails.f_night,
            [props.extraDetails.pressure]: props.extraDetails.pressure,
            [props.extraDetails.humidity]: props.extraDetails.humidity,
            [props.extraDetails.w_speed]: props.extraDetails.w_speed,
            [props.extraDetails.g_weather]: props.extraDetails.sunset_s,
            [props.extraDetails.s_weather]: props.extraDetails.sunset_s,
            [props.extraDetails.pop]: props.extraDetails.pop,
            [props.extraDetails.uv]: props.extraDetails.uv,
            [props.extraDetails.clouds]: props.extraDetails.clouds
        });
    }

    return (
        <div className="wob_df myStyle6"   tabindex="0" onClick={() => displayDetails()}>
        <div className="QrNVmd myStyle5" aria-label={props.full_day}>{props.short_day}</div>
        <div className="myStyle3"><img className="myStyle4" alt={props.alt_text} src={props.image}  data-atf="1"/></div>
        <div className="myStyle7">
           <div className="vk_gy myStyle1"><span className="wob_t myStyle2">{props.d_temp_c}</span><span className="wob_t myStyle10">{props.d_temp_f}</span>°</div>
           <div className="QrNVmd" className="myStyle3"><span className="wob_t myStyle2">{props.n_temp_c}</span><span className="wob_t myStyle10">{props.n_temp_f}</span>°</div>
        </div>
     </div>
    )
}

export default WeatherCard;