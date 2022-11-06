import {
  Button,
  Checkbox,
  CheckboxGroup,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Radio,
  RadioGroup,
  Text,
  Textarea,
  VStack,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import Card from '../components/Card';
import FormInput from '../components/FormInput';
import { useSearchParams, useParams } from 'react-router-dom';
import { DateTime as dt } from 'luxon';
import { APPOINTMENTS } from '../constants';

type Props = {};

const MeetingInfo = (props: Props) => {
  const [qParams] = useSearchParams();
  const { id } = useParams();
  const date = qParams.get('date');
  const length = qParams.get('length');
  const virtualDays = id ? APPOINTMENTS[id].virtualDays : [];
  const nullSafeVirtualDays = virtualDays ? virtualDays : [];

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [location, setLocation] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  console.log(
    date
      ? nullSafeVirtualDays.includes(dt.fromISO(date).weekday)
      : 'fjklasdtfgsd'
  );
  return (
    <Card>
      <VStack w="100%">
        <Heading>{length}-minute Meeting</Heading>
        <Text>
          {date && length
            ? dt.fromISO(date).toLocaleString(dt.TIME_SIMPLE) +
              '-' +
              dt
                .fromISO(date)
                .plus({ minutes: Number(length) })
                .toLocaleString(dt.TIME_SIMPLE)
            : 'ERR'}
        </Text>
        <Text>
          {date ? dt.fromISO(date).toLocaleString(dt.DATE_FULL) : 'ERR'}
        </Text>
        <FormInput isRequired label="Name" type="text" onChange={setName} />
        <FormInput isRequired label="Email" type="email" onChange={setEmail} />
        <VStack alignItems="start" alignSelf="start">
          <FormControl isRequired>
            <FormLabel>Location</FormLabel>
            <RadioGroup onChange={setLocation}>
              <VStack alignItems="start">
                <Radio
                  isDisabled={
                    date
                      ? nullSafeVirtualDays.includes(dt.fromISO(date).weekday)
                      : false
                  }
                  value="office"
                >
                  Building 124, room 230
                </Radio>
                <Radio value="phone">Phone Call</Radio>
                <Radio value="zoom">Zoom</Radio>
              </VStack>
            </RadioGroup>
          </FormControl>
        </VStack>
        <FormInput
          isRequired
          label="Phone Number"
          type="phone"
          onChange={setPhoneNumber}
        />
        <FormControl isRequired>
          <FormLabel>Reason for meeting</FormLabel>
          <CheckboxGroup>
            <VStack alignItems="start">
              <Checkbox>Personal Guidance</Checkbox>
              <Checkbox>Academic Advising</Checkbox>
              <Checkbox>Graduate School Advising</Checkbox>
              <Checkbox>Financial Advising</Checkbox>
              <Checkbox>
                New Student Intake (must be at least 60 minutes)
              </Checkbox>
              <Checkbox>Continuing Student Quarterly Check in</Checkbox>
              <Checkbox>
                Continuing Student Quarterly Check-in - Academic Difficulty
              </Checkbox>
              <Checkbox>
                <Input isDisabled placeholder="Other" />
              </Checkbox>
            </VStack>
          </CheckboxGroup>
        </FormControl>
        <FormControl>
          <FormLabel>
            Please share anything that will help prepare for our meeting.
          </FormLabel>
          <Textarea />
        </FormControl>
        <Button colorScheme="green">Submit</Button>
      </VStack>
    </Card>
  );
};

export default MeetingInfo;
