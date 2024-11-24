import { Router } from 'express';

const router = Router();

router.get('/:8Digits', (req, res) => {
  const first8 = req.params['8Digits'];
  
  const last = calcLast(first8);
  res.send(`last: ${last}`);
});

const calcLast = (first8: string) => {
  const first8Arr: Array<number> = first8.split('').map(digit => parseInt(digit));
  
 const newArr = first8Arr.map((digit, index) => {
    const multiplier = index % 2 == 0 ? 1 : 2;
    digit =  digit * multiplier;

    if (digit > 9) {
      digit = Math.trunc(digit / 10) + digit % 10;
    }

    return digit;
 })

 const sum = newArr.reduce((last, curr) => last + curr, 0);

 return Math.trunc(sum/10) * 10 + 10 - sum;
}

export default router;
