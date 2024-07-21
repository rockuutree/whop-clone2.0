import React, { useState } from 'react';
import { Box, Heading, Text, TextField, Button, TableRoot, TableHeader, TableBody, TableRow, TableCell, TableColumnHeaderCell, Flex } from 'frosted-ui';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { Key } from 'lucide-react';

/*
Database Structure:

Users table:
- id: SERIAL PRIMARY KEY
- username: VARCHAR(50) UNIQUE NOT NULL
- email: VARCHAR(100) UNIQUE NOT NULL
- password_hash: VARCHAR(100) NOT NULL
- join_date: TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
- last_login: TIMESTAMP

Products table:
- id: SERIAL PRIMARY KEY
- name: VARCHAR(100) NOT NULL
- description: TEXT
- price: DECIMAL(10, 2) NOT NULL
- created_at: TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP

Purchases table:
- id: SERIAL PRIMARY KEY
- user_id: INTEGER REFERENCES users(id)
- product_id: INTEGER REFERENCES products(id)
- purchase_date: TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
- amount: DECIMAL(10, 2) NOT NULL
*/

// Example queries that users can try
const exampleQueries = [
  "Give me the top 5 longest members",
  "Show me the revenue distribution across products",
  "Create a chart depicting the user count after a week",
  "Show me the total revenue for each product",
  "List the users who made a purchase in the last 30 days",
 
];

// Mock function to simulate NLP to SQL conversion
const nlpToSql = (query: string) => {
  // In a real application, this would be a complex NLP model
  if (query.toLowerCase().includes('top 5 longest members')) {
    return "SELECT username, join_date FROM users ORDER BY join_date ASC LIMIT 5";
  } else if (query.toLowerCase().includes('user count after a week')) {
    return "SELECT DATE_TRUNC('week', join_date) as week, COUNT(*) as count FROM users GROUP BY week ORDER BY week";
  } else if (query.toLowerCase().includes('total revenue for each product')) {
    return "SELECT products.name, SUM(purchases.amount) as total_revenue FROM products JOIN purchases ON products.id = purchases.product_id GROUP BY products.id ORDER BY total_revenue DESC";
  } else if (query.toLowerCase().includes('users who made a purchase in the last 30 days')) {
    return "SELECT DISTINCT users.username FROM users JOIN purchases ON users.id = purchases.user_id WHERE purchases.purchase_date >= CURRENT_DATE - INTERVAL '30 days'";
  } else if (query.toLowerCase().includes('revenue distribution across products')) {
    return "SELECT products.name, SUM(purchases.amount) as revenue FROM products JOIN purchases ON products.id = purchases.product_id GROUP BY products.id";
  }
  return "";
};
const executeQuery = (sql: string) => {
  // In a real application, this would connect to your database
  if (sql.includes('ORDER BY join_date ASC LIMIT 5')) {
    return [
      { username: 'Rocktree', join_date: '2019-11-15', email: 'john@example.com', last_login: '2023-07-18' },
      { username: 'Cameron', join_date: '2019-12-03', email: 'jane@example.com', last_login: '2023-07-19' },
      { username: 'Steven', join_date: '2020-01-01', email: 'alice@example.com', last_login: '2023-07-20' },
      { username: 'Delmo', join_date: '2020-01-15', email: 'bob@example.com', last_login: '2023-07-17' },
      { username: 'Jordan', join_date: '2020-02-01', email: 'charlie@example.com', last_login: '2023-07-16' }
    ];
  } else if (sql.includes('GROUP BY week ORDER BY week')) {
    return [
      { week: '2023-06-25', count: 10 },
      { week: '2023-07-02', count: 15 },
      { week: '2023-07-09', count: 22 },
      { week: '2023-07-16', count: 30 },
      { week: '2023-07-23', count: 45 },
      { week: '2023-07-30', count: 38 },
      { week: '2023-08-06', count: 52 },
      { week: '2023-08-13', count: 47 }
    ];
  } else if (sql.includes('SUM(purchases.amount) as total_revenue')) {
    return [
      { name: 'Estock Subscription', total_revenue: 15000, units_sold: 150 },
      { name: 'Cybersole Subscription', total_revenue: 7500, units_sold: 300 },
      { name: 'Wrath Bundle', total_revenue: 5000, units_sold: 200 },
      { name: 'Hidden Society Course', total_revenue: 12000, units_sold: 80 },
      { name: 'Hayha Session', total_revenue: 8000, units_sold: 40 }
    ];
  } else if (sql.includes('purchases.purchase_date >= CURRENT_DATE - INTERVAL')) {
    return [
      { username: 'Rocktre', join_date: '2020-01-01', last_purchase: '2023-07-18', total_spent: 250 },
      { username: 'Cameron', join_date: '2020-02-01', last_purchase: '2023-07-19', total_spent: 180 },
      { username: 'Steven', join_date: '2020-03-01', last_purchase: '2023-07-20', total_spent: 320 },
      { username: 'Delmo', join_date: '2020-04-15', last_purchase: '2023-07-17', total_spent: 150 },
      { username: 'Jordan', join_date: '2020-05-22', last_purchase: '2023-07-16', total_spent: 200 }
    ];
  } else if (sql.includes('SELECT products.name, SUM(purchases.amount) as revenue')) {
    return [
      { name: 'SwiftSole Subscription', revenue: 15000 },
      { name: 'Hyper Subscription', revenue: 7500 },
      { name: 'Restock Flippers Bundle', revenue: 5000 },
      { name: 'Restock World Course', revenue: 12000 },
      { name: 'TSB Session', revenue: 8000 }
    ];
  }
  return [];
};


