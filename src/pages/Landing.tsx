import {
  Avatar,
  Center,
  Divider,
  HStack,
  Spacer,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import Card from '../components/Card';
import TextIcon from '../components/TextIcon';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { APPOINTMENTS } from '../constants';
import { useNavigate } from 'react-router-dom';
import { Appointment } from '../types';

const Landing = () => {
  return (
    <Center h="100%">
      <VStack>
        <HStack spacing={5}>
          <MeetingCard id={'snyikos'} appointment={APPOINTMENTS['snyikos']} />
          <MeetingCard id={'jpere139'} appointment={APPOINTMENTS['jpere139']} />
        </HStack>
        <HStack spacing={5}>
          <MeetingCard id={'myhurtad'} appointment={APPOINTMENTS['myhurtad']} />
          <MeetingCard id={'veleal'} appointment={APPOINTMENTS['veleal']} />
          <MeetingCard id={'mamoral'} appointment={APPOINTMENTS['mamoral']} />
        </HStack>
      </VStack>
    </Center>
  );
};

type MeetingCardProps = {
  id: string;
  appointment: Appointment;
};

const MeetingCard = ({ id, appointment }: MeetingCardProps) => {
  const navigate = useNavigate();
  return (
    <Card h="600px">
      <Avatar
        bg="gray.300"
        size="2xl"
        name={appointment.name}
        src={appointment.src}
      />
      <Text fontWeight="bold" fontSize="4xl">
        {appointment.name}
      </Text>
      <Text fontWeight="bold">{appointment.subtitle}</Text>
      <Text>{appointment.pronouns}</Text>
      <Spacer />
      <Divider m={4} />
      <Text>{appointment.email}</Text>
      <Text>{appointment.office}</Text>
      <Text>{appointment.cell}</Text>
      <Divider m={4} />
      <Spacer />
      <TextIcon
        text={'Schedule a meeting'}
        icon={AiOutlineArrowRight}
        fontSize="xl"
        color="blue.400"
        onClick={() => navigate(`/meeting/${id}`)}
      />
    </Card>
  );
};

export default Landing;
