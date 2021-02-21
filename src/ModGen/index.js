import React from 'react';
import { encrypt, decrypt } from "../EncryptionLib"

const styles = { width: '100%', margin: 2, padding: 5};

const row = (name, hook) => (
    <tr>
        <td>{name}</td>
        <td><input style={styles} onChange={(e) => hook(e.target.value)} placeholder={name}/></td>
    </tr>
)

const ModGen = () => {
    const [storeName, setStoreName] = React.useState('')
    const [websiteUrl, setWebsiteUrl] = React.useState('')
    const [supportUrl, setSupportUrl] = React.useState('')
    const [trustpilotId, setTrustpilotId] = React.useState('')
    const [logoSource, setLogoSource] = React.useState('')

    const [url, setUrl] = React.useState('')
    const [error, setError] = React.useState('')

    const createUrl = () => {
        const baseUrl = "http://localhost:3000/";
        const name = "name=" + storeName;
        const website = "website=" + websiteUrl;
        const support = "support=" + supportUrl;
        const trustpilot = "tpid=" + trustpilotId;
        const logo = "logo=" + logoSource;
        return baseUrl + encrypt(name + '&' + website + '&' + support + '&' + trustpilot + '&' + logo)
    }

    const handlePress = (e) => {
    if(storeName && websiteUrl && supportUrl  && trustpilotId && logoSource) {
        setError('')
        setUrl(createUrl)
    }
    else setError("Ikke alle felter er korrekt udfyldt")
    }


    return (
        <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', padding: '10%' }}>
            <table>
                <thead>
                    <tr>
                        <th>Felt</th>
                        <th>Input</th>
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
            <button style={styles} onClick={handlePress}>Opret</button>
            {url && <a href={url} target='_blank'><h2>Test din side her</h2></a>}

            {error && <p style={{color: 'red'}}>{error}</p>}
        </div>
    )
}

export default ModGen