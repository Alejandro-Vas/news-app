import { Skeleton as MuiSkeleton } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';

function SkeletonItem() {
  return (
    <MuiSkeleton variant="text" key={uuidv4()} />
  )
}

function Skeleton() {
  return (
    <>
      {Array.from(Array(4)).map(() => <SkeletonItem />) }

      <MuiSkeleton variant="rectangular" width={350} height={250} />

      {Array.from(Array(20)).map(() => <SkeletonItem />)}
    </>
  );
}
export default Skeleton;
