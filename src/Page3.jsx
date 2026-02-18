import React from 'react';

function Page3() {
    const telegramLink = "https://t.me/+9SbYLiIlhlEwYzc1";

    const handleJoinClick = () => {
        // 1. Manually fire the Subscribe event (Standard for lead generation)
        if (window.fbq) {
            window.fbq('track', 'Subscribe', {
                content_name: 'Newsletter_Community_Join',
                content_category: 'Professional Services'
            });
        }

        // 2. 500ms delay to ensure data delivery
        setTimeout(() => {
            window.location.href = telegramLink;
        }, 500);
    };

    return (
        <div style={styles.wrapper}>
            <div style={styles.container}>
                <header style={styles.header}>
                    <div style={styles.logoRing}>
                        {/* Use a professional, clean logo here */}
                        <img src="/logo.jpeg" alt="Apex Analytics" style={styles.circularImage} />
                    </div>

                    <div style={styles.contentBox}>
                        <h1 style={styles.rulesTitle}>APEX AD-TECH INSIGHTS</h1>
                        <p style={styles.subText}>PROFESSIONAL DIGITAL STRATEGY COMMUNITY</p>
                        
                        <div style={styles.neutralRules}>
                            <h3 style={styles.ruleHeading}>Member Guidelines:</h3>
                            <ul style={styles.list}>
                                <li style={styles.listItem}>• Weekly analysis of digital marketing trends.</li>
                                <li style={styles.listItem}>• Strategic networking with industry peers.</li>
                                <li style={styles.listItem}>• Sharing of public case studies and data.</li>
                                <li style={styles.listItem}>• Professionalism and mutual respect required.</li>
                            </ul>
                        </div>
                    </div>

                    <button 
                        onClick={handleJoinClick} 
                        style={styles.button}
                        id="member-access-btn"
                    >
                        ACCESS MEMBER COMMUNITY
                    </button>
                    
                    <p style={styles.verifyNote}>Secure access for verified professional members.</p>
                </header>

                <div style={styles.footerBrand}>
                    <p style={styles.footerText}>© 2026 APEX ADWORKS SOLUTIONS</p>
                    <p style={styles.legalLinks}>Privacy Policy • Terms of Service • Cookie Policy</p>
                    <p style={styles.locationText}>Jaipur, Rajasthan, India</p>
                </div>
            </div>
        </div>
    );
}

const styles = {
    wrapper: { minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#f3f4f6', fontFamily: '"Inter", system-ui, sans-serif', padding: '20px 15px' },
    container: { width: '100%', maxWidth: '420px', display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center' },
    header: { textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: '#ffffff', padding: '40px 30px', borderRadius: '24px', boxShadow: '0 10px 30px rgba(0,0,0,0.08)', width: '100%' },
    logoRing: { width: '70px', height: '70px', borderRadius: '18px', padding: '2px', background: '#1e40af', display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '20px' },
    circularImage: { width: '100%', height: '100%', borderRadius: '16px', objectFit: 'cover', backgroundColor: 'white' },
    rulesTitle: { fontSize: '22px', fontWeight: '800', color: '#1e293b', margin: '0 0 5px 0', letterSpacing: '-0.5px' },
    subText: { color: '#64748b', fontSize: '11px', fontWeight: '700', marginBottom: '25px', letterSpacing: '0.8px' },
    neutralRules: { textAlign: 'left', backgroundColor: '#f8fafc', padding: '20px', borderRadius: '16px', width: '100%', marginBottom: '25px', border: '1px solid #e2e8f0' },
    ruleHeading: { fontSize: '14px', fontWeight: '700', color: '#334155', marginBottom: '12px' },
    list: { listStyle: 'none', padding: 0, margin: 0 },
    listItem: { fontSize: '13px', color: '#475569', margin: '8px 0', fontWeight: '500', display: 'flex', alignItems: 'center' },
    button: { width: '100%', padding: '18px', fontSize: '16px', fontWeight: '700', backgroundColor: '#1e40af', color: 'white', borderRadius: '12px', cursor: 'pointer', border: 'none', boxShadow: '0 4px 12px rgba(30, 64, 175, 0.25)', transition: 'all 0.2s' },
    verifyNote: { fontSize: '11px', color: '#94a3b8', marginTop: '15px' },
    footerBrand: { textAlign: 'center', marginTop: '10px' },
    footerText: { fontSize: '10px', color: '#94a3b8', fontWeight: '700', letterSpacing: '0.5px' },
    legalLinks: { fontSize: '10px', color: '#3b82f6', marginTop: '5px', fontWeight: '600' },
    locationText: { fontSize: '9px', color: '#cbd5e1', marginTop: '8px', textTransform: 'uppercase' }
};

export default Page3;