import { Button, Icon, Link, Text } from '@chakra-ui/react';
import React from 'react';
import { IconType } from 'react-icons';

type Props = {
  icon: IconType;
  fontSize?: string;
  color?: string;
  text: string;
  onClick?: any;
  left?: boolean;
  isLink?: boolean;
  [x: string]: any;
};

const TextIcon = ({
  icon,
  fontSize,
  text,
  color,
  onClick,
  left,
  isLink,
  ...rest
}: Props) => {
  const getText = () => {
    if (isLink) {
      return (
        <Link>
          <Text textColor={color} fontSize={fontSize}>
            {text}
          </Text>
        </Link>
      );
    }
    return (
      <Text textColor={color} fontSize={fontSize}>
        {text}
      </Text>
    );
  };

  if (left) {
    return (
      <Button colorScheme="clear" cursor="pointer" onClick={onClick} {...rest}>
        <Icon as={icon} fontSize={fontSize} pt={1} color={color} />
        {getText()}
      </Button>
    );
  }
  return (
    <Button colorScheme="clear" onClick={onClick} {...rest}>
      {getText()}
      <Icon ml={2} as={icon} fontSize={fontSize} pt={1} color={color} />
    </Button>
  );
};

export default TextIcon;
