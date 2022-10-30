interface RandomIntegerProps {
  min?: number;
  max: number;
}

export const randomInteger = ({ min = 1, max }: RandomIntegerProps) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
