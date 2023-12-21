import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid'; 
// import { useState } from 'react';
// import * as foldersService from "../../utilities/folders-service";

export default function FullCalendarPage() {
    // const [calendarEvent, setCalendarEvent] = useState("");
      return (
        <FullCalendar
          plugins={[ dayGridPlugin ]}
          initialView="dayGridMonth"
            events = {[{title:"", date:""}]}
       />
      );
    };