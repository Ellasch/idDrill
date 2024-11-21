import { Router } from 'express';

const router = Router();

router.get('/:8Digits', (req, res) => {
  const first8 = req.params['8Digits'];
  
  res.send(`Hello, ${first8}`);
});


export default router;