const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8'];

const Data: React.FC = () => {
  const [query, setQuery] = useState('');
  const [result, setResult] = useState<any[] | null>(null);

  const handleQuery = () => {
    const sql = nlpToSql(query);
    const queryResult = executeQuery(sql);
    setResult(queryResult);
  };

  const renderResult = () => {
    if (!result) return null;

    if (result.length > 0 && 'username' in result[0]) {
      return (
        <Box className="bg-white rounded-md overflow-hidden">
          <TableRoot>
            <TableHeader>
              <TableRow>
                <TableColumnHeaderCell className="text-black">Username</TableColumnHeaderCell>
                <TableColumnHeaderCell className="text-black">Join Date</TableColumnHeaderCell>
              </TableRow>
            </TableHeader>
            <TableBody>
              {result.map((row, index) => (
                <TableRow key={index}>
                  <TableCell className="text-black">{row.username}</TableCell>
                  <TableCell className="text-black">{row.join_date}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </TableRoot>
        </Box>
      );
    } else if (result.length > 0 && 'week' in result[0]) {
      return (
        <Box className="bg-white p-4 rounded-md">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={result}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="week" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="count" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </Box>
      );
    } else if (result.length > 0 && 'name' in result[0] && 'total_revenue' in result[0]) {
      return (
        <Box className="bg-white rounded-md overflow-hidden">
          <TableRoot>
            <TableHeader>
              <TableRow>
                <TableColumnHeaderCell className="text-black">Product Name</TableColumnHeaderCell>
                <TableColumnHeaderCell className="text-black">Total Revenue</TableColumnHeaderCell>
              </TableRow>
            </TableHeader>
            <TableBody>
              {result.map((row, index) => (
                <TableRow key={index}>
                  <TableCell className="text-black">{row.name}</TableCell>
                  <TableCell className="text-black">${row.total_revenue.toFixed(2)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </TableRoot>
        </Box>
      );
    } else if (result.length > 0 && 'revenue' in result[0]) {
      const total = result.reduce((sum, item) => sum + item.revenue, 0);
      return (
        <Box className="bg-white p-4 rounded-md">
          <ResponsiveContainer width="100%" height={400}>
            <PieChart>
              <Pie
                data={result}
                dataKey="revenue"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={150}
                fill="#8884d8"
                label={(entry) => `${entry.name}: ${((entry.revenue / total) * 100).toFixed(2)}%`}
              >
                {result.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip formatter={(value) => `$${value}`} />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </Box>
      );
    }

    return <Text>No results to display</Text>;
  };

  return (
    <Box p="4">
      <Heading size="6" mb="4">NLP Data Query</Heading>
      <Flex direction="column" gap="3">
        <Box className="rounded-lg mb-6 overflow-hidden" style={{border: '0.5px solid #2A2A2A'}}>
          <Box p="4">
            <Heading size="6" mb="4">Problem</Heading>
            <Text>
              Problem: A significant portion of employees are overwhelmed by large databases or do not have easy access to the data they need. This limits their ability to make informed decisions and perform their tasks efficiently.
              </Text>
            </Box>
            </Box>
            <Box className="rounded-lg mb-6 overflow-hidden" style={{border: '0.5px solid #2A2A2A'}}>
              <Box p="4">

                <Heading size="6" mb="4">Solution</Heading>
                <Text mb="6">
                Solution: Allow users to query and access business data using natural language (NLP), making it accessible to non-technical users. Basically summarizes large amounts of data into digestable portions based off the user's desired outcome. They can type a natural language query and it will be converted to SQL and be executed against a database, which can return a table listing their request or even a chart. 
                </Text>
                <br />
                <Text mb="6">
                dads
                </Text>
          </Box>
        </Box>
      </Flex>
      <Box mb="4">
        <TextField.Root>
          <TextField.Input
            placeholder="Enter your query..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </TextField.Root>
        <Button onClick={handleQuery} mt="2">Execute Query</Button>
      </Box>
      <Box mb="4">
        <Heading size="3" mb="2">Example Queries:</Heading>
        <ul>
          {exampleQueries.map((exampleQuery, index) => (
            <li key={index} className="cursor-pointer text-purple-300 hover:underline" onClick={() => setQuery(exampleQuery)}>
              {exampleQuery}
            </li>
          ))}
        </ul>
      </Box>
      <Box>
        <Heading size="4" mb="2">Results</Heading>
        {renderResult()}
      </Box>
    </Box>
  );
};

export default Data;