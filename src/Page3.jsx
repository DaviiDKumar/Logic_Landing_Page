import React from 'react';

function Page3() {
    const telegramLink = "https://t.me/+9SbYLiIlhlEwYzc1";

    const handleJoinClick = () => {
        if (window.fbq) {
            window.fbq('track', 'Subscribe');
        }
        setTimeout(() => {
            window.location.href = telegramLink;
        }, 500);
    };

    return (
        <div style={styles.wrapper}>
            <div style={styles.container}>
                <header style={styles.header}>
                    <div style={styles.logoRing}>
                        <img src="/logo.jpeg" alt="Community Logo" style={styles.circularImage} />
                    </div>

                    <div style={styles.contentBox}>
                        <h1 style={styles.rulesTitle}>OFFICIAL COMMUNITY RULES</h1>
                        <p style={styles.subText}>LEARN STRATEGIC ANALYSIS & MARKET TRENDS</p>
                        
                        <div style={styles.rulesBox}>
                            <p style={styles.ruleItem}>1. Daily Market Updates & Insights</p>
                            <p style={styles.ruleItem}>2. No Spam or Promotional Links</p>
                            <p style={styles.ruleItem}>3. Respect All Community Members</p>
                        </div>
                    </div>

                    <button 
                        onClick={handleJoinClick} 
                        style={styles.button}
                    >
                        ✅ ENTER OFFICIAL TELEGRAM
                    </button>
                    
                    <p style={styles.verifyNote}>By joining, you agree to our community guidelines.</p>
                </header>

                <footer style={styles.footerText}>
                    APEX DIGITAL CONSULTING <br/>
                    EST. 2026 | JAIPUR
                </footer>
            </div>
        </div>
    );
}

const styles = {
    wrapper: { minHeight: '100vh', display: 'flex', justifyContent: 'center', backgroundColor: '#f1f5f9', fontFamily: 'system-ui, -apple-system, sans-serif', padding: '20px 15px' },
    container: { width: '100%', maxWidth: '450px', display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center' },
    header: { textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: '#ffffff', padding: '30px 20px', borderRadius: '24px', boxShadow: '0 10px 25px rgba(0,0,0,0.05)', width: '100%' },
    logoRing: { width: '80px', height: '80px', borderRadius: '50%', padding: '4px', background: '#0088cc', marginBottom: '15px' },
    circularImage: { width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover' },
    rulesTitle: { fontSize: '20px', fontWeight: '900', color: '#1e293b', marginBottom: '5px' },
    subText: { color: '#64748b', fontSize: '12px', fontWeight: 'bold', letterSpacing: '0.5px', marginBottom: '20px' },
    rulesBox: { textAlign: 'left', width: '100%', backgroundColor: '#f8fafc', padding: '15px', borderRadius: '12px', marginBottom: '20px' },
    ruleItem: { fontSize: '14px', color: '#475569', margin: '8px 0', fontWeight: '500' },
    button: { width: '100%', padding: '18px', fontSize: '16px', fontWeight: 'bold', backgroundColor: '#0088cc', color: 'white', borderRadius: '12px', cursor: 'pointer', border: 'none' },
    verifyNote: { fontSize: '11px', color: '#94a3b8', marginTop: '15px' },
    footerText: { fontSize: '10px', color: '#cbd5e1', textAlign: 'center', fontWeight: 'bold', textTransform: 'uppercase' }
};

export default Page3;