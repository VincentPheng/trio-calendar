import {
  Avatar,
  Center,
  Divider,
  GridItem,
  SimpleGrid,
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
    <Center minH="100vh">
      <VStack>
        <SimpleGrid
          columns={{
            sm: 1,
            md: 2,
            lg: 3,
            xl: 4,
            '2xl': 5,
          }}
          spacing={5}
        >
          <GridItem colSpan={1}>
            <MeetingCard id={'snyikos'} appointment={APPOINTMENTS['snyikos']} />
          </GridItem>
          <GridItem colSpan={1}>
            <MeetingCard
              id={'jpere139'}
              appointment={APPOINTMENTS['jpere139']}
            />
          </GridItem>
          <GridItem colSpan={1}>
            <MeetingCard
              id={'myhurtad'}
              appointment={APPOINTMENTS['myhurtad']}
            />
          </GridItem>
          <GridItem colSpan={1}>
            <MeetingCard id={'veleal'} appointment={APPOINTMENTS['veleal']} />
          </GridItem>
          <GridItem colSpan={1}>
            <MeetingCard id={'mamoral'} appointment={APPOINTMENTS['mamoral']} />
          </GridItem>
        </SimpleGrid>
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
    <Card h="25em" w="15em">
      <Avatar
        bg="gray.300"
        size="2xl"
        name={appointment.name}
        src={appointment.src}
      />
      <Text fontWeight="bold" fontSize="3xl">
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
