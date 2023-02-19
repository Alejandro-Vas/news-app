import { Skeleton } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';

function SkeletonItem() {
  return (
    <>
      {Array.from(Array(4).keys()).map((el) => <Skeleton variant="text" key={uuidv4()} />)}
      <Skeleton variant="rectangular" width={350} height={250} />
      {Array.from(Array(20).keys()).map((el) => <Skeleton variant="text" key={uuidv4()} />)}
    </>
  );
}
export default SkeletonItem;
