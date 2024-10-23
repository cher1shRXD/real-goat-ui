import { useState } from "react";
import { motion } from "framer-motion";
import styled from "@emotion/styled";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  grid-template-rows: repeat(auto-fill, minmax(150px, 1fr));
  gap: 16px;
  padding: 16px;
`;

const Box = styled(motion.div)`
  background: #3498db;
  width: 100%;
  padding-top: 100%; // 1:1 비율로 유지
  position: relative;
  cursor: pointer;
  border-radius: 8px;
`;

const BoxContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 18px;
`;

const FullscreenOverlay = styled(motion.div)`
  background: #3498db;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 24px;
  border-radius: 0;
  z-index: 100;
`;

const GPT = () => {
  const [selectedBox, setSelectedBox] = useState<number | null>(null);

  const boxes = Array.from({ length: 12 }, (_, index) => index + 1);

  return (
    <>
      <Grid>
        {boxes.map((box) => (
          <Box
            key={box}
            onClick={() => setSelectedBox(box)}
            layoutId={`box-${box}`} // Framer Motion의 애니메이션 트랜지션을 위한 ID
          >
            <BoxContent>Box {box}</BoxContent>
          </Box>
        ))}
      </Grid>

      {selectedBox && (
        <FullscreenOverlay
          layoutId={`box-${selectedBox}`}
          onClick={() => setSelectedBox(null)}
          style={{ zIndex: selectedBox ? 100 : 0 }}
        >
          Box {selectedBox} - Click to close
        </FullscreenOverlay>
      )}
    </>
  );
}

export default GPT;
