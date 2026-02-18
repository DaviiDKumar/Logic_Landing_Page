import React from 'react';

function Page3() {
    const telegramLink = "https://t.me/+9gIOXQ-VDy04NGM1";

    const handleJoinClick = () => {
        // 1. Manually fire the Subscribe event
        if (window.fbq) {
            window.fbq('track', 'Subscribe', {
                content_name: 'Telegram Join Button',
                content_category: 'Engagement'
            });
        }

        // 2. Wait 500ms to ensure Meta receives the event before redirecting
        setTimeout(() => {
            window.location.href = telegramLink;
        }, 500);
    };

    return (
        <div style={styles.wrapper}>
            <div style={styles.container}>
                <header style={styles.header}>
                    <div style={styles.logoRing}>
                        <img src="/logo.jpeg" alt="Logo" style={styles.circularImage} />
                    </div>

                    <div style={styles.contentBox}>
                        <h1 style={styles.rulesTitle}>HACK NUMBER PREDICTION</h1>
                        <p style={styles.subText}>ONLY SURE SHOT PREDICTION FREE GIFT CODE AVAILABLE</p>
                        <p style={styles.hindiText}>
                            बड़ा से बड़ा लॉस 100% <span style={{ color: '#22c55e' }}>यहाँ Loss Recover</span>
                        </p>
                    </div>

                    <button 
                        onClick={handleJoinClick} 
                        style={styles.button}
                        id="join-tg-btn"
                    >
                        ✅ JOIN TELEGRAM NOW
                    </button>
                    
                    <p style={styles.verifyNote}>Click above to get instant access</p>
                </header>

                <img src="/One.jpeg" alt="Game Promo" style={styles.promoImage} />
                <p style={styles.footerText}>Managed by APEX ADS</p>
            </div>
        </div>
    );
}

const styles = {
    wrapper: { minHeight: '100vh', display: 'flex', justifyContent: 'center', backgroundColor: '#f1f5f9', fontFamily: 'system-ui, -apple-system, sans-serif', padding: '20px 15px' },
    container: { width: '100%', maxWidth: '450px', display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center' },
    header: { textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: '#ffffff', padding: '30px 20px', borderRadius: '24px', boxShadow: '0 10px 25px rgba(0,0,0,0.05)', width: '100%' },
    logoRing: { width: '100px', height: '100px', borderRadius: '50%', padding: '5px', background: 'linear-gradient(45deg, #0088cc, #00ffcc)', display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '15px' },
    circularImage: { width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover', backgroundColor: 'white' },
    rulesTitle: { fontSize: '22px', fontWeight: '900', color: '#1e293b', margin: '0 0 8px 0' },
    subText: { color: '#475569', fontSize: '14px', fontWeight: '700', margin: '5px 0' },
    hindiText: { color: '#dc2626', fontSize: '17px', fontWeight: '800', marginTop: '10px' },
    button: { width: '100%', padding: '20px', fontSize: '18px', fontWeight: 'bold', backgroundColor: '#0088cc', color: 'white', borderRadius: '14px', cursor: 'pointer', marginTop: '25px', border: 'none', boxShadow: '0 4px 15px rgba(0, 136, 204, 0.3)' },
    verifyNote: { fontSize: '12px', color: '#94a3b8', marginTop: '12px' },
    promoImage: { width: '100%', height: 'auto', borderRadius: '20px' },
    footerText: { fontSize: '12px', color: '#94a3b8', fontWeight: 'bold', textTransform: 'uppercase' }
};

export default Page3;