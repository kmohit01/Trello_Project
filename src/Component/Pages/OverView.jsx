// import React from 'react';
// import './GoogleCloudOverview.css';
import "./Overview.css"
const Overview = () => {
    return (
        <div>
            <main className="main">
                <section className="intro">
                    <h1>Accelerate your digital transformation</h1>
                    <p>Whether your business is early in its journey or well on its way to digital transformation, Google Cloud can help solve your toughest challenges.</p>
                    <a href="#">Learn more</a>
                </section>
                <section className="benefits">
                    <div className="key-benefits">
                        <h2>KEY BENEFITS</h2>
                        <ul>
                            <li><strong>Why Google Cloud</strong> - Top reasons businesses choose us.</li>
                            <li><strong>AI and ML</strong> - Get enterprise-ready AI.</li>
                            <li><strong>Multicloud</strong> - Run your apps wherever you need them.</li>
                            <li><strong>Global infrastructure</strong> - Build on the same infrastructure as Google.</li>
                            <li><strong>Data Cloud</strong> - Make smarter decisions with unified data.</li>
                            <li><strong>Open cloud</strong> - Scale with open, flexible technology.</li>
                            <li><strong>Security</strong> - Protect your users, data, and apps.</li>
                            <li><strong>Productivity and collaboration</strong> - Connect your teams with AI-powered apps.</li>
                        </ul>
                    </div>
                    <div className="reports-insights">
                        <h2>REPORTS AND INSIGHTS</h2>
                        <ul>
                            <li>Executive insights - Curated C-suite perspectives.</li>
                            <li>Analyst reports - Read what industry analysts say about us.</li>
                            <li>Whitepapers - Browse and download popular whitepapers.</li>
                            <li>Customer stories - Explore case studies and videos.</li>
                        </ul>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Overview;
