import React, { useState } from "react";
import AppointmentsSchedule from "./containers/AppointmentsSchedule/AppointmentsSchedule";

import "./App.css";
import ViewAppointments from "./containers/ViewAppointments/ViewAppointments";
import Tabs, { Tab } from "./components/Tabs/Tabs";
import { initialAppointments } from "./containers/constants";
import { Appointment } from "./types";

const App: React.FC = () => {
  const [appointments, setAppointments] =
    useState<Appointment[]>(initialAppointments);

  return (
    <div className="App">
      <Tabs>
        <Tab title="Schedule">
          <AppointmentsSchedule
            appointments={appointments}
            setAppointments={setAppointments}
          />
        </Tab>
        <Tab title="Booked appointments">
          <ViewAppointments
            appointments={appointments}
            setAppointments={setAppointments}
          />
        </Tab>
      </Tabs>
    </div>
  );
};

export default App;
