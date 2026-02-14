import React from 'react';

function Page2() {
    // DUMMY LINKS FOR TESTING
   const telegramLink = "https://t.me/+9SbYLiIlhlEwYzc1";
    const telegramLink2 = "https://t.me/Apexad_works";

    const handleJoinClick = (e) => {
        e.preventDefault();
        if (window.fbq) {
            window.fbq('track', 'Lead');
            console.log("TEST: Meta Lead Event Fired!");
        }

        // Standard 400ms delay for Pixel reliability
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

    return (
        <div style={styles.wrapper}>
            <div style={styles.container}>
                <header style={styles.header}>
                    {/* Test Logo Ring */}
                   <div style={styles.logoRing}>
                        <img src="logo.jpeg" alt="Logo" style={styles.circularImage} />
                    </div>

                    <div style={styles.contentBox}>
                        <h1 style={styles.rulesTitle}>DUMMY TEST PAGE</h1>
                        <p style={styles.subText}>VERIFYING PIXEL TRACKING AND MOBILE UI</p>
                        <p style={styles.hindiText}>
                            UI Testing 100% <span style={{ color: '#22c55e' }}>Responsive Layout</span>
                        </p>
                    </div>

                    <button onClick={handleJoinClick} style={styles.button}>
                        Test: Join Telegram
                    </button>

                    <button onClick={handleJoinClick2} style={styles.button2}>
                        Test: Managed by APEX
                    </button>
                </header>

                {/* Placeholder for your One.jpeg */}
                <div style={styles.promoPlaceholder}>
                    PROMO IMAGE PREVIEW
                </div>
            </div>
        </div>
    );
}

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
    },
    dummyLogo: {
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        backgroundColor: '#e2e8f0',
        color: '#64748b',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: 'bold',
        fontSize: '12px',
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
        fontSize: '13px',
        fontWeight: '700',
        margin: '5px 0',
    },
    hindiText: {
        color: '#dc2626',
        fontSize: '17px',
        fontWeight: '800',
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
    },
    promoPlaceholder: {
        width: '100%',
        height: '250px',
        backgroundColor: '#e2e8f0',
        borderRadius: '20px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#94a3b8',
        fontWeight: 'bold',
        border: '2px dashed #cbd5e1'
    },
};

export default Page2;