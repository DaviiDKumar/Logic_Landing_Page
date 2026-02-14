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
        if (e) {
            e.preventDefault();
            e.stopPropagation(); 
        }
        setShowConfirm(true);
    };

    const handleFinalJoin = (e) => {
        if (ReactPixel) {
            ReactPixel.track('Lead', {
                content_name: 'Verified_Join_Conversion',
                content_category: 'Hack Prediction'
            });
        }
        setTimeout(() => {
            window.location.href = telegramLink;
        }, 400);
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

                    {!showConfirm ? (
                        /* FIX: Added data-facebook-pixel-ignore and broken up text to stop auto-detection */
                        <div 
                            onClick={handleInitialClick} 
                            style={styles.button}
                            data-facebook-pixel-ignore="true" 
                        >
                           <span>Enter</span>&nbsp;<span>Telegram</span>&nbsp;<span>Now</span>
                        </div>
                    ) : (
                        <div style={styles.confirmBox}>
                            <p style={styles.confirmText}>⚠️ Group Link Expires In:</p>
                            <div style={styles.timer}>00:{timeLeft < 10 ? `0${timeLeft}` : timeLeft}</div>
                            <p style={styles.verifyNote}>Verify your session to enter the group</p>
                            
                            <button 
                                onClick={handleFinalJoin} 
                                style={styles.confirmButton}
                                id="official-join-button"
                            >
                                ✅ ACCESS TELEGRAM HACK
                            </button>
                        </div>
                    )}
                </header>

                <img src="/One.jpeg" alt="Game Promo" style={styles.promoImage} />
                <p style={styles.footerText}>Managed by APEX ADS</p>
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
    circularImage: {
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        objectFit: 'cover',
        backgroundColor: 'white',
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
        borderRadius: '14px',
        cursor: 'pointer',
        marginTop: '20px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        userSelect: 'none',
        border: 'none',
    },
    confirmBox: {
        marginTop: '20px',
        padding: '20px',
        backgroundColor: '#fff1f2',
        borderRadius: '16px',
        border: '2px solid #fda4af',
        width: '100%',
    },
    timer: {
        fontSize: '32px',
        fontWeight: '900',
        color: '#dc2626', 
        margin: '10px 0'
    },
    confirmText: {
        color: '#9f1239',
        fontWeight: 'bold',
        fontSize: '14px',
    },
    verifyNote: {
        fontSize: '12px',
        color: '#475569',
        marginBottom: '15px'
    },
    confirmButton: {
        width: '100%',
        padding: '16px',
        fontSize: '16px',
        fontWeight: 'bold',
        backgroundColor: '#059669',
        color: 'white',
        border: 'none',
        borderRadius: '12px',
        cursor: 'pointer',
    },
    promoImage: {
        width: '100%',
        height: 'auto',
        borderRadius: '20px',
    },
    footerText: {
        fontSize: '12px',
        color: '#94a3b8',
        fontWeight: 'bold',
        textTransform: 'uppercase',
    }
};

export default Page3;