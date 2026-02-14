import React from 'react';

function Page() {
    const telegramLink = "https://t.me/+9SbYLiIlhlEwYzc1";
    const telegramLink2 = "https://t.me/Apexad_works";

    const handleJoinClick = (e) => {
        e.preventDefault();
        if (window.fbq) {
            window.fbq('track', 'Lead');
        }

        // Delay to ensure Meta Pixel captures the event before redirecting
        setTimeout(() => {
            window.location.href = telegramLink;
        }, 400);
    };

    const handleJoinClick2 = (e) => {
        e.preventDefault();
        setTimeout(() => {
            window.location.href = telegramLink2;
        }, 400);
    };

    // FIX: You MUST have a return statement here!
    return (
        <div style={styles.wrapper}>
            <div style={styles.container}>
                <header style={styles.header}>
                    <div style={styles.logoRing}>
                        <img src="logo.jpeg" alt="Logo" style={styles.circularImage} />
                    </div>

                    <div style={styles.contentBox}>
                        <h1 style={styles.rulesTitle}>HACK NUMBER PREDICTION</h1>
                        <p style={styles.subText}>ONLY SURE SHOT PREDICTION FREE GIFT CODE AVAILABLE</p>
                        <p style={styles.hindiText}>
                            बड़ा से बड़ा लॉस 100% <span style={{ color: '#22c55e' }}>यहाँ Loss Recover</span>
                        </p>
                    </div>

                    <button onClick={handleJoinClick} style={styles.button}>
                        Join Telegram Now
                    </button>

                    <button onClick={handleJoinClick2} style={styles.button2}>
                        Managed by APEX ADS
                    </button>
                </header>

                <img src="One.jpeg" alt="Game Promo" style={styles.promoImage} />
            </div>
        </div>
    );
}

// Ensure the styles are defined outside or inside, but reachable
const styles = {
    wrapper: {
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: '#f1f5f9',
        fontFamily: 'system-ui, -apple-system, sans-serif',
        padding: '20px 15px',
    },
    container: {
        width: '100%',
        maxWidth: '450px',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
    },
    header: {
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        padding: '30px 20px',
        borderRadius: '24px',
        boxShadow: '0 10px 25px rgba(0,0,0,0.05)',
    },
    logoRing: {
        width: '100px',
        height: '100px',
        borderRadius: '50%',
        padding: '5px',
        background: 'linear-gradient(45deg, #0088cc, #00ffcc)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '15px',
        boxShadow: '0 4px 15px rgba(0, 136, 204, 0.3)',
    },
    circularImage: {
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        objectFit: 'cover',
        backgroundColor: 'white',
    },
    contentBox: {
        margin: '10px 0',
    },
    rulesTitle: {
        fontSize: '22px',
        fontWeight: '900',
        color: '#1e293b',
        margin: '0 0 8px 0',
    },
    subText: {
        color: '#475569',
        fontSize: '14px',
        fontWeight: '700',
        margin: '5px 0',
        lineHeight: '1.4',
    },
    hindiText: {
        color: '#dc2626',
        fontSize: '17px',
        fontWeight: '800',
        marginTop: '10px',
    },
    button: {
        width: '100%',
        padding: '18px',
        fontSize: '18px',
        fontWeight: 'bold',
        backgroundColor: '#0088cc',
        color: 'white',
        border: 'none',
        borderRadius: '14px',
        cursor: 'pointer',
        marginTop: '20px',
        boxShadow: '0 4px 12px rgba(0, 136, 204, 0.4)',
    },
    button2: {
        width: '100%',
        padding: '12px',
        fontSize: '13px',
        fontWeight: '700',
        backgroundColor: 'transparent',
        color: '#64748b',
        border: '1px solid #e2e8f0',
        borderRadius: '12px',
        cursor: 'pointer',
        marginTop: '15px',
        textTransform: 'uppercase',
    },
    promoImage: {
        width: '100%',
        height: 'auto',
        borderRadius: '20px',
        boxShadow: '0 8px 20px rgba(0,0,0,0.1)',
    },
};

export default Page;