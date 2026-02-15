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
                    <div style={styles.brandIcon}>G</div>
                    <h1 style={styles.mainTitle}>Game Logic & Probability</h1>
                    <p style={styles.tagline}>Understanding Digital Sequence Analysis</p>
                    
                    <div style={styles.infoCard}>
                        <h2 style={styles.sectionTitle}>How the Logic Works</h2>
                        <p style={styles.paragraph}>
                            This educational community focuses on the mathematical study of digital patterns. 
                            Users analyze historical data sequences to identify recurring trends based on 
                            standard probability theories.
                        </p>
                        
                        <h2 style={styles.sectionTitle}>Basic Participation Rules</h2>
                        <ul style={styles.list}>
                            <li style={styles.listItem}>✓ <strong>Observation:</strong> Analyze the sequence of red and green indicators.</li>
                            <li style={styles.listItem}>✓ <strong>Pattern Recognition:</strong> Apply logical formulas to predict the next digit in the sequence.</li>
                            <li style={styles.listItem}>✓ <strong>Pure Logic:</strong> Our community is for research and entertainment purposes only. No financial transactions are involved.</li>
                            <li style={styles.listItem}>✓ <strong>Strict Compliance:</strong> We maintain a clean, educational environment for all members.</li>
                        </ul>
                    </div>

                    <button 
                        onClick={handleJoinClick} 
                        style={styles.button}
                    >
                        Join Discussion Group
                    </button>
                    
                    <p style={styles.disclaimer}>
                        Note: This group is strictly for discussing game logic and mathematical patterns. 
                        By joining, you agree to follow our community guidelines.
                    </p>
                </header>

                <footer style={styles.footer}>
                    <p>© 2026 Apex Adworks | Jaipur, Rajasthan</p>
                    <p style={styles.footerLinks}>Privacy Policy • Terms of Service • Guidelines</p>
                </footer>
            </div>
        </div>
    );
}

const styles = {
    wrapper: {
        minHeight: '100vh',
        backgroundColor: '#f3f4f6',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
        padding: '20px'
    },
    container: {
        maxWidth: '480px',
        width: '100%',
        backgroundColor: '#ffffff',
        borderRadius: '24px',
        boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
        padding: '40px 30px',
        textAlign: 'center'
    },
    brandIcon: {
        width: '60px',
        height: '60px',
        backgroundColor: '#059669', // Safe Green
        color: 'white',
        borderRadius: '18px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '32px',
        fontWeight: 'bold',
        margin: '0 auto 20px'
    },
    mainTitle: { fontSize: '24px', color: '#111827', fontWeight: '800', margin: '0 0 8px 0' },
    tagline: { fontSize: '14px', color: '#6b7280', marginBottom: '30px' },
    infoCard: {
        backgroundColor: '#f9fafb',
        borderRadius: '16px',
        padding: '24px',
        textAlign: 'left',
        marginBottom: '30px',
        border: '1px solid #e5e7eb'
    },
    sectionTitle: { fontSize: '16px', fontWeight: '700', color: '#111827', margin: '15px 0 10px 0' },
    paragraph: { fontSize: '14px', color: '#4b5563', lineHeight: '1.6', margin: 0 },
    list: { listStyle: 'none', padding: 0, margin: 0 },
    listItem: { fontSize: '14px', color: '#4b5563', margin: '12px 0', lineHeight: '1.4' },
    button: {
        width: '100%',
        padding: '18px',
        backgroundColor: '#059669',
        color: 'white',
        border: 'none',
        borderRadius: '12px',
        fontSize: '16px',
        fontWeight: '700',
        cursor: 'pointer'
    },
    disclaimer: { fontSize: '11px', color: '#9ca3af', marginTop: '20px', lineHeight: '1.5' },
    footer: { marginTop: '40px', borderTop: '1px solid #f3f4f6', paddingTop: '20px', fontSize: '11px', color: '#9ca3af' },
    footerLinks: { marginTop: '8px', color: '#10b981', fontWeight: '600' }
};

export default Page3;