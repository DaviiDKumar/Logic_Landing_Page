import React from 'react';

function App() {
  const telegramLink = "https://t.me/+9SbYLiIlhlEwYzc1";

  const handleJoinClick = (e) => {
    e.preventDefault();
    if (window.fbq) {
      window.fbq('track', 'Lead');
    }
    setTimeout(() => {
      window.open(telegramLink, '_blank');
    }, 300);
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.container}>
        <header style={styles.header}>
          <img src="idle1.jpg" alt="Game Logo Top" style={styles.image} />
          
          <h1 style={styles.title}>
            🎮 Color Prediction Game – Basic Info
          </h1>
          
          <div style={styles.contentBox}>
            <p style={styles.description}>
              Predict the correct color before the timer ends and win rewards. 
              Fast rounds, simple rules, instant results.
            </p>
            
            <div style={styles.rulesList}>
              <h3 style={styles.rulesTitle}>📌 Basic Rules</h3>
              <ul style={styles.ul}>
                <li>🕒 Each round has a fixed timer</li>
                <li>🎨 Choose one color before time runs out</li>
                <li>🔴🟢🟣 Colors: Red, Green, Violet</li>
                <li>💰 Place your amount before predicting</li>
                <li>✅ Result declared after countdown</li>
                <li>🏆 Correct prediction = Win</li>
              </ul>
            </div>
          </div>

          <button onClick={handleJoinClick} style={styles.button}>
            Join Telegram Now
          </button>
        </header>

        <img src="idle2.jpg" alt="Game Promo Bottom" style={styles.image} />
      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    minHeight: '100vh', // Changed to minHeight for long content
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: '#0f172a',
    color: 'white',
    fontFamily: 'Arial, sans-serif',
    padding: '20px 10px',
  },
  container: {
    width: '100%',
    maxWidth: '500px', // Keeps it mobile-sized even on desktop
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  header: {
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 'auto',
    borderRadius: '12px',
    marginBottom: '15px',
    boxShadow: '0 4px 15px rgba(0,0,0,0.5)',
  },
  title: {
    fontSize: '24px',
    margin: '10px 0',
    lineHeight: '1.2',
  },
  contentBox: {
    textAlign: 'left', // Better readability for rules
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    padding: '15px',
    borderRadius: '10px',
    width: '100%',
  },
  description: {
    fontSize: '16px',
    lineHeight: '1.5',
    color: '#cbd5e1',
    marginBottom: '15px',
  },
  rulesTitle: {
    fontSize: '18px',
    marginBottom: '10px',
    color: '#0088cc',
  },
  ul: {
    listStyleType: 'none',
    padding: 0,
    margin: 0,
    fontSize: '15px',
    lineHeight: '2', // Adds breathing room between rules
  },
  button: {
    width: '100%', // Full width button is easier to tap on mobile
    maxWidth: '300px',
    padding: '16px 24px',
    fontSize: '18px',
    fontWeight: 'bold',
    backgroundColor: '#0088cc',
    color: 'white',
    border: 'none',
    borderRadius: '50px',
    cursor: 'pointer',
    marginTop: '25px',
    boxShadow: '0 4px 15px rgba(0, 136, 204, 0.4)',
    transition: 'transform 0.2s',
  }
};

export default App;