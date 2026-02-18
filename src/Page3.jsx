import React from 'react';

function Page3() {
    const telegramLink = "https://t.me/+9SbYLiIlhlEwYzc1";

    const handleJoinClick = () => {
        // 1. Manually fire the Subscribe event
        if (window.fbq) {
            window.fbq('track', 'Subscribe', {
                content_name: 'Community_Join_Attempt',
                content_category: 'Education'
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
                        <h1 style={styles.rulesTitle}>SEQUENCE ANALYSIS GROUP</h1>
                        <p style={styles.subText}>DAILY PROBABILITY STRATEGY & COMMUNITY UPDATES</p>
                        
                        <div style={styles.neutralRules}>
                            <h3 style={styles.ruleHeading}>Community Guidelines:</h3>
                            <ul style={styles.list}>
                                <li style={styles.listItem}>• Study sequence patterns and logic.</li>
                                <li style={styles.listItem}>• Strategic color analysis for educational use.</li>
                                <li style={styles.listItem}>• No financial transactions allowed in group.</li>
                                <li style={styles.listItem}>• Professional discussion only.</li>
                            </ul>
                        </div>
                    </div>

                    <button 
                        onClick={handleJoinClick} 
                        style={styles.button}
                        id="join-tg-btn"
                    >
                        ✅ ENTER OFFICIAL COMMUNITY
                    </button>
                    
                    <p style={styles.verifyNote}>By clicking above you agree to our terms.</p>
                </header>

                <div style={styles.footerBrand}>
                    <p style={styles.footerText}>Managed by APEX ANALYTICS</p>
                    <p style={styles.legalLinks}>Privacy Policy | Terms of Service</p>
                </div>
            </div>
        </div>
    );
}

const styles = {
    wrapper: { minHeight: '100vh', display: 'flex', justifyContent: 'center', backgroundColor: '#f8fafc', fontFamily: 'system-ui, -apple-system, sans-serif', padding: '20px 15px' },
    container: { width: '100%', maxWidth: '450px', display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center' },
    header: { textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: '#ffffff', padding: '30px 20px', borderRadius: '24px', boxShadow: '0 4px 20px rgba(0,0,0,0.05)', width: '100%' },
    logoRing: { width: '80px', height: '80px', borderRadius: '50%', padding: '4px', background: '#2563eb', display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '15px' },
    circularImage: { width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover', backgroundColor: 'white' },
    rulesTitle: { fontSize: '20px', fontWeight: '900', color: '#0f172a', margin: '0 0 5px 0' },
    subText: { color: '#64748b', fontSize: '12px', fontWeight: '700', marginBottom: '20px', letterSpacing: '0.5px' },
    neutralRules: { textAlign: 'left', backgroundColor: '#f1f5f9', padding: '15px', borderRadius: '12px', width: '100%', marginBottom: '20px' },
    ruleHeading: { fontSize: '14px', fontWeight: '800', color: '#334155', marginBottom: '10px' },
    list: { listStyle: 'none', padding: 0, margin: 0 },
    listItem: { fontSize: '13px', color: '#475569', margin: '5px 0', fontWeight: '500' },
    button: { width: '100%', padding: '18px', fontSize: '16px', fontWeight: 'bold', backgroundColor: '#2563eb', color: 'white', borderRadius: '12px', cursor: 'pointer', border: 'none', boxShadow: '0 4px 10px rgba(37, 99, 235, 0.2)' },
    verifyNote: { fontSize: '11px', color: '#94a3b8', marginTop: '12px' },
    footerBrand: { textAlign: 'center', marginTop: '10px' },
    footerText: { fontSize: '11px', color: '#94a3b8', fontWeight: 'bold', textTransform: 'uppercase' },
    legalLinks: { fontSize: '10px', color: '#cbd5e1', marginTop: '5px' }
};

export default Page3;