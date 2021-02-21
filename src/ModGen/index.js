import React from 'react';
import {encrypt, decrypt} from "../EncryptionLib"

const styles = { width: 200 };

const row = (name, hook) => (
    <tr>
        <td>{name}</td>
        <td><input style={styles} onChange={(e) => hook(e.target.value)} /></td>
    </tr>
)

const ModGen = () => {
    const [storeName, setStoreName] = React.useState('')
    const [websiteUrl, setWebsiteUrl] = React.useState('')
    const [supportUrl, setSupportUrl] = React.useState('')
    const [trustpilotId, setTrustpilotId] = React.useState('')
    const [logoSource, setLogoSource] = React.useState('')
    
    const [url, setUrl] = React.useState('')
    const [decrypted, setDecypted] = React.useState('')

    const createUrl = () => {
        const baseUrl = "http://localhost:3000/";
        const name = "name=" + storeName;
        const website = "website=" + websiteUrl;
        const support = "support=" + supportUrl;
        const trustpilot = "tpid=" + trustpilotId;
        const logo = "logo=" + logoSource;
        return baseUrl + 'da/'+encrypt(name+'&'+website+'&'+support+'&'+trustpilot+'&'+logo)
    }
    
    const handlePress = (_) => {
        setUrl(createUrl)
    }


    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th style={styles}>Felt</th>
                        <th style={styles}>Input</th>
                    </tr>
                </thead>
                <tbody>
                    {row("Navn", setStoreName)}
                    {row("URL til din hjemmeside", setWebsiteUrl)}
                    {row("URL til support kontakt", setSupportUrl)}
                    {row("Trustpilot id", setTrustpilotId)}
                    {row("Logo (URL)", setLogoSource)}

                </tbody>
            </table>
            <button onClick={handlePress}>Opret</button>
            <p style={{fontSize: 10}}>{url}</p>
        </div>

    )
}

export default ModGen