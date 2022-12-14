import * as React from 'react';
import { ChakraProvider, Box, theme } from '@chakra-ui/react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from './pages/Landing';
import MeetingView from './pages/MeetingView';
import TimeSlotView from './pages/TimeSlotView';
import CalendarView from './pages/CalendarView';
import MeetingInfo from './pages/MeetingInfo';

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize="xl">
      <Router>
        <Routes>
          <Route path="" element={<Landing />} />
          <Route path="/meeting/:id" element={<MeetingView />}>
            <Route index element={<TimeSlotView />} />
            <Route path="slots" element={<CalendarView />} />
            <Route path="confirm" element={<MeetingInfo />} />
          </Route>
        </Routes>
      </Router>
    </Box>
  </ChakraProvider>
);
