import React from 'react';
import { Avatar, Flex, Text } from 'frosted-ui';
import styles from 'whop-clone/styles/WhopClone.module.css'

const RightSidebar: React.FC = () => {
  const users = [
    'Left Curve Capital', 'Samahdtaylor', 'geattila82', 'jaboggio', 
    'Compound Village', 'Archiebald gray', 'Tradematic', 'atif2k2', 
    'Ernest Gichichi', 'CC', 'Jalee J Lovaincy'
  ];

  return (
    <Flex direction="column" className="w-64 bg-gray-950 p-4 border-l border-gray-800">
      <Text weight="bold" mb="4">User directory</Text>
      {users.map((user) => (
        <Flex key={user} align="center" mb="3">
          <Avatar fallback={user[0]} size="2" mr="2" />
          <Flex direction="column">
            <Text size="2">{user}</Text>
            <Text size="1" color="gray">@{user.toLowerCase().replace(' ', '')}</Text>
          </Flex>
        </Flex>
      ))}
    </Flex>
  );
};

export default RightSidebar;