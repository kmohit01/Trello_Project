import React, { useState } from 'react';
import './Calendra.css'; // Import your CSS file

const Calendar = () => {
    const [selectedDate, setSelectedDate] = useState(12); // Default selected date
    const [selectedMonth, setSelectedMonth] = useState(9); // Default selected month
    const [notes, setNotes] = useState([
        { id: 1, text: 'Headbutt a lion' }
    ]);
    const [newNote, setNewNote] = useState('');

    const handleAddNote = () => {
        if (newNote.trim()) {
            setNotes([...notes, { id: Date.now(), text: newNote }]);
            setNewNote('');
        }
    };

    const handleRemoveNote = (id) => {
        setNotes(notes.filter(note => note.id !== id));
    };

    const renderDays = () => {
        let days = [];
        for (let i = 1; i <= 31; i++) {
            let className = '';
            if (i === selectedDate) className = 'selected';
            if ([8, 10, 27].includes(i)) className = 'event';
            days.push(
                <li key={i}>
                    <a href="#" title={i} data-value={i} className={className}>{i}</a>
                </li>
            );
        }
        return days;
    };

    return (
        <div className="calendar">
            <div className="col leftCol">
                <div className="content">
                    <h1 className="date">Friday<span>September 12th</span></h1>
                    <div className="notes">
                        <p>
                            <input
                                type="text"
                                value={newNote}
                                onChange={(e) => setNewNote(e.target.value)}
                                placeholder="new note"
                            />
                            <a href="#" title="Add note" className="addNote animate" onClick={handleAddNote}>+</a>
                        </p>
                        <ul className="noteList">
                            {notes.map(note => (
                                <li key={note.id}>
                                    {note.text}
                                    <a href="#" title="Remove note" className="removeNote animate" onClick={() => handleRemoveNote(note.id)}>x</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            <div className="col rightCol">
                <div className="content">
                    {/* <h2 className="year">2013</h2> */}
                    <ul className="months">
                        {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map((month, index) => (
                            <li key={index}>
                                <a
                                    href="#"
                                    title={month}
                                    data-value={index + 1}
                                    className={index + 1 === selectedMonth ? 'selected' : ''}
                                    onClick={() => setSelectedMonth(index + 1)}
                                >
                                    {month}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <div className="clearfix"></div>
                    <ul className="weekday">
                        {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, index) => (
                            <li key={index}>
                                <a href="#" title={day} data-value={index + 1}>{day}</a>
                            </li>
                        ))}
                    </ul>
                    <div className="clearfix"></div>
                    <ul className="days">
                        {renderDays()}
                    </ul>
                    <div className="clearfix"></div>
                </div>
            </div>

            <div className="clearfix"></div>
        </div>
    );
}

export default Calendar;
