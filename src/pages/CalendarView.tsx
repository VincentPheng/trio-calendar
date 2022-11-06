import {
  Button,
  Flex,
  Heading,
  HStack,
  IconButton,
  Text,
  VStack,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { useNavigate, useSearchParams, useParams } from 'react-router-dom';
import { DateTime as dt } from 'luxon';
import { TIME_SLOTS } from '../constants';
import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai';

const URL_PREFIX = (id: string | undefined) => `/meeting/${id ? id : '0'}`;

const CalendarView = () => {
  const [qParams] = useSearchParams();
  const { id } = useParams();
  const length = qParams.get('length');
  const startWeek = sessionStorage.getItem('start');

  const currentDay = dt.now();
  const start = currentDay.startOf('week');
  const lastWeek = start.plus({ month: 1 });
  const currWeekStart = startWeek ? dt.fromISO(JSON.parse(startWeek)) : start;
  const [week, setWeek] = useState([
    currWeekStart,
    currWeekStart.plus({ days: 1 }),
    currWeekStart.plus({ days: 2 }),
    currWeekStart.plus({ days: 3 }),
    currWeekStart.plus({ days: 4 }),
  ]);
  const apptTimeSlots = TIME_SLOTS[id ? id : 'snyikos'];
  const navigate = useNavigate();

  const moveWeekForward = () => {
    const localWeeks = [
      week[0].plus({ days: 7 }),
      week[1].plus({ days: 7 }),
      week[2].plus({ days: 7 }),
      week[3].plus({ days: 7 }),
      week[4].plus({ days: 7 }),
    ];
    setWeek(localWeeks);
    sessionStorage.setItem('start', JSON.stringify(localWeeks[0]));
  };

  const moveWeekBackward = () => {
    const localWeeks = [
      week[0].minus({ days: 7 }),
      week[1].minus({ days: 7 }),
      week[2].minus({ days: 7 }),
      week[3].minus({ days: 7 }),
      week[4].minus({ days: 7 }),
    ];
    setWeek(localWeeks);
    sessionStorage.setItem('start', JSON.stringify(localWeeks[0]));
  };
  return (
    <Flex h="100%" flexDir="column" justifyContent="center" alignItems="center">
      <Heading fontSize="6xl" mb={6}>
        {length}-minute meeting
      </Heading>
      <HStack w="100%" spacing={10}>
        <IconButton
          isDisabled={week[0].toMillis() === start.toMillis()}
          onClick={moveWeekBackward}
          alignSelf="start"
          aria-label="Next Week"
          icon={<AiOutlineArrowLeft />}
        />
        {week.map((day) => {
          return (
            <VStack w="100%" spacing={4} h="100%">
              <Text>{day.toLocaleString(dt.DATE_MED_WITH_WEEKDAY)}</Text>
              {apptTimeSlots[day.weekday].map((timeSlot) => {
                if (length) {
                  const dayTime = day.plus(timeSlot);
                  const urlParams = `/confirm?length=${length}&date=${dayTime}`;
                  return (
                    <Button
                      isDisabled={
                        currentDay > dayTime ||
                        dayTime.plus({ minutes: Number(length) }) >
                          day.plus({ hour: 17 })
                      }
                      colorScheme="green"
                      w="100%"
                      onClick={() => navigate(URL_PREFIX(id) + urlParams)}
                    >
                      {dayTime.toLocaleString(dt.TIME_SIMPLE)}
                    </Button>
                  );
                }
                return <Text>ERR</Text>;
              })}
            </VStack>
          );
        })}
        <IconButton
          isDisabled={week[4].toMillis() >= lastWeek.toMillis()}
          onClick={moveWeekForward}
          alignSelf="start"
          aria-label="Next Week"
          icon={<AiOutlineArrowRight />}
        />
      </HStack>
    </Flex>
  );
};

export default CalendarView;
