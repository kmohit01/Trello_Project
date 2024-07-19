import { useState } from 'react';
import './Timeline.css';

function Timeline() {
  const [week, setWeek] = useState('Jul 14 - Jul 20');
  const [entries, setEntries] = useState([]);

  const days = ['Sun, Jul 14', 'Mon, Jul 15', 'Tue, Jul 16', 'Wed, Jul 17', 'Thu, Jul 18', 'Fri, Jul 19'];

  const addRow = () => {
    setEntries([...entries, { task: '', times: Array(6).fill(0) }]);
  };

  return (
    <div className="timesheet-app">
      <header>
        <h1>Timesheets</h1>
        <nav>
          <button className="active">My timesheet</button>
          <button>All timesheets</button>
        </nav>
      </header>
      
      <main>
        <div className="week-selector">
          <button>&lt;</button>
          <span>{week}</span>
          <button>&gt;</button>
        </div>
        
        <div className="timesheet-container">
          <table>
            <thead>
              <tr>
                <th>Task / Location</th>
                {days.map(day => <th key={day}>{day}</th>)}
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {entries.length === 0 ? (
                <tr>
                  <td colSpan="8" className="no-entries">
                    <div>
                      <span className="clock-icon">⏱️</span>
                      <p>You have not tracked any time this week!</p>
                      <button onClick={addRow}>Add a new entry to get started.</button>
                    </div>
                  </td>
                </tr>
              ) : (
                entries.map((entry, index) => (
                  <tr key={index}>
                    <td><input type="text" value={entry.task} onChange={(e)=>setEntries(e.target.value)} /></td>
                    {entry.times.map((time, i) => (
                      <td key={i}><input type="number" value={time} onChange={e =>setWeek(e.target.value)} /></td>
                    ))}
                    <td>{entry.times.reduce((a, b) => a + b, 0)}h</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
        
        <button className="add-row" onClick={addRow}>+ Add row</button>
      </main>
    </div>
  );
}

export default Timeline;