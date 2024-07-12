import React from 'react';
import { Button } from 'frosted-ui';

const MainContent: React.FC = () => {
  return (
    <div className="flex-1 p-8 overflow-y-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold font-['Merriweather']">Suggestions</h1>
        <Button variant="solid" color="indigo">+ New Suggestion</Button>
      </div>
      <p className="text-gray-400 mb-6">
        Welcome to Whop Suggestions!! Please post any feedback or suggestion you have for anything Whop related! We will go through these requests daily, and make sure we knock out as many as we can! If you make a suggestion and it gets implemented, we will send you free Whop merch (hoodies, t-shirts, and more!)
      </p>
      {[1, 2, 3].map((i) => (
        <div key={i} className="bg-gray-800 p-4 rounded-lg mb-4">
          <h2 className="text-xl font-semibold mb-2 font-['Merriweather']">Suggestion Title {i}</h2>
          <p className="text-gray-400 mb-4">This is a sample suggestion description. It would contain the details of the user's suggestion.</p>
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-500">Posted by User{i}</span>
            <div>
              <Button variant="soft" size="1" className="mr-2">👍 47</Button>
              <Button variant="soft" size="1">👎</Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MainContent;