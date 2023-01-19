import React from "react";
import Image from "next/image";
import {
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  Flex,
  Text,
  chakra,
  HStack,
  VStack,
} from "@chakra-ui/react";

import hero from "@/assets/images/hero.png";
import card from "@/assets/images/card.png";

export const Hero = () => {
  const servicesDefinition = [
    {
      icon: `
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity="0.6">
            <path
              d="M31.6667 6.66666H8.33333C6.49238 6.66666 5 8.15904 5 9.99999V33.3333C5 35.1743 6.49238 36.6667 8.33333 36.6667H31.6667C33.5076 36.6667 35 35.1743 35 33.3333V9.99999C35 8.15904 33.5076 6.66666 31.6667 6.66666Z"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M26.6667 3.33334V10"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M13.3333 3.33334V10"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M5 16.6667H35"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M13.3333 23.3333H13.35"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M20 23.3333H20.0167"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M26.6667 23.3333H26.6833"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M13.3333 30H13.35"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M20 30H20.0167"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M26.6667 30H26.6833"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
        </svg>
      `,
      definition: "Online appointment scheduling",
      caption:
        "Allows users to schedule appointments with their healthcare provider through the app.",
    },
    {
      icon: `<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.6">
<path d="M30 13.3333C30 10.6812 28.9464 8.13764 27.0711 6.26228C25.1957 4.38691 22.6522 3.33334 20 3.33334C17.3478 3.33334 14.8043 4.38691 12.9289 6.26228C11.0536 8.13764 10 10.6812 10 13.3333C10 25 5 28.3333 5 28.3333H35C35 28.3333 30 25 30 13.3333Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M22.8833 35C22.5903 35.5051 22.1697 35.9244 21.6637 36.2159C21.1577 36.5073 20.584 36.6608 20 36.6608C19.416 36.6608 18.8423 36.5073 18.3363 36.2159C17.8303 35.9244 17.4097 35.5051 17.1167 35" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</g>
</svg>
`,
      definition: "Medication reminders",
      caption:
        "Allows users to schedule appointments with their healthcare provider through the app.",
    },
    {
      icon: `<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.6">
<path d="M20 30C27.3638 30 33.3333 24.0305 33.3333 16.6667C33.3333 9.30288 27.3638 3.33334 20 3.33334C12.6362 3.33334 6.66666 9.30288 6.66666 16.6667C6.66666 24.0305 12.6362 30 20 30Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20 21.6667C22.7614 21.6667 25 19.4281 25 16.6667C25 13.9052 22.7614 11.6667 20 11.6667C17.2386 11.6667 15 13.9052 15 16.6667C15 19.4281 17.2386 21.6667 20 21.6667Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.6667 36.6667H28.3333" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20 36.6667V30" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</g>
</svg>
`,
      definition: "Virtual consultations",
      caption:
        "Allows users to schedule appointments with their healthcare provider through the app.",
    },
  ];
  return (
    <>
      <Flex align="center" justify="space-between">
        <VStack align="start" spacing={6}>
          <Text
            fontSize="48px"
            lineHeight="62.5px"
            color="secondary"
            w="15ch"
            fontFamily="dmSans"
            fontWeight="medium"
          >
            Get the healthcare you need, when you need it.
          </Text>
          <Text
            fontWeight="normal"
            fontFamily="dmSans"
            fontSize="18px"
            w="40ch"
            lineHeight="30px"
            color="secondary"
          >
            Manage all of your healthcare needs in one convenient place – from
            booking appointments to tracking your health history.
          </Text>
          <Button
            fontFamily="sourceSansPro"
            fontSize="18px"
            fontWeight="normal"
            lineHeight="30px"
            textColor="white"
            bg="primary"
            h="60px"
            px="35px"
            mt={`${10} !important`}
          >
            Book an Appointment
          </Button>
        </VStack>
        <Box
          _after={{
            content: `''`,
            pos: "absolute",
            top: "-3.3rem",
            right: -20,
            zIndex: "hide",
            w: "700px",
            h: "847px",
            bg: "#9BEAE0",
            clipPath: "polygon(19% 0, 95% 0, 75% 100%, 0% 100%)",
          }}
          position="relative"
        >
          <Image
            src={hero}
            alt="hero"
            style={{
              objectFit: "contain",
            }}
            width={530}
            height={794}
          />
          <Card
            rounded="10px"
            shadow="0px 15px 30px 0px rgba(0, 0, 0, 0.1)"
            maxW="292px"
            top="15%"
            left="-30%"
            position="absolute"
          >
            <CardHeader>
              <Flex align="center" justify="space-between">
                <HStack>
                  <Image
                    src={card}
                    alt="card"
                    width={30}
                    height={30}
                    style={{
                      objectFit: "contain",
                    }}
                  />
                  <Text
                    fontFamily="sourceSansPro"
                    fontWeight="semibold"
                    color="black"
                    fontSize="12px"
                    lineHeight="20px"
                  >
                    John Doe
                  </Text>
                </HStack>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 21C6 21 10 20 10 13V5C10 3.75 9.244 2.983 8 3H4C2.75 3 2 3.75 2 4.972V11C2 12.25 2.75 13 4 13C5 13 5 13 5 14V15C5 16 4 17 3 17C2 17 2 17.008 2 18.031V20C2 21 2 21 3 21Z"
                    fill="black"
                    fill-opacity="0.2"
                  />
                  <path
                    d="M15 21C18 21 22 20 22 13V5C22 3.75 21.243 2.983 20 3H16C14.75 3 14 3.75 14 4.972V11C14 12.25 14.75 13 16 13H16.75C16.75 15.25 17 17 14 17V20C14 21 14 21 15 21Z"
                    fill="black"
                    fill-opacity="0.2"
                  />
                </svg>
              </Flex>
            </CardHeader>
            <CardBody>
              <Text
                fontFamily="sourceSansPro"
                fontSize="12px"
                lineHeight="20px"
                color="#101C45"
                fontWeight="normal"
              >
                “The doctor appointment app has been great for me. Scheduling
                appointments and getting medication reminders is much easier,
                and I love the option for virtual consultations. I'd recommend
                this app to others.”
              </Text>
            </CardBody>
          </Card>
        </Box>
      </Flex>
      <Box
        w="full"
        h="191px"
        display="grid"
        gridTemplateColumns="repeat(3, 1fr)"
        p={8}
        alignItems="center"
        bg="#203271"
        gap={4}
        mb={4}
      >
        {servicesDefinition.map((el, i) => (
          <HStack align="start" spacing={4}>
            <chakra.a dangerouslySetInnerHTML={{ __html: el.icon }} />
            <VStack align="start">
              <Text
                color="white"
                fontFamily="dmSans"
                fontWeight="bold"
                fontSize="18px"
                lineHeight="23.44px"
              >
                {el.definition}
              </Text>
              <Text
                color="rgba(255, 255, 255, 0.8)"
                fontFamily="dmSans"
                fontSize="16px"
                fontWeight="normal"
                lineHeight="26px"
              >
                {el.caption}
              </Text>
            </VStack>
          </HStack>
        ))}
      </Box>
    </>
  );
};
