import React from 'react';

function Page3() {
    const telegramLink = "https://t.me/+9SbYLiIlhlEwYzc1";

    const handleJoinClick = () => {
        // 1. Manually fire the Subscribe event
        if (window.fbq) {
            window.fbq('track', 'Subscribe', {
                content_name: 'Professional_Community_Access',
                content_category: 'Consulting'
            });
        }

        // 2. 500ms delay to ensure the event hits Meta's servers
        setTimeout(() => {
            window.location.href = telegramLink;
        }, 500);
    };

    return (
        <div style={styles.wrapper}>
            <div style={styles.container}>
                <header style={styles.header}>
                    <div style={styles.logoRing}>
                        {/* A clean, professional business logo */}
                        <img src="/logo.jpeg" alt="Apex Analytics" style={styles.circularImage} />
                    </div>

                    <div style={styles.contentBox}>
                        <h1 style={styles.rulesTitle}>APEX STRATEGY FORUM</h1>
                        <p style={styles.subText}>PROFESSIONAL BUSINESS ANALYTICS & NETWORKING</p>
                        
                        <div style={styles.neutralRules}>
                            <h3 style={styles.ruleHeading}>Community Guidelines:</h3>
                            <ul style={styles.list}>
                                <li style={styles.listItem}>• Access to industry-leading market research.</li>
                                <li style={styles.listItem}>• Collaborative networking with verified professionals.</li>
                                <li style={styles.listItem}>• Daily insights on digital growth and efficiency.</li>
                                <li style={styles.listItem}>• Strictly professional and respectful dialogue.</li>
                            </ul>
                        </div>
                    </div>

                    <button 
                        onClick={handleJoinClick} 
                        style={styles.button}
                        id="secure-access-btn"
                    >
                        REQUEST ACCESS TO GROUP
                    </button>
                    
                    <p style={styles.verifyNote}>Secure connection encrypted for member privacy.</p>
                </header>

                <div style={styles.footerBrand}>
                    <p style={styles.footerText}>© 2026 APEX ADWORKS PVT. LTD.</p>
                    <div style={styles.legalLinks}>
                        <span>Privacy Policy</span> • <span>Terms of Service</span> • <span>Cookie Policy</span>
                    </div>
                    <p style={styles.locationText}>Jagatpura, Jaipur, Rajasthan</p>
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
        alignItems: 'center', 
        backgroundColor: '#f9fafb', 
        fontFamily: '"Inter", "Segoe UI", sans-serif', 
        padding: '20px 15px' 
    },
    container: { 
        width: '100%', 
        maxWidth: '420px', 
        display: 'flex', 
        flexDirection: 'column', 
        gap: '20px', 
        alignItems: 'center' 
    },
    header: { 
        textAlign: 'center', 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        backgroundColor: '#ffffff', 
        padding: '45px 35px', 
        borderRadius: '28px', 
        boxShadow: '0 15px 35px rgba(0,0,0,0.05)', 
        width: '100%',
        border: '1px solid #f1f5f9'
    },
    logoRing: { 
        width: '70px', 
        height: '70px', 
        borderRadius: '20px', 
        padding: '2px', 
        background: '#0f172a', 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        marginBottom: '25px' 
    },
    circularImage: { 
        width: '100%', 
        height: '100%', 
        borderRadius: '18px', 
        objectFit: 'cover', 
        backgroundColor: 'white' 
    },
    rulesTitle: { 
        fontSize: '24px', 
        fontWeight: '800', 
        color: '#0f172a', 
        margin: '0 0 8px 0', 
        letterSpacing: '-0.025em' 
    },
    subText: { 
        color: '#64748b', 
        fontSize: '11px', 
        fontWeight: '700', 
        marginBottom: '30px', 
        letterSpacing: '0.05em',
        textTransform: 'uppercase'
    },
    neutralRules: { 
        textAlign: 'left', 
        backgroundColor: '#f8fafc', 
        padding: '24px', 
        borderRadius: '20px', 
        width: '100%', 
        marginBottom: '30px', 
        border: '1px solid #edf2f7' 
    },
    ruleHeading: { 
        fontSize: '15px', 
        fontWeight: '700', 
        color: '#334155', 
        marginBottom: '12px' 
    },
    list: { 
        listStyle: 'none', 
        padding: 0, 
        margin: 0 
    },
    listItem: { 
        fontSize: '13.5px', 
        color: '#475569', 
        margin: '10px 0', 
        fontWeight: '500', 
        lineHeight: '1.5' 
    },
    button: { 
        width: '100%', 
        padding: '18px', 
        fontSize: '16px', 
        fontWeight: '700', 
        backgroundColor: '#0f172a', 
        color: 'white', 
        borderRadius: '14px', 
        cursor: 'pointer', 
        border: 'none', 
        boxShadow: '0 10px 15px -3px rgba(15, 23, 42, 0.2)' 
    },
    verifyNote: { 
        fontSize: '11px', 
        color: '#94a3b8', 
        marginTop: '18px' 
    },
    footerBrand: { 
        textAlign: 'center', 
        marginTop: '10px' 
    },
    footerText: { 
        fontSize: '11px', 
        color: '#64748b', 
        fontWeight: '800', 
        letterSpacing: '0.05em' 
    },
    legalLinks: { 
        fontSize: '10px', 
        color: '#94a3b8', 
        marginTop: '8px', 
        fontWeight: '600' 
    },
    locationText: { 
        fontSize: '9px', 
        color: '#cbd5e1', 
        marginTop: '8px', 
        textTransform: 'uppercase' 
    }
};

export default Page3;