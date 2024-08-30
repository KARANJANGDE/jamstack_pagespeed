import React from 'react'

const ProgressBar: React.FC<{
    bgcolor?: string
    progress: string | number
    height?: string
    showLabel?: boolean
}> = ({ bgcolor = '#18B663', progress, height, showLabel = false }) => {
    const Parentdiv = {
        height: height,
        width: '100%',
        backgroundColor: 'whitesmoke',
        borderRadius: 40,
    }

    const Childdiv: React.CSSProperties = {
        height: '0.75em',
        width: `${progress}%`,
        backgroundColor: bgcolor,
        borderRadius: 40,
        textAlign: 'right',
        marginTop: '0.25em',
    }

    const progresstext = {
        padding: 10,
        color: 'black',
        fontWeight: 900,
    }

    return (
        <div style={Parentdiv}>
            <div style={Childdiv}>
                <span style={progresstext}>{showLabel ? `${progress}%` : ''}</span>
            </div>
        </div>
    )
}

export default ProgressBar
