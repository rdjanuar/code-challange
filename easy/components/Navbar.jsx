import React from "react";
import { Box, Text, Link, HStack, Flex } from "@chakra-ui/react";

export const Navbar = () => {
  const menu = [
    {
      name: "Home",
      isBold: true,
      color: "secondary",
    },
    {
      name: "Features",
      isBold: false,
      color: "rgba(0, 0, 0, 0.8)",
    },
    {
      name: "Blog",
      isBold: false,
      color: "rgba(0, 0, 0, 0.8)",
    },
    {
      name: "About Us",
      isBold: false,
      color: "rgba(0, 0, 0, 0.8)",
    },
  ];
  return (
    <Box as="nav" display="flex" justifyContent="space-between">
      <Flex align="center" gap={6}>
        <HStack pr={10}>
          <svg
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.8 2.79999C4.80356 2.86282 4.8268 2.92295 4.86641 2.97185C4.90603 3.02075 4.96002 3.05595 5.02075 3.07248C5.08148 3.089 5.14586 3.08601 5.2048 3.06392C5.26373 3.04184 5.31422 3.00178 5.34913 2.94941C5.38404 2.89705 5.4016 2.83503 5.39932 2.77213C5.39704 2.70924 5.37504 2.64866 5.33643 2.59896C5.29782 2.54926 5.24456 2.51296 5.18418 2.4952C5.12381 2.47744 5.05937 2.47911 5 2.49999H4C3.46957 2.49999 2.96086 2.7107 2.58579 3.08578C2.21071 3.46085 2 3.96956 2 4.49999V9.49999C2 11.0913 2.63214 12.6174 3.75736 13.7426C4.88258 14.8678 6.4087 15.5 8 15.5C9.5913 15.5 11.1174 14.8678 12.2426 13.7426C13.3679 12.6174 14 11.0913 14 9.49999V4.49999C14 3.96956 13.7893 3.46085 13.4142 3.08578C13.0391 2.7107 12.5304 2.49999 12 2.49999H11C10.9803 2.51969 10.9647 2.54307 10.954 2.56881C10.9434 2.59455 10.9379 2.62213 10.9379 2.64999C10.9379 2.67785 10.9434 2.70543 10.954 2.73117C10.9647 2.75691 10.9803 2.78029 11 2.79999C11.0197 2.81969 11.0431 2.83531 11.0688 2.84597C11.0946 2.85663 11.1221 2.86212 11.15 2.86212C11.1779 2.86212 11.2054 2.85663 11.2312 2.84597C11.2569 2.83531 11.2803 2.81969 11.3 2.79999"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M8 15.5V16.5C8 18.0913 8.63214 19.6174 9.75736 20.7426C10.8826 21.8679 12.4087 22.5 14 22.5V22.5C15.5913 22.5 17.1174 21.8679 18.2426 20.7426C19.3679 19.6174 20 18.0913 20 16.5V12.5"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M20 12.5C21.1046 12.5 22 11.6046 22 10.5C22 9.39543 21.1046 8.5 20 8.5C18.8954 8.5 18 9.39543 18 10.5C18 11.6046 18.8954 12.5 20 12.5Z"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <Text
            fontFamily="sourceSansPro"
            fontSize="18px"
            fontWeight={700}
            lineHeight="22.63px"
            color="secondary"
          >
            Holadok
          </Text>
        </HStack>

        {menu.map((el, i) => (
          <Link
            _hover={{
              textDecoration: "none",
            }}
          >
            <Text
              fontSize="16px"
              lineHeight="20.11px"
              color={el.color}
              fontWeight={el.isBold ? "600" : "400"}
              fontFamily="sourceSansPro"
            >
              {el.name}
            </Text>
          </Link>
        ))}
      </Flex>
      <HStack spacing={8}>
        <Text
          fontFamily="dmSans"
          fontSize="16px"
          lineHeight="20.83px"
          color="secondary"
          fontWeight={700}
        >
          Login
        </Text>
        <Box
          h="37px"
          w="117px"
          display="flex"
          alignItems="center"
          justifyContent="center"
          borderWidth={1.5}
          borderColor="secondary"
        >
          <Text
            fontFamily="dmSans"
            fontSize="16px"
            lineHeight="20.83px"
            color="secondary"
            fontWeight={700}
          >
            Book Now
          </Text>
        </Box>
      </HStack>
    </Box>
  );
};
