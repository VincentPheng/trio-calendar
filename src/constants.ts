import { Appointment, TimeSlot } from './types';

const DEFAULT_TIME_SLOTS: Record<string, TimeSlot> = {
  '08:00 AM': {
    hour: 8,
    minute: 0,
  },
  '08:30 AM': {
    hour: 8,
    minute: 30,
  },
  '09:00 AM': {
    hour: 9,
    minute: 0,
  },
  '09:30 AM': {
    hour: 9,
    minute: 30,
  },
  '10:00 AM': {
    hour: 10,
    minute: 0,
  },
  '10:30 AM': {
    hour: 10,
    minute: 30,
  },
  '11:00 AM': {
    hour: 11,
    minute: 0,
  },
  '11:30 AM': {
    hour: 11,
    minute: 30,
  },
  '12:00 PM': {
    hour: 12,
    minute: 0,
  },
  '12:30 PM': {
    hour: 12,
    minute: 30,
  },
  '02:00 PM': {
    hour: 14,
    minute: 0,
  },
  '02:30 PM': {
    hour: 14,
    minute: 30,
  },
  '03:00 PM': {
    hour: 15,
    minute: 0,
  },
  '03:30 PM': {
    hour: 15,
    minute: 30,
  },
  '04:00 PM': {
    hour: 16,
    minute: 0,
  },
  '04:30 PM': {
    hour: 16,
    minute: 30,
  },
};

const getTimeSlots = (times: string[], all = false): TimeSlot[] => {
  const slots: TimeSlot[] = [];
  if (all) {
    for (let i = 0; i < Object.keys(DEFAULT_TIME_SLOTS).length; i++) {
      const key = Object.keys(DEFAULT_TIME_SLOTS)[i];
      slots.push(DEFAULT_TIME_SLOTS[key]);
    }
  } else {
    for (let i = 0; i < times.length; i++) {
      const time = times[i];
      if (time in DEFAULT_TIME_SLOTS) slots.push(DEFAULT_TIME_SLOTS[time]);
      else console.log(time);
    }
  }
  return slots;
};

export const TIME_SLOTS: Record<string, Record<number, TimeSlot[]>> = {
  snyikos: {
    1: getTimeSlots([
      '11:00 AM',
      '11:30 AM',
      '12:00 PM',
      '12:30 PM',
      '02:00 PM',
      '02:30 PM',
      '03:00 PM',
      '03:30 PM',
      '04:00 PM',
    ]),
    2: getTimeSlots(['12:30 PM', '02:00 PM', '02:30 PM', '04:00 PM']),
    3: getTimeSlots([
      '11:00 AM',
      '11:30 AM',
      '12:00 PM',
      '12:30 PM',
      '02:00 PM',
      '02:30 PM',
      '03:00 PM',
      '03:30 PM',
      '04:00 PM',
    ]),
    4: getTimeSlots(['12:30 PM', '02:00 PM', '02:30 PM', '04:00 PM']),
    5: getTimeSlots(['11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM']),
  },
  jpere139: {
    1: getTimeSlots([], true),
    2: getTimeSlots([], true),
    3: getTimeSlots([], true),
    4: getTimeSlots([], true),
    5: getTimeSlots([], true),
  },
  myhurtad: {
    1: getTimeSlots([], true),
    2: getTimeSlots([], true),
    3: getTimeSlots([]),
    4: getTimeSlots([], true),
    5: getTimeSlots([]),
  },
  veleal: {
    1: getTimeSlots([], true),
    2: getTimeSlots([]),
    3: getTimeSlots([]),
    4: getTimeSlots([]),
    5: getTimeSlots([], true),
  },
  mamoral: {
    1: getTimeSlots([]),
    2: getTimeSlots([]),
    3: getTimeSlots([]),
    4: getTimeSlots([]),
    5: getTimeSlots([], true),
  },
};

export const APPOINTMENTS: Record<string, Appointment> = {
  snyikos: {
    name: 'Stacy A. Nyikos',
    subtitle: 'Director',
    pronouns: 'she/her/hers',
    src: 'https://content-calpoly-edu.s3.amazonaws.com/trioachievers/1/images/Stacy%20Nyikos%20Photo%202014VFB.jpg',
    email: 'snyikos@calpoly.edu',
    office: 'Building 124, room 231',
    meetingNote:
      'Please note that I work remotely on Fridays. Any meetings scheduled them will be via Zoom.',
    virtualDays: [5],
  },
  jpere139: {
    name: 'Jazmin Perez',
    subtitle: 'Program Coordinator',
    pronouns: 'she/her(s)/ella',
    src: 'https://content-calpoly-edu.s3.amazonaws.com/trioachievers/1/images/Jazmin%20Perez.jpg',
    email: 'jpere139@calpoly.edu',
    office: 'Building 124, room 230',
    cell: '(805)704-4009',
    meetingNote:
      'Please note I am working remotely on Mondays. Any bookings made on Monday will be virtual meetings.',
    virtualDays: [1],
  },
  myhurtad: {
    name: 'Mya Hurtado',
    subtitle: 'Graduate Assistant',
    pronouns: 'she/her/hers',
    src: 'https://content-calpoly-edu.s3.amazonaws.com/trioachievers/1/images/My%20project.jpg',
    email: 'myhurtad@calpoly.edu',
    office: 'Building 124, room 229',
  },
  veleal: {
    name: 'Veronica Leal',
    subtitle: 'Graduate Assistant',
    pronouns: 'she/her/hers',
    src: 'https://content-calpoly-edu.s3.amazonaws.com/trioachievers/1/images/veronica.jpg',
    email: 'veleal@calpoly.edu',
    office: 'Building 124, room 229',
  },
  mamoral: {
    name: 'Marley Morales',
    subtitle: 'Graduate Assistant',
    pronouns: 'she/her/hers',
    src: 'https://content-calpoly-edu.s3.amazonaws.com/trioachievers/1/images/IMG_0251.png',
    office: 'Building 124, room 229',
  },
};
