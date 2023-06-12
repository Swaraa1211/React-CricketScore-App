import {
    Box,
    Button,
    Flex,
    Heading,
    SimpleGrid,
    VStack,
  } from "@chakra-ui/react";
  import { useState } from "react";
  
  function CricketComponent() {
    const [score, setScore] = useState({
      runs: 0,
      wickets: 0,
      extras: 0,
      wides: 0,
      fours: 0,
      sixes: 0,
      nb: 0,
      balls: 0,
    });
  
    const runBtn = [
      { name: "0", value: 0 },
      { name: "1", value: 1 },
      { name: "2", value: 2 },
      { name: "3", value: 3 },
      { name: "4", value: 4 },
      { name: "5", value: 5 },
      { name: "6", value: 6 },
    ];
  
    const updateScore = (runs) => {
      setScore((prevScore) => ({
        ...prevScore,
        runs: prevScore.runs + runs,
        balls: prevScore.balls + 1,
      }));
    };
  
    const handleOut = () => {
      setScore((prevScore) => ({
        ...prevScore,
        wickets: prevScore.wickets + 1,
        balls: prevScore.balls + 1,
      }));
    };
  
    const handleWide = () => {
      setScore((prevScore) => ({
        ...prevScore,
        wides: prevScore.wides + 1,
        extras: prevScore.extras + 1,
        runs: prevScore.runs + 1,
      }));
    };
  
    const handleNoBall = () => {
      setScore((prevScore) => ({
        ...prevScore,
        nb: prevScore.nb + 1,
        extras: prevScore.extras + 1,
        runs: prevScore.runs + 1,
      }));
    };
  
    return (
      <Flex
        direction="column"
        w="md"
        border="2px solid #444"
        borderRadius="md"
        p="2"
        gap="3"
      >
        <Box p="4">
          <Heading fontWeight="600" textAlign="center" mb="2">
            ScoreCard
          </Heading>
          <VStack align="start" spacing="2">
            <Box fontSize="2xl">
              <Box>
                {score.runs} / {score.wickets} ({Math.floor(score.balls / 6)}.
                {score.balls % 6})
              </Box>
              <br></br>
              <Box>
                <strong>Extras</strong>
                (wd {score.wides}, nb {score.nb})
              </Box>
              <br></br>
            </Box>
          </VStack>
        </Box>
        <SimpleGrid columns="3" columnGap="2" rowGap="2">
          {runBtn.map((btn) => (
            <Button key={btn.value} onClick={() => updateScore(btn.value)}>
              {btn.name}
            </Button>
          ))}
          <Button colorScheme="facebook" onClick={handleNoBall}>
            NO BALL
          </Button>
  
          <Button colorScheme="orange" onClick={handleWide}>
            WIDE
          </Button>
        </SimpleGrid>
        <Button w="full" colorScheme="red" onClick={handleOut}>
          OUT
        </Button>
      </Flex>
    );
  }
  
  export default CricketComponent;