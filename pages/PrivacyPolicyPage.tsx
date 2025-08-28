// pages/privacypolicy.tsx
// Or wherever you host your static pages

import React from 'react';

const PrivacyPolicyPage = () => {
  return (
    <div style={{ fontFamily: 'sans-serif', lineHeight: '1.6', color: '#333' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
        <h1 style={{ fontSize: '2.5em', borderBottom: '1px solid #eee', paddingBottom: '10px' }}>
          Privacy Policy for TapnPlay.online
        </h1>
        <p><strong>Last updated:</strong> August 27, 2025</p>

        <p>
          Welcome to TapnPlay.online (hereinafter, "we", "us", "our"). Your privacy is important to us.
          This Privacy Policy explains what information we collect and why, and how we use and protect it.
        </p>

        <h2 style={{ fontSize: '1.8em', marginTop: '30px' }}>1. Information We Collect</h2>
        <p>
          We believe in simplicity and minimizing data collection. That's why our portal is designed for you
          to play without needing to create an account.
        </p>
        <p><strong>What we DO NOT collect directly:</strong></p>
        <ul>
          <li>Usernames</li>
          <li>Email addresses</li>
          <li>Passwords</li>
          <li>Dates of birth</li>
          <li>User profile information</li>
          <li>Communication data (chats, forums)</li>
          <li>Transaction or payment information</li>
        </ul>

        <p><strong>Information we collect automatically:</strong></p>
        <ul>
          <li><strong>Game Score:</strong> We save your scores to track your progress and for leaderboards.</li>
          <li>
            <strong>Technical Information:</strong> Like most websites, we collect technical information
            that your browser automatically sends. This includes your IP address, browser type, operating
            system, and device type.
          </li>
        </ul>

        <h2 style={{ fontSize: '1.8em', marginTop: '30px' }}>2. How We Use Your Information</h2>
        <p>We use the information we collect for the following purposes:</p>
        <ul>
          <li><strong>For Game Functionality:</strong> To save your score and ensure the games work correctly.</li>
          <li><strong>For Analysis and Service Improvement:</strong> We use technical information to understand how visitors use our site, which games are most popular, and how we can improve the overall experience.</li>
          <li><strong>To Display Advertising:</strong> We work with advertising partners to show ads on our site. Technical information and cookies (see section 3) help display ads that may be more relevant to you.</li>
        </ul>

        <h2 style={{ fontSize: '1.8em', marginTop: '30px' }}>3. Cookies and Similar Technologies</h2>
        <p>
          Yes, we use cookies. Cookies are small text files stored in your browser that help the site
          function and help us understand how it is used. We use the following types of cookies:
        </p>
        <ul>
          <li><strong>Performance and Analytics Cookies:</strong> These help us collect statistical data about site usage (e.g., Google Analytics) so we can improve it.</li>
          <li><strong>Advertising Cookies:</strong> These are used by our advertising partners (e.g., Google AdSense) to show you relevant ads.</li>
        </ul>
        <p>
          <strong>How to manage cookies?</strong> Most web browsers allow you to manage your cookie preferences
          through your browser settings. You can set your browser to reject cookies or to alert you
          before accepting them. Check the 'Help' or 'Settings' section of your browser for more information.
        </p>

        <h2 style={{ fontSize: '1.8em', marginTop: '30px' }}>4. Who We Share Your Information With</h2>
        <p>
          We do not sell your information. However, we do share technical and usage data with the following types of partners:
        </p>
        <ul>
          <li><strong>Analytics Providers:</strong> Such as Google Analytics, to analyze website traffic.</li>
          <li><strong>Advertising Partners:</strong> Such as Google AdSense, to display ads on our portal.</li>
        </ul>
        <p>
          These third parties have their own privacy policies regarding how they use this information.
        </p>

        <h2 style={{ fontSize: '1.8em', marginTop: '30px' }}>5. Data Security</h2>
        <p>
          We take security seriously. We use SSL encryption and industry-standard security measures
          to protect data during transmission.
        </p>

        <h2 style={{ fontSize: '1.8em', marginTop: '30px' }}>6. Your Rights</h2>
        <p>
          Since we do not collect personally identifiable information, such as your email, your options
          for managing your data are primarily through controlling cookies in your browser.
          If you have any questions or concerns about your privacy, please do not hesitate to contact us.
        </p>

        <h2 style={{ fontSize: '1.8em', marginTop: '30px' }}>7. Children's Privacy</h2>
        <p>
          Our gaming portal may be used by children. <strong>We do not knowingly collect personally
          identifiable information from children under the age of 13.</strong>
          All the information we collect (scores and technical data) is anonymous. If you are a parent or guardian
          and you believe that your child has provided us with personal information, please contact us immediately at
          our support email so we can take the necessary steps.
        </p>
        
        <h2 style={{ fontSize: '1.8em', marginTop: '30px' }}>8. Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact us at:
          <br />
          <strong>contacttapnplay.online</strong>
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;

