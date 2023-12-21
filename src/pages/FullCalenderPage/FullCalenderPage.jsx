import React, { useState, useEffect } from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid' 

export default function FullCalendarPage() {
    const [calendarEvents, setCalendarEvents] = useState([]);

    // Assuming you have a function to fetch folders
    useEffect(() => {
        fetchFolders().then(folders => {
            const events = folders.map(folder => ({ title: folder.name, date: folder.date }));
            setCalendarEvents(events);
        });
    }, []);

    return (
        <FullCalendar
            plugins={[ dayGridPlugin ]}
            initialView="dayGridMonth"
            events={calendarEvents}
        />
    );
}