import React from 'react';
import { Button, ScrollArea, Box, Heading, Flex, Text } from 'frosted-ui';

const MainContent: React.FC = () => {
  const suggestions = [
    {
      title: "Automated Reminder Notifications To Leave A Review After Purchase.",
      description: "Can we have Whop automatically send a reminder notification or prompt to customers after X number of days to leave a review and include directions on where to find the review submission page? While we're at it, can we display the link to leave a review somewhere prominent instead of hiding it behind layers of links and menu items?",
      author: "User1",
      upvotes: 64,
      downvotes: 0
    },
    {
      title: "MILESTONE.....but for affiliates.",
      description: "I love the milestone incentive and think its brilliant to persuade whop creators to want to increase their revenue. Which is exactly why I think the same feature should be implemented for affiliates. Similar to us creators getting hoodies, lambos, etc... I would love to have something in my affiliate section offering more commission, free merch, free access, etc. It is also an incentive just like how Whop has the creator milestone. I know as an affiliate, I would want more referrals if I know I got cash bonuses, increased %, etc. Theres tons of options to have here.",
      author: "User2",
      upvotes: 28,
      downvotes: 0
    },
    {
      title: "Watermarks",
      description: "Add unique watermarks to all content including attachments such as PDF's. It looks like you guys are incorporating it with videos which is great but it would be even better if you extended out that watermark to more forms of content!",
      author: "User3",
      upvotes: 14,
      downvotes: 0
    }
  ];

  return (
    <ScrollArea 
      scrollbars="vertical" 
      size="1" 
      style={{ 
        height: '100vh', 
        width: '600px',
      }}
      className="custom-scrollbar"
    >
      <Box p="8" className="bg-[#0F0F0F]">
        <Flex justify="between" align="center" mb="6">
          <Heading size="2" className="text-white">Suggestions</Heading>
          <Button color="indigo" className="bg-[#5865F2] hover:bg-[#4752C4] text-white">
            + New Suggestion
          </Button>
        </Flex>
        <Text className="text-gray-400 mb-6">
          Welcome to Whop Suggestions!! Please post any feedback or suggestion you have for anything Whop related! We will go through these requests daily, and make sure we knock out as many as we can! If you make a suggestion and it gets implemented, we will send you free Whop merch (hoodies, t-shirts, and more!)
        </Text>
        {suggestions.map((suggestion, index) => (
          <Box key={index} className="bg-[#1E1E1E] p-4 rounded-lg mb-4">
            <Heading size="3" className="text-white mb-2">{suggestion.title}</Heading>
            <Text className="text-gray-400 mb-4">{suggestion.description}</Text>
            <Flex justify="between" align="center">
              <Text size="1" className="text-gray-500">Posted by {suggestion.author}</Text>
              <Flex>
                <Button variant="soft" size="1" className="mr-2 bg-[#2E2E2E] text-white">
                  ▲ {suggestion.upvotes}
                </Button>
                <Button variant="soft" size="1" className="bg-[#2E2E2E] text-white">
                  ▼ {suggestion.downvotes}
                </Button>
              </Flex>
            </Flex>
          </Box>
        ))}
      </Box>
    </ScrollArea>
  );
};

export default MainContent;