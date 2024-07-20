import React from 'react';
import { Avatar, Flex, Text, TableRoot, TableBody, TableRow, TableCell, Container } from 'frosted-ui';

const RightSidebar: React.FC = () => {
  const users = [
    { name: 'Rocktree', handle: 'rocktree', src: '/rocktree.jpeg' },
    { name: 'Cameron', handle: 'wh0p', src: '/cameron.png' },
    { name: 'Steven', handle: '.whop', src: '/delmo.png' },
    { name: 'Delmo', handle: '_delmo', src: '/steven.png' },
  ];

  return (
    <Container >
      <Text weight="bold" mb="4" className="text-white p-4">User Directory</Text>
      <TableRoot size="2" variant="surface">
        <TableBody>
          {users.map((user, index) => (
            <TableRow key={index}>
              <TableCell>
                <Avatar src={user.src} fallback={user.name[0].toUpperCase()} size="2" className="text-white"/>
              </TableCell>
              <TableCell>
                <Flex direction="column">
                  <Text size="2" className="text-white">{user.name}</Text>
                  <Text size="1" className="text-white">@{user.handle}</Text>
                </Flex>
                
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </TableRoot>
    </Container>
  );
};

export default RightSidebar;
