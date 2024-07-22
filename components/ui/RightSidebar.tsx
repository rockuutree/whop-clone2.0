import React from 'react';
import { Avatar, Flex, Text, TableRoot, TableBody, TableRow, TableCell, Container, SkeletonAvatar } from 'frosted-ui';
import { ChevronLeft } from 'lucide-react';
import Image from 'next/image';

const RightSidebar: React.FC = () => {
  const users = [
    { name: 'Rocktree', handle: 'rocktree', src: '/rocktree.jpeg' },
    { name: 'Cameron', handle: 'wh0p', src: '/cameron.png' },
    { name: 'Steven', handle: '.whop', src: '/delmo.png' },
    { name: 'Sharkey', handle: 'sharkey11', src: '/sharkey.png' },
    { name: 'JACKSON', handle: 'd1rty_j', src: '/jackson.png' },

    { name: 'Delmo', handle: '_delmo', src: '/steven.png' },
    { name: 'Jordan', handle: '01101010', src: '/jordan.png' },
    { name: 'baked', handle: 'baked.dev', src: '/baked.png' },
    { name: 'Artur Bien', handle: 'arturbien', src: '/artur.png' },
    { name: 'Rocktree', handle: 'rocktree', src: '/rocktree.jpeg' },
    { name: 'Cameron', handle: 'wh0p', src: '/cameron.png' },
    { name: 'Steven', handle: '.whop', src: '/delmo.png' },
  ];

  return (
    <Container>
      <Flex align="center" mt="5" mb="4" className="text-white p-4">
        <SkeletonAvatar color="gray" size="2" style={{ position: 'relative' }}>
        <div style={{
                  position: 'absolute',
                  top: '50%',
                  left: '25%',
                  transform: 'translate(-50%, -50%)',
                  width: '24px',
                  height: '24px'
                }}>
      <Image 
          src='/notif.svg' 
          alt='notif'
          layout="fill"
          objectFit="contain"
          style={{ transform: 'rotate(180deg)' }}
          className="cursor-pointer mr-6"
        />
        </div>
        </SkeletonAvatar>
        <Text weight="bold">User Directory</Text>
      </Flex>
      <TableRoot size="2" variant="ghost">
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
