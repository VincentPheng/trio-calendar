import { Button, Flex, Heading, HStack, Text, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useNavigate, useSearchParams, useParams } from 'react-router-dom';
import { DateTime as dt } from 'luxon';
import { TIME_SLOTS } from '../constants';

type Props = {};

const URL_PREFIX = (id: string | undefined) =>
  `/meeting/${id ? id : '0'}/confirm?`;

const CalendarView = (props: Props) => {
  const [qParams] = useSearchParams();
  const { id } = useParams();
  const length = qParams.get('length');
  const weekNum = dt.now().weekNumber;
  const date = dt.fromObject({
    weekYear: 2022,
    weekNumber: weekNum,
  });
  const start = date.startOf('week');
  const [week, setWeek] = useState([
    start,
    start.plus({ days: 1 }),
    start.plus({ days: 2 }),
    start.plus({ days: 3 }),
    start.plus({ days: 4 }),
  ]);
  const apptTimeSlots = TIME_SLOTS[id ? id : 'snyikos'];
  const navigate = useNavigate();

  return (
    <Flex h="100%" flexDir="column" justifyContent="center" alignItems="center">
      <Heading fontSize="6xl" mb={6}>
        {length}-minute meeting
      </Heading>
      <HStack spacing={10}>
        {week.map((day) => {
          return (
            <VStack spacing={4} h="100%">
              <Text>{day.toLocaleString(dt.DATE_MED_WITH_WEEKDAY)}</Text>
              {apptTimeSlots[day.weekday].map((timeSlot) => {
                const dayTime = day.plus(timeSlot);
                const urlParams = `length=${length}&date=${dayTime}`;
                return (
                  <Button
                    colorScheme="green"
                    w="100%"
                    onClick={() => navigate(URL_PREFIX(id) + urlParams)}
                  >
                    {dayTime.toLocaleString(dt.TIME_SIMPLE)}
                  </Button>
                );
              })}
            </VStack>
          );
        })}
      </HStack>
    </Flex>
  );
};

export default CalendarView;
