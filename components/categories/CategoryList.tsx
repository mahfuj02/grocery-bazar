import { ChevronRightIcon } from "@chakra-ui/icons";
import { Box, Button, Flex, Icon, Image } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useState } from "react";
import baby_care from "../../public/Baby_Care_aYWku2D.webp";
import grocery from "../../public/Grocery_yO9ZydW.webp";

interface Category {
  title: string;
  image: React.ReactNode;
  children?: Category[];
}

interface SidebarItemProps {
  category: Category;
  level: number;
  onSelect: (title: string) => void;
}

const SidebarItem = ({ category, level, onSelect }: SidebarItemProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  const marginLeft = `${level * 10}px`; // Adjust the indentation level as per your needs

  return (
    <Box>
      <Button
        w="full"
        justifyContent="flex-start"
        pl={marginLeft}
        variant="link"
        display="flex"
        alignItems="center"
        onClick={() => {
          onSelect(category.title);
          if (category.children) handleToggle();
        }}
        textColor="black"
        marginY={3}
        fontWeight={500}
        fontSize="15px"
        _hover={{
          textColor: "secondary",
          fontWeight: "500",
          fontSize: "15px",
        }}
      >
        <Box mr={2} ml={level > 0 ? marginLeft : 0} width="20px">
          {category.image}
        </Box>
        <Flex align="center" flex="1">
          {category.title}
        </Flex>
        {category.children && (
          <Icon
            as={ChevronRightIcon}
            boxSize="20px"
            transform={isExpanded ? "rotate(90deg)" : undefined}
            transition="transform 0.2s ease-in-out"
          />
        )}
      </Button>
      {isExpanded && category.children && (
        <Box pl={marginLeft}>
          {category.children.map((child) => (
            <SidebarItem key={child.title} category={child} level={level + 1} onSelect={onSelect} />
          ))}
        </Box>
      )}
    </Box>
  );
};

const CategoryList: React.FC = () => {
  const router = useRouter();
  const handleSelect = (title: string) => {
    router.push({ pathname: "/", query: { category: title } }, undefined, { shallow: true });
  };
  const groceryUrl = grocery.src;
  const babyCareUrl = baby_care.src;
  const categories: Category[] = [
    {
      title: "Grocery",
      image: <Image src={groceryUrl} alt="grocery" />,
      children: [
        { title: "Fruits", image: <Image src={babyCareUrl} alt="grocery" /> },
        {
          title: "Vegetables",
          image: <Image src={groceryUrl} alt="grocery" />,
        },
        {
          title: "Cereals",
          image: <Image src={babyCareUrl} alt="grocery" />,
          children: [
            {
              title: "Vegetables",
              image: <Image src={groceryUrl} alt="grocery" />,
            },
          ],
        },
      ],
    },
    {
      title: "Meat and Fish",
      image: <Image src={babyCareUrl} alt="grocery" />,
      children: [
        { title: "Mutton", image: <Image src={groceryUrl} alt="grocery" /> },
        { title: "Chicken", image: <Image src={babyCareUrl} alt="grocery" /> },
        { title: "Beef", image: <Image src={groceryUrl} alt="grocery" /> },
      ],
    },
    {
      title: "Baby Care",
      image: <Image src={groceryUrl} alt="grocery" />,
      children: [
        { title: "Diapers", image: <Image src={groceryUrl} alt="grocery" /> },
        {
          title: "Baby Food",
          image: <Image src={babyCareUrl} alt="grocery" />,
        },
        {
          title: "Baby Toiletries",
          image: <Image src={babyCareUrl} alt="grocery" />,
        },
      ],
    },
    {
      title: "Grocery",
      image: <Image src={groceryUrl} alt="grocery" />,
      children: [
        { title: "Fruits", image: <Image src={babyCareUrl} alt="grocery" /> },
        {
          title: "Vegetables",
          image: <Image src={groceryUrl} alt="grocery" />,
        },
        {
          title: "Cereals",
          image: <Image src={babyCareUrl} alt="grocery" />,
          children: [
            {
              title: "Vegetables",
              image: <Image src={groceryUrl} alt="grocery" />,
            },
          ],
        },
      ],
    },
    {
      title: "Meat and Fish",
      image: <Image src={babyCareUrl} alt="grocery" />,
      children: [
        { title: "Mutton", image: <Image src={groceryUrl} alt="grocery" /> },
        { title: "Chicken", image: <Image src={babyCareUrl} alt="grocery" /> },
        { title: "Beef", image: <Image src={groceryUrl} alt="grocery" /> },
      ],
    },
    {
      title: "Baby Care",
      image: <Image src={groceryUrl} alt="grocery" />,
      children: [
        { title: "Diapers", image: <Image src={groceryUrl} alt="grocery" /> },
        {
          title: "Baby Food",
          image: <Image src={babyCareUrl} alt="grocery" />,
        },
        {
          title: "Baby Toiletries",
          image: <Image src={babyCareUrl} alt="grocery" />,
        },
      ],
    },
    
  ];

  return (
    <Box marginTop={5} marginLeft={5}>
      {categories.map((category, index) => (
        <SidebarItem key={index} category={category} level={0} onSelect={handleSelect} />
      ))}
    </Box>
  );
};

export default CategoryList;
