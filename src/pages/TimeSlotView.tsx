import { GridItem, SimpleGrid, Text } from '@chakra-ui/react';
import React from 'react';
import Card from '../components/Card';
import { useNavigate } from 'react-router-dom';

const MEETING_LENGTHS = [30, 60, 90, 120];

const TimeSlotView = () => {
  return (
    <SimpleGrid h="100%" columns={2} spacing={5}>
      {MEETING_LENGTHS.map((length) => {
        return <MeetingLength length={length} />;
      })}
    </SimpleGrid>
  );
};

type MeetingLengthProps = {
  length: number;
};

const MeetingLength = ({ length }: MeetingLengthProps) => {
  const navigate = useNavigate();
  return (
    <GridItem colSpan={1}>
      <Card
        cursor="pointer"
        justifyContent="center"
        h="100%"
        _hover={{ bg: 'green.400', transition: 'background-color .3s ease-out' }}
        onClick={() => navigate(`slots?length=${length}`)}
      >
        <Text fontSize="4xl">Schedule a {length}-minute meeting</Text>
      </Card>
    </GridItem>
  );
};

export default TimeSlotView;
