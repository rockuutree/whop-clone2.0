import React from 'react';
import { Button, ScrollArea, Box, Heading, Flex, Text, Container } from 'frosted-ui';
import { ChevronUp, ChevronDown } from 'lucide-react';


const MainContent: React.FC = () => {
  const suggestions = [
    {
      title: "Automated Reminder Notifications To Leave A Review After Purchase.",
      description: "Can we have Whop automatically send a reminder notification or prompt to customers after X number of days to leave a review and include directions on where to find the review submission page? While we're at it, can we display the link to leave a review somewhere prominent instead of hiding it behind layers of links and menu items?",
      upvotes: 67,
      downvotes: 0
    },
    {
      title: "MILESTONE.....but for affiliates.",
      description: "I love the milestone incentive and think its brilliant to persuade whop creators to want to increase their revenue. Which is exactly why I think the same feature should be implemented for affiliates. Similar to us creators getting hoodies, lambos, etc... I would love to have something in my affiliate section offering more commission, free merch, free access, etc. It is also an incentive just like how Whop has the creator milestone. I know as an affiliate, I would want more referrals if I know I got cash bonuses, increased %, etc. Theres tons of options to have here.",
      upvotes: 32,
      downvotes: 0
    },
    {
      title: "Watermarks",
      description: "Add unique watermarks to all content including attachments such as PDF's. It looks like you guys are incorporating it with videos which is great but it would be even better if you extended out that watermark to more forms of content!",
      upvotes: 15,
      downvotes: 0,
      response: "Great idea. Will keep you posted on if/when this is coming!"
    },
    {
      title: "Watermarks",
      description: "Add unique watermarks to all content including attachments such as PDF's. It looks like you guys are incorporating it with videos which is great but it would be even better if you extended out that watermark to more forms of content!",
      upvotes: 15,
      downvotes: 0,
      response: "Great idea. Will keep you posted on if/when this is coming!"
    },
    {
      title: "Watermarks",
      description: "Add unique watermarks to all content including attachments such as PDF's. It looks like you guys are incorporating it with videos which is great but it would be even better if you extended out that watermark to more forms of content!",
      upvotes: 15,
      downvotes: 0,
      response: "Great idea. Will keep you posted on if/when this is coming!"
    },
  ];

  return (
    <ScrollArea
      className='bg-[#111111] h-full overflow-y-auto'
      size="1"  
      style={{padding: '16px 16px', border: '0.5px solid #2A2A2A'}}
    >
      <Container className="h-screen bg-[#111111] text-white p-2 rounded" style={{padding: '16px 16px'}}>
        <Box className="h-full rounded-lg overflow-hidden border border-[#242424] p-4">
          <Flex justify="between" align="center" mb="6">
            <Heading size="7" weight="medium" className="font-light">Suggestions</Heading>
            <Button variant="classic" className="text-white">
              + New Suggestion
            </Button>
          </Flex>
          <Text className="text-gray-400 mb-6 leading-relaxed">
            Welcome to Whop Suggestions!! Please post any feedback or suggestion you have for anything Whop related! We will go through these requests daily, and make sure we knock out as many as we can! If you make a suggestion and it gets implemented, we will send you free Whop merch (hoodies, t-shirts, and more!)
          </Text>
          {suggestions.map((suggestion, index) => (
            <Box key={index} className="rounded-lg mb-6 overflow-hidden" style={{border: '0.5px solid #2A2A2A'}}>
              <Box p="4">
                <Heading size="3" className="mb-3">{suggestion.title}</Heading>
                <Text className="text-gray-400 mb-4 leading-relaxed">{suggestion.description}</Text>
              </Box>
              <Flex justify="between" align="center" className="bg-[#111111] px-4 py-3">
                <Flex align="center" gap="4">
                  <Button variant="ghost" size="2" className="text-gray-500">
                    <ChevronUp color="grey" size={18} />
                    {suggestion.upvotes}
                  </Button>
                  <Button variant="ghost" size="2" className="text-gray-500">
                    <ChevronDown color="grey" size={18} />
                    {suggestion.downvotes}
                  </Button>
                </Flex>
              </Flex>
            </Box>
          ))}
        </Box>
      </Container>
    </ScrollArea>
  );
};

export default MainContent;