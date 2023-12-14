export function handleArrow({
  currentImage,
  length,
  isPrev,
}: {
  currentImage: number;
  length: number;
  isPrev: boolean;
}) {
  if (isPrev) {
    if (currentImage === 0) {
      return length - 1;
    } else {
      return currentImage - 1;
    }
  } else {
    if (currentImage === length - 1) {
      return 0;
    } else {
      return currentImage + 1;
    }
  }
}
