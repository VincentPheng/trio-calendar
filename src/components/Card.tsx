import { Flex } from '@chakra-ui/react';
import React from 'react';

type Props = {
  children: JSX.Element | JSX.Element[] | undefined;
  [x: string]: any;
};

const Card = ({ children, ...rest }: Props) => {
  return (
    <Flex
      boxShadow="xl"
      flexDir="column"
      alignItems="center"
      _hover={{ translate: 'transformY(-2px)' }}
      p={10}
      {...rest}
    >
      {children}
    </Flex>
  );
};

export default Card;
