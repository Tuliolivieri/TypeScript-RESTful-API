import { body } from 'express-validator';

export const movieCreateValidation = () => {
  return [
    body('title')
      .isString()
      .withMessage('O titulo deve ser uma String')
      .isLength({ min: 2 })
      .withMessage('O título precisa ter no mínimo 2 caracteres'),
    body('rating')
      .isNumeric()
      .withMessage('A nota precisa ser um número')
      .custom((rating: number) => {
        if (rating < 0 || rating > 10) throw new Error('A nota precisa ser entre 0 e 10');
        return true;
      }),
    body('description')
      .isString()
      .withMessage('A descrição deve ser uma String'),
    body('director')
      .isString()
      .withMessage('O nome do diretor é obrigatório'),
    body('poster')
      .isURL()
      .withMessage('O poster do filme deve ser uma URL')
  ]
}