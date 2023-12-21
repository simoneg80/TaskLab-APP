import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid'; 
import { useState, useEffect } from 'react';

export default function FullCalendarPage({folders}) {
    const [calendarEvents, setCalendarEvent] = useState([]);

    useEffect(() => {
        const foldersEvents = [];
            folders.forEach((folder) => {
                foldersEvents.push({
                    title: folder.name,
                    date: folder.dueDate,
                    color: folder.color,
                });
            })
            setCalendarEvent(foldersEvents);
           }, [folders]);

      return (
        <>
        <FullCalendar
          plugins={[ dayGridPlugin ]}
          initialView="dayGridMonth"
          events={calendarEvents}
       />
        </>
      );
    };