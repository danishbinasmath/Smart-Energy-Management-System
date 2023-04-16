import React from 'react';
import './design.css';

function Home() {
    return (
        <>
            <nav className="navbar">
                <div className="container">
                    <div className="navbar-brand">
                        <a href="#">Smart Energy Management System</a>
                    </div>
                    <ul className="navbar-nav">
                        <li className="nav-item"><a href="#">Home</a></li>
                        <li className="nav-item"><a href="#">About</a></li>
                        <li className="nav-item"><a href="#">Services</a></li>
                        <li className="nav-item"><a href="#">Contact</a></li>
                    </ul>
                </div>
            </nav>

            <section className="hero">
                <div className="container">
                    <h1>Welcome to Smart Energy Management System</h1>
                    <p>Our platform helps you optimize energy consumption in your homes and buildings.</p>
                    <a href="#" className="btn btn-primary">Get Started</a>
                </div>
            </section>

            <section className="features">
                <div className="container">
                    <h2>Our Features</h2>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="feature">
                                <i className="fas fa-home"></i>
                                <h3>Smart Home Integration</h3>
                                <p>Connect your smart home devices to our platform and start optimizing your energy consumption.</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="feature">
                                <i className="fas fa-lightbulb"></i>
                                <h3>Energy Usage Analysis</h3>
                                <p>Our AI/ML algorithms analyze your energy usage patterns and provide recommendations for energy savings.</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="feature">
                                <i className="fas fa-cog"></i>
                                <h3>Customized Settings</h3>
                                <p>Set your own energy-saving goals and preferences to get personalized recommendations.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <footer className="footer">
                <div className="container">
                    <p>&copy; 2023 Smart Energy Management System</p>
                </div>
            </footer>
        </>
    );
}

export default Home;
