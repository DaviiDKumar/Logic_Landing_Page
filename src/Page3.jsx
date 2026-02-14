import React, { useState, useEffect } from 'react';
import ReactPixel from 'react-facebook-pixel';

function Page3() {
    const [showConfirm, setShowConfirm] = useState(false);
    const [timeLeft, setTimeLeft] = useState(60); 
    const telegramLink = "https://t.me/+9SbYLiIlhlEwYzc1";

    useEffect(() => {
        if (showConfirm && timeLeft > 0) {
            const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
            return () => clearTimeout(timer);
        }
    }, [showConfirm, timeLeft]);

    const handleInitialClick = (e) => {
        if (e) e.stopPropagation(); 
        setShowConfirm(true);
    };

    const handleFinalJoin = (e) => {
        // We let the event propagate here so Meta's auto-tracker can see the click
        if (ReactPixel) {
            ReactPixel.track('Lead', {
                content_name: 'Official_Join_Click'
            });
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
                        <div style={styles.dummyCircle}>CP</div>
                    </div>

                    <div style={styles.contentBox}>
                        <h1 style={styles.rulesTitle}>COMMUNITY PORTAL</h1>
                        <p style={styles.subText}>REAL-TIME UPDATES & EXCLUSIVE INSIGHTS</p>
                        <p style={styles.hindiText}>
                            Direct Access <span style={{ color: '#22c55e' }}>Is Now Active</span>
                        </p>
                    </div>

                    {!showConfirm ? (
                        /* First button is a 'div' - Meta ignores this */
                        <div 
                            onClick={handleInitialClick} 
                            style={styles.button}
                        >
                            <span>Proceed to Group</span>
                        </div>
                    ) : (
                        <div style={styles.confirmBox}>
                            <p style={styles.confirmText}>⚠️ Session Expiring Soon:</p>
                            <div style={styles.timer}>00:{timeLeft < 10 ? `0${timeLeft}` : timeLeft}</div>
                            <p style={styles.verifyNote}>Please verify your session to enter the group</p>
                            
                            {/* SECOND BUTTON: Actual <button> tag for Meta Auto-Detection */}
                            <button 
                                onClick={handleFinalJoin} 
                                style={styles.confirmButton}
                                id="official-join-button"
                            >
                                ✅ OPEN OFFICIAL LINK
                            </button>
                        </div>
                    )}
                </header>

                <div style={styles.promoPlaceholder}>
                    COMMUNITY INSIGHTS PREVIEW
                </div>
                
                <p style={styles.footerText}>Secure Access Gateway</p>
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
        alignItems: 'center'
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
        width: '100%'
    },
    logoRing: {
        width: '80px',
        height: '80px',
        borderRadius: '50%',
        padding: '4px',
        background: 'linear-gradient(45deg, #0088cc, #00ffcc)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '15px',
    },
    dummyCircle: {
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        backgroundColor: '#cbd5e1',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        fontWeight: 'bold',
        fontSize: '24px'
    },
    rulesTitle: {
        fontSize: '22px',
        fontWeight: '800',
        color: '#1e293b',
        margin: '0 0 8px 0',
    },
    subText: {
        color: '#64748b',
        fontSize: '12px',
        fontWeight: 'bold',
        marginBottom: '5px'
    },
    hindiText: {
        color: '#1e293b',
        fontSize: '16px',
        fontWeight: '700',
    },
    button: {
        width: '100%',
        padding: '16px',
        fontSize: '18px',
        fontWeight: 'bold',
        backgroundColor: '#0088cc',
        color: 'white',
        borderRadius: '12px',
        cursor: 'pointer',
        marginTop: '20px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        userSelect: 'none',
        border: 'none'
    },
    confirmBox: {
        marginTop: '20px',
        padding: '20px',
        backgroundColor: '#f8fafc',
        borderRadius: '16px',
        border: '1px solid #e2e8f0',
        width: '100%',
        textAlign: 'center'
    },
    timer: {
        fontSize: '32px',
        fontWeight: '900',
        color: '#0088cc', 
        margin: '10px 0'
    },
    confirmText: {
        color: '#475569',
        fontWeight: 'bold',
        fontSize: '14px',
    },
    verifyNote: {
        fontSize: '12px',
        color: '#64748b',
        marginBottom: '15px'
    },
    confirmButton: {
        width: '100%',
        padding: '16px',
        fontSize: '16px',
        fontWeight: 'bold',
        backgroundColor: '#0f172a',
        color: 'white',
        borderRadius: '12px',
        cursor: 'pointer',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        userSelect: 'none',
        border: 'none',
        outline: 'none'
    },
    promoPlaceholder: {
        width: '100%',
        height: '200px',
        backgroundColor: '#e2e8f0',
        borderRadius: '20px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#94a3b8',
        fontWeight: 'bold',
        border: '2px dashed #cbd5e1'
    },
    footerText: {
        fontSize: '11px',
        color: '#94a3b8',
        fontWeight: 'bold',
        textTransform: 'uppercase'
    }
};

export default Page3;