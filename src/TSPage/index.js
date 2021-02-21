import '../css/all.css'
import React from 'react';
import tpLogo from "../assets/tp-logo.svg";

import NotFound from "../NotFound";
import StarComponent from "../StarComponent";

import { useParams } from "react-router-dom";
import { decrypt } from '../EncryptionLib';


const parser = (params) => decrypt(params).split('&').map(function (i) { return i.split('='); }).reduce(function (m, o) { m[o[0]] = o[1]; return m; }, {});

const sanitizeWebsiteName = (name) => ((name.replace("https://", "")).replace("http://", "")).replace('/','')


function TSPage() {
    const { params } = useParams();
    let data
    try {
        data = parser(params) 
    } catch (error) {
        
    }

    if (!data) return <NotFound />

    const {name, website, support, tpid, logo} = data;

    if(!name || !website || !support || !tpid || !logo) return <NotFound/>

    return (
        <div id="__next">
            <div className="wrapper___28fVm">
                <div className="container___2TgRj">
                    <div className="actual___3RNmb">
                        <div className="wrapper___6Nzsp">
                            <div className="logo__container___3A2Qd"><a href="/" target="_self"
                                data-company-logo-link="true"><img alt="Trustpilot-anmeldelser" className="image___3i5IQ"
                                    src={tpLogo} /></a></div>
                        </div>
                    </div>
                </div>
                <main role="main" className="content___3thLx">
                    <div className="container___27Sx1">
                        <div className="breadcrumb___1Bcyp">
                            <div className="businessInfo___wg7hB">
                                <img src={logo}/>
                                <div>
                                    <h3>{name}</h3>
                                    <p>{sanitizeWebsiteName(website)}</p>
                                </div>
                            </div>
                        </div>
                        <div className="mainContent___1ElTO">
                            <form autoComplete="off">
                                <div className="row___2lDHR">
                                    <label
                                        className="typography___lxzyt h4___1iNll color-gray-7___3h7gL weight-heavy___2guGL fontstyle-normal___2eVjB">
                                        Bedøm din seneste oplevelse
                            </label>
                                    <StarComponent tpid={tpid} supporturl={support}/>
                                </div>
                            </form>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}

export default TSPage;
