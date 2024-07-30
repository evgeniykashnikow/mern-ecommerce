import { FC } from 'react';
import { motion } from 'framer-motion';
import { Props } from './types';
import { bottom, center, top } from './utils';

const BurgerButton: FC<Props> = ({ isOpen, onClick, ...props }) => {
  const variant = isOpen ? 'opened' : 'closed';
  const unitHeight = 4;
  const width = 20;
  const height = 18;
  const unitWidth = (unitHeight * ((width - 2) as number)) / (height as number);

  const lineProps = {
    stroke: 'currentColor',
    strokeWidth: 2 as number,
    vectorEffect: 'non-scaling-stroke',
    initial: 'closed',
    animate: variant,
  };

  return (
    <motion.svg
      viewBox={`0 0 ${unitWidth} ${unitHeight}`}
      overflow="visible"
      preserveAspectRatio="none"
      width={width}
      height={height}
      onClick={onClick}
      className="lg:hidden"
      {...props}
    >
      <motion.line
        x1="0"
        x2={unitWidth}
        y1="0"
        y2="0"
        variants={top}
        {...lineProps}
      />
      <motion.line
        x1="0"
        x2={unitWidth}
        y1="2"
        y2="2"
        variants={center}
        {...lineProps}
      />
      <motion.line
        x1="0"
        x2={unitWidth}
        y1="4"
        y2="4"
        variants={bottom}
        {...lineProps}
      />
    </motion.svg>
  );
};

export default BurgerButton;
