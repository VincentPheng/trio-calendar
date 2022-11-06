import {
  Avatar,
  Button,
  Divider,
  GridItem,
  Icon,
  SimpleGrid,
  Spacer,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { Outlet, useParams, useNavigate } from 'react-router-dom';
import Card from '../components/Card';
import { APPOINTMENTS } from '../constants';
import { AiOutlineArrowLeft } from 'react-icons/ai';

type Props = {};

const MeetingView = (props: Props) => {
  const { id } = useParams();
  const appointment = APPOINTMENTS[id ? id : '0'];
  const navigate = useNavigate();

  return (
    <SimpleGrid columns={10} spacing={3} h="100%">
      <GridItem rowSpan={1} colSpan={2} h="100%">
        <Card h="100%">
          <Button
            leftIcon={<Icon mt={1} as={AiOutlineArrowLeft} />}
            w="100%"
            mb={5}
            onClick={() => navigate(-1)}
          >
            Go back
          </Button>
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
          <Divider m={4} />
          <Spacer />
          <Text>{appointment.meetingNote}</Text>
          <Spacer />
          <Divider m={4} />
          <Text>{appointment.email}</Text>
          <Text>{appointment.office}</Text>
          <Text>{appointment.cell}</Text>
        </Card>
      </GridItem>
      <GridItem rowSpan={1} colSpan={8} m={3}>
        <Outlet />
      </GridItem>
    </SimpleGrid>
  );
};

export default MeetingView;
