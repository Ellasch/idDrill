import { Router } from 'express';

const router = Router();

router.get('/:8Digits', (req, res) => {
  const first8 = req.params['8Digits'];
  
  const sum = calcLast(first8);
  res.send(`sum: ${sum}`);
});

const calcLast = (first8: string) => {
  const first8Arr: Array<number> = first8.split('').map(digit => parseInt(digit));
  
 first8Arr.forEach((digit, index) => {
    const multiplier = index % 2 === 0 ? 1 : 2;
    digit =  digit * multiplier;

    if (digit > 9) {
      digit = digit / 10 + digit % 10;
    }
 })

 const sum = first8Arr.reduce((last, curr) => last + curr, 0);

 return sum;
}

export default router;
