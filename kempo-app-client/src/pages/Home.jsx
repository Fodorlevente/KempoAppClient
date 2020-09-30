import React from 'react';
import SignupForm from '../components/forms/SignupForm';

function Home(props) {

    return (
        <div>
            <section
                id="main"
                style={{
                    margin: '0 120px',
                    marginTop: '200px',
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    overflow: 'hidden',
                    float: 'left',
                    width: '50%',
                }}
            >
                <div
                    className="main-text"
                    style={{
                        fontSize: '45px',
                        fontWeight: 700,
                        lineHeight: 1.5
                    }}
                >
                    <span
                        style={{ borderBottom: '2px solid #3ff1aa', }}
                    >Competitry
          </span> <br />
          The official <span
                        style={{ color: '#3ff1aa', }}
                    >
                        United World Sports Kempo Federation
          </span> competition system
                </div>
        </section>
        
        <div style={{
                    margin: '20px 120px',
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                  
                    float: 'left',
                    width: '50%',
                }}>
            <SignupForm />
        </div>
           
        </div>
    );
}

export default Home;