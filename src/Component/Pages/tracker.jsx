// import React from 'react';
import './tracker.css'; 
import image from "../../assets/WhatsApp Image 2024-07-19 at 12.33.36 AM.jpeg"
import image1 from "../../assets/WhatsApp Image 2024-07-19 at 12.40.07 AM.jpeg"

const SprintBoard = () => {
  return (
    <div className="sprint-plans-container">
      
      <div className="contents">
        <div className="column backlog">
          <div className="column-header">Backlog</div>
          <div className="card">
            <img src={image} alt="Backlog Image"/>
          </div>
          <div className="card">
            <div className="card-header">
              <input type="checkbox" checked/>
              <div className="card-title">Performance improvements</div>
            </div>
            <div className="card-footer">
              <div className="card-tag">Engineering</div>
              <div className="card-actions">
                <div className="card-action">3</div>
                <div className="card-action">2</div>
                <div className="card-action">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.707L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header">
              <input type="checkbox" checked/>
              <div className="card-title">Implement new designs</div>
            </div>
            <div className="card-footer">
              <div className="card-tag">Engineering</div>
              <div className="card-actions">
                <div className="card-action">1</div>
                <div className="card-action">5</div>
                <div className="card-action">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-down" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="column ready">
          <div className="column-header">Ready</div>
          <div className="card">
            <div className="card-header">
              <input type="checkbox" checked/>
              <div className="card-title">Design navigation changes</div>
            </div>
            <div className="card-footer">
              <div className="card-tag">Design</div>
              <div className="card-actions">
                <div className="card-action">Jan 10</div>
                <div className="card-action">4</div>
                <div className="card-action">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chat-dots" viewBox="0 0 16 16">
                    <path d="M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
                    <path d="M2.165 15.803a.5.5 0 0 0 .83-.546L5.103 11.337a.5.5 0 0 0-.753-.668l-2.414-2.415a.5.5 0 0 0-.707-.708l2.415-2.414a.5.5 0 0 0 .708-.708L3.03 3.33a.5.5 0 0 0-.546-.83l-4.248-.454a.5.5 0 0 0-.546.83l.455 4.248a.5.5 0 0 0 .83.546L6.96 9.668a.5.5 0 0 0 .668.753l2.415 2.415a.5.5 0 0 0 .708.708l-2.414 2.415a.5.5 0 0 0 .708.708l.454 4.248zm11.284-1.324a1.5 1.5 0 0 0 0-3 1.5 1.5 0 0 0-3 0 1.5 1.5 0 0 0 0 3 1.5 1.5 0 0 0 3 0z"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header">
              <input type="checkbox" checked/>
              <div className="card-title">Design prototype</div>
            </div>
            <div className="card-footer">
              <div className="card-tag">Design</div>
              <div className="card-actions">
                <div className="card-action">Jan 16</div>
                <div className="card-action">1</div>
                <div className="card-action">2</div>
                <div className="card-action">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.707L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header">
              <input type="checkbox" checked/>
              <div className="card-title">Design review</div>
            </div>
            <div className="card-footer">
              <div className="card-tag">Testing plan</div>
            </div>
          </div>
          <div className="card">
            <div className="card-footer">
              <div className="card-action">Add subtask</div>
            </div>
          </div>
          <div className="card">
            <div className="card-header">
              <input type="checkbox" checked/>
              <div className="card-title">Website redesign</div>
            </div>
            <div className="card-footer">
              <div className="card-tag">Design</div>
              <div className="card-actions">
                <div className="card-action">Dec 3</div>
                <div className="card-action">3</div>
                <div className="card-action">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-hand-thumbs-up" viewBox="0 0 16 16">
                    <path d="M8.864 1.5c.325-.334.754-.69 1.243-.977H10.5a.5.5 0 0 1 .5.5v12.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-12.5a.5.5 0 0 1 .5-.5h1.25c.489.286 1.01.745 1.242.977h-.971v.328c.589.025 1.178.21 1.501.455l.082.072a.5.5 0 0 1 .548.717l.002.003c.301.396.548.827.687 1.343l.026.026a.5.5 0 0 1 .063.544v.324c.03.26.164.436.37.507.206.07.412.076.617.076h.063c.205 0 .412-.006.617-.076.206-.07.339-.247.37-.507v-.324c.063-.516.385-.947.687-1.343l.003-.002a.5.5 0 0 1 .548-.717l.082-.072c.323-.245.912-.43.15.455v-.328H13.5a.5.5 0 0 1 .5-.5v-12.5a.5.5 0 0 1-.5-.5h-2.333c-.488-.286-1.01-.745-1.242-.977h.971V1.5zM6.5 13.75a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0z"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="column in-progress">
          <div className="column-header">In Progress</div>
          <div className="card">
            <div className="card-header">
              <input type="checkbox" checked/>
              <div className="card-title">Build social sharing functionality</div>
            </div>
            <div className="card-footer">
              <div className="card-tag">Engineering</div>
              <div className="card-actions">
                <div className="card-action">Friday</div>
                <div className="card-action">4</div>
                <div className="card-action">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chat-dots" viewBox="0 0 16 16">
                    <path d="M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
                    <path d="M2.165 15.803a.5.5 0 0 0 .83-.546L5.103 11.337a.5.5 0 0 0-.753-.668l-2.414-2.415a.5.5 0 0 0-.707-.708l2.415-2.414a.5.5 0 0 0 .708-.708L3.03 3.33a.5.5 0 0 0-.546-.83l-4.248-.454a.5.5 0 0 0-.546.83l.455 4.248a.5.5 0 0 0 .83.546L6.96 9.668a.5.5 0 0 0 .668.753l2.415 2.415a.5.5 0 0 0 .708.708l-2.414 2.415a.5.5 0 0 0 .708.708l.454 4.248zm11.284-1.324a1.5 1.5 0 0 0 0-3 1.5 1.5 0 0 0-3 0 1.5 1.5 0 0 0 0 3 1.5 1.5 0 0 0 3 0z"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <img src={image1} alt="In Progress Image"/>
          </div>
          <div className="card">
            <div className="card-header">
              <input type="checkbox" checked/>
              <div className="card-title">Redesign overview</div>
            </div>
            <div className="card-footer">
              <div className="card-tag">Design</div>
              <div className="card-actions">
                <div className="card-action">Nov 15</div>
                <div className="card-action">5</div>
                <div className="card-action">1</div>
                <div className="card-action">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chat-dots" viewBox="0 0 16 16">
                    <path d="M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
                    <path d="M2.165 15.803a.5.5 0 0 0 .83-.546L5.103 11.337a.5.5 0 0 0-.753-.668l-2.414-2.415a.5.5 0 0 0-.707-.708l2.415-2.414a.5.5 0 0 0 .708-.708L3.03 3.33a.5.5 0 0 0-.546-.83l-4.248-.454a.5.5 0 0 0-.546.83l.455 4.248a.5.5 0 0 0 .83.546L6.96 9.668a.5.5 0 0 0 .668.753l2.415 2.415a.5.5 0 0 0 .708.708l-2.414 2.415a.5.5 0 0 0 .708.708l.454 4.248zm11.284-1.324a1.5 1.5 0 0 0 0-3 1.5 1.5 0 0 0-3 0 1.5 1.5 0 0 0 0 3 1.5 1.5 0 0 0 3 0z"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="column done">
          <div className="column-header">Done</div>
          <div className="card">
            <div className="card-header">
              <input type="checkbox" checked/>
              <div className="card-title">Usability testing</div>
            </div>
            <div className="card-footer">
              <div className="card-tag">Research</div>
              <div className="card-actions">
                <div className="card-action">Sep 30</div>
                <div className="card-action">4</div>
                <div className="card-action">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chat-dots" viewBox="0 0 16 16">
                    <path d="M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
                    <path d="M2.165 15.803a.5.5 0 0 0 .83-.546L5.103 11.337a.5.5 0 0 0-.753-.668l-2.414-2.415a.5.5 0 0 0-.707-.708l2.415-2.414a.5.5 0 0 0 .708-.708L3.03 3.33a.5.5 0 0 0-.546-.83l-4.248-.454a.5.5 0 0 0-.546.83l.455 4.248a.5.5 0 0 0 .83.546L6.96 9.668a.5.5 0 0 0 .668.753l2.415 2.415a.5.5 0 0 0 .708.708l-2.414 2.415a.5.5 0 0 0 .708.708l.454 4.248zm11.284-1.324a1.5 1.5 0 0 0 0-3 1.5 1.5 0 0 0-3 0 1.5 1.5 0 0 0 0 3 1.5 1.5 0 0 0 3 0z"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header">
              <input type="checkbox" checked/>
              <div className="card-title">Introduce new navigation</div>
            </div>
            <div className="card-footer">
              <div className="card-tag">Data Science</div>
              <div className="card-actions">
                <div className="card-action">Sep 23</div>
                <div className="card-action">2</div>
                <div className="card-action">5</div>
                <div className="card-action">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.707L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SprintBoard;