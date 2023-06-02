
import { ChevronRightIcon, HamburgerIcon } from '@chakra-ui/icons';
import { Box, Button, Flex, Icon } from '@chakra-ui/react';
import { useState } from 'react';

interface Category {
  title: string;
  icon: React.ReactNode;
  children?: Category[];
}

interface SidebarItemProps {
  category: Category;
  level: number;
}

const SidebarItem = ({ category, level }:SidebarItemProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  const marginLeft = `${level * 20}px`; // Adjust the indentation level as per your needs

  return (
    <Box>
      <Button
        w="full"
        justifyContent="flex-start"
        pl={marginLeft}
        variant="link"
        display="flex"
        alignItems="center"
        onClick={handleToggle}
      >
        <Box mr={2} ml={level > 0 ? '30px' : 0}>{category.icon}</Box>
        <Flex align="center" flex="1">
          {category.title}
        </Flex>
        {category.children && (
          <Icon
            as={ChevronRightIcon}
            boxSize={4}
            transform={isExpanded ? 'rotate(90deg)' : undefined}
            transition="transform 0.2s ease-in-out"
          />
        )}
      </Button>
      {isExpanded && category.children && (
        <Box pl={marginLeft}>
          {category.children.map((child) => (
            <SidebarItem key={child.title} category={child} level={level + 1} />
          ))}
        </Box>
      )}
    </Box>
  );
};

const CategoryList: React.FC = () => {
  const categories: Category[] = [
    {
      title: 'Grocery',
      icon: <HamburgerIcon />,
      children: [
        { title: 'Fruits', icon: <HamburgerIcon /> },
        { title: 'Vegetables', icon: <HamburgerIcon /> },
        { title: 'Cereals', icon: <HamburgerIcon /> },
      ],
    },
    {
      title: 'Meat and Fish',
      icon: <HamburgerIcon />,
      children: [
        { title: 'Mutton', icon: <HamburgerIcon /> },
        { title: 'Chicken', icon: <HamburgerIcon /> },
        { title: 'Beef', icon: <HamburgerIcon /> },
      ],
    },
    {
      title: 'Baby Care',
      icon: <HamburgerIcon />,
      children: [
        { title: 'Diapers', icon: <HamburgerIcon /> },
        { title: 'Baby Food', icon: <HamburgerIcon /> },
        { title: 'Baby Toiletries', icon: <HamburgerIcon /> },
      ],
    },
    
  ];

  return (
      <>
        {categories.map((category) => (
          <SidebarItem key={category.title} category={category} level={0} />
        ))}
      </>
  );

};

export default CategoryList;


